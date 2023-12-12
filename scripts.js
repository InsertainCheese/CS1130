
function showContent() {
    var button = document.getElementById('showContentButton');
    var programHeader = document.getElementById('program-header');
    var programButtons = document.querySelectorAll('.program-button');

    button.style.opacity = 0;

    programHeader.style.opacity = 1;

    programButtons.forEach(function(button) {
        button.classList.add('clicked');
    });
}

function redirectTo(url) {
    window.location.href = url;
}