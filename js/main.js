$(function () {
    $('.inform>span').click(function () {
        $(this).addClass('active').siblings('span').removeClass('active')
        var index = $(this).index()
        console.log($('.scr>div').eq(index))

        $('.scr>div').eq(index).addClass('selected').siblings('div').removeClass('selected')
    })

    //侧边栏特效
    $('.qnav1').mouseenter(function () {
        var index = $(this).index()
        //图标动画
        $('.qnavr').eq(index).animate({
            top: '0', opacity: '0'
        }, 500)
        //a标签文字动画
        $('.qnav1>a').eq(index).animate({
            top: '40px'
        }, 500)
    })
    $('.qnav1').mouseleave(function () {
        var index = $(this).index()
        $('.qnavr').eq(index).animate({
            top: '15px', opacity: '1'
        }, 500)
        //a标签文字动画
        $('.qnav1>a').eq(index).animate({
            top: '67px'
        }, 500)
    })
    $('.erwei>.tabHd').children().click(function () {
        var index = $(this).index()
        // console.log(index)
        $('.erwei>.tabBd').children().eq(index).addClass('selected').siblings().removeClass('selected')
    })
    $('.partnerlist').find('li').css('opacity', 0.5)
    $('.partnerlist>li').mouseenter(function () {
        $(this).css('opacity', 1).siblings().css('opacity', 0.5)

    })
    $('.partnerlist>li').mouseleave(function () {
        $(this).css('opacity', 0.5)

    })
    //下划线动画
    function tab(headline,lineation,content){
        $(headline).find('li').click(function () {
            var index = $(this).index()
            $(this).children([0]).addClass('activeNews').parent().siblings().children([0]).removeClass('activeNews')
            $(lineation).animate({
                left: index * 60
            }, 50)
            $(content).animate({
                left: -index * 382
            })
        })
    }
    console.log($('#newBox-header1>ul').find('li'))
    tab('.newBox-header>ul','.activeline','.newsBody');
    tab('#newBox-header1>ul','#activeline1','#newsBody1');
    tab('#newBox-header2>ul','#activeline2','#newsBody2');
    //终极tab栏
    $('.pro-tab-ul li').click(function () {
        //获取点击的那个下标
        var bit = $(this).index()


        //获取所有图（div）
        var desrights = document.getElementsByClassName('des-right')
        //遍历所有图 对应li的下标
        for (var i = 0; i < desrights.length; i++) {
            //将全部图片移出
            desrights[i].style.right = '-265px'
        }
        //获取所有文字
        var deslefts = document.getElementsByClassName('des-left')
        //遍历
        for(var j=0;j<deslefts.length;j++){
            //全部溢出
            deslefts[j].style.left='-200px'
        }
        //将页面加载的第一个图 移除current类 想到于移到外面
        $('.des-right').removeClass('current')
        //移除特殊current1
        $('.des-left').removeClass('current1')
        //再以动画的方式 回到视野中
        $(desrights[bit]).animate({
            'right': '-65px'
        }, 300)
        $(deslefts[bit]).animate({
            'left':'0px'
        },300)
    })



    //轮播图

    /*$('#official1>li').mouseenter(function () {
        /!*console.log($(this).index())*!/
        var index = $(this).index()
        $('#official>li').eq(index).animate({
            'left':'-800px'
        },300)

    })*/
    //图

    $('.screen').mouseenter(function () {
        clearInterval(timerId);
    });
    $('.screen').mouseleave(function () {
        timerId= setInterval(fu,2000);
    });




    var ul = document.querySelector('#official')
    console.log(ul)
    //下标
    var ol = document.querySelector('#official1')
    var getLi=ul.children[0];
    var cloneLi=getLi.cloneNode(true)
    ul.appendChild(cloneLi)
    var imgWidth = ul.children[0].offsetWidth
    console.log(imgWidth)
    var num = ul.children.length;
    console.log(num)
    // console.log(imgWidth)

    for(var i=0;i<ol.children.length;i++){
        var li = ol.children[i]
        //第一个默认显示
        ol.children[0].className = 'current2'
        //自定义下标
        li.tag = i
        li.onclick = function () {
            //每次点击清除current样式
            for(var j = 0;j<num-1;j++){
                var li = ol.children[j]
                li.className=''
            }
            this.className = 'current2'
            // console.log(this.tag);
            animate(ul,-this.tag*imgWidth)
        }

    }
    var olIndex=0;

    var timerId= setInterval(fu,2000)
    function  fu() {
        // console.log(olIndex)
        olIndex++;
        if (olIndex===num) {
            // for (var i=0; i<ol.children.length;i++) {
            //     ol.children[i].className='';
            // }

            ul.style.left='0px';
            olIndex=1;

        }
        if (olIndex<num-1){
            ol.children[olIndex].click();
        }else {
            timeFor();
            animate(ul,-olIndex*imgWidth)

        }
    }
    function timeFor() {
        for (var i=0; i<ol.children.length;i++) {
            ol.children[i].className='';
        }

        ol.children[0].className = 'current2'
    }

    //cooperation

    var ul1 = document.querySelector('#cooperation')
    var ol1 = document.querySelector('#cooperation1')
    for(var k=0;k<ol1.children.length;k++){
        var li = ol1.children[k]
        //第一个默认显示
        ol1.children[0].className = 'current2'
        //自定义下标
        li.tag = k
        li.onclick = function () {
            //每次点击清除current样式
            for(var l = 0;l<ol1.children.length;l++){
                var li = ol1.children[l]
                li.className=''
            }
            this.className = 'current2'
            // console.log(this.tag);
            animate(ul1,-this.tag*imgWidth)
        }

    }



        // console.log($('#sfqlp').find('li').children())
        $('#sfqlp').find('li').eq(0).css('width','459px')
//
        $('#sfqlp').find('li').click(function () {

            $(this).siblings('li').stop().animate({
                'width':'68px'
            },500)

            $(this).stop().animate({
                'width':'459px'
            },500)
            // console.log($(this).index())
            // $(this).index()

        })



    // function oper() {
    //     console.log(333)
    //     $(this).siblings('li').stop().animate({
    //         'width':'68px'
    //     },500)
    //
    //     $(this).stop().animate({
    //         'width':'459px'
    //     },500)
    // }
    // var ul = document.getElementById('sfqlp')
    // var li = ul.children
    // for (var i = 0;i<li.length;i++){
    //     var lis = li[i]
    //     console.log(li.length)
    //     lis.onclick = function (){
    //         //执行一次  过2秒结束 才能点击
    //         // li.onclick = null;
    //         clearTimeout(timer);
    //         console.log(5555)
    //         var timer = setTimeout(function(){
    //             li.onclick = oper;
    //         },2000);
    //     }
    // }

    //icon动画
    $(function () {
        $('.bigIcon>ul>li').mouseenter(function () {
            // console.log($(this).index())

            //消失
            var index = $(this).index()
            $('.iconfont').eq(index+1).animate({
                top : 0,opacity : 0
            },500)

            //上移
            $('.clear>p').eq(index).animate({
                bottom: '38px'
            },500)

        })

        $('.bigIcon>ul>li').mouseleave(function () {
            // console.log($(this).index())

            //消失
            var index = $(this).index()
            $('.iconfont').eq(index+1).animate({
                top : '25px',opacity : 1
            },500)

            //上移
            $('.clear>p').eq(index).animate({
                bottom: 0
            },500)

        })


    })
    //图片特效

    $(function () {
        $('.show-news-bottom').find('li').mouseenter(function () {
            // console.log($(this).index())
            $(this).css('opacity','1').siblings().css('opacity','0.5')
        })
        $('.show-news-bottom').find('li').mouseleave(function () {
            // console.log($(this).index())
            $('.show-news-bottom').find('li').css('opacity','1')
        })
    })



})
