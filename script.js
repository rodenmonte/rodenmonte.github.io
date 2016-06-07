$(document).ready(function() {
    $("td").mouseenter(function() {
        if ($(this).hasClass('gray')){
          $(this).toggleClass('black');
        }
        else{
          $(this.toggleClass('gray'));
        }
    });
    $("a").mouseenter(function(){
      var fontSize = parseInt($(this).css("font-size"));
      fontSize = fontSize + 3 + "px";
      $(this).css({'font-size':fontSize});
    })
    $("a").mouseleave(function(){
      var fontSize = parseInt($(this).css("font-size"));
      fontSize = fontSize + -3 + "px";
      $(this).css({'font-size':fontSize});
    })
});
