$(document).ready(function(){

    $(".glow").hide();
    $(".prof").hide();
    $(".pokeindex").hide();
    $(".details").hide();
    $(".details2").hide();
    $("#help").hide();
    $(".pokeball").hide();
    $("#s2").hide();

    document.getElementById('alarm').muted = false;
    document.getElementById('release').muted = false;
    document.getElementById('win').muted = false;

    $(".main").click(function(){
        $(".main").hide();
        $(".pokeball").show();
        document.getElementById('alarm').play();
    });

    $(".pokeball").click(function(){
        document.getElementById('alarm').pause();
        $(".pokeball").hide();
        $(".glow").show();
        document.getElementById('release').play()
        $(".glow").animate({
            width: "1200px",
            height: "1200px"
        }, 400, function() {
            $(".glow").hide();
            $(".prof").show(400);
            $("#help").show();
        });
    });

    $(".prof").click(function() {
        $(".prof").hide();
        //$(".pokeindex").show();
        $(".pokeindex").slideDown();
        $(".details").show();
        $("#help").hide();
        document.getElementById('win').play();
    });

    $("#b1").click(function(){
        $(".pokeindex-right__screen").text("Likes Robots and AI");
    });

    $("#b2").click(function(){
        $(".pokeindex-right__screen").text("Found vulnerability in UnovoRPG");
    });

    $("#b3").click(function(){
        $(".pokeindex-right__screen").text("Enjoys basketball");
    });

    $("#b4").click(function(){
        $(".pokeindex-right__screen").html("<a href='https://www.youtube.com/watch?v=9H3I8akgPoI'>YouTube: Trying to explain Neural Networks</a>");
    });

    $(".controller-touch").click(function(){
        $(".details2").slideDown(500);
    });

    $("#prev").click(function(){
        $("#s1").toggle();
        $("#s2").toggle();
    });

    $("#next").click(function(){
        $("#s1").toggle();
        $("#s2").toggle();
    });

});