import { circle_1, circle_2, circle_3, circle_4, circle_5 } from './main.js';


class SelectionClass {
    
   

    colorSelection(selection){

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



     deSelect(currentSelection){

        switch(currentSelection){

            case 1:
                circle_2.classList.remove('coloredSelection');
                circle_3.classList.remove('coloredSelection');
                circle_4.classList.remove('coloredSelection');
                circle_5.classList.remove('coloredSelection');
                break;
            case 2:
                circle_1.classList.remove('coloredSelection');
                circle_3.classList.remove('coloredSelection');
                circle_4.classList.remove('coloredSelection');
                circle_5.classList.remove('coloredSelection');
                break;
            case 3:
                circle_1.classList.remove('coloredSelection');
                circle_2.classList.remove('coloredSelection');
                circle_4.classList.remove('coloredSelection');
                circle_5.classList.remove('coloredSelection');
                break;
            case 4:
                circle_1.classList.remove('coloredSelection');
                circle_2.classList.remove('coloredSelection');
                circle_3.classList.remove('coloredSelection');
                circle_5.classList.remove('coloredSelection');    
                break;
            case 5:
                circle_1.classList.remove('coloredSelection');
                circle_2.classList.remove('coloredSelection');
                circle_3.classList.remove('coloredSelection');
                circle_4.classList.remove('coloredSelection');  
                break;  
        }
}
}