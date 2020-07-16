const AccountsModel = require("../models/accounts");

const AccountsController = {
  findAll(req, res) {
    AccountsModel.find({ user: req.params.id })
      .then((accounts) => {
        res.send(accounts);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  createAccount(req, res) {
    console.log(" req body create", req.body);
    AccountsModel.create(req.body)
      .then((account) => {
        res.status(201).send(account);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteById(req, res) {
    AccountsModel.deleteOne({ _id: req.params.id }).then(() => {
      AccountsModel.find({ user: req.params.userId })
        .then((accounts) => {
          res.send(accounts);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });

    // .then((account) => {
    //   res.send(account);
    // })
    // .catch((err) => {
    //   res.status(500).send(err);
    // });
  },
  findById(req, res) {
    AccountsModel.findById(req.params.id)
      .then((accounts) => {
        res.send(accounts);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};

module.exports = AccountsController;
