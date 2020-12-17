const db = require("../models");
const Tutorial = db.tutorials;


exports.create = (req, res) => {

    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" })
    }

    const tutorial = new Tutorial(
        {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }
    )

    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        })
}


exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};