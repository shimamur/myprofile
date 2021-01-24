$(function() {
    $('.introduction').hide().fadeIn(3000);
    $('.myname').hide().fadeIn(5000);
    $('.site').hide().fadeIn(6000);
  });

$('#xday').hover(
  function() {
    $('#fire').css('opacity', 1);
    $('#xday').css('opacity', 0.9);
    $('#fire').addClass('shake');
    $('#xday').addClass('angry');

  },function() {
    $('#fire').css('opacity', 0);
    $('#xday').css('opacity', 1);
    $('#fire').removeClass('shake');
    $('#xday').removeClass('angry');
}
);

// メニューバー
$(function(){
    $('nav').hide();
    $('.menubtn').click(function(){
        $('nav').toggle(300);
    });
});

// 特定の位置までスクロール
$('.menu_top').click(function () {
    $("html,body").animate({ scrollTop: $(".introduction").offset().top });
    $("nav").hide(200);
});

$('.menu_profile').click(function () {
    $("html,body").animate({ scrollTop: $(".profile_section").offset().top });
    $("nav").hide(200);
});

$('.menu_works').click(function () {
    $("html,body").animate({ scrollTop: $(".portfolio_section").offset().top });
    $("nav").hide(200);
});

$('.menu_contact').click(function () {
    $("html,body").animate({ scrollTop: $(".contact_section").offset().top });
    $("nav").hide(200);
});