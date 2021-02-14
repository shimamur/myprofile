$(function() {
    $('.introduction').hide().fadeIn(3000);
    $('.myname').hide().fadeIn(5000);
    $('.site').hide().fadeIn(6000);


// メニューバー

    $('#btnnav').hide();
    $('.btnmenu').click(function(){
        $('#btnnav').toggle(300);
    });


// 特定の位置までスクロール
$('.menu_top').click(function(){
    $("html,body").animate({ scrollTop: $(".introduction").offset().top });
});

$('.menu_profile').click(function(){
    $("html,body").animate({ scrollTop: $(".profile_section").offset().top });
});

$('.menu_works').click(function(){
    $("html,body").animate({ scrollTop: $(".portfolio_section").offset().top });
});

$('.menu_contact').click(function(){
    $("html,body").animate({ scrollTop: $(".contact_section").offset().top });
});


// フェードイン
    $(window).on('scroll load', function(){
        let scroll_top = $(this).scrollTop();
        let scroll_btm = scroll_top + $(this).height();

        $('.fadein').each( function() {
            let this_pos = $(this).offset().top;
            if ( scroll_btm > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)',
                    transform: 'translateX(0)'
                });
            }
        });
    });


});
