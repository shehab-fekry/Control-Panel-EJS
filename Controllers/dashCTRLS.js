let data = require('../data.json')

exports.getdash = (req, res, next) => {
    res.render('home.ejs', {
        busData: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getTracking = (req, res, next) => {
    res.render('tracking.ejs', {
        busData: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getDriversInfo = (req, res, next) => {
    res.render('DriversInfo.ejs', {
        busData: [...data],
        pageTitle: 'Dashboard'
    })
}

