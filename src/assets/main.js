$(function() {
  var json = {};
  $.ajax({
    url: 'https://www.codeschool.com/users/rittera13.json',
    dataType: 'jsonp',
    success: function(response) {
      json = response;
      $.each(json.courses.completed, function(index, value) {
        $("#completed_courses").append("<div class='course' id='course_" + index + "'>");
        $("#course_" + index).append("<h3>" + value.title + "</h3>");
        $("#course_" + index).append("<img src='" + value.badge + "'/>");
        $("#course_" + index).append("<a class='btn btn-primary' href='" + value.url + "' target='_blank'>See Course</a>");
      });

      $.each(json.badges, function(index, value) {
        $("#badges").append("<div class='course' id='badge_" + index + "'>");
        $("#badge_" + index).append("<h3>" + value.name + "</h3>");
        $("#badge_" + index).append("<img src='" + value.badge + "'/>");
      });
    }
  });
});
