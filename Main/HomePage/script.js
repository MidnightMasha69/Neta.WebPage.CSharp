/*function Load() {
    //Makes #w-text's width to #selfpic's width.
    var w-quote = document.getElementById("selfpic");
    //var wtext = document.getElementById("w-text");
    var wquote = document.getElementById("w-quote");
    //wtext.style.width = selfpic.clientWidth + "px";
    wquote.style.width = selfpic.clientWidth + "px";
}
var cs = document.getElementById("codeskills");
var tb = document.getElementById("table");*/
function SignUp(){
    var fname = document.getElementById("r-fname");
    var lname = document.getElementById("r-lname");
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("lname", lname.value);
}
function SignIn(){
    if(document.getElementById("s-fname").value == localStorage.getItem("fname")){
        document.getElementById("sign-flname").innerHTML = "welcome " + localStorage.getItem("fname") + " !";
    }
    else{
        document.getElementById("sign-flname").innerHTML = "error";
    }
}
function Delete(){
    localStorage.clear();
}