/*Given the above Object, write a for...in loop 
that will iterate through it and print out the value of 
the property if the property starts with the letter r, or 
if the value of that property is an odd number.  
(This should be in a JS file part2-question16.js)

let stats = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
*/

for(let i in stats){
    if(i[0]==='r'||stats[i]%2===1){
        console.log(stats[i]);
    }
}
