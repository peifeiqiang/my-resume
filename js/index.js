/**
 * Created by Administrator on 2016/6/26.
 */
//->解决click的300ms延迟
FastClick.attach(document.body);
~function () {
    var winW = document.documentElement.clientWidth;
    if(winW>750){
        document.documentElement.style.fontSize = winW /850 * 100 + "px";
        return
    }
    document.documentElement.style.fontSize = winW /750 * 100 + "px";
}();

//->初始化Swiper
new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    //->向上切换结束:swiper->当前本次初始化new Swiper创建出来的实例
    onSlidePrevEnd: changeEnd,
    //->向下切换结束:swiper.activeIndex当前活动块的索引
    onSlideNextEnd: changeEnd
});

function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            if(n == 0 || n == 5){
                slide.id =  "img5";
                return;
            }
            if(n == 1 || n == 6){
                slide.id =  "img1";
                return;
            }
            if(n == 2){
                slide.id =  "img2";
                return;
            }
            if(n == 3){
                slide.id =  "img3";
                return;
            }
            if(n == 4){
                slide.id =  "img4";
                return;
            }
            //slide.id = (n == 1 || n == 5) ? "img1" : "img3";
            //return;
        }
        slide.id = null;
    });
}

var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();//->让音频播放:浏览器开始下载资源文件,也就是让它播放到出声音还需要一段时间,只有发出声音后我们才会显示音乐的图标
    musicAudio.addEventListener("canplay", function () {
        //->canplay:音频文件已经可以播放了,但是不一定是所有资源都加载完成了,大部分是边播放边界
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    //->当前是暂停状态我让其播放
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    //->当前是播放状态我让其暂停
    musicAudio.pause();
    music.className = "music";
}, false);






















