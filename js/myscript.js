$(document).ready(function(){

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

});