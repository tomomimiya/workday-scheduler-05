var $currentDay = $("#currentDay");
var $container = $(".container");
var currentHour = moment().hour();
//where note goes in
var task = $(".description");

var workDayHours = [
  moment().hour(9).format("hA"),
  moment().hour(10).format("hA"),
  moment().hour(11).format("hA"),
  moment().hour(12).format("hA"),
  moment().hour(13).format("hA"),
  moment().hour(14).format("hA"),
  moment().hour(15).format("hA"),
  moment().hour(16).format("hA"),
  moment().hour(17).format("hA"),
];
//target the div that holds the time block hour
var timeBlockHour = $("col-1 hour");
var currentDay = moment().format("MMMM Do YYYY");

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
$currentDay.text(currentDay);

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
for (var i = 0; i < workDayHours.length; i++) {
  var timeBlockRow = $("<div>")
    .addClass("row time-block")
    .attr({
      id: "row-" + (i + 9),
    });

  var timeBlockHour = $("<div>")
    .addClass("col-1 hour")
    .text(workDayHours[i])
    .attr({
      id: i + 9,
    });

  var timeBlockCenterSpace = $("<div>")
    .addClass("col-10")
    .attr({
      id: "time-block-" + (i + 9),
    });

  var userInput = $("<p>")
    .addClass("description")
    .text(" ")
    .attr({
      id: "Hour-" + (i + 9),
    });
}
