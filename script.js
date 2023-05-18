let usremail=document.querySelector("#usr-email");

let usrphone=document.querySelector("#usr-phone");
let submit=document.querySelector("#submit");
let emailerror=document.querySelector("#emailerror");
let passworderror=document.querySelector("#passworderror");
let confirmerror=document.querySelector("#confirmerror");
let phoneerror=document.querySelector("#phoneerror");
submit.addEventListener("click",function(e)
{

     e.preventDefault();
    let usrpassword=document.querySelector("#usr-password").value;
    let usrconfirm=document.querySelector("#usr-confirmpassword").value;
    let emailpattern=/^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/;
    let phonepattern=/^[6-9]{1}\d{9}$/;
    
    if(!emailpattern.test(usremail.value)){
    document.getElementById("emailerror").innerHTML="Invalid Email";
    return false;
    }
    if(usrpassword.length<=5){
        passworderror.innerHTML="Weak password";
        return false;
    }
    if(usrpassword!=usrconfirm){
        confirmerror.innerHTML="Password don't match";
        return false;
    }
    if(!phonepattern.test(usrphone.value)){
        phoneerror.innerHTML="Invalid phone number";
        return false;
        }
    
    
    
    

})


