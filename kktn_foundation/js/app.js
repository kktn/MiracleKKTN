$(document).foundation();

function writeHeader() {
    var header =
    '<div class="top-bar">' +
    '<div class="top-bar-left">'+
    '<ul class="menu">' +
    '<li><a href="index.html">KKTN</a></li>' +
    '<li><a href="works.html">WORKS</a></li>' +
    '<li><a href="contact.html">CONTACT</a></li>' +
    '</ul>' +
    '</div>' +
    '</div>';

    $('#top-bar').html(header);
}