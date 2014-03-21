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

    //icons teams
    $('.icon-img').each(function(index) {
        $(this).hover(function(){
            $(this).attr('src',icons[index]['hover']);
        },function(){
            $(this).attr('src',icons[index]['normal']);
        })
    });

    if(navigator.userAgent.search("Firefox")>-1)
        project_icons.forEach(function(entry) {
           var div = $(entry.class);

           var icon = div.find('#project-icon-img');
           icon.attr('src', entry.hover);
           icon.attr('top',230);

        });
});

var icons = [
    {
        "normal" : 'images/icon_pocket.svg',
        "hover" : 'images/icon_pocket_hover.svg'
    },
    {
        "normal" : 'images/icon_travel.svg',
        "hover" : 'images/icon_travel_hover.svg'
    },
    {
        "normal" : 'images/icon_executive.svg',
        "hover" : 'images/icon_executive_hover.svg'
    },
    {
        "normal" : 'images/icon_sounds.svg',
        "hover" : 'images/icon_sounds_hover.svg'
    }
];

var project_icons = [
    {
        "class" : 'pocket-box',
        "normal" : 'images/pocketprojects.svg',
        "hover" : 'images/pocketprojects_hover.svg'
    },
    {
        "class" : 'travel-box',
        "normal" : 'images/travelprojects.svg',
        "hover" : 'images/travelprojects_hover.svg'
    },
    {
        "class" : 'executive-box',
        "normal" : 'images/executiveprojects.svg',
        "hover" : 'images/executiveprojects_hover.svg'
    },
    {
        "class" : 'sounds-box',
        "normal" : 'images/soundsprojects.svg',
        "hover" : 'images/soundsprojects_hover.svg'
    }
];

function change_photos(page) {
    var  photo1 = document.getElementById('photo1');
    var photos = team_photos[page];

    for(var i = 0; i<4; i++) {
        var photo = photos[i];
        if(photo.name == "NELSON MENDES")
            document.getElementById('team-photo' + (i+1) + '-image').setAttribute('src','../images/team-photos/nelsonmendes.JPG');
        else
            document.getElementById('team-photo' + (i+1) + '-image').setAttribute('src','../images/team-photos/' + 'team_foto_' + photo["img"] + '.svg');
        document.getElementById('photo' + (i+1) + '-name').innerHTML = photo["name"];
        document.getElementById('photo' + (i+1) + '-course').innerHTML = photo["course"];

        var faculty = "Faculdade de Engenharia";
        if(photo["course"] == "Design de Comunicação")
            faculty = "Faculdade de Belas-Artes";
        document.getElementById('photo' + (i+1) + '-faculty').innerHTML = faculty;
    }
};

var team_photos = [
    [
        {
            "name": "ANDRÉ SILVA",
            "course": "Informática",
            "img": "andre"
        },
        {
            "name": "JOÃO FIGUEIREDO",
            "course": "Multimédia",
            "img": "joaofigueiredo"
        },
        {
            "name": "MARLYN SOUSA",
            "course": "Design de Comunicação",
            "img": "marlynsousa"
        },
        {
            "name": "HELENA SOARES",
            "course": "Design de Comunicação",
            "img": "helenasoares"
        }
    ],
    [
        {
            "name": "DIOGO MENDES",
            "course": "Informática",
            "img": "diogomendes"
        },
        {
            "name": "RICARDO PEDROSO",
            "course": "Informática",
            "img": "ricardopedroso"
        },
        {
            "name": "FRANCISCA GONÇALVES",
            "course": "Multimédia",
            "img": "francisca"
        },
        {
            "name": "DANIEL TEIXEIRA",
            "course": "Informática",
            "img": "danielteixeira"
        }
    ],
    [
        {
            "name": "PEDRO ROSA",
            "course": "Informática",
            "img": "pedrorosa"
        },
        {
            "name": "MARIANA ORNELAS",
            "course": "Multimédia",
            "img": "marianaornelas"
        },
        {
            "name": "DAVID CLEMENTE",
            "course": "Informática",
            "img": "david"
        },
        {
            "name": "JOÃO LADEIRAS",
            "course": "Informática",
            "img": "joaoladeiras"
        }
    ],
    [
        {
            "name": "ALEXEY SELIVERSTOV",
            "course": "Informática",
            "img": "alexei"
        },
        {
            "name": "MARIANA SARDON",
            "course": "Multimédia",
            "img": "marianasardon"
        },
        {
            "name": "AFONSO CALDAS",
            "course": "Informática",
            "img": "afonsocaldas"
        },
        {
            "name": "NELSON MENDES",
            "course": "Informática",
            "img": "individua"
        }
    ],
    [
        {
            "name": "SARA BASTOS",
            "course": "Multimédia",
            "img": "sarabastos"
        },
        {
            "name": "VICTOR CERQUEIRA",
            "course": "Informática",
            "img": "victorcerqueira"
        },
        {
            "name": "PEDRO LETRA",
            "course": "Informática",
            "img": "pedroletra"
        },
        {
            "name": "JOÃO HENRIQUES",
            "course": "Multimédia",
            "img": "joaohenriques"
        }
    ],
    [
        {
            "name": "LUÍS ALY",
            "course": "Multimédia",
            "img": "aly"
        },
        {
            "name": "JOÃO AFONSO",
            "course": "Informática",
            "img": "joaoafonso"
        },
        {
            "name": "HUGO GONÇALVES",
            "course": "Multimédia",
            "img": "hugogoncalves"
        },
        {
            "name": "MARCOS OLIVEIRA",
            "course": "Informática",
            "img": "marcosoliveira"
        }
    ]
]