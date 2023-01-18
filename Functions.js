
// function express
let result = function add(a,b){
    console.log(a+b)
}
result(10,20)

// ananymos function 
let ananmous = function(){
    console.log("Calling ananmous function.......")
}
ananmous()
// IIFE Immediate Invoking function 

//Time FUnction in JavaScript
//SetTimeOut --- After a paarticular time function will be called 
//setTimeInterval --- For Every specified time function will be called 

function repeatTask(){
    console.log("Prepare for Interview")
    alert("Prepare for interview ")
}

setTimeout(repeatTask, 5000)

// Showing The date in JS 
function displayDateonclick(){
    let date = new Date()
    console.log(date)
    console.log(date.getTime())
    document.getElementById("displayDate").innerHTML = date
}






