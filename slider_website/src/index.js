$(document).ready(function() {
    var slider = $('#mySlider');
    var output = $('#sliderValue');
    var JSON_output = JSON.stringify(output)

    output.text(slider.val());

    slider.on('input', function() {
        output.text($(this).val());
    });
});