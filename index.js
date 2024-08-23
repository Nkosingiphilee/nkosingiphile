var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



function submitMessage(event){
    event.preventDefault()
    const input_name=document.getElementById("name");
    const input_email=document.getElementById("email");
    const input_message=document.getElementById("Message");

    const isNameValid=input_name.value !=='';
    const isEmailValid=input_email.value !=='';
    let isMessageValid=input_message.value !=='';

    const isFormValid=isNameValid && isEmailValid && isMessageValid
    alert(isFormValid)
}