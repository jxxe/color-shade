# color-shade.js
Generate a color shade based on a percentage. Perfect for data visualizations, and only 80 bytes!

```js

getColor( 0.5, [0,0,0], [255,255,255] ); // returns rgb(128,128,128)

```

Need hex? Just add `.toString(16)` inside the map function, join the array with an empty string, and use a `#` instead of `rgb()`.
