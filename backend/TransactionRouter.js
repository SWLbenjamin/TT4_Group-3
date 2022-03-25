const bcrypt = require('bcrypt');

class TransactionRouter {

    constructor(app, db) {
        this.getBalance(app, db);
        this.getLoan(app, db);
        this.createLoan(app, db);
        this.updatePaymentAndLoan(app, db);
    }

    getBalance(app, db) {
        app.get('/:id', (req, res) => {
          customerID = req.params.id;
          db.query("SELECT balance FROM customer WHERE CustomerId =" + customerID, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
      }
    );
      }



    getLoan(app, db) {
        app.get('/getLoan', (req, res) => {
          db.query("SELECT SUM(loan_amount) FROM loan WHERE LoanId IN (SELECT LoanId FROM customerloan WHERE CustomerId=" + customerID +")" , function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
      }
      );
    }

    createLoan(app, db) {
        app.post('/', (req, res) => {
          data = {loan_amount = req.body.loan, customerId = req.body.id};
          let loanID = 0;
          db.query(`INSERT INTO loan (loan_amount) VALUES ('${data.loan_amount}')`, function (err,results){
            if (err) throw error;
            res.send('Successfully added loan!');
          });
          db.query('SELECT LAST_INSERT_ID()', function (err,results){
            if (err) throw error;
            loanID = results;
          });
          db.query(`INSERT INTO customerloan (CustomerId, LoanId) VALUES ('${data.customerID}','${loanID}')`, function (err,results){
            if (err) throw error;
            res.send('Successfully added loan!');
          });
        }   )
      }

    updatePaymentAndLoan(app, db) {
        app.post('/', (req, res) => {}   )
      }
}


module.exports = TransactionRouter;
