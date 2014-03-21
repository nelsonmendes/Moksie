var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

$(document).ready(function(){
    $(".team-ball").click(function(){
        $(".team-ball.active").removeClass("active");
        $(this).addClass("active");
    });

    var photo1 = document.getElementById('photo1');
    if (photo1 != null)
       change_photos(0);

});

function change_photos(page) {
    var  photo1.getElementById('team-photo-image').setAttribute('xlink:href','../images/team-photos/Andre.JPG');
};

var team_photos = [
    [
        {
            "name": "ANDRÉ SILVA",
            "curso": "Informática",
            "img": "Andre.JPG"
        },
        {
            "name": "JOÃO FIGUEIREDO",
            "curso": "Multimédia",
            "img": "joaofigueiredo.JPG"
        },
        {
            "name": "MARLYN SOUSA",
            "curso": "Design de Comunicação",
            "img": "marlynsousa.JPG"
        },
        {
            "name": "Helena Soares",
            "curso": "Design de Comunicação",
            "img": "helenasoares2.JPG"
        }
    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ]
]