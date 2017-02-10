$(document).ready(function(){

    $("#MyFormUp").validate({

       rules:{
           
            f_name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
            l_name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
            email:{
                required: true,
            },
            
            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },

            pswd1:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
            pswd2:{
                required: true,
                equalto: "#pswd1",
                minlength: 6,
                maxlength: 16,
            },
       },

       messages:{
            
            f_name:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Мінімальне число символів 2",
                maxlength: "Максимальне число символів - 16",
            },
             
             l_name:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Мінімальне число символів - 2",
                maxlength: "Максимальне число символів - 16",
            },

            name:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Мінімальне число символів - 2",
                maxlength: "Максимальне число символів - 16",
            },

            pswd1:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
            },
            pswd2:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
            },

       }

    });

});