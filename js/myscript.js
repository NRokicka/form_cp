/*$().ready(function(){

    $("#MyForm").validate({

       rules:{

            login:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },

            pswd:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
       },

       messages:{

            login:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Мінімальне число символів - 2",
                maxlength: "Максимальне число символів - 16",
            },

            pswd:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
            },

       }

    });

});*/
$("#MyForm").validate();

$(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/natalia9rokicka@gmail.com",
            method: "POST",
            data: {
                name: $("#login").val(),
                password: $("#pswd").val(),
            },
            dataType: "json"
        })
        .done(function(data){
            $("#MyForm").html("<h1>Thank you!</h1>" 
              + "<p> Additional info: " + JSON.stringify(data) + "</p>");
        });
    });
});