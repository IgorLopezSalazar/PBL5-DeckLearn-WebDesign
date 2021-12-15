window.onload = function(){
   
    let selectables = document.getElementById("selectable");

    for (let index = 0; index < selectables.length; index++) {
        selectables[index].addEventListener('click', selecter.bind(null, i));
    }

}

function selecter(id) {
    var article = document.getElementsByTagName("article");
    article[id].classList.toggle("selected");
    clearTimeout(timer);
}