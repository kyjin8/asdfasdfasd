
// 배경 동영상 재생/일시정지
var btn = document.getElementsByClassName('VidControl');
var video = document.getElementsByClassName('HeaderSection-video');
var pause = document.getElementsByClassName('VidControl-inner-pause');
var play = document.getElementsByClassName('VidControl-inner-play');
btn[0].addEventListener('click',function(){
    if(video[0].paused){
        video[0].play();
        pause[0].style.display = 'block';
        play[0].style.display = 'none';
    }else{
        video[0].pause();
        play[0].style.display = 'block';
        pause[0].style.display = 'none';
    }
});

// 최상단 메뉴바 마우스오버-색상, 클릭-토글 모양 변경, 탭(게임, 이스포츠) 열고닫기
var NavbarItem = document.getElementsByClassName('Navbar-item');
var dropdownIcon = document.getElementsByClassName('Navbar-dropdownIcon');
var Navbar_toggle = document.getElementsByClassName('arrow');
var ow_nav = document.getElementsByClassName('ow-SiteNav');
var dropdownMenu = document.getElementsByClassName('Navbar-dropdown');
let degrees = 0;
for(let i = 0; i < NavbarItem.length; i++){
    NavbarItem[i].onmouseenter = function(){
        NavbarItem[i].style.color = '#fff';
        NavbarItem[i].style.textshadow = '0 0 15px #fff, 0 0 30px hsla(0,0%,100%,.3)';
        if(i%3 == 0) dropdownIcon[i/3].style.color = 'gray';
    };
    NavbarItem[i].onmouseleave = function(){
        NavbarItem[i].style.color = 'hsla(0, 0%, 100%, .7)';
        NavbarItem[i].style.textshadow = 'none';
        if(i%3 == 0) dropdownIcon[i/3].style.color = 'hsla(0, 0%, 100%, .3)';
    };
    NavbarItem[i].addEventListener('click', function(){
        if(i%3 === 0){
            //토글 아이콘 180도 회전
            degrees += 180;
            if(degrees%360 === 0){      //360도로 나누어떨어지면 제자리, 아니면 회전
                degrees -= 360;
                dropdownMenu[i/3].setAttribute('class', 'Navbar-dropdown');
                if(i/3 < 2){
                    for(let j = 0; j<ow_nav.length; j++){
                        ow_nav[j].style.display = 'flex';
                    }
                }
            } else{
                dropdownMenu[i/3].setAttribute('class', 'Navbar-dropdown is-open');
                if(i/3 < 2){
                    for(let j = 0; j<ow_nav.length; j++){
                        ow_nav[j].style.display = 'none';
                    }
                }
            }
            Navbar_toggle[i/3].style.transform = `rotate(${degrees}deg)`;
        }
    });
}


// 오버워치 메뉴바 마우스오버-색상 변경
var ow_SiteNavItem = document.getElementsByClassName('ow-SiteNav-item');
for(let i = 0; i < ow_SiteNavItem.length; i++){
    ow_SiteNavItem[i].onmouseenter = function(){
        ow_SiteNavItem[i].style.color = '#f06414';
    }
    ow_SiteNavItem[i].onmouseleave = function(){
        ow_SiteNavItem[i].style.color = '#333';
    }
}

// 오버워치 메뉴바 구매하기 마우스오버-크기 변경
var ow_SiteNavButton = document.getElementsByClassName('ow-SiteNav-button');
for(let i = 0; i < ow_SiteNavButton.length; i++){
    ow_SiteNavButton[i].onmouseenter = function(){
        ow_SiteNavButton[i].style.transform = 'scale(1.1)';
    }
    ow_SiteNavButton[i].onmouseleave = function(){
        ow_SiteNavButton[i].style.transform = 'scale(1)';
    }
}
