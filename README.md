# Karousel slider with dots

## Description
Karousel slider with dots. This slider is made as karousel with dots-switchers and add Zero function. Also slider has slide index.

## Customization
### HTML-structure:
```html
<div class="offer__slider">
    <div class="offer__slider-counter">
        <div class="offer__slider-prev">
            <img src="img.svg" alt="prev">
        </div>
        <span id="current">03</span>
        /
        <span id="total">04</span>
        <div class="offer__slider-next">
            <img src="img.svg" alt="next">
        </div>
    </div>
    <div class="offer__slider-wrapper">
        <div class="offer__slider-inner">
            <div class="offer__slide">
                <img src="img.png" alt="img">
            </div>
            <div class="offer__slide">
                <img src="img.png" alt="img">
            </div>
            <div class="offer__slide">
                <img src="img.png" alt="img">
            </div>
            <div class="offer__slide">
                <img src="img.png" alt="img">
            </div>
        </div>
    </div>
</div>
    
```
### CSS-styles:
```css
.offer__slider {
    width: 650px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 100px;
}

.offer__slider-counter {
    display: flex;
    width: 180px;
    align-items: center;
    font-size: 24px;
    color: rgba(0, 0, 0, .5)
}

.offer__slider-wrapper {
    width: 100%;
    margin-top: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, .25);
}

.offer__slider-prev {
    margin-right: 10px;
    cursor: pointer
}

.offer__slider-next {
    margin-left: 10px;
    cursor: pointer
}

.offer__slider #current {
    font-size: 48px;
    font-weight: 700;
    color: #000
}

.offer__slide {
    width: 100%;
    height: 390px;

}

.offer__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.container {
    max-width: 1200px;
    margin: 0 auto
}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
}

.dot {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
}
```

All settings of slider are painted in JavaScript file as comments
