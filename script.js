let hoverBlock1 = document.getElementsByClassName('hover-block-1')[0];
let block1 = document.getElementsByClassName('block-1')[0];
block1.addEventListener('hover', function(){
    hoverBlock1.style.display = "flex";
})