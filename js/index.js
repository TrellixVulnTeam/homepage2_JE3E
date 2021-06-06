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
        $(object).css("opacity",0);
        $(object).css("z-index",-1);
        //$(object).css("display","none");
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

        //console.log("current is header");
        sectionHeader.css("opacity","1");
        sectionProfile.css("z-index","1");
        //sectionProfile.css("display","block");
        sectionInit(1);
    }
    //section profile
    //let scrollProfile = $(".header").height() + needScroll;
    console.log(scrollProfile);

    if(scrollProfile < $(window).scrollTop()){

        //console.log("current is profile");
        sectionProfile.css("opacity","1");
        sectionProfile.css("z-index","1");
        sectionInit(2);
    }

    //section portfolio
    if(scrollPortfolio < $(window).scrollTop()){

        //console.log("current is profile");
        sectionPortfolio.css("opacity","1");
        sectionPortfolio.css("z-index","1");
        sectionInit(3);
    }

    //section hobby
    if(scrollHobby < $(window).scrollTop()){

        //console.log("current is profile");
        sectionHobby.css("opacity","1");
        sectionHobby.css("z-index","1");
        sectionInit(4);
    }

});

});
//$(".header").scrollTop($(".header").height() + 300);