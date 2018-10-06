$(document).ready(function() {


    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(response) {


            $("#quote-Text").html(response[0].content);
            $("#author").text("--" + response[0].title);
            $("#tweet").attr('href', 'https://twitter.com/intent/tweet?text=' + response[0].content + ' ' + "--" + response[0].title);
            const qt = $("#quote-Text").text();
            //console.log(qt);
            $("#tweet").attr('href', 'https://twitter.com/intent/tweet?text=' + qt + ' ' + "--" + response[0].title);
        },
        cache: false

    });
    $("#new-quote").click(randomQuote);
    $("#new-quote").mouseenter(function(e) {
        left = !left;
        $(this).css("background", "#ffffff");
        $(this).css("color", $invertedColor);
        $(this).css("border-color", $invertedColor);
    })
    $("#new-quote").mouseleave(function(e) {

        $(this).css("background", $invertedColor);
        $(this).css("color", "#ffffff");
        $(this).css("border-color", "#ffffff");
        left = !left;
    });


});
let left = true;
const color = ["red", "skyblue", "green", "yellow", "#03a9f4", "#673ab7",
    "#00E676", "#FF9100", "#D84315", "#EC407A"
];
let $invertedColor = "skyblue";


function randomQuote(e) {
    $("#quote").fadeOut(300, function() {
        const randomColor = Math.floor(Math.random() * 10);
        const $color = color[randomColor];
        $invertedColor = $color;
        console.log(randomColor);
        console.log(e);

        $.ajax({
            url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            success: function(response) {

                $("#quote").fadeIn(300);
                $("#quote-Text").html(response[0].content);
                $("#author").text("--" + response[0].title);
                $("body").css("background-color", $color);
                $("#quote-Text").css("color", $color);
                $("#author").css("color", $color);
                if (left) {
                    $("#new-quote").css("background-color", $color);
                    $("#new-quote").css("border-color", $color);
                    $("#new-quote").css("color", "#ffffff");
                } else {
                    $("#new-quote").css("background-color", "#ffffff");
                    $("#new-quote").css("border-color", $color);
                    $("#new-quote").css("color", $color);
                }
                const qt = $("#quote-Text").text();
                //console.log(qt);
                $("#tweet").attr('href', 'https://twitter.com/intent/tweet?text=' + qt + ' ' + "--" + response[0].title);
            },
            cache: false

        });
    });





}