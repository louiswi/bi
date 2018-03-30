$(document).ready(function () {
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function (data) {

        console.log(data)
        $('.result').append('<p class="greeting-id">' + data.id + '</p>')
        $('.result').append('<p class="greeting-id">' + data.content + '</p>')


    });
});
