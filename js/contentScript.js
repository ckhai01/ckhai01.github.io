// JavaScript source code
function change_infographic() {
    var img_src = document.getElementById("aspect-photo").getAttribute('src');
    if (img_src == "./images/Content/twitch-info.png") {
        document.getElementById("aspect-photo").src = "./images/Content/youtube-info.png";
        document.getElementById("aspect-photo").alt = "Youtube infographic";
        document.getElementById("title").innerHTML = "Impact of cyber gaming on youtube";
    }
    else {
        document.getElementById("aspect-photo").src = "./images/Content/twitch-info.png";
        document.getElementById("aspect-photo").alt = "twitch infographic";
        document.getElementById("title").innerHTML = "Impact of cyber gaming on twitch";
    }
}
function fact() {
    document.getElementById("fact").innerHTML = "Youtube or twitch is not easy. Spending huge number of hours per day streaming or recording and editing videos is tiring and can lead to burn out. If you wish to do youtube or twitch just to game, I'm afraid its not for you.";
}

function check_checkbox() {
    if (document.getElementById("subs").checked == false){
        alert("You did not agree to the terms and conditions.");
    }
    else {
        document.getElementById("thank_you").innerHTML = "Thanks for signing up, my friend.";
        document.getElementById("signup_form").reset();
    }
    return false
}