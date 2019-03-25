  
    $(function(){
        var pic_Dnf=$('#pic_Dnf')
        var ll_Pic_Dnf= $('#ll_Pic_Dnf')
       //鼠标移动到DNF广告时，将当前隐藏，显示下面大广告，并设置ostTx\#gameTop层级变高
       ll_Pic_Dnf.mouseenter(function () {
        $(this).css("opacity",0);
        pic_Dnf.show();
    })
    pic_Dnf.mouseenter(function(){
        ll_Pic_Dnf.css("opacity",0);
        $(this).show();
    })
    pic_Dnf.mouseleave(function(){
        ll_Pic_Dnf.css("opacity",1);
        $(this).hide();
    })
    //鼠标离开大广告时，让当前盒子隐藏，删除之前设置的层级样式，并显示DNF广告
    ll_Pic_Dnf.mouseleave(function () {

        $(this).css("opacity",1);
        pic_Dnf.hide();
    });
    // 排行榜
    $('#gameTop').mouseenter(function(){
        $('#ostRank_').show();
    })
    $('#gameTop').mouseleave(function(){
        $('#ostRank_').hide();
    })
     //所有的游戏名
     //鼠标移动到li下的.rankItem时，排他添加current类名
    $("#rankControl1>.colBody .rankItem").mouseenter(function () {
        //遍历每个li.rankItem并排他设置current类名
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
        })
    });
    $("#rankControl2>.colBody .rankItem").mouseenter(function () {
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
        })
    });
    $("#rankControl3>#colBody1 .rankItem").mouseenter(function () {
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
            //判断#colBody2中的li.rankItem有没有current类名，有就删除
            if ($("#rankControl3>#colBody2 .rankItem").hasClass("current")) {
                $("#rankControl3>#colBody2 .rankItem").removeClass("current");
            };
        });
    });
    $("#rankControl3>#colBody2 .rankItem").mouseenter(function () {
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
            //判断#colBody1中的li.rankItem有没有current类名，有就删除
            if ($("#rankControl3>#colBody1 .rankItem").hasClass("current")) {
                $("#rankControl3>#colBody1 .rankItem").removeClass("current");
            };
        });
    });
     

    })

  
  