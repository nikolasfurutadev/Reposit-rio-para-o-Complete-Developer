const original = [1,2,3];
const copy = [...original];

copy[0] = "one";
copy[1] = "two";
copy[2] = "three";

console.log(`original: ${original}
    copy: ${copy}`);