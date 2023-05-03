$('#myModal').on('show.bs.modal', function(event) {
    var image = $(event.relatedTarget);
    var imageSource = image.attr("src");
    var modalImage = $("#modalImage");
    modalImage.attr("src", imageSource);
  });