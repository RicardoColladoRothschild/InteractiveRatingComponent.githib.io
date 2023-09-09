# InteractiveRatingComponent.githib.io
An interactie rating component, made using JavaScript for interaction with the user. 



## The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Orange: hsl(25, 97%, 53%)

### Neutral

- White: hsl(0, 0%, 100%)
- Light Grey: hsl(217, 12%, 63%)
- Medium Grey: hsl(216, 12%, 54%)
- Dark Blue: hsl(213, 19%, 18%)
- Very Dark Blue: hsl(216, 12%, 8%)



## Typography

### Body Copy

- Font size (paragraph): 15px

### Font

- Family: [Overpass](https://fonts.google.com/specimen/Overpass)
- Weights: 400, 700

## Functionalities Sass

**mixin**
flexCentering();

    This function is help to center an item into the middle of its containing, using a flexbox.
    display:flex | justify-content: center | align-items: center

### Class
* .coloredSelection: This calss is created from the main.js file, when a user click on ones of the numbers, this class is added as a new class to the div that represent the number the user select. Within the mains.scss file, i use "extend" so this class can extend the propieties already apply to a circle, that has not been selected.    

