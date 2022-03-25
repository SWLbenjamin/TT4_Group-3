const bcrypt = require('bcrypt');

class TransactionRouter {

    constructor(app, db) {
        this.getBalance(app, db);
        this.getLoan(app, db);
        this.createLoan(app, db);
        this.updatePaymentAndLoan(app, db);
    }

    getBalance(app, db) {
        app.get('/', (req, res) => {
          customerID = req.params.id;
          db.query("SELECT balance FROM customers WHERE CustomerId =" + customerID, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
      }}

    getLoan(app, db) {
        app.get('/getLoan', (req, res) => {
          db.query("SELECT SUM(loan_amount) FROM loan WHERE LoanId IN (SELECT LoanId FROM customerloan WHERE CustomerId=" + customerID +")" , function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        })
      }

    createLoan(app, db) {
        app.post('/', (req, res) => {}   )
      }

    updatePaymentAndLoan(app, db) {
        app.post('/', (req, res) => {}   )
      }
}


module.exports = TransactionRouter;
