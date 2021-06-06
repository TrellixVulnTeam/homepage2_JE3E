"use strict";

let sizeY = $("body").height();
let numberOfSection = document.querySelectorAll(".section").length;

//sections
const sectionHeader = $(".header");
const sectionProfile = $(".section-profile");
const sectionPortfolio = $(".section-portfolio");
const sectionHobby = $(".section-hobby");
const sections = $(".section");

//console.log(sections);

const sectionInit = function(excludeIndex){
    sections.each(function(index,object){
        if(excludeIndex != index){
        $(object).addClass("blind");
        $(object).css("opacity",0);
        $(object).css("z-index",-1);
        //$(object).css("display","none");
        }else{
            $(object).removeClass("blind");
            $(object).css("opacity",1);
            $(object).css("z-index",1);
        }
    });
}


console.log(numberOfSection);
let needScroll = 400; //必要スクロール量（固定）
$(function(){
    let scrollProfile = sizeY / numberOfSection * 1 - needScroll;
    let scrollPortfolio = sizeY / numberOfSection * 2 - needScroll;
    let scrollHobby = sizeY / numberOfSection * 3 - needScroll;

$(window).scroll(function(){
    let currentScroll =  $(window).scrollTop();
    
    //section header
    if(scrollProfile > currentScroll){
        sectionInit(0);
        //console.log("current is header");
        sectionHeader.css("opacity","1");
        sectionHeader.css("z-index","1");
        //sectionProfile.css("display","block");
    }
    //section profile
    //let scrollProfile = $(".header").height() + needScroll;
    console.log(scrollProfile);

    if(scrollProfile < $(window).scrollTop()){

        //console.log("current is profile");
        sectionProfile.css("opacity","1");
        sectionProfile.css("z-index","1");
        sectionInit(1);
    }

    //section portfolio
    if(scrollPortfolio < $(window).scrollTop()){

        //console.log("current is profile");
        sectionPortfolio.css("opacity","1");
        sectionPortfolio.css("z-index","1");
        sectionInit(2);
    }

    //section hobby
    if(scrollHobby < $(window).scrollTop()){

        //console.log("current is profile");
        sectionHobby.css("opacity","1");
        sectionHobby.css("z-index","1");
        sectionInit(3);
    }

});

});
//$(".header").scrollTop($(".header").height() + 300);