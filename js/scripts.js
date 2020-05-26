$(document).ready(function () {

  $("p").click(function () {
    $(this).slideToggle("slow");
  });

  $("button").mouseenter(function () {
    $(this).removeClass("makeRed").addClass("makeBlue");
  });

  $("button").mouseleave(function () {
    $(this).removeClass("makeBlue").addClass("makeRed");
  });

/*uncomment to make thin black boxes turn red when clicked on: mutiple boxes will go red at once as you have shared class names with some of them*/
//   $(".box").on("click", function(){
//       let classNames = $(this).attr("class").split(" ");
//       $("." + classNames[1]).css("background-color", "red");
//   });

/*to make certain classes turn these black boxes to red use an if statement*/
$(".box").on("click", function(){
let classNames = $(this).attr("class").split(" ");
let boxClass = classNames[0];
let className = classNames[1];
if ($(this).css("background-color") === "rgb(255, 0, 0)"){
    /*if tall box is red turn it black: below*/
    $("." + className).css("background-color", "#000");
}else{
    $("." + boxClass).css("background-color", "#000");
    $("." + className).css("background-color", "red");
}

});
});

