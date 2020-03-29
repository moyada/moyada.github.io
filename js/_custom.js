// 顶部阅读进度条
$(document).ready(function () {
  console.log('move')
  $(window).scroll(function(){
    $(".top-scroll-bar").attr("style", "width: " + ($(this).scrollTop() / ($(document).height() - $(this).height()) * 100) + "%; display: block;");
  });
});