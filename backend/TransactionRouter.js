const bcrypt = require('bcrypt')

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
          db.query("SELECT balance FROM customers WHERE CustomerId =" + customerID, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
      }

    getLoan(app, db) {
        app.get('/', (req, res) => {}   )
      }

    createLoan(app, db) {
        app.post('/', (req, res) => {}   )
      }

    updatePaymentAndLoan(app, db) {
        app.post('/', (req, res) => {}   )
      }
}


module.exports = TransactionRouter;
