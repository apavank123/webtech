function login(){
    console.log("calling login")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    console.log(email.value)
    console.log(password.value)

    let register = localStorage.getItem("noncsr")
    console.log(register)
    console.log(register.email)

    let registerObject = JSON.parse(register)
    console.log(registerObject)
    console.log(registerObject.email)
    console.log(registerObject.password)

    let errorMessage = document.getElementById("message")
    if(email.value == registerObject.email && 
    password.value == registerObject.password){
        console.log("Login Success")
        errorMessage.innerHTML = "Login Success"
        window.location.href="https://www.facebook.com/"
        
    }
    else{
        console.log("Incorrect email or password")
        errorMessage.innerHTML = "Incorrect email or password"

    }

}