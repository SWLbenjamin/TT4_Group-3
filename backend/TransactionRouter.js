const bcrypt = require('bcrypt');

class TransactionRouter {

    constructor(app, db) {
        this.getBalance(app, db);
        this.getLoan(app, db);
        this.createLoan(app, db);
        this.updatePaymentAndLoan(app, db);
    }

    getBalance(app, db) {
        app.get('/getBalance', (req, res) => {
            let customerID = req.body.id;
            db.query("SELECT balance FROM customer WHERE CustomerId =" + customerID, function (err, result, fields) {
                if (err) throw err;
                console.log(result[0].balance);
                res.json({success:true,balance:result[0].balance});
            });
        }
        );
    }



    getLoan(app, db) {
        app.get('/getLoan', (req, res) => {
            let customerID = req.body.id;
            db.query("SELECT SUM(loan_amount) as sum_loan FROM loan WHERE LoanId IN (SELECT LoanId FROM customerloan WHERE CustomerId=" + customerID + ")", function (err, result, fields) {
                if (err) throw err;
                res.json({success:true,loan_amount:result[0].sum_loan});
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
                    res.json({success:true,msg:'Successfully added loan into customerloan!'});
                });
                if (err) throw err;
            });
        })
    }

    updatePaymentAndLoan(app, db) {
        app.post('/updatePaymentAndLoan', (req, res) => {
            let payment_amount = req.body.payment;
            let loanId = req.body.id;
            const today = new Date().toLocaleDateString('en-us', {year:"numeric", month:"numeric", day:"numeric"});
            db.query(`UPDATE loan SET loan_amount = loan_amount - ('${payment_amount}') WHERE loanId = ('${loanId}')`, function (err, results) {
                if (err) throw error;
            });
            db.query(`INSERT INTO payment (LoanId, payment_date, payment_amount) VALUES ('${loanId}','${today}','${payment_amount}')`, function (err, results) {
                if (err) throw error;
                res.send('Successfully paid!');
            });
        });
    }
}


module.exports = TransactionRouter;
