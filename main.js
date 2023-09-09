let rate = 0;
const circle_1 = document.querySelector('.circle1');
const circle_2 = document.querySelector('.circle2');
const circle_3 = document.querySelector('.circle3');
const circle_4 = document.querySelector('.circle4');
const circle_5 = document.querySelector('.circle5');



function ratePicker(rating){
    rate = rating;
}


function colorSelection(selection){

    switch(selection){
        case 1:
            circle_1.setAttribute('class','coloredSelection');
            break;
        case 2:    
    }
}



circle_1.addEventListener('click',function(){
    ratePicker(1);
    colorSelection(1);
});
