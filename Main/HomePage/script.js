function Load() {
    //Makes #w-text's width to #selfpic's width.
    var selfpic = document.getElementById("selfpic");
    var wtext = document.getElementById("w-text");
    wtext.style.width = selfpic.clientWidth + "px";
}