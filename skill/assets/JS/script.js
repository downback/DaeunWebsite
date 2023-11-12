let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    // hill1.style.top = value * 1 + 'px';
    hill1.style.top = value * 0.5 + 'px';
});

window.addEventListener('scroll', function(){
    
    const webImage1 = document.querySelector('.web_img1');
    const webImage2 = document.querySelector('.web_img2');
    const webImage3 = document.querySelector('.web_img3');
    const webImage4 = document.querySelector('.web_img4');
    
    const boxPosition = webImage1.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;   

    if(boxPosition < screenPosition){
        webImage1.classList.add('rotate1');
        webImage2.classList.add('rotate2');
        webImage3.classList.add('rotate3');
        webImage4.classList.add('rotate4');
    }else{
        webImage1.classList.remove('rotate1');
        webImage2.classList.remove('rotate2');
        webImage3.classList.remove('rotate3');
        webImage4.classList.remove('rotate4');
    }

  });

  window.addEventListener('scroll', function(){
    
    const videoImage1 = document.querySelector('.video_img1');
    const videoImage2 = document.querySelector('.video_img2');
    const videoImage3 = document.querySelector('.video_img3');
    
    const boxPosition = videoImage1.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.7;   
    
    if(boxPosition < screenPosition){
        videoImage1.classList.add('blur1');
        videoImage2.classList.add('blur2');
        videoImage3.classList.add('blur3');
    }else{
        videoImage1.classList.remove('blur1');
        videoImage2.classList.add('blur2');
        videoImage3.classList.add('blur3');
    }
  });

  var cube = document.querySelector('.cube');

cube.addEventListener('click',function(){
  document.body.classList.toggle('turn');
});

