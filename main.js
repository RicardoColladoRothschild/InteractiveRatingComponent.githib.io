const circle_1 = document.querySelector('.circle1');
const circle_2 = document.querySelector('.circle2');
const circle_3 = document.querySelector('.circle3');
const circle_4 = document.querySelector('.circle4');
const circle_5 = document.querySelector('.circle5');

const mainContainer = document.querySelector('.main-container');
const btnSubmit = document.querySelector('#btnSubmit');


let rate = 0;
//functions

btnSubmit.addEventListener('click', function (){
    mainContainer.classList.add('lastview-container');
    mainContainer.innerHTML = `
        <div class="image-container--thankView">
            <img src="./img/illustration-thank-you.svg" alt="Thank you image">
        </div>
        <p class="text-container">You selected ${rate} out of 5</p>
        <h2>Thank you!</h2>
        <p class="main-container-lastP">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    `;

});


function ratePicker(rating){
    rate = rating;
    
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
