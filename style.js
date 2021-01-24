function equalZero(button_id) {
    $(button_id)
    .css({'color':'white', 'background-color':'tomato', 'cursor':'pointer'})
    .html("Verder")
    .prop('disabled', false);
};

function belowZero(button_id) {
    $(button_id)
    .css({'color':'white', 'background-color':'rgba(255,0,0, 0.8)', 'cursor':'not-allowed'})
    .html("Oeps! Te veel")
    .prop('disabled', true);
};

function notZero(button_id) {
    $(button_id)
    .prop('disabled', true)
    .css({'color':'white', 'background-color':'#362F4B', 'cursor': 'not-allowed'});
}

function printResults() {
    $('.maincontainer').css({'height':'auto'});
    $('.start').slideDown();
    $('.vraag1').slideDown();
    $('.vraag2').slideDown();
    $('.vraag3').slideDown();
    $('.vraag4').slideDown();
    $('.vraag5').slideDown();
    $('.vraag6').slideDown();
    $('.vraag7').slideDown();
    window.print();
}

