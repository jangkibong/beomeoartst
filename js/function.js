$(function(){
    const $siteMap = $('header>ul.siteMap>li.siteMap-total>a');
    const $totalGnb = $('header>nav.total');
    const $totalMenu = $totalGnb.children('h2');
    const $totalLnb = $('header>nav.total>ul.gnb');
    const $gnb = $('header>nav.head>ul.gnb>li>a');
    const $scrollBtn = $(".visual>p>a");
    const $scrollAni = $(".visual>p>a>span>span");

    const $topBtn = $('.top-button')


    let oldScroll = 0;
    // let nowScrollTop = null;
    // let scrollGap = null;
    // 전체메뉴 보기 버튼
    $siteMap.on('click', function(evt){
        evt.preventDefault();
        // 전체메뉴 버튼 변경
        $(this).parent().toggleClass('on');
        
        
        //전체메뉴 나타내기/없애기
        
        if($(this).parent().hasClass('on') == 0){
            $totalGnb.stop().animate({
                top : "-100%",
                opacity : 0
            });
            $totalMenu.stop().animate({
                top : 80,
                opacity : 0
            });

            $totalLnb.stop().animate({
                top : 200,
                opacity : 0
            });

        }else{

            $totalGnb.stop().show().animate({
                top : 0,
                opacity : 1
            });

            $totalMenu.stop().delay(400).animate({
                top : 120,
                opacity : 1
            });
            
            $totalLnb.stop().delay(600).animate({
                top : 240,
                opacity : 1
            });
        }

    });

    //gnb 에 mouseenter시 lnb 나타내기
    $gnb.parent().on('mouseenter', function(){
        $(this).children('.lnb').show().stop().animate({
            marginLeft : 0,
            opacity : 1
        });
    });

    //gnb 에 mouseleave시 lnb 없애기
    $gnb.parent().on('mouseleave', function(){
            $(this).children('.lnb').stop().animate({
                marginLeft : 50,
                opacity : 0
            }).hide();
    });

    //스크롤 버튼 애니매이션
    $(window).on("load",function(){
        setInterval(function(){
            $scrollAni.stop().animate({
                marginTop: 100
            },1200).animate({
                marginTop : 0
            },0)
        },1300);
    });

    //스크롤 버튼 클릭
    $scrollBtn.on('click',function(evt){
        evt.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 940
        },800);
    });
    

    //스크롤시 요소 이동
    $(window).on('scroll', function(){
        let nowScrollTop = $('html, body').scrollTop();
        console.log('old = ',oldScroll, 'now = ',nowScrollTop);

        //스크롤 시 백그라운드 이미지 이동
        if(nowScrollTop > 300 && nowScrollTop < 1000){
            $('section.cont1>span:nth-of-type(1)').stop().fadeIn(1200).animate({
                marginRight : 0.5*(nowScrollTop - 1200) 
            });
        }
        if(nowScrollTop > 1100 && nowScrollTop < 1800){
            $('section.cont1>span:nth-of-type(2)').stop().fadeIn(1200).animate({
                marginLeft : 0.5*(nowScrollTop - 1200) 
            });
        }

        if(nowScrollTop > 2100 && nowScrollTop < 2400){
            $('section.cont2>article.info>.info-writer').stop().fadeIn(1200).animate({
                marginTop : -0.5*(nowScrollTop - 2000) 
            });
        }

        if(nowScrollTop > 2500 && nowScrollTop < 2800){
            $('section.cont2>article.info>.info-space').stop().fadeIn(1200).animate({
                marginTop : -0.5*(nowScrollTop - 2400) 
            });
        }
        if(nowScrollTop > 3000 && nowScrollTop < 3200){
            $('section.notice').stop().fadeIn(1200).animate({
                marginTop : -0.5*(nowScrollTop - 2900) 
            });
        }

        //헤더 위치 이동
        if($('.siteMap-total').hasClass('on')){//전체메뉴 보기 버튼 클릭시
            $('header').stop().show().animate({
                top : 0
            }).css({backgroundColor : "rgba(0, 0, 0, 0.85)"});

            $('.siteMap').stop().animate({bottom : 0});
            $('header>nav.head').stop().animate({bottom : 0});
        }else{//전체메뉴 보기 닫을시
            //스크롤 다운/업 하면 헤더 숨김/보임
            if(nowScrollTop > oldScroll){$('header').stop().animate({top : -130});
            }else if(nowScrollTop < oldScroll){
                $('header').stop().show().animate({
                    top : -20,
                    opacity : 1
                }).css({backgroundColor : "rgba(0, 0, 0, 0.85)"});
                
                $('.siteMap').stop().animate({bottom : 15});
                $('header>nav.head').stop().animate({bottom : 15});
    
                if(nowScrollTop <= 50){
                    $('header').stop().show().animate({
                        top : 0
                    }).css({backgroundColor : "transparent"});
                    
                    $('.siteMap').stop().animate({bottom : 0});
                    $('header>nav.head').stop().animate({bottom : 0});
                }
            }
        }

        oldScroll = nowScrollTop;

        //프로그램 요소 나타내기
        if(nowScrollTop > 450){
            $('section.cont1>article.pro>ul>li:nth-of-type(1)').delay(0).animate({
                top : 0 ,
                opacity : 1
            });
            $('section.cont1>article.pro>ul>li:nth-of-type(2)').delay(100).animate({
                top : 0 ,
                opacity : 1
            });
            $('section.cont1>article.pro>ul>li:nth-of-type(3)').delay(200).animate({
                top : 0 ,
                opacity : 1
            });
        }

        //공지사항 요소 나타내기
        if(nowScrollTop > 3200){
            $('section.notice>article>ul').animate({
                top : 0,
                opacity : 1
            },600);
        }
    });
    
    //top 버튼 애니매이션
    $topBtn.on('click',function(evt){
        evt.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        },800);
    });

    //패밀리 사이트 보기
    const $familySite = $('footer>div>ul.family-site>li>a');

    $familySite.on('click', function(evt){
        evt.preventDefault();
        $(this).parents('.family-site').toggleClass('on');
    });



});

//팝업
$(function(){
    const $btnPopup = $('section.popup>h2>a');
    const $popupWin = $('section.popup>div.popup-win');
    const $prevPopup = $('section.popup>div.popup-win>ul.popup-win-move_slide>li.prev_popup>a');
    const $nextPopup = $('section.popup>div.popup-win>ul.popup-win-move_slide>li.next_popup>a');
    const $popupSlide = $('section.popup>div.popup-win>ul.popup-win-slide>li');
    const $popupMenu = $('section.popup>div.popup-win>ul.popup-win-menu>li>a');

    let nowPopup = 0;
    let oldPopup = null;
    
    //이전 팝업 페이지 번호
    popupPrev = function(){
        oldPopup = nowPopup;

        if(nowPopup > 0){
            nowPopup --;
        }else{
            nowPopup = 2
        }
    }

    //다음 팝업페이지 번호
    popupNext = function(){
        oldPopup = nowPopup;

        if(nowPopup < 2){
            nowPopup ++;
        }else{
            nowPopup = 0
        }
    }

    //팝업페이지 전환
    popupTrans = function(){
        $popupSlide.eq(nowPopup).stop().fadeIn(600);
        $popupSlide.eq(oldPopup).stop().fadeOut(600);
    }

    //팝업메뉴 활성화
    popupMenuOn = function(){
        $popupMenu.parent().eq(nowPopup).addClass('on').siblings().removeClass('on');
    }

    //팝업 열기/닫기
    $btnPopup.on('click',function(evt){
        evt.preventDefault();

        if($(this).hasClass('on')){
            $(this).removeClass('on').children('span').text('보기');
            $popupWin.stop().animate({left : -500});
            //자동 팝업 전환 중지
            clearInterval(intervalKey);
        }else{
            $(this).addClass('on').children('span').text('닫기');
            $popupWin.stop().animate({left : 25});
            //자동 팝업 전환
            intervalKey = setInterval(function(){
                popupNext();
                popupTrans();
            },5000);
        }
    });
    
    

    //이전 팝업 페이지 보기
    $prevPopup.on('click',function(evt){
        evt.preventDefault();
        
        popupPrev();
        
        popupTrans();
        
        popupMenuOn();
    });
    
    //다음 팝업 페이지 보기
    $nextPopup.on('click',function(evt){
        evt.preventDefault();
        
        popupNext();
        
        popupTrans();
        
        popupMenuOn();
    });
    
    //클릭한 메뉴의 팝업 페이지 보기
    $popupMenu.on('click', function(evt){
        evt.preventDefault();

        oldPopup = nowPopup;
        nowPopup = $popupMenu.index(this);
        $(this).parent().addClass('on').siblings().removeClass('on');

        console.log(nowPopup, oldPopup);

        popupTrans();
    })

    


});

//전시안내 슬라이드
$(function(){
    const $infoSlides = $('.info-slides>ul>li');
    const $next = $('.next>a');
    const $prev = $('.prev>a');

    let nowIdx = 0;
    let oldIdx = null;

    nextPage = function(){
        oldIdx = nowIdx;
        
        if(nowIdx < 5){
            nowIdx ++;
        }else{
            nowIdx = 0;
        }
        
        $infoSlides.eq(oldIdx).fadeOut();
        $infoSlides.eq(nowIdx).fadeIn();
    }

    prevPage = function(){
        oldIdx = nowIdx;
        
        if(nowIdx > 0){
            nowIdx --;
        }else{
            nowIdx = 5;
        }
        
        $infoSlides.eq(oldIdx).fadeOut();
        $infoSlides.eq(nowIdx).fadeIn();
    }


    $next.on('click', function(evt){
        evt.preventDefault();

        nextPage();
    });

    $prev.on('click', function(evt){
        evt.preventDefault();

        prevPage();
    });



});