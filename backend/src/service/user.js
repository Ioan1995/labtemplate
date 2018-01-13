"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  });
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  user.findById(id).then(user => {
    res.jsonp(user);
  });
};

// exports.update = function (req, res) {
//   let id = req.params.id;
//   user.findById(id).then(user => {
//     user.update(req.body);
//   });
//   res.jsonp(user);
// };

// exports.delete = function (req, res) {
//   let id = req.params.id;
//   user.findById(req.params.id)
//     .then(user => {
//       if (!user) {
//         return res.status(400).send({
//           message: 'user Not Found',
//         });
//       }
//       return user
//         .destroy()
//         .then(() => res.status(204).send())
//         .catch(error => res.status(400).send(error));
//     })
//     .catch(error => res.status(400).send(error));
// };