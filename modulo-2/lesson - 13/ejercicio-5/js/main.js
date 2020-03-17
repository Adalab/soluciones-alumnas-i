'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];

const getEven = pins.filter(pin => pin % 2 === 0);
console.log(getEven);
