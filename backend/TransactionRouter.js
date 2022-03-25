const bcrypt = require('bcrypt');

class TransactionRouter {

    constructor(app, db) {
        this.getBalance(app, db);
        this.getLoan(app, db);
        this.createLoan(app, db);
        // this.updatePaymentAndLoan(app, db);
    }

    getBalance(app, db) {
        app.get('/getBalance', (req, res) => {
            let customerID = req.body.id;
            db.query("SELECT balance FROM customer WHERE CustomerId =" + customerID, function (err, result, fields) {
                if (err) throw err;
                console.log(result[0].balance);
                res.send(result);
            });
        }
        );
    }



    getLoan(app, db) {
        app.get('/getLoan', (req, res) => {
            let customerID = req.body.id;
            db.query("SELECT SUM(loan_amount) FROM loan WHERE LoanId IN (SELECT LoanId FROM customerloan WHERE CustomerId=" + customerID + ")", function (err, result, fields) {
                if (err) throw err;
                res.send(result);
            });
        }
        );
    }

    createLoan(app, db) {
        app.post('/createLoan', (req, res) => {

            let loan_amount = req.body.loan;
            let customerId = req.body.id;

            db.query(`INSERT INTO loan (loan_amount) VALUES ('${loan_amount}');SELECT LAST_INSERT_ID() as ID`, function (err, results) {
                let resultString = JSON.stringify(results[1]);
                let resJSON = JSON.parse(resultString);
                let loanID = resJSON[0].ID;
                db.query(`INSERT INTO customerloan (CustomerId, LoanId) VALUES ('${customerId}','${loanID}')`, function (err, results) {
                    if (err) throw err;
                    res.send('Successfully added loan into customerloan!');
                });
                if (err) throw err;
            });
        })
    }

    updatePaymentAndLoan(app, db) {
        app.post('/updatePaymentAndLoan', (req, res) => {
            let payment_amount = req.body.payment;
            let loanId = req.body.id;
            db.query(`UPDATE loan SET loan_amount = loan_amount - ('${payment_amount}') WHERE loanId = ('${loanId}')`, function (err, results) {
                if (err) throw error;
            });
            db.query(`INSERT INTO payment (LoanId, payment_date, payment_amount) VALUES ('${loanId}','2022-03-25','${data.payment_amount}')`, function (err, results) {
                if (err) throw error;
                res.send('Successfully paid!');
            });
        });
    }
}


module.exports = TransactionRouter;
