$(function () {
    $('#meters').click(function () {
        var meterId = 1;
        if (meterId && meterId != '') {
            $.ajax({
                type: "POST",
                url: "/Home/ReturnSpecialJsonIfInvalid",
                data: { ListID: '1', ItemName: 'test' }
            }).done(function (result) {
                $('#divid').html(result);
            });
        }
    });
    $('#jsonid').click(function () {
        var meterId = 1;
        debugger;
        if (meterId && meterId != '') {
            $.ajax({
                type: "GET",
                url: "/Home/ReturnSpecialJson",
                data: { Id: '1' }
            }).done(function (result) {
                $('#divid').html(result);
            });
        }
    });
});

// Data Picker Initialization
$(document).ready(function () {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 3 // Creates a dropdown of 15 years to control year
    });
});