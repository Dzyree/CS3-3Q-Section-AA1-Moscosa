const PI = 3.14;
let r = 6.378e6;
let C = 2*PI*r;
let A = (4*PI*(r**2));
let V = (4/3*PI*(r**3));

document.write('The radius of the sphere is ' + r + '.');
document.write('<br><br>');
document.write('The circumference is ' + C + '.');
document.write('<br><br>');
document.write('The surface area is ' + A + '.');
document.write('<br><br>');
document.write('The volume is ' + V + '.');
document.write('<br><br>');


