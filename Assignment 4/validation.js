function submissionCheck(){
    const form = document.getElementById("fm");
    let username = document.infoForm.username.value;
    let email = document.infoForm.email.value;
    let phone = document.infoForm.number.value;
    let password = document.infoForm.password.value;
    let confirmPassword = document.infoForm.cPassword.value;
    let male = document.getElementById("ml");
    let female = document.getElementById("fl");
    let other = document.getElementById("or");
    let age = document.infoForm.age.value;
    if(username === ""){
        let para = document.createElement("p");
        let userError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "red";
        span.innerText = "Username";
        para.appendChild(userError);
        para.appendChild(span);
        form.appendChild(para);
    } else if(username.match(/[a-z0-9]{4,12}/)) {
        console.log("match");
    } else {
        let para = document.createElement("p");
        let userError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "orange";
        span.innerText = "a valid username";
        para.appendChild(userError);
        para.appendChild(span);
        form.appendChild(para);
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
        //return false;
    } else if(email.match(/[A-Za-z0-9]+@[A-Za-z0-9\.]+(\.net|\.com|\.org|\.edu)$/)){
        console.log("ematch");
    } else{
        let paraOne = document.createElement("p");
        let emailError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "orange";
        span.innerText = "a valid email";
        paraOne.appendChild(emailError);
        paraOne.appendChild(span);
        form.appendChild(paraOne);
    }
    if(phone === ""){
        let paraTwo = document.createElement("p");
        let phoneError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "red";
        span.innerText = "Phone Number";
        paraTwo.appendChild(phoneError);
        paraTwo.appendChild(span);
        form.appendChild(paraTwo);
    } else if(phone.match(/\((\d{3})\)-(\d{3})-(\d{4})/)){
        console.log("phmatch");
    } else{
        let paraTwo = document.createElement("p");
        let phoneError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "orange";
        span.innerText = "a valid phone number";
        paraTwo.appendChild(phoneError);
        paraTwo.appendChild(span);
        form.appendChild(paraTwo);
    }
    if(password === ""){
        let paraThree = document.createElement("p");
        let passwordError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "red";
        span.innerText = "Password";
        paraThree.appendChild(passwordError);
        paraThree.appendChild(span);
        form.appendChild(paraThree);
    } else if(password.match(/[A-Za-z0-9_]{8,}/)){
        console.log("pmatch");
    } else{
        let paraThree = document.createElement("p");
        let passwordError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "orange";
        span.innerText = "a valid password";
        paraThree.appendChild(passwordError);
        paraThree.appendChild(span);
        form.appendChild(paraThree);
    }
    if(confirmPassword !== password){
        window.alert("passwords do not match");
    } else if(confirmPassword === password){
        console.log("conmatch");
    } else {
        let paraFour = document.createElement("p");
        let confirmError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "orange";
        span.innerText = "a valid confirmation";
        paraFour.appendChild(confirmError);
        paraFour.appendChild(span);
        form.appendChild(paraFour);
    }
    if(male.checked === true || female.checked === true || other.checked === true){
        console.log("gconfirm");
    } else{
        let paraFive = document.createElement("p");
        let genderError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "red";
        span.innerText = "Gender";
        paraFive.appendChild(genderError);
        paraFive.appendChild(span);
        form.appendChild(paraFive);
    }
    if(age !== "blank"){
        console.log("ageconfirm");
    } else{
        let paraSix = document.createElement("p");
        let ageError = document.createTextNode("Please Enter ");
        let span = document.createElement("span");
        span.style.color = "red";
        span.innerText = "Age Group";
        paraSix.appendChild(ageError);
        paraSix.appendChild(span);
        form.appendChild(paraSix);
    }
    console.log(gender);
}