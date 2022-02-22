let data = require('../Drivers.json')

exports.getdash = (req, res, next) => {
    res.render('home.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getTracking = (req, res, next) => {
    res.render('tracking.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getDrivers = (req, res, next) => {
    res.render('Drivers.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getParents = (req, res, next) => {
    res.render('parents.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard' 
    })
}

exports.getAddPickPoint = (req, res, next) => {
    res.render('addPickPoint.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getSignIn = (req, res, next) => {
    res.render('SignIn.ejs', {
        layout: 'SignIn',
        pageTitle: 'Sign In',
        path: 'signin',
    })
}


exports.getSignUp = (req, res, next) => {
    res.render('SignUp.ejs', {
        layout: 'SignUp',
        pageTitle: 'Sign Up',
        path: 'signup',
    })
}

