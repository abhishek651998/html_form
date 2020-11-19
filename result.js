function myfunction() {

    document.getElementById('fname').innerHTML = localStorage.getItem("NAME");
    document.getElementById('lname').innerHTML = localStorage.getItem("LNAME");
    document.getElementById('email').innerHTML = localStorage.getItem("EMAIL");
    document.getElementById('pass').innerHTML = localStorage.getItem("PASS");
    document.getElementById('mobile').innerHTML = localStorage.getItem("MOBILE");
    document.getElementById('dob').innerHTML = localStorage.getItem("DOB");
    document.getElementById('gender').innerHTML = localStorage.getItem("GENDER");


    localStorage.clear();

} 