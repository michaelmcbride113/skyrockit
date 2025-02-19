const passUserToView = (req, res, next) => {
// ln 5: locals is provided by express, use property to set variables to templates (views)
// ln 5 sets 'user' to facilitate cleaner code
// The ? and & is shorthand for an if else statement
    res.locals.user = req.session.user ? req.session.user : null; 
    next();
}

module.exports = passUserToView