function submissionCheck(){
    const form = document.getElementById("fm");
    let username = document.infoForm.username.value;
    let email = document.infoForm.email.value;
    if(username === ""){
        let para = document.createElement("p");
        let userError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "red";
        span.innerText = "Username";
        para.appendChild(userError);
        para.appendChild(span);
        form.appendChild(para);
        return false;
    } else if(username.match(/[a-z0-9]{4,12}/)) {
        console.log("match");
    } else{
        let para = document.createElement("p");
        let userError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "orange";
        span.innerText = "a valid username";
        para.appendChild(userError);
        para.appendChild(span);
        form.appendChild(para);
        return false;
    }
    if(email === ""){
        let paraOne = document.createElement("p");
        let emailError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "red";
        span.innerText = "Email";
        paraOne.appendChild(emailError);
        paraOne.appendChild(span);
        form.appendChild(paraOne);
        return false;
    } else if(email.match(/[@](.net|.com|.org|.edu)$/)){

    }
}