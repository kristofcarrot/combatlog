module.exports = {
    init(req, res) {
        let db = {
            userName: [
                'Ilya',
                'Kostya',
                'Some',
                'Foo'
            ]
        };

        res.render('index', {
            userName: db.userName
        });
    },

    // POST /
    inputData(req, res) {
        console.log(req.body.login);
        console.log(req.body.password);
        res.render('index');
    }

};