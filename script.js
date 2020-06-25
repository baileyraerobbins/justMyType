
//Display sentences
let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];
let arrayNumber = 0;
let sentence = sentences[arrayNumber];


$('#sentence').text(sentence);

//Move yellow square on correct letter
$(document).keydown(function (e1) {
    if(e1.which == 69){
        $('#yellow-block').css('margin-left','10px')
    } else if (e1.which == 78) {
        $('#yellow-block').css('margin-left','35px')
    } else if (e1.which == 65) {
        $('#yellow-block').css('margin-left','62px')
    } else if (e1.which == 84) {
        $('#yellow-block').css('margin-left','78px')
    }
})

// Uppercase board hidden in CSS
$('#keyboard-upper-container').hide();

//while shift key is held down, hide the lowercase board and show uppercase one
$(document).keydown(function (e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    } else if (e.which == 192) {
        $('#96').css('background-color', 'pink');
    } else if (e.which == 49) {
        $('#49').css('background-color', 'pink');
    } else if (e.which == 50) {
        $('#50').css('background-color', 'pink');
    } else if (e.which == 51) {
        $('#51').css('background-color', 'pink');
    } else if (e.which == 52) {
        $('#52').css('background-color', 'pink');
    } else if (e.which == 53) {
        $('#53').css('background-color', 'pink');
    } else if (e.which == 54) {
        $('#54').css('background-color', 'pink');
    } else if (e.which == 55) {
        $('#55').css('background-color', 'pink');
    } else if (e.which == 81) {
        $('#113').css('background-color', 'pink');
    } else if (e.which == 87) {
        $('#119').css('background-color', 'pink');
    } else if (e.which == 69) {
        $('#101').css('background-color', 'pink');
    } else if (e.which == 82) {
        $('#114').css('background-color', 'pink');
    } else if (e.which == 84) {
        $('#116').css('background-color', 'pink');
    } else if (e.which == 89) {
        $('#121').css('background-color', 'pink');
    } else if (e.which == 85) {
        $('#117').css('background-color', 'pink');
    } else if (e.which == 73) {
        $('#105').css('background-color', 'pink');
    } else if (e.which == 79) {
        $('#111').css('background-color', 'pink');
    } else if (e.which == 80) {
        $('#112').css('background-color', 'pink');
    } else if (e.which == 219) {
        $('#91').css('background-color', 'pink');
    } else if (e.which == 221) {
        $('#93').css('background-color', 'pink');
    } else if (e.which == 220) {
        $('#92').css('background-color', 'pink');
    } else if (e.which == 57) {
        $('#57').css('background-color', 'pink');
    } else if (e.which == 48) {
        $('#48').css('background-color', 'pink');
    } else if (e.which == 189) {
        $('#45').css('background-color', 'pink');
    } else if (e.which == 187) {
        $('#61').css('background-color', 'pink');
    } else if (e.which == 56) {
        $('#56').css('background-color', 'pink');
    } else if (e.which == 57) {
        $('#57').css('background-color', 'pink');
    } else if (e.which == 65) {
        $('#97').css('background-color', 'pink');
    } else if (e.which == 83) {
        $('#115').css('background-color', 'pink');
    } else if (e.which == 68) {
        $('#100').css('background-color', 'pink');
    } else if (e.which == 70) {
        $('#102').css('background-color', 'pink');
    } else if (e.which == 71) {
        $('#103').css('background-color', 'pink');
    } else if (e.which == 72) {
        $('#104').css('background-color', 'pink');
    } else if (e.which == 74) {
        $('#106').css('background-color', 'pink');
    } else if (e.which == 75) {
        $('#107').css('background-color', 'pink');
    } else if (e.which == 76) {
        $('#108').css('background-color', 'pink');
    } else if (e.which == 186) {
        $('#59').css('background-color', 'pink');
    } else if (e.which == 222) {
        $('#39').css('background-color', 'pink');
    } else if (e.which == 90) {
        $('#122').css('background-color', 'pink');
    } else if (e.which == 88) {
        $('#120').css('background-color', 'pink');
    } else if (e.which == 67) {
        $('#99').css('background-color', 'pink');
    } else if (e.which == 86) {
        $('#118').css('background-color', 'pink');
    } else if (e.which == 66) {
        $('#98').css('background-color', 'pink');
    } else if (e.which == 78) {
        $('#110').css('background-color', 'pink');
    } else if (e.which == 77) {
        $('#109').css('background-color', 'pink');
    } else if (e.which == 188) {
        $('#44').css('background-color', 'pink');
    } else if (e.which == 190) {
        $('#46').css('background-color', 'pink');
    } else if (e.which == 191) {
        $('#47').css('background-color', 'pink');
    } else if (e.which == 32) {
        $('#32').css('background-color', 'pink');
    }
    //When the shift key is released, show the lowercase keyboard and hide the uppercase one
    $(document).keyup(function (e) {
        if (e.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        } else if (e.which == 192) {
            $('#96').css('background-color', '#f5f5f5');
        } else if (e.which == 49) {
            $('#49').css('background-color', '#f5f5f5');
        } else if (e.which == 50) {
            $('#50').css('background-color', '#f5f5f5');
        } else if (e.which == 51) {
            $('#51').css('background-color', '#f5f5f5');
        } else if (e.which == 52) {
            $('#52').css('background-color', '#f5f5f5');
        } else if (e.which == 53) {
            $('#53').css('background-color', '#f5f5f5');
        } else if (e.which == 54) {
            $('#54').css('background-color', '#f5f5f5');
        } else if (e.which == 55) {
            $('#55').css('background-color', '#f5f5f5');
        } else if (e.which == 81) {
            $('#113').css('background-color', '#f5f5f5');
        } else if (e.which == 87) {
            $('#119').css('background-color', '#f5f5f5');
        } else if (e.which == 69) {
            $('#101').css('background-color', '#f5f5f5');
        } else if (e.which == 82) {
            $('#114').css('background-color', '#f5f5f5');
        } else if (e.which == 84) {
            $('#116').css('background-color', '#f5f5f5');
        } else if (e.which == 89) {
            $('#121').css('background-color', '#f5f5f5');
        } else if (e.which == 85) {
            $('#117').css('background-color', '#f5f5f5');
        } else if (e.which == 73) {
            $('#105').css('background-color', '#f5f5f5');
        } else if (e.which == 79) {
            $('#111').css('background-color', '#f5f5f5');
        } else if (e.which == 80) {
            $('#112').css('background-color', '#f5f5f5');
        } else if (e.which == 219) {
            $('#91').css('background-color', '#f5f5f5');
        } else if (e.which == 221) {
            $('#93').css('background-color', '#f5f5f5');
        } else if (e.which == 220) {
            $('#92').css('background-color', '#f5f5f5');
        } else if (e.which == 56) {
            $('#56').css('background-color', '#f5f5f5');
        } else if (e.which == 57) {
            $('#57').css('background-color', '#f5f5f5');
        } else if (e.which == 48) {
            $('#48').css('background-color', '#f5f5f5');
        } else if (e.which == 189) {
            $('#45').css('background-color', '#f5f5f5');
        } else if (e.which == 187) {
            $('#61').css('background-color', '#f5f5f5');
        } else if (e.which == 65) {
            $('#97').css('background-color', '#f5f5f5');
        } else if (e.which == 83) {
            $('#115').css('background-color', '#f5f5f5');
        } else if (e.which == 68) {
            $('#100').css('background-color', '#f5f5f5');
        } else if (e.which == 70) {
            $('#102').css('background-color', '#f5f5f5');
        } else if (e.which == 71) {
            $('#103').css('background-color', '#f5f5f5');
        } else if (e.which == 72) {
            $('#104').css('background-color', '#f5f5f5');
        } else if (e.which == 74) {
            $('#106').css('background-color', '#f5f5f5');
        } else if (e.which == 75) {
            $('#107').css('background-color', '#f5f5f5');
        } else if (e.which == 76) {
            $('#108').css('background-color', '#f5f5f5');
        } else if (e.which == 186) {
            $('#59').css('background-color', '#f5f5f5');
        } else if (e.which == 222) {
            $('#39').css('background-color', '#f5f5f5');
        } else if (e.which == 90) {
            $('#122').css('background-color', '#f5f5f5');
        } else if (e.which == 88) {
            $('#120').css('background-color', '#f5f5f5');
        } else if (e.which == 67) {
            $('#99').css('background-color', '#f5f5f5');
        } else if (e.which == 86) {
            $('#118').css('background-color', '#f5f5f5');
        } else if (e.which == 66) {
            $('#98').css('background-color', '#f5f5f5');
        } else if (e.which == 78) {
            $('#110').css('background-color', '#f5f5f5');
        } else if (e.which == 77) {
            $('#109').css('background-color', '#f5f5f5');
        } else if (e.which == 188) {
            $('#44').css('background-color', '#f5f5f5');
        } else if (e.which == 190) {
            $('#46').css('background-color', '#f5f5f5');
        } else if (e.which == 191) {
            $('#47').css('background-color', '#f5f5f5');
        } else if (e.which == 32) {
            $('#32').css('background-color', '#f5f5f5');
        }
    })
});

//Keys should be highlighed in browser. Matched with ascii code. The id value in HTML corresponds to ASCII code that you can access in the keyboard listener. 
// a = id 97 , 

