const bcrypt = require('bcrypt')

class Router {

    constructor(app, db) {
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
        this.register(app, db);
    }

    register(app, db) {
        app.post('/register', (req, res) => {

            let username = req.body.username;
            let password = req.body.password;
            let phoneNum = req.body.phoneNumber;
            let name = req.body.name;
            let address = req.body.address;

            username = username.toLowerCase();
            db.query(`SELECT username FROM user WHERE username = '${username}'`, function (err, results) {
                if (err) throw err;
                // if (results) {
                //     res.send('user exists');
                // }
                if (results) {
                    const hashedPassword = bcrypt.hashSync(password, 9);
                    db.query(`INSERT INTO user (username,password) VALUES ('${username}','${hashedPassword}')`, function (err, results) {
                        if (err) throw err;
                        // res.send('successfully registered');
                    })};
                    db.query(`INSERT INTO customer (customer_name, customer_phone, customer_address, balance) VALUES ('${name}','${phoneNum}','${address}', '0')`, function (err, results){
                        if (err) throw err;
                        res.send('successfully registered')
                    });
                }
            });
        });
    }

    login(app, db) {
        app.post('/login', (req, res) => {

            let username = req.body.username;
            let password = req.body.password;

            username = username.toLowerCase();

            if (username.length > 12 || password.length > 12) {
                res.json({
                    success: false,
                    msg: 'An error has occured, please try again'
                })
                return;
            }

            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {

                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }

                if (data && data.length === 1) {

                    bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {

                        if (verified) {

                            req.session.userID = data[0].id;

                            res.json({
                                success: true,
                                username: data[0].username
                            })
                            return;
                        }
                        else {
                            res.json({
                                success: false,
                                msg: 'Invalid password'
                            })
                            return;
                        }
                    });

                }

                else {
                    res.json({
                        success: false,
                        msg: 'Username not found. Please try again'
                    })
                    return;
                }

            });

        });
    }

    logout(app, db) {

        app.post('/logout', (req, res) => {
            if (req.session.userID) {

                req.session.destroy();
                res.json({
                    success: true
                })

                return true;

            } else {
                res.json({
                    success: true
                })
                return false;
            }
        })
    }

    isLoggedIn(app, db) {
        app.post('/isLoggedIn', (req, res) => {

            if (req.session.userID) {
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {

                    if (data && data.length === 1) {
                        console.log("data= " + data);
                        console.log("fields= " + fields);

                        res.json({
                            success: true,
                            username: data[0].username
                        })

                        return true;
                    }
                    else {
                        res.json({
                            success: false,
                        })

                        return false;
                    }

                });
                return;

            }

            else {
                res.json({
                    success: false,
                })

                return false;
            }
        });
    }

}

module.exports = Router;
