$(document).ready(function(){
    var headclix=0;
    var eyesclix=0;
    var noseclix=0;
    var mouthclix=0;
    lightning_one(4000);
    lightning_two(5000);
    lightning_three(7000);
        // function getRand(x,y){
        //     var my_num=Math.floor(Math.random()*(x-y+1)+y);
        //     return my_num;
        // }
        // var random_0To9=getRand(9,0);
        // alert(random_0To9);

    $("#head").click(function(){
        if(headclix<9){
            $(this).animate({left: "-=367px"},500);
            headclix+=1;
        }else{
            $(this).animate({left: "0px"},500);
            headclix=0;
        }
    });
    $("#eyes").click(function(){
        if(eyesclix<9){
            $(this).animate({left: "-=367px"},500);
            eyesclix+=1;
        }else{
            $(this).animate({left: "0px"},500);
            eyesclix=0;
        }
    });
    $("#nose").click(function(){
        if(noseclix<9){
            $(this).animate({left: "-=367px"},500);
            noseclix+=1;
        }else{
            $(this).animate({left: "0px"},500);
            noseclix=0;
        }
    });
    $("#mouth").click(function(){
        if(mouthclix<9){
            $(this).animate({left: "-=367px"},500);
            mouthclix+=1;
        }else{
            $(this).animate({left: "0px"},500);
            mouthclix=0;
        }
    });
    function lightning_one(t){
        $("#lighting1").fadeIn(250).fadeOut(250);
        clearTimeout(timer);
        var timer = setTimeout(lightning_one, t);
       // alert($("#lighting1").queue().length);
    };
    function lightning_two(t){
        $("#lighting2").fadeIn(250).fadeOut(250);
        setTimeout(lightning_two, t);
    };
    function lightning_three(t){
        $("#lighting3").fadeIn(250).fadeOut(250);
        setTimeout(lightning_three, t);
    };

});
