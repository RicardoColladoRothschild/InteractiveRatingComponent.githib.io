const circle_1 = document.querySelector('.circle1');
const circle_2 = document.querySelector('.circle2');
const circle_3 = document.querySelector('.circle3');
const circle_4 = document.querySelector('.circle4');
const circle_5 = document.querySelector('.circle5');




let rate = 0;
//functions




function ratePicker(rating){
    rate = rating;
    /*
    deSelect(rate);
    colorSelection(rate);*/
    let selection = new SelectionClass(rate);
    selection.colorSelection(rate);
    selection.deSelect(rate);
}

//events
circle_1.addEventListener('click',function(){
    ratePicker(1);
    
});

circle_2.addEventListener('click',function(){
    ratePicker(2);
    
});

circle_3.addEventListener('click',function(){
    ratePicker(3);
    
});

circle_4.addEventListener('click',function(){
    ratePicker(4);
    
});

circle_5.addEventListener('click',function(){
    ratePicker(5);
    
});
