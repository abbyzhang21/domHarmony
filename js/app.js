/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

// 1. In the nav element, target the span element with the id of "count" and change the number from 0 to 8.
var newCount = document.getElementById('count');
newCount.innerHTML = 8;

// 2. Target the div with the id of 'age' and change the contents to: "21 year old vibrant stud".
var newAge = document.getElementById('age');
newAge.innerHTML = '21 year old vibrant stud';


// 3. Target the span element with the id of "distance" and change the number from 1000 to 168.
var newDistance = document.getElementById('distance');
newDistance.innerHTML = 168;

// 4. Create a paragraph element with the id of "pro2". In this paragraph, add the following content: "My main objective is to find a Mrs. McDonald." Append this element inside of the paragraph element with the id of "profile".
var newPro2 = document.createElement('p');
newPro2.id = 'pro2';
newPro2.innerHTML = 'My main objective is to find a Mrs. McDonald.';
var profileElem = document.getElementById('profile');
profile.appendChild(newPro2);

// 5. Create a span element of the id of "mail" and give it a content of 11. Append this element into the "Messages" li element.
var newMail = document.createElement('span');
newMail.id = 'mail';
newMail.innerHTML = 11;
var x = document.getElementsByClassName('menu');
x[2].appendChild(newMail);
