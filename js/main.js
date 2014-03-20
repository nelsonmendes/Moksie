var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

$(document).ready(function(){
    $(".team-ball").click(function(){
        $(".team-ball.active").removeClass("active");
        $(this).addClass("active");
    });
    document.getElementById('photo1').getElementById('team-photo-image').setAttribute('xlink:href','../images/team-photos/Andre.JPG');

});
window.onload=function(){


};
