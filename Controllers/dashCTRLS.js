let data = require('../Drivers.json')

exports.getdash = (req, res, next) => {
    res.render('home.ejs', {
        layout: 'home',
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getlanding = (req, res, next) => {
    res.render('landingPage.ejs', {
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
    })
}

exports.getSignUp = (req, res, next) => {
    res.render('SignUp.ejs', {
        layout: 'SignUp',
        pageTitle: 'Sign Up',
    })
}
exports.getconfirmEmail = (req, res, next) => {
    res.render('confirmEmail.ejs', {
        layout: 'confirmEmail',
        pageTitle: 'Confirm Email',
    })
}

exports.getForgetPassword = (req, res, next) => {
    res.render('forgetPassword.ejs', {
        layout: 'forgetPassword',
        pageTitle: 'Forget Password',
    })
}

exports.getnewPassword = (req, res, next) => {
    res.render('newPassword.ejs', {
        layout: 'newPassword',
        pageTitle: 'New Password',
    })
}

exports.getupdateDriver = (req, res, next) => {
    res.render('updateDriver.ejs', {
        pageTitle: 'Forget Password',
    })
}

exports.getaddDriver = (req, res, next) => {
    res.render('addDriver.ejs', {
        pageTitle: 'Forget Password',
    })
}

exports.getupdateParent = (req, res, next) => {
    res.render('updateParent.ejs', {
        pageTitle: 'Forget Password',
    })
}

exports.getaddParent = (req, res, next) => {
    res.render('addParent.ejs', {
        pageTitle: 'Forget Password',
    })
}

exports.getParentProfile = (req, res, next) => {
    res.render('parentProfile.ejs', {
        pageTitle: 'Forget Password',
    })
}

exports.getdriverProfile = (req, res, next) => {
    res.render('driverProfile.ejs', {
        pageTitle: 'Forget Password',
    })
}

