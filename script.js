'use strict';

const slides = document.querySelectorAll('.offer__slide'), // Gain all of slides
      prev = document.querySelector('.offer__slider-prev'), // Previous button
      next = document.querySelector('.offer__slider-next'), // Next button
      total = document.querySelector('#total'), // Total of slides
      current = document.querySelector('#current'), // Current slide
      slidesWrapper = document.querySelector('.offer__slider-wrapper'), // Gain slides wrapper
      slidesField = document.querySelector('.offer__slider-inner'), // Gain slides wrap-wheel 
      width = window.getComputedStyle(slidesWrapper).width, // Width of slides window 
      slider = document.querySelector('.offer__slider'); // Gain all of slider with buttons

let slideIndex = 1;
let offset = 0; 

function recordNumber(slides, current, slideIndex) { // Writes number zero if slides length less than 10
    if (slides.length < 10) { 
        current.textContent = `0${slideIndex}`; 
    } else { 
        current.textContent = slideIndex; 
    }
}

function setActiveDot(arr, slideIndex) { // Adds activity style on dots
    arr.forEach(dot => dot.style.opacity = '.5'); 
    arr[slideIndex - 1].style.opacity = 1;  
}

function replacePX(str) { // Removes all not a number in string
    return +str.replace(/\D/g, ''); 
}

if (slides.length < 10) { // Writes number zero if current slide less than 10
    total.textContent = `0${slides.length}`; 
    current.textContent = `0${slideIndex}`; 
} else { 
    total.textContent = slides.length; 
    current.textContent = slideIndex; 
}

slidesField.style.width = 100 * (slides.length) + '%'; // Sets wheel width equal total of slide * 100 in %
slidesField.style.display = 'flex'; // Sets 'display:flex' for horizontal display
slidesField.style.transition = '0.5s all'; // Smooth transition

slidesWrapper.style.overflow = 'hidden'; // Limit display to one slide

slides.forEach(slide => { // Loop through the slides and set the width of each slide to the same size as the show window
    slide.style.width = width; 
});

slider.style.position = 'relative'; // Sets 'position: relative' for dots

const dots = document.createElement('ol'); // Creates block of dots across 'ol'

   let dotsArr = []; 



dots.classList.add('carousel-indicators'); // Adds style class
slider.append(dots); // Adds dots to end of slider

for (let i = 0; i < slides.length; i++) { 
    const dot = document.createElement('li'); // Creates dot
    dot.setAttribute('data-slide-to', i + 1); // Adds to dots data-attribute
    dot.classList.add('dot');
    if (i == 0) {
        dot.style.opacity = 1; 
    }
    dots.append(dot); 
    dotsArr.push(dot); 
}

next.addEventListener('click', () => { // Adds listener to 'next' button
    if (offset == replacePX(width) * (slides.length - 1)) { // If the padding is equal to the width multiplied by the number of slides - 1
        offset = 0; // Returns back in zero position
    } else {
        offset += replacePX(width); // Add an offset equal to the viewport
    }
    slidesField.style.transform = `translateX(-${offset}px)`; // When clicked, moves the wheel to the left by offset px

    if(slideIndex == slides.length) { // If 'slideIndex' reached the end
        slideIndex = 1; // Adds start value
    } else {
        slideIndex++; // Else slideIndex gains + 1
    }

    recordNumber(slides, current, slideIndex);

    setActiveDot(dotsArr, slideIndex);
});

prev.addEventListener('click', () => { //  Adds listener to 'prev' button
    if (offset === 0) { // If the slide the first
        offset = replacePX(width) * (slides.length - 1); // Padding equals the width multiplied by the number of slides - 1
    } else {
        offset -= replacePX(width); // Shifts the wheel equals viewport
    }
    slidesField.style.transform = `translateX(-${offset}px)`; // When clicked, moves the wheel to the left by offset px

    if (slideIndex == 1) { // When 'slideIndex' equal 1
        slideIndex = slides.length; // Moves to the end
    } else {
        slideIndex--; // Else 'slideIndex' gains - 1
    }

    recordNumber(slides, current, slideIndex);

    setActiveDot(dotsArr, slideIndex);
});

dotsArr.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to'); // Gains every buttons and sets the number of the data attribute

        slideIndex = slideTo;  
        offset = replacePX(width) * (slideTo - 1); // The padding is equal to the width multiplied by the number of the resulting variable - 1
    
        slidesField.style.transform = `translateX(-${offset}px)`; // When clicked, moves the wheel to the left by offset px
        
        recordNumber(slides, current, slideIndex);
        setActiveDot(dotsArr, slideIndex);
    });
});
