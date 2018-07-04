function Write(){
    if(!localStorage.key("fname")){
        document.getElementById("whowrite").innerHTML = "You're not signed in/registered. proceed to sign up or sign in.";
    }
    else{
        document.getElementById("whowrite").innerHTML = "You're Writing As " + localStorage.getItem("fname") + ".";
    }
    RemoveLoader();
    //Sign();
}
/*fromhere*/
function Load(){
    if(!localStorage.key("IsNewTheme")){
        localStorage.setItem("IsNewTheme", "Yes");
    }
    else if(localStorage.getItem("IsNewTheme") === "Yes"){
        NewTheme();
    }
    else if (localStorage.getItem("IsNewTheme") === "No"){
        OldTheme();
    }
}
function RemoveLoader(){
    var Loader = document.getElementById("loadblank");
    Loader.parentNode.removeChild(Loader);
    document.getElementById("signin-window").style.opacity = 1;
    document.getElementById("signout").style.display = "none";
}
function ChangeTheme(){
    if(localStorage.getItem("IsNewTheme") === "Yes"){
        OldTheme();
        localStorage.setItem("IsNewTheme", "No");
    }
    else if(localStorage.getItem("IsNewTheme") === "No"){
        NewTheme();
        localStorage.setItem("IsNewTheme", "Yes");
    }
}
function MainLoad(){
    RemoveLoader();
    //Sign();
    //Load();
}
function NewTheme(){
    document.body.style.background = "#fff";
    var wquote = document.getElementById("w-quote").style;
    wquote.border = "1px solid #d1d5da";
    wquote.background = "#f6f8fa";
    wquote.boxShadow = "none";
    wquote.borderRadius = "4px";
    var codeskills = document.getElementById("codeskills").style;
    codeskills.borderRadius = "4px";
    codeskills.background = "#f6f8fa";
    codeskills.boxShadow = "none";
    /*var thh = document.getElementsByTagName("th").style;
    var tdd = document.getElementsByTagName("td").style;
    codeskills.border = "1px solid #d1d5da";
    thh.border = "1px solid #d1d5da";
    tdd.border = "1px solid #d1d5da";*/

}
function OldTheme(){
    document.body.style.background = "#202020";
    var wquote = document.getElementById("w-quote").style;
    wquote.border = "2px solid #fff";
    wquote.background = "#151515";
    wquote.boxShadow = "0px 0px 20px #fff";
    wquote.borderRadius = "8px";
    var codeskills = document.getElementById("codeskills").style;
    codeskills.borderRadius = "8px";
    codeskills.background = "#151515";
    codeskills.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px #fff";
    /*var thh = document.getElementsByTagName("th").style;
    var tdd = document.getElementsByTagName("td").style;
    codeskills.border = "2px solid #fff";
    thh.border = "2px solid #fff";
    tdd.border = "2px solid #fff";*/
}
/*tohere is first time wrote full script without checking
for bugs or testing and it worked perfectly! Yeet*/
function SignUp(){
    var fname = document.getElementById("r-fname");
    var lname = document.getElementById("r-lname");
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("lname", lname.value);
}
/*function Sign(){
    if(document.getElementById("sign-flname").value = localStorage.getItem("fname")){
        SignedIn();
    }
    else{
        SignIn();
    }
}
function SignedIn(){
        document.getElementById("sign-flname").innerHTML = "welcome " + localStorage.getItem("fname") + " !";
        document.getElementById("forgot").style.display = "none";
        document.getElementById("signin-form").style.display = "none";
        document.getElementById("signin-window-logged").innerHTML = "My Account<br/>";
        document.getElementById("del2").style.display = "block";
}
function SignOut(){
    document.getElementById("sign-flname").innerHTML = "welcome " + localStorage.getItem("fname") + " !";
    document.getElementById("forgot").style.display = "block";
    document.getElementById("signin-form").style.display = "block";
    document.getElementById("signin-window-logged").innerHTML = "";
    document.getElementById("del2").style.display = "none";
    document.getElementById("signout").style.display = "none";
    document.getElementById("s-fname").innerHTML = "";
    Write();
    SignIn();
}*/
function SignIn(){
    document.getElementById("signin-welcome").style.display = "block";
    if(document.getElementById("s-fname").value === localStorage.getItem("fname")){
        document.getElementById("sign-flname").innerHTML = "welcome " + localStorage.getItem("fname") + " !";
        document.getElementById("forgot").style.display = "none";
        document.getElementById("signin-form").style.display = "none";
        document.getElementById("signin-window-logged").innerHTML = "My Account<br/>";
        document.getElementById("del2").style.display = "block";
    }
    else if(!localStorage.key("fname")){
        document.getElementById("sign-flname").innerHTML = "no account registered. <br /> Proceed to Sign Up.";
        document.getElementById("del").style.display = "none";
        document.getElementById("forgot").style.display = "none";
    }
    else if(document.getElementById("s-fname").value != localStorage.getItem("fname")){
        document.getElementById("sign-flname").innerHTML = "name misspelled. please enter correctly.";
    }
    else{
        document.getElementById("sign-flname").innerHTML = "unknown/undefined error";
    }
}
function Delete(){
    localStorage.clear();
    /*localStorage.removeItem("fname");
    localStorage.removeItem("lname");*/
    document.getElementById("sign-flname").innerHTML = "Successfully Deleted Account.";
    document.getElementById("del").style.display = "none";
    document.getElementById("forgot").style.display = "none";
}
function Forgot(){
    document.getElementById("sign-flname").innerHTML = "Well um.. ask your parents..?<br />Or You can delete your account and sign new!";
    document.getElementById("del").style.display = "block";
    document.getElementById("forgot").style.display = "none";
}