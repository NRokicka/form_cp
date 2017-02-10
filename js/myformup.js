$(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "//formspree.io/natalia9rokicka@gmail.com",
            method: "POST",
            data: {
                f_name: $("#f_name").val(),
                l_name: $("#l_name").val(),
                email: $("#email").val(),
                pswd1: $("#pswd1").val(),
                pswd2: $("#pswd2").val(),
                name: $("#login").val(),
         },
            dataType: "json"
        })
        .done(function(data){
            $("#MyFormUp").html("<h1>Thank you!</h1>" 
              + "<p> Additional info: " + JSON.stringify(data) + "</p>");
        });
    });
});