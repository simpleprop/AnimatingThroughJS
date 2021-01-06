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
$('.spoiler2').on('click', function () {
  $('.spoiler2').slideUp();
  $('.spoilerButton2').slideDown(400);
});
$('.spoiler').on('click', function () {
  $('.spoiler').slideUp();
  $('.spoilerButton').slideDown(400);
});
