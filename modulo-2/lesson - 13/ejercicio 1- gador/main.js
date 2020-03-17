const marks = [5, 4, 6, 7, 9];

const inflateMark = mark => mark +1;

const inflatedMarks = marks.map(inflateMark);

console.log(inflatedMarks);