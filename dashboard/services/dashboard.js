const loginModel = require('../../models/dashboard');

module.exports = () => {
    return {
        getAll: (req, res) => {

            loginModel.find({}, (err, data) => {

                if (err) {
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send(data);
                }

            });
        },
        deleteData: (req, res) => {

            loginModel.findByIdAndDelete({ '_id': req.params.id }, (err, Deletedata) => {

                if (err) {
                    res.status(400).send(err);
                }
                else {
                    loginModel.find({}, (err, data) => {

                        if (err) {
                            res.status(400).send(err);
                        }
                        else {
                            res.status(200).send(data);
                        }

                    });

                }

            });
        },
        createData: (req, res) => {

            loginModel.create(req.body, (err, createData) => {

                if (err) {
                    res.status(400).send(err);
                }
                else {

                    res.status(200).send("created sucessfully");
                }

            });
        },
        edit: (req, res) => {

            loginModel.findByIdAndUpdate({ '_id': req.params.id }, { $set: req.body }, (err, editdata) => {
                if (err) {
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send("Edited Sucessfully");
                }

            });
        }
    }
}

