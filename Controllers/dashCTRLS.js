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

exports.getForgetPassword = (req, res, next) => {
    res.render('forgetPassword.ejs', {
        layout: 'forgetPassword',
        pageTitle: 'Forget Password',
    })
}

exports.getnewPassword = (req, res, next) => {
    res.render('newPassword.ejs', {
        layout: 'newPassword',
        pageTitle: 'Forget Password',
    })
}

exports.getupdateDriver = (req, res, next) => {
    res.render('updateDriver.ejs', {
        layout: 'updateDriver',
        pageTitle: 'Forget Password',
    })
}

exports.getaddDriver = (req, res, next) => {
    res.render('addDriver.ejs', {
        layout: 'addDriver',
        pageTitle: 'Forget Password',
    })
}

exports.getupdateParent = (req, res, next) => {
    res.render('updateParent.ejs', {
        layout: 'updateParent',
        pageTitle: 'Forget Password',
    })
}

exports.getaddParent = (req, res, next) => {
    res.render('addParent.ejs', {
        layout: 'addParent',
        pageTitle: 'Forget Password',
    })
}

exports.getconfirmEmail = (req, res, next) => {
    res.render('confirmEmail.ejs', {
        layout: 'confirmEmail',
        pageTitle: 'Confirm Email',
    })
}

exports.adminProfile = (req, res, next) => {
    res.render('adminProfile.ejs', {
        pageTitle: 'Admin Profile',
    })
}

exports.getSchool = (req, res, next) => {
    res.render('school.ejs', {
        pageTitle: 'School',
    })
}

exports.postData = (req, res, next) => {
    console.log(req.body)
}