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
function SignIn(){
    if(document.getElementById("s-fname").value === localStorage.getItem("fname")){
        document.getElementById("sign-flname").innerHTML = "welcome " + localStorage.getItem("fname") + " !";
    }
    else{
        document.getElementById("sign-flname").innerHTML = "error";
    }
}
function Delete(){
    localStorage.clear();
    /*localStorage.removeItem("fname");
    localStorage.removeItem("lname");*/
}