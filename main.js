let rate = 0;
const circle_1 = document.querySelector('.circle1');
const circle_2 = document.querySelector('.circle2');



function ratePicker(rating){
    rate = rating;
}


function colorSelection(selection){

    switch(selection){
        case 1:
            circle_1.setAttribute('class','coloredSelection');
            break;
    }
}



circle_1.addEventListener('click',function(){
    ratePicker(1);
    colorSelection(1);
});
