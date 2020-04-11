module.exports = (app, passport) => {

    app.get('/', (req, res) => {
        res.render('index.ejs');
    });

    app.get('/login', (req, res) => {
        res.render('login', {
            menssage: req.flash('loginMessage')
        });
    });

    app.post('/login', (req, res) => {
        
    });
    
}