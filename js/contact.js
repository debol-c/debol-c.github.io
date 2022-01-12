const url = "https://derash.herokuapp.com/user";
// const url = "http://localhost:1111/user/";

async function betaUserAdd(){
    let email = document.querySelector("#mc-email");
    let phoneNumber = document.querySelector("#mc-phoneNumber");
    let data = {
        email: email.value,
        phoneNumber: phoneNumber.value
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

}
