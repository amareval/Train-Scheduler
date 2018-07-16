var db  = require('../models'); //uses Sequelize CLI - wraps all functions inside of models under db and therefore you can use that. So you can call functions with .db

exports.backProject = function(req, res) {
    
    db.Project.findOne({
        where: {
            id: req.params.id
        },
        include: [db.User]
    }).then(data => {
        res.render('transaction', {
            id: data.id,
            project_amount: data.project_amount,
            project_name: data.project_name,
            project_goal: data.project_goal,
            project_user: data.User.name
        });
    })
  
};

exports.transaction = function(req, res) {
    db.Project.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.json(data);
    })
}