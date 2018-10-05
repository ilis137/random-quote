$(document).ready(function() {

    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(response) {


            $("#quote-Text").html(response[0].content);
            $("#author").text("--" + response[0].title);
        },
        cache: false

    })
    $("#new-quote").click(randomQuote)



});
const color = ["red", "skyblue", "green", "yellow", "#03a9f4", "#673ab7",
    "#00E676", "#FF9100", "#D84315", "#EC407A"
];



function randomQuote() {
    $("#quote").fadeOut(300, function() {
        const randomColor = Math.floor(Math.random() * 10);
        const $color = color[randomColor];

        console.log(randomColor);

        $.ajax({
            url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            success: function(response) {
                /*console.log(response[0].title);
                console.log(response[0].content);*/
                $("#quote").fadeIn(300);
                $("#quote-Text").html(response[0].content);
                $("#author").text("--" + response[0].title);
                $("body").css("background-color", $color);
                $("#quote-Text").css("color", $color);
                $("#author").css("color", $color);
                $("#new-quote").css("background-color", $color);

            },
            cache: false
        });
    });





}