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

const sectionInit = function(){
    sections.each(function(index,object){
        $(object).css("opacity",0);
        $(object).css("z-index",-1);
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
        sectionInit();
        //console.log("current is header");
        sectionHeader.css("opacity","1");
    }
    //section profile
    //let scrollProfile = $(".header").height() + needScroll;
    console.log(scrollProfile);

    if(scrollProfile < $(window).scrollTop()){
        sectionInit();
        //console.log("current is profile");
        sectionProfile.css("opacity","1");
        sectionProfile.css("z-index","1");
    }

    //section portfolio
    if(scrollPortfolio < $(window).scrollTop()){
        sectionInit();
        //console.log("current is profile");
        sectionPortfolio.css("opacity","1");
        sectionPortfolio.css("z-index","1");
    }

    //section hobby
    if(scrollHobby < $(window).scrollTop()){
        sectionInit();
        //console.log("current is profile");
        sectionHobby.css("opacity","1");
        sectionHobby.css("z-index","1");
    }

});

});
//$(".header").scrollTop($(".header").height() + 300);