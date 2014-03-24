var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

$(document).ready(function(){
    $(".team-ball").click(function(){
        $(".team-ball.active").removeClass("active");
        $(this).addClass("active");
    });

    var div = document.getElementById('team-carrousel');
    if (div != null)
    {

        window.setInterval(function(){
            var current = parseInt(div.getElementsByClassName('active')[0].getAttribute('id'));

            if (current == 7)
                current = 1;
            else
                current = current + 1;
            div.getElementsByClassName(current)[0].click();
            },5000);
    }

    //icons teams
    $('.icon-img').each(function(index) {
        $(this).hover(function(){
            $(this).find('img').attr('src',icons[index]['hover']);
        },function(){
            $(this).find('img').attr('src',icons[index]['normal']);
        })
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

function change_photos(page) {
    var  photo1 = document.getElementById('photo1');

    $('.team-image').each(function(index){
        var div = $(this);
        var current = div.find('.photo-active');
        current.removeClass('photo-active');
        current.addClass('photo-hidden');

        var newPhoto = div.find('.' + (page+1));
        newPhoto.removeClass('photo-hidden');
        newPhoto.addClass('photo-active');

        if(page < 6 || (page == 6 && index == 0)) {
            var stats = team_photos[page][index];
            div.find('.name').text(stats.name);
            div.find('.course').text(stats.course);

            var faculty = "Faculdade de Engenharia";
            if(stats.course == "Design de Comunicação")
                faculty = "Faculdade de Belas-Artes";

            div.find('.faculty').text(faculty);

            var uni = div.find('.uni');
            if(uni.text() == '')
                uni.text('Universidade do Porto');
        }
        else {
            div.find('p').each(function(){
                $(this).text('');
            })
        }
    });
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
            "img": "nelsonmendes"
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
    ],
    [
        {
            "name": "LARA MARINHA",
            "course": "Informática",
            "img": "lara"
        }

    ]
]