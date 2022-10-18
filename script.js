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
//console.log(workDayHours);
var $currentDay = $("#currentDay");
var $container = $(".container");
var currentHour = moment().hour();
//where note goes in
var $task = $(".description");
//target the div that holds the time block hour
var $timeBlockHour = $("col-1 hour");
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
    })
    .appendTo($container);

  var $timeBlockHour = $("<div>")
    .addClass("col-1 hour")
    .text(workDayHours[i])
    .attr({
      id: i + 9,
    })
    .appendTo(timeBlockRow);

  var $timeBlockCenterSpace = $("<div>")
    .addClass("col-10")
    .attr({
      id: "time-block-" + (i + 9),
    })
    .appendTo(timeBlockRow);

  var $userInput = $("<p>")
    .addClass("description")
    .text(" ")
    .attr({
      id: "Hour-" + (i + 9),
    })
    .appendTo($timeBlockCenterSpace);
  //******description part not working?*******
  //save button
  var $saveBtn = $("<button>")
    .addClass("col-1 saveBtn")
    .attr({
      id: "save-button-" + (i + 9),
      type: "button",
    })
    .click(function () {
      var hour = $(this).siblings().first().text();
      var $task = $(this).siblings().last().text();
      //save
      saveTask(hour, $task);
    })
    .appendTo(timeBlockRow);
  var saveIcon = $("<i>").addClass("fas fa-save").appendTo($saveBtn);

  //check time
  auditTimeBlock($timeBlockCenterSpace);
}
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
function auditTimeBlock($timeBlockCenterSpace) {
  var currentTimeBlockHour = moment($timeBlockHour.text(), "hA").hour();

  //add colors on the blocks
  if (currentTimeBlockHour > currentHour) {
    $timeBlockCenterSpace.addClass("future");
  } else if (currentTimeBlockHour === currentHour) {
    $timeBlockCenterSpace.addClass("present");
  } else {
    $timeBlockCenterSpace.addClass("past");
  }
}

//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
function loadTask() {
  for (var i = 0; i < workDayHours.length; i++) {
    var $task = localStorage.getItem(workDayHours[i]);

    if ($task) {
      $("#" + (i + 9))
        .siblings()
        .first()
        .children()
        .text($task);
    }
  }
}
//saving
function saveTask(hour, $task) {
  localStorage.setItem(hour, $task);
}
//WHEN I refresh the page
//THEN the saved events persist
loadTask();
