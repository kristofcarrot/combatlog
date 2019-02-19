module.exports = {
    init(req, res) {

        res.render('index');
    },

    // POST /
    inputData(req, res) {
        console.log(req.body.login);
        console.log(req.body.password);
        res.render('index');
    }

};