$(document).ready(function(){
  $("button#red").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Stares silently at you...</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });

  $("button#green").click(function(){
    $("ul#user").prepend("<li>I said Hello!</li>");
    $("ul#webpage").prepend("<li>Sigh-like fan noise</li>");
  });

  $("button#orange").click(function(){
    $("ul#user").prepend("<li>Why do you hate me!?</li>");
    $("ul#webpage").prepend("<li>Because you are inferior.</li>");
  });



});
