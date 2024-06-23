let imgNext=1;
let dotsBox=document.querySelector('.dotsBox').children;
dotsBox=[...dotsBox];
function slider(){
    let mySlides=document.getElementsByClassName('myslides');
    let length=mySlides.length;
    for (let i=0;i<length;i++){
        mySlides[i].style.display='none';
        dotsBox[i].style.backgroundColor='rgba(0, 0, 0, .5)';
    }
    if (length<imgNext){
        imgNext=1;
    }
    if (imgNext<1){
        imgNext=length;
    }
    mySlides.item(imgNext-1).style.display='block';
    dotsBox[imgNext-1].style.backgroundColor='green';
    imgNext++;

}

let next=document.getElementById('next');
let prev=document.getElementById('prev');
next.addEventListener('click',function (){
    slider();
})

prev.addEventListener('click',function (){
    imgNext=imgNext-2;
    slider();
})

slider();


dotsBox.map((elem,index)=>{
    elem.addEventListener('click',function (){
        let b=index;
        imgNext=b+1;
        slider();
    })
})
