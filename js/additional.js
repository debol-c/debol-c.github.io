const url = "https://derash.herokuapp.com/user";
// const url = "http://localhost:1111/user/";
// const url = "http://31.220.21.156:1111/user";

window.onload = openModalFunction;

function openModalFunction(){
    const modal = document.querySelector(".modal");
    modal.classList.add("show-modal");
        
}

async function betaUserAdd(){
    let email = document.querySelector("#mc-email");
    let phoneNumber = document.querySelector("#mc-phoneNumber");
    const modal = document.querySelector(".modal");

    if((email.value === "" || email.value === null || email.value === undefined) && (phoneNumber.value === "" || phoneNumber.value === null || phoneNumber.value === undefined)){
        location.reload();
        return false;
    }

    let data = {
        email: email.value,
        phoneNumber: phoneNumber.value
    }

    email.value = "";
    phoneNumber.value = "";
    grecaptcha.reset();
    modal.classList.remove("show-modal");

    console.log(data);

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });



}

function enableBtn(){
    document.getElementById("form-button").disabled = false;
}

function openModal (){
    const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".modal-trigger");
    const closeButton = document.querySelector(".modal__close");
    modal.classList.toggle("show-modal");
}
