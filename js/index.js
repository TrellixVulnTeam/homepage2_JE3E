"use strict";

let sizeY = $("body").height();
let numberOfSection = document.querySelectorAll(".section").length;

//sections
const sectionHeader = $(".header");
const sectionProfile = $(".section-profile");
const sections = $(".section");

console.log(sections);

const sectionInit = function(){
    sections.each(function(index,object){
        $(object).css("opacity",0);
        $(object).css("z-index",-1);
    });
}


console.log(numberOfSection);
let needScroll = 300; //必要スクロール量（固定）
$(function(){

$(window).scroll(function(){
    let currentScroll =  $(window).scrollTop();
    let scrollProfile = sizeY / numberOfSection * 1 - $(window).height();
    
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

});

});
//$(".header").scrollTop($(".header").height() + 300);