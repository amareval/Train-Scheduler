'use strict';

var db  = require('../models');

exports.index = function(req, res) {

    // db.Project.findAll({
    //     attributes: { 
    //         include: [
    //             [db.sequelize.fn( 'COUNT', db.sequelize.col('id') ), 'total projects']
    //         ]
    //     },
    //     group: ['id'],
    //     distinct: 'user_id'
    // }).then(results => {

    //     console.log(results);

    //     var allProjects = {
    //         projectObj: results,
    //         totalProjects: results.length,
    //         totalUsers: 3,
    //         totalMoneyRaised: 15000
    //     }

    //     res.render('index', allProjects);
    // });


    db.Project.findAndCountAll({}).then(results => {

        var totalMoney = 0;
        var usersTotal = [];

        results.rows.forEach(i => {
            totalMoney += i.project_amount;
            usersTotal.push(i.UserId);

        });

        let distinctUsers = (Array.from(new Set(usersTotal))).length;
        console.log(distinctUsers);


        var allProjects = {
            projectObj: results.rows,
            totalProjects: results.count,
            totalUsers: distinctUsers,
            totalMoneyRaised: totalMoney
        }

        res.render('index', allProjects);    
    })




};