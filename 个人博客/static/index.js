$(function() {

    /* 检测滚动距离 */
    $(window).scroll(function() {
     
        /* 获取滚动距离 */
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                            document.body.scrollTop;

        /* 如果滚动超过50，设置header fixed */
        if(scrollTop > 50){
            $(".header-top").addClass("header-top-collapse");
        }else{
            $(".header-top").removeClass("header-top-collapse");
        }
    });

    /* 头部点击滑动 */
    $('.header-top-right-child').click(function(event){

        /* 阻止默认行为 */
        event.preventDefault();
        let href = $(this).attr('href');

        /* 检测跳转到的元素是否存在 */
        if($(`.${href}`).length > 0){
            $('html, body').stop().animate({
                /* scrolltop动画，跳转到对应元素的最顶端 */
                scrollTop: $(`.${href}`).offset().top
            }, 500,'linear');
        }

        
    })
})