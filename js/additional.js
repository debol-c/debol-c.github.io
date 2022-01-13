// const url = "https://derash.herokuapp.com/user";
// const url = "http://localhost:1111/user/";
const url = "http://31.220.21.156:1111/user";

async function betaUserAdd(){
    let email = document.querySelector("#mc-email");
    let phoneNumber = document.querySelector("#mc-phoneNumber");

    let data = {
        email: email.value,
        phoneNumber: phoneNumber.value
    }

    if((email.value === "" || email.value === null || email.value === undefined) && (phoneNumber.value === "" || phoneNumber.value === null || phoneNumber.value === undefined)){
        return;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // email.value = "";
    // phoneNumber.value = "";
    // grecaptcha.reset();

    // let myToast = Toastify({
    //     text: "You have been entered in the Beta Test Program",
    //     duration: 5000,
    //     gravity: 'bottom',
    //     callback: function (){
    //         location.reload();
    //         return false;
    //     }
    // })
    //
    // myToast.showToast();

    location.reload();
    return false;



}

function enableBtn(){
    document.getElementById("form-button").disabled = false;
}
