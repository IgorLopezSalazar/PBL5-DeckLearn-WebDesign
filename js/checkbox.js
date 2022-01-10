window.onload = function () {
    var checkbox = document.getElementsByClassName('custom-check');
    var radio = document.getElementsByClassName('custom-check');
    var label = document.getElementsByClassName('custom-check__label');

    console.log(checkbox.length);
    for(let i = 0; i < checkbox.length; i++)
    {
        label[i].addEventListener('keypress', function (evt) {
            if (evt.key === ' ') {
                checkbox[i].checked = !checkbox[i].checked;
              } else if (evt.key === 'Enter') {
                // .form returns a reference to the parent form
                checkbox[i].form.submit();
              }
        }, false);
    }
}