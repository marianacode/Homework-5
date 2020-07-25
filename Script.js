// variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour);

// Set attributes
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));


$(document).ready(function () {

    renderPlans();

    $("#currentDay").append();

    function addDate() {
        $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm a"));

    } setInterval(addDate, 1000);


    // Change color 

    for (var i = 0; i <= 12; i++) { 

        var inputHour = $("#" + "Row").attr("data-time");
        var inputHouInt = parseInt(inputHour);

        if (currentHourInt === inputHouInt) { 
            $("#" + i + "Row").addClass("present");   
        }

        if (currentHourInt > inputHouInt) { 
            $("#" + i + "Row").addClass("past");   
        }

        if (currentHourInt < inputHouInt) { 
            $("#" + i + "Row").addClass("future");   
        }


    }

}