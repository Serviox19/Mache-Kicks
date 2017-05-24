
$(document).ready(function () {
  var clicked;
  $('.color-picker').hide();

  $('a').on('click', function () {
    clicked = this.id;
    console.log(clicked);

    $('.color-picker').show();

    $('#red').on('click', function () {
      if (clicked === 'top') {
        $('#first').css({ 'background-color': 'red' });
      } else if (clicked === 'middle') {
        $('#second').css({ 'background-color': 'red' });
      } else {
        $('#third').css({ 'background-color': 'red' });
      };
    });

    $('#yellow').on('click', function () {
      if (clicked === 'top') {
        $('#first').css({ 'background-color': 'yellow' });
      } else if (clicked === 'middle') {
        $('#second').css({ 'background-color': 'yellow' });
      } else {
        $('#third').css({ 'background-color': 'yellow' });
      };
    });

    $('#purple').on('click', function () {
      if (clicked === 'top') {
        $('#first').css({ 'background-color': '#800080' });
      } else if (clicked === 'middle') {
        $('#second').css({ 'background-color': '#800080' });
      } else {
        $('#third').css({ 'background-color': '#800080' });
      };
    });

    $('#gray').on('click', function () {
      if (clicked === 'top') {
        $('#first').css({ 'background-color': '#A9A9A9' });
      } else if (clicked === 'middle') {
        $('#second').css({ 'background-color': '#A9A9A9' });
      } else {
        $('#third').css({ 'background-color': '#A9A9A9' });
      };
    });

  });

});
