const leftContainer = document.querySelector('.hover_box-left');
const leftBox = document.querySelector('.main_container-left');
const rightContainer = document.querySelector('.hover_box-right');
const rightBox = document.querySelector('.main_container-right');
const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const text1 = document.querySelector('.left1');
const text2 = document.querySelector('.left2');
const text3 = document.querySelector('.left3');
const text4 = document.querySelector('.right1');
const text5 = document.querySelector('.right2');
const text6 = document.querySelector('.right3');
const videoLeft = document.querySelector('.video-left_container');
const videoRight = document.querySelector('.video-right_container');

function hideGroups() {
    leftBox.style.opacity = '0';
    rightBox.style.opacity = '0';
}

hideGroups();

leftContainer.addEventListener('mouseenter',function(){
    leftBox.style.opacity= '1';
    box.classList.add('circle');
    text1.classList.add('text1');
    text2.classList.add('text2');
    text3.classList.add('text3');
    videoLeft.classList.add('videoEffect');
  });

leftContainer.addEventListener('mouseleave',function(){
    leftBox.style.opacity= '0';
    box.classList.remove('circle');
    text1.classList.remove('text1');
    text2.classList.remove('text2');
    text3.classList.remove('text3');
    videoLeft.classList.remove('videoEffect');
  });
  
rightContainer.addEventListener('mouseenter',function(){
    rightBox.style.opacity= '1';
    box2.classList.add('circle');
    text4.classList.add('text4');
    text5.classList.add('text5');
    text6.classList.add('text6');
    videoRight.classList.add('videoEffect');
  });  

rightContainer.addEventListener('mouseleave',function(){
    rightBox.style.opacity= '0';
    box2.classList.remove('circle');
    text4.classList.remove('text4');
    text5.classList.remove('text5');
    text6.classList.remove('text6');
    videoRight.classList.remove('videoEffect');
  });