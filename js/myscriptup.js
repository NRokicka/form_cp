$().ready(function(){

    $("#MyFormUp").validate({

       rules:{
           
            firstname: "required",
            lastename: "required",
            username: {
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
            password: {
                required: true,
                minlength: 5,
                maxlength: 16,
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email:{
                required: true,
                email: true
            },
            agree: "required"
            
       },

       messages:{
            
            firstname: "Це поле обов'язкове для заповнення",
            lastename: "Це поле обов'язкове для заповнення",
            username: {
                required: "Це поле обов'язкове для заповнення",
                minlength: "Мінімальне число символів 2",
                maxlength: "Максимальне число символів 16",
            },
             
            password:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
            },
            confirm_password:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
                equalTo: "Повторіть пароль"
            },
            agree: "Запамятати"

       }

    });

});
$(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/natalia9rokicka@gmail.com",
            method: "POST",
            data: {
                firstname: $("#firstname").val(),
                lastename: $("#lastename").val(),
                username: $("#username").val(),
                password: $("#password").val(),
                confirm_password: $("#confirm_password").val(),
                email: $("#email").val(),
         },
            dataType: "json"
        })
        .done(function(data){
            $("#MyFormUp").html("<h1>Thank you!</h1>" 
              + "<p> Additional info: " + JSON.stringify(data) + "</p>");
        });
    });
});