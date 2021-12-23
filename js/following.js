window.onload = function(){
    let selectables = document.getElementsByClassName("selectable");
    for (let index = 0; index < selectables.length; index++) {
        selectables[index].addEventListener('click', selecter.bind(null, index));
        selectables[index].classList.toggle("selected");
    }
}

function selecter(id) {
    let selectables = document.getElementsByClassName("selectable");
    selectables[id].classList.toggle("selected");
    toggleText(selectables[id]);
}

function toggleText(element) {
    if (element.textContent == "Following") {
        element.innerHTML="Follow";
    }else{
        element.innerHTML="Following";
    }
}