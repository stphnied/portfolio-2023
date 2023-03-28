(function () {

  var $imgs = $('.image-work');
  var $buttons = $('#buttons');
  var tagged = {};

  $imgs.each(function () {
    var img = this;
    var tags = $(this).data('tags');

    if (tags) {
      tags.split(',').forEach(function (tagName) {
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(img);
      });
    }
  });


// All button
  $('<li/>').appendTo($buttons).append(
    $('<a/>', {
      text: ' All',
      class: 'active',
      click: function () {
        $(`#buttons li a`).removeClass('active');
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $imgs.show();
        console.log(this);
      }
    })
);
  
// All the other sections
  $.each(tagged, function (tagName) {
    $('<li/>').appendTo($buttons).append(
      $('<a/>', {
        text: tagName,
        click: function () {
          $(`#buttons li a`).removeClass('active');
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            console.log(this);
          $imgs
            .hide()
            .filter(tagged[tagName])
            .show();
          
        }
      })
    );
  });

}());