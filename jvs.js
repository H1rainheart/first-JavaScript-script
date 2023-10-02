

/*
function commission(hour,dollar){
 console.log(hour * dollar);
}
commission(2,50);


const commission = (hour, dollar) => {
  return salary = hour * dollar;
}
console.log(commission(3,50));


void function printHello(){
	console.log("Hello Master!");
}();

const commission = (hour, dollar) => hour * dollar;
	console.log(commission(2,50))	;

let date = 2023;
function age(){
 if(date==2023){
 	console.log('Happy birthday!');
 }else{
 	console.log('Not bday!')
 }
}age(); 



function addAge(newAge){
	newAge.push(26);
}
addAge(ages);
console.log('Updated ages: '+ ages);

*/

const members = ['Rain','Enan','Arniel','Jojo','Grace','Nene', 'Maricar', 'Ace', 'Joseph'];
const salary = [4, 5.5, 4, 3, 3.5, 4.5, 3, 4, 2.8];
let totalMembers = members.length;
let randommember = Math.floor(Math.random() * totalMembers);
let randomMemberRemoved = members.indexOf(randommember);
console.log('The random number is: ' +randommember+ ' ,so the member that will be removed is: '+ members[randommember]);
console.log(`Members total is: ` + totalMembers);
console.log(`Members: ${members}` );
console.log('Specify member: ' + members[0]);
console.log(`Member's salary: ${salary}` );

function addMember(newMember){
   newMember.push('Glenson');
}
addMember(members);
console.log('Updated members: '+ members);


/*
function removeMember(newRemove) {
	newRemove.pop(randommember);
}
removeMember(members);
console.log(`Removed member: ${randommember}`);
console.log(members);
*/

function removeMember(newRemove) {
	newRemove.shift();
}
removeMember(members);
console.log('New updated members: '+ members);