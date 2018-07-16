var db  = require('../models'); //uses Sequelize CLI - wraps all functions inside of models under db and therefore you can use that. So you can call functions with .db
var result = {};


getComment = function (req, res) {
    db.Comment.findAll({
        where: {
            ProjectId: req.params.id
        },
    }).then(function (dbComment) {

        result = dbComment;
    });
};

exports.getProject = function(req, res) {

    db.Project.belongsTo(db.User, {foreignKey: 'UserId'});
    db.Comment.belongsTo(db.Project, {foreignKey: 'ProjectId'})

    // var projectRoute = req.params.project_name.replace('-', ' ');
    // projectRoute.replace(/\W+/g, '');
    // console.log('\n' + projectRoute + '\n');
    getComment(req, res);

    db.Project.findOne({
        where: {
            id: req.params.id
        },

        include: [db.User],

    }).then(results => {
        
        var projectPercent = parseInt(results.project_amount) / parseInt(results.project_goal) * 100;

        function float(x) {
            if (x % 1 !== 0) {
                projectPercent = Number.parseFloat(x).toFixed(1);
            }
        }
        float(projectPercent);

        res.render('project', {
            id: results.id,
            projectName: results.project_name,
            ingredient_1: results.ingredient_1,
            ingredient_2: results.ingredient_2,
            ingredient_3: results.ingredient_3,
            ingredient_4: results.ingredient_4,
            description: results.description,
            username: results.User.name,
            imageUrl: results.image_url,
            projectAmount: results.project_amount,
            projectGoal: results.project_goal,
            projectPercent: projectPercent,
            userId: results.User.id,
            result
            

        });
        
    });
    
   
    
};

exports.createComment = function(req, res) {

    // console.log(req.params.id);

    db.Comment.create({
        comment: req.body.commenttext,
        subject: req.body.subjectline,
        rating: 3,
        ProjectId: req.params.id
      }).then(function(dbComment) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbComment);
      });

  };
  

  

