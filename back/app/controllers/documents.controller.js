const db = require("../models");
const Document = db.documents;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (
        !req.body.user ||
        !req.body.number ||
        !req.body.type ||
        !req.body.begin ||
        !req.body.end ||
        !req.body.date
    ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const document = {
        user: req.body.user,
        number: req.body.number,
        type: req.body.type,
        begin: req.body.begin,
        end: req.body.end,
        date: req.body.date,
        status: 'новый'
    };

    Document.create(document)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the document."
            });
        });
};

exports.findAll = (req, res) => {
    const user = req.query.user;
    if (req.query.user == '45678' || req.query.user == '56789') {
        var condition = null;
    } else {
        var condition = { user: { [Op.eq]: `${user}` } };
    }


    Document.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Document.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Document.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Document was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Document with id=${id}. Maybe Document was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Document with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};