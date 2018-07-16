var db = require('../models'); //uses Sequelize CLI - wraps all functions inside of models under db and therefore you can use that. So you can call functions with .db


exports.index = function(req, res) {
    var query = {};


        db.Project.findAll({
            include: [db.User]
        }).then(function (dbProject) {

            // console.log(dbProject);

            res.render('all-projects', { 
                dbProject
                        });
        });
        // res.render('all-projects');
};

exports.getProject = function(req, res) {

    // db.User.hasMany(db.Project, {foreignKey: 'user_id'})

    // db.Project.findOne({
    //     where: {
    //         project_id: req.params.id
    //     },
    //     // include: [db.User]
    // }).then(function(results) {
    //     console.log(results);
    //     res.render('project', {
    //         projectName: results.project_name,
    //         ingredient_1: results.ingredient_1,
    //         ingredient_2: results.ingredient_2,
    //         ingredient_3: results.ingredient_3,
    //         username: results.user_id
    //     });
    // })
    
    
};

exports.createProject = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
//   req.body.UserId = req.user.id;

//   db.Project.create(req.body).then(function(dbPost) {
//     res.json(dbPost);
//   });
};
