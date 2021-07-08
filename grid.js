const ss = document.getElementsByClassName('value1');
const rs = document.getElementsByClassName('value2');
ss[0].innerText = +0;
var selected = +ss[0].innerText;
rs[0].innerText = +42;
var remaining = +rs[0].innerText;






const x = document.querySelectorAll('.box');

for(let i = 0; i<x.length;i++){
    x[i].addEventListener('click',(e)=>{
        if(x[i].classList.contains('boxclicked')){
            x[i].classList.remove('boxclicked')
            remaining = remaining+1;
            selected = selected-1;
            rs[0].innerText = remaining;
            ss[0].innerText = selected;

            
        }
        else{
            x[i].classList.add('boxclicked')
            selected = selected+1;
            remaining = remaining-1;
            rs[0].innerText = remaining;
            ss[0].innerText = selected;
        }
    })
}
