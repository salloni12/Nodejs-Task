const loginModel = require('../../models/dashboard');

module.exports = () => {
    return {
        login: (req, res) => {
            console.log(req.body.email)
            loginModel.find({ 'email': req.body.email }, (err, data) => {

                if (err) {
                    res.status(400).send(err);
                }
                else {
                    console.log(JSON.stringify(data));
                    if (data.length == 0) {
                        res.status(401).send('invalid email');
                    } else {

                        if (req.body.password == data[0].password) {

                            res.status(200).send(data);

                        }
                        else {

                            res.status(401).status('password mismatch');
                        }
                    }

                }

            });
        },
        register: (req, res) => {

            loginModel.find({ 'email': req.body.email }, function (err, data) {
                if (data.length) {
                    res.status(400).send('email exists already');

                } else {

                    if (data.length == 0) {

                        loginModel.create(req.body, (err, registerdata) => {

                            if (err) {
                                res.status(400).send(err);
                            }
                            else {

                                res.status(200).send(registerdata);

                            }

                        });
                    }

                }
            });


        }

    }
}

