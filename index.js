var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(var tabcontent of tabcontents){
        tabcontents.classList.remove("active-tab");
    }

}