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
