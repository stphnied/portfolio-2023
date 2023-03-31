(function () {

  // var
  var $imgs = $('.image-work'); //img div
  var $buttons = $('#buttons'); //filter links
  var tagged = {}; //get tags

  // Get images
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


// ALL link
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
        $imgs.fadeIn(200);
      }
    })
);
  
// Filters link
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
          $imgs
            .hide()
            .filter(tagged[tagName])
            .fadeIn("slow");
        }
      })
    );
  });

}());

// let $num =0;
// $('.work-section img').each(function() {
//   $(this).attr('src', 'assets/img/poster_0'+$num.toString()+'.png');
//   $num++
//  });