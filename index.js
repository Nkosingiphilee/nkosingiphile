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
    const input_subject=document.getElementById("subject");

    const isNameValid=input_name.value.trim() !=='';
    const isEmailValid=input_email.value.trim() !=='' && input_email.validity.valid;
    let isMessageValid=input_message.value.trim() !=='';

    const isFormValid=isNameValid && isEmailValid && isMessageValid

    if (isFormValid) {
        const formData = new FormData(event.target) 
        fetch('https://formspree.io/f/mayraako',
            {
                method: 'POST',
                body: formData, 
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Email successfully sent')
                }
            })
            document.getElementById('email-span').classList.add('hidden')
            document.getElementById('message-span').classList.add('hidden')
            document.querySelector('form').reset(); 

    }else {

        if (isEmailValid !== true) {
            const emailSpan = document.getElementById('email-span')
            emailSpan.classList.remove('hidden')
        }
        if (isMessageValid !== true) {
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
        }
    }
}



var sidemenu=document.getElementById('sidemenu')

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}