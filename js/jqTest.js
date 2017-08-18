/* 
  jqTest.js
*/

$(document).ready(function(){
  "use strict";

  var resultList = $("#resultList");
  resultList.text("This is from JQuery");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function () {
      resultList.toggle(500);
      if(toggleButton.text() == "Hide") toggleButton.text("Show");
      else toggleButton.text("Hide");
  });

  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size","18px"); //similar as $("header nav li:first")

})




