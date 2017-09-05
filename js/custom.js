/*global $,jQuery*/

var jq = jQuery.noConflict();

jq(function () {
    "use strict";

    // header size
    jq(".header").height(screen.height);

    jq(".header").resize(function () {
        jq(".header").height(screen.height);

        jq(".bx-viewport").css("marginTop", (jq(window).height() - jq(this).height()) / 2);
        jq(".bxslider").each(function () {
            jq(".bxslider").css("paddintTop", (jq(window).height() - jq(".bxslider li").height()) / 2);
        });
    });

    //active classes
    jq(".links li").on("click", function () {
        jq(this).addClass("active").siblings().removeClass("active");
        jq(this).children().addClass("active").parent().siblings().children(".active").removeClass("active");

    });


    jq(".links li a").on("click", function () {

        jq(this).addClass("active").parent().siblings().children(".active").removeClass("active");

    });

    //bx slider
    jq('.bxslider').bxSlider({
        pager : false,
        auto  : true,
        pause : 3000
    });

    // adjust bxslider padding for a better view
    jq(".bxslider").each(function () {
        jq(".bxslider").css("paddingTop", (jq(window).height() - jq(".bxslider li").height()) / 2);
    });

    //smooth scroll
    var navTo = function () {
        var data;
        if(jq(this).is(jq(".navbar .links li a"))){ //a
            data = jq(this).data("value");
        }else{// li
            data = jq(this).children().first().data("value");
        }
        jq("html ,body").animate({
            scrollTop : jq('#' + data).offset().top
        }, 1000);
    };

    jq(".navbar .links li a").click(navTo);
    jq(".navbar .links li").click(navTo);


    // hover on images of our-team
    var names = ["firstName","secondName","thirdName","fourthName"]

    jq(".our-team .images div").hover(function () {
      //create div for overlay
      var newDiv = document.createElement("div");
      newDiv.className = "overlay";
      newDiv.className += " overlay-color-custom";
      newDiv.style.textAlign = "center";
      //create h3 for names
      var newh3 = document.createElement("h3");
      jq(this).css("position","relative");
      newh3.textContent = names[jq(".our-team .images > div").index(this)];
      jq(newh3).css({
          "text-align" : "center",
          "paddingTop" : "35px",
          "font-weight" : "normal",
          "color" : "#fffeff"
      });
      //appending h3 and div
      jq(newDiv).append(newh3);
      jq(this).prepend(newDiv);
      jq(this).siblings().css("position" , "");
      jq(this).siblings().children("div").remove();
    } , function () {
      jq(this).children(".overlay").remove();
    });


    // hover on projects buttons
    jq(".projects .btns li").click(function () {
      jq(this).addClass("btn-active").siblings().removeClass("btn-active");
    });

    //hover on porjects images.

    jq(".projects .projects-images > div").hover(function () {
      //create div for overlay
      var newDiv = document.createElement("div");
      newDiv.className = "overlay";
      newDiv.className += " overlay-color-custom";
      newDiv.style.textAlign = "center";
      newDiv.style.paddingTop = "150px";
      //creating i
      var span = document.createElement("span");
      span.style.position = "absolute";
      span.style.bottom = "10px";
      span.style.right = "10px";
      span.style.color = "white";
      span.style.textAlign = "left";
      // create heart
      var newI = document.createElement("i");
      newI.className = "fa";
      newI.className += " fa-heart-o";
      newI.className += " fa-fw";
      // create buttons
      var btn = document.createElement("button");
      btn.style.backgroundColor = "transparent";
      btn.style.border = "2px solid white"
      btn.style.borderRadius = "5px";
      btn.textContent = "View More";
      btn.style.color = "white";
      btn.style.padding = "10px 15px";
      btn.style.zIndex = "4";
      btn.style.cursor = "pointer";
      //appending div , i and button
      jq(newDiv).append(btn);
      jq(span).append(newI);
      jq(span).append("&nbsp;&nbsp; 13");
      jq(newDiv).append(span);
      jq(this).prepend(newDiv);
      jq(this).siblings().css("position" , "");
      jq(this).siblings().children("div").remove();
    },function () {
      jq(this).children(".overlay").remove();
    });


    var mixer = mixitup('.projects-images', {
    });

});
