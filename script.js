$(document).ready(function() {

    
    $('#nav-about').click(function() {
            console.log('test');
            $('html, body').animate({
            scrollTop: $(".pts").offset().top - 150
        }, 1000)
    });

    // $('.project-user').on('click', function() {
    //     window.location.href='./users/user';
    // });

    $('#reviews-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#comments-div").offset().top - 100
        }, 1000)    
    })

    $('#submit-comment').on('click', function() {
        event.preventDefault();

        // $('#comments-display').append('<hr>').append('<h5>commentSubject</h5>').append('<p>commentBody</p>');

        var newComment = {
            subject: $('#comment-subject').val().trim(),
            comment: $('#comment-body').val().trim(),
            ProjectId: $(this).data('id')
        }

        console.log(newComment);

        $.ajax('api/project/:id/comments', {
            type: 'POST',
            data: newComment
        }).then(data => {
            res.json(data);
        })

    })

    $('.transaction-form').on('submit', function() {
        event.preventDefault();

        var projectId = $(this).data('id');

        var currentTotal = $(this).data('amount');
        console.log('Current total: ' + currentTotal);

        var userAmount = $('#transaction-amt').val().trim();

        var newTotal = currentTotal + parseInt(userAmount);

        var transactionAmount = {
            project_amount: newTotal,
            id: projectId
        };

        
        $.ajax('/project/:id/transaction', {
            type: 'PUT',
            data: transactionAmount
        }).then(data => {
            window.location = '/project/' + projectId;
            console.log(data);
        });
    });





    

    $(function(){
        var navbar = $('.navbar');
        
            $(window).scroll(function(){
                if($(window).scrollTop() <= 40){
                    navbar.removeClass('navbar-scroll');
                } else {
                    navbar.addClass('navbar-scroll');
                }
            });
        
    });

    $('#submit-comment').click(function () {
        console.log('test');
        var comment = {
            commenttext: $("#comment-body").val().trim(),
            subjectline: $("#comment-subject").val().trim()
        };
        // var subjectline = { text: $("#comment-subject").val().trim()};
        console.log(comment);


        //ID OF THE ELEMENT
        var currentproject = $(this).data("id");

        console.log(currentproject)

        $.ajax(`/project/${currentproject}`, {
            type: "POST",
            data: comment
        }).then(
            function () {
                console.log("created new comment");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


})