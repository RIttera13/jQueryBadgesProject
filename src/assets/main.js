$(function() {
  var json = [];
  $.ajax({
    url: 'https://www.codeschool.com/users/rittera13.json',
    dataType: 'jsonp',
    success: function(response) {
      json = response;
      $.each(json.courses.completed, function(index, value) {
        $("#badges").append(
          "<div class='course'><h3>" + value.title + "</h3><img src='" + value.badge + "'/><a class='btn btn-primary' href='" + value.url + "' target='_blank' >See Course</a>'</div>" );
      });
    }
  });

});
