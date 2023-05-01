/*The above program only prints out the time once when executed. 
Modify this code such that the program prints out the time every second. 
 (This should be a JS file - part2-question18.js)

 let d = new Date();
 let time = d.toLocaleTimeString();
 console.log(time);
*/

setInterval(console.log((new Date)).toLocaleTimeString(), 1000)

