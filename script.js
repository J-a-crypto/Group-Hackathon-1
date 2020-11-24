$(".start").click(function(){
    /*Let's call the first button "start"*/
    let name = $("input").val();
    $(".title").hide();
    /*In order to hide the first slide and show up the next slide which is presented in the div*/
    $(".first").show();
    $("input").hide();
    $(".start").hide();
    $(".fill").append(`Great, nice to know you are interest, ${name}!So...`);
    $(".again").append(`Here is more information for you, ${name}!`);
    $(".again").hide();
    $(".wall").append(`${name}, what will you do with this info?`);
    $(".wall").hide();
    $(".leave").append(`Thank you for listening,now go out there and play basketball ${name}!`);
    $(".leave").hide();
    /*All these for future interactions!*/
});
$(".info").click(function() {
    $(".first").hide();
    $(".second").show();
    $(".again").show();
    $(".fill").hide();
});

$(".mas").click(function() {
    $(".second").hide();
    $(".third").show();
    $(".wall").show();
    $(".again").hide();
});

$(".thank").click(function() {
    $(".third").hide();
    $(".last").show();
    $(".leave").show();
    $(".wall").hide();
});

$(".drop").click(function(){
    $(".content").toggle();
});


