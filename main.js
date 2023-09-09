let rate = 0;
const circle_1 = document.querySelector('.circle1');
const circle_2 = document.querySelector('.circle2');
const circle_3 = document.querySelector('.circle3');
const circle_4 = document.querySelector('.circle4');
const circle_5 = document.querySelector('.circle5');





//functions
function colorSelection(selection){

    switch(selection){
        case 1:
            circle_1.classList.add('coloredSelection');
            break;
        case 2:    
            circle_2.classList.add('coloredSelection');
            break;
        case 3:
            circle_3.classList.add('coloredSelection');
            break;
        case 4: 
            circle_4.classList.add('coloredSelection');
            break;        
    
        case 5:
            circle_5.classList.add('coloredSelection');
            break;
        }
}

function deSelect(currentSelection){

        switch(currentSelection){

            case 1:
                circle_2.classList.remove('coloredSelection');
                circle_3.classList.remove('coloredSelection');
                circle_4.classList.remove('coloredSelection');
                circle_5.classList.remove('coloredSelection');
                break;
        }
}

function ratePicker(rating){
    rate = rating;
    deSelect(rate);
    colorSelection(rate);
}

//events
circle_1.addEventListener('click',function(){
    ratePicker(1);
    
});

circle_2.addEventListener('click',function(){
    ratePicker(2);
    
});
