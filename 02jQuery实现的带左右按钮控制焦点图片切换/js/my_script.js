/*
* @Author: Marte
* @Date:   2018-05-21 15:12:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-28 15:24:19
*/

'use strict';
//文档加载就绪
$(function(){
    //1）初始值的获取
    //获取图片宽度
    var sWidth = $("#focus").width();
    // alert(sWidth);
    //获取图片数量
    var len = $("#focus ul li").length;
    // alert(len);
    // 索引号的变量
    var index = 0;//索引号
    //声明定时器
    var picTimer;

    //2）左右按钮的添加，并设置为半透明
        //创建按钮节点
        //调用DOM中追加节点方法
        //设置按钮的css为半透明
    //3）索引条的添加，并设置为半透明
    var btn = "<div class='btnBg'></div><div class='btn'>"

    for(var i=0;i<len;i++){
        btn+="<span></span>";
    }
    btn+="</div><div class='preNext pre'></div><div class='preNext next'>";
    //调用DOM中追加节点方法
    $("#focus").append(btn);
    //设置按钮的css为半透明
    $("#focus .btnBg").css('opacity',0.5);
    $("#focus .preNext").css('opacity',0.3);
    showPic(index);
    //为小按钮添加鼠标滑入事件，以显示相应的内容
    $("#focus .btn span").mouseover(function(){
        index=$(this).index();
        showPic(index);
    });
    //上一页，下一页按钮透明度处理
    $("#focus .preNext").hover(function(){
        $(this).stop(true,false).animate({opacity:0.8},300);
    },function(){
        $(this).fadeTo('slow', 0.3);
    })

    //单击上一页按钮
    $("#focus .pre").click(function(){
        index-=1;
        //index是否为-1，是则index为最后一张图片的索引
        if(index==-1){
            index=len-1;
        }
        showPic(index);
    });
    //单击下一页按钮
    $("#focus .next").click(function(){
        index+=1;
        //index是否为-1，是则index为最后一张图片的索引
        if(index==len){
            index=0;
        }
        showPic(index);
    });
    //图片左右滚动
    //鼠标滑入图片时停止自动播放，滑出时恢复自动播放
    $("#focus").hover(function() {
        /* Stuff to do when the mouse enters the element */
        clearInterval(picTimer);
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        picTimer=setInterval(function(){
            showPic(index);
            index++;//索引号自增
            //判断索引号是否等于图片数量，等于则将索引号归零
            if(index==len)
                index=0;
        },3000);
    }).trigger('mouseleave');
    //显示图片函数，根据接收的index值计算相应显示的图片
    function showPic(index){
        //通过index和轮播图的宽度计算出移动的距离
        var nowLeft = -index*sWidth;
        //使用animate方法让ul滚动到计算出的位置
        $("#focus>ul").stop(true, true).animate({left:nowLeft},300);
        //为当前索引按钮切换到选中的效果
        $("#focus .btn span").stop(true,true).animate({opacity:0.4}, 200).eq(index).stop(true,true).animate({opacity:1}, 200);

    }
});