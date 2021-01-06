$('.spoiler').hide();
$('.spoiler2').hide();
$('.spoilerButton').on('click', function () {
  $('.spoilerButton').slideUp();
  $('.spoiler').slideDown(400);
});
$('.spoilerButton2').on('click', function () {
  $('.spoilerButton2').slideUp();
  $('.spoiler2').slideDown(400);
});
