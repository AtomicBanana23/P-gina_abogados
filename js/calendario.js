    // Inicializar el datepicker
    $('.cl-date').datepicker({
        format: "dd/mm/yyyy",
        daysOfWeekDisabled: "0,6",
        daysOfWeekHighlighted: "1,2,3,4,5",
        todayBtn: "linked"
    });

    $('#save-date-btn').on('click', function() {
        // Obtener el valor del datepicker
        var selectedDate = document.getElementById("datepicker-input").value;
    });
