var button;

window.onload = function(){
    button = document.getElementById("button-profile_visit");
    button.addEventListener('mouseout', following);
    button.addEventListener('mouseover', unfollow);
    button.addEventListener('click', follow);
}

function following() {
    button.innerHTML = "Following";

    button.classList.remove("button-unfollow");
    button.classList.add("button-following");

    button.removeEventListener('click', following);
    button.addEventListener('mouseout', following);
    button.addEventListener('mouseover', unfollow);
    button.addEventListener('click', follow);
}

function unfollow() {
    button.classList.add("button-unfollow");

    button.classList.add("button-unfollow");
    button.classList.remove("button-following");

    button.innerHTML = "Unfollow";
}

function follow() {    
    button.innerHTML = "Follow";
    
    button.classList.remove("button-unfollow");
    button.classList.remove("button-following");

    button.removeEventListener('mouseout', following);
    button.removeEventListener('mouseover', unfollow);
    button.removeEventListener('click', follow);
    button.addEventListener('click', following);
}
