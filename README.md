# Touch Friendly Dropdowns

Dependency free plugin which allows dropdown menus to be shown on touch devices. Inspiration taken from [https://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly](https://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly)

## Usage
```javascript
const addElements = doubletaptogo();
addElements('.menu-item-has-children > a'); // valid css selector must be used
```

## Assumptions
This plugin assumes that you have appropricate css styles e.g
```
.menu-item-has-children:hover > ul {
  display: block;
}
```

## Polyfills
* [Element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill)


