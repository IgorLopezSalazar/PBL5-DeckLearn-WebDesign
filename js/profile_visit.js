var button;

window.onload = function(){
    button = document.getElementById("button-profile_visit");
    console.log(button.textContent);
    button.addEventListener('mouseout', following);
    button.addEventListener('mouseover', unfollow);
    button.addEventListener('click', follow);
}

function following() {
    button.innerHTML = "Following";
    console.log(button.textContent);

    button.classList.remove("button-unfollow");
    button.classList.remove("button-follow");
    button.classList.add("button-following");

    button.removeEventListener('click', following);
    button.addEventListener('mouseout', following);
    button.addEventListener('mouseover', unfollow);
    button.addEventListener('click', follow);
}

function unfollow() {
    button.classList.add("button-unfollow");

    button.classList.add("button-unfollow");
    button.classList.remove("button-follow");
    button.classList.remove("button-following");

    button.innerHTML = "Unfollow";
    console.log(button.textContent);
}

function follow() {    
    button.innerHTML = "Follow";
    
    button.classList.remove("button-unfollow");
    button.classList.add("button-follow");
    button.classList.remove("button-following");

    button.removeEventListener('mouseout', following);
    button.removeEventListener('mouseover', unfollow);
    button.removeEventListener('click', follow);
    button.addEventListener('click', following);
    console.log(button.textContent);
}
