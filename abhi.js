
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    
    var name = document.contactForm.name.value;
    var lname = document.contactForm.lname.value;
    var email = document.contactForm.email.value;
    var password = document.contactForm.password.value;
    var mobile = document.contactForm.mobile.value;
    var dob = document.contactForm.dob.value;
    var gender = document.contactForm.gender.value;
    
    
    
	
    var nameErr = nameError = emailErr = passErr = mobileErr = dobErr =  true;
    
    
    if(name == "") {
        printError("nameErr", "Please enter your First name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid  First name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    if(lname == "") {
        printError("nameError", "Please enter your Last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) === false) {
            printError("nameError", "Please enter a valid Last name");
        } else {
            printError("nameError", "");
            nameError = false;
        }
    }
    
    
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(password == "") {
        printError("passErr", "Please enter your password");
    } else {
        var regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;             
        if(regex.test(password) === false) {
            printError("passErr", "password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
        } else {
            printError("passErr", "");
            passErr = false;
        }
    }
    
    
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
     
     if(dob == "") {
        printError("dobErr", "Please enter your Date of birth");
    } else {
        printError("dobErr", "");
        dobErr = false;
    }
    
    
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    
    if((nameErr || nameError || emailErr || passErr || mobileErr || dobErr || genderErr) == true) {
       return false;
    } else {
        
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + lname + "\n" +
                          "Email Address: " + email + "\n" +
                          "Password: " + password + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Date of birth: " + dob + "\n" +
                          "Gender: " + gender + "\n";
        
        alert(dataPreview);
    }

    localStorage.setItem("NAME",name);
    localStorage.setItem("LNAME",lname);
    localStorage.setItem("EMAIL",email);
    localStorage.setItem("PASS",password);
    localStorage.setItem("MOBILE",mobile);
    localStorage.setItem("DOB",dob);
    localStorage.setItem("GENDER",gender);

    
};


function sampleFunction() {
    location.reload();
  }