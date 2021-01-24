function equalZero(button_id) {
    $(button_id)
    .css({'color':'white', 'background-color':'rgba(0, 59, 0,1)', 'cursor':'pointer'})
    .html("Verder")
    .prop('disabled', false);
};

function belowZero(button_id) {
    $(button_id)
    .css({'color':'white', 'background-color':'rgba(255,0,0, 0.8)', 'cursor':'not-allowed'})
    .html("Oeps!")
    .prop('disabled', true);
};

function notZero(button_id) {
    $(button_id)
    .prop('disabled', true)
    .css({'color':'white', 'background-color':'#362F4B', 'cursor': 'not-allowed'});
}

