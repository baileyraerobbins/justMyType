let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];
let sentenceNumber = 0; //sentence incrementer
let sentence = sentences[sentenceNumber];
let targetSentence = $('#sentence') 
let letterNumber = 0; //letter incrementer
let letter = sentence.substring(letterNumber, letterNumber + 1);
let targetLetter = $('#target-letter');
let highlight = $("#white-block");
let highlightPosition = 0;
let mistakes = 0;
let timeClock = false; //time counter for wpm
let startDate;
let startTime;

$(highlight).css('background-color', 'grey'); //display highlight box as grey
$(targetSentence).text(sentence); //display sentence
$(targetLetter).text(letter); //display large letter
$('#keyboard-upper-container').hide(); //hide uppercase board

//TOGGLE UPPER/LOWER KEYBOARDS USING SHIFT
$(document).keydown(function (shift) { 
    if (shift.which == 16) { //if shift key is pressed down ...
        $('#keyboard-upper-container').show(); //show uppercase board
        $('#keyboard-lower-container').hide(); //hide lowercase board
    }
    $(document).keyup(function (shift) { 
        if (shift.which == 16) { //if shift key is lifted...
            $('#keyboard-upper-container').hide(); //hide uppercase board
            $('#keyboard-lower-container').show(); //show lowercase board
        }
    })
});

//CHANGE KEY COLOR ON KEYPRESS
$(document).keypress(function (color) {
    let keys = $("#" + color.which);
    $(keys).css("background-color", "#33FF00"); //if key is pressed, change to light green
    $(document).keyup(function () { 
        $(keys).css("background-color", "#FFFFFF"); //establish default of key
    });
});

//REGISTER KEYPRESSES FOR EACH SENTENCE
$(document).keypress(function (key) {
    if (timeClock === false) { //if button pressed...
        startDate = new Date(); //start the clock
        startTime = startDate.getTime();
        timeClock = true;

    }
    if (key.which == sentence.charCodeAt(letterNumber)) { //if typed key matches correct character ...
        let correct = ("<span>✅</span>"); //display check
        letterNumber++; //display next letter
        highlightPosition += 17.3; //move highlight box # pixels
        letter = sentence.substring(letterNumber, letterNumber + 1); //change large letter
        $(targetLetter).text(letter);
        $(correct).appendTo("#feedback");
        $(highlight).css('background-color', 'grey'); //keep color of highlighted box
        $(highlight).css("margin-left", highlightPosition, "px"); //move highlight box
        if (letterNumber === sentence.length) { //if sentence is finished...
            sentenceNumber++ //display NEXT sentence
            if (sentenceNumber === sentences.length) { //if all sentences are complete...
                let endDate = new Date();
                let endTime = endDate.getTime();
                let minutes = (endTime - startTime) / 60000;
                let wpm = Math.round(54 / minutes - 2 * mistakes); //calculate wpm
                let wpmMsg = confirm("You typed " + wpm + " words per minute. Press OK to keep practicing.");
                if (wpmMsg == true) { //if player continues ...
                    location.reload(); //reload page
                }
            } else { 
                sentence = sentences[sentenceNumber]; //move next sentence
                $(targetSentence).text(sentence);
                letterNumber = 0; //start new letter
                letter = sentence.substring(letterNumber, letterNumber + 1);
                $(targetLetter).text(letter);
                highlightPosition = 0; //move highlight to beginning
                $(highlight).css("margin-left", highlightPosition + "px");
                $("#feedback").text("");
            }
        }
    } else {  //if typed key is wrong...   
        let wrong = ("<span>❌</span>"); //display x
        $(wrong).appendTo("#feedback"); //append
        $(highlight).css('background-color', 'red'); //change color to red  
        mistakes++  
    }
});