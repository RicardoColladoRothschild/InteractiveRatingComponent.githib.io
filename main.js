let rate = 0;

function ratePicker(rating){
    this.rate = rating;
}

const circle_1 = document.querySelector('.circle1');

circle_1.addEventListener('click',ratePicker(1));
console.log(rate);