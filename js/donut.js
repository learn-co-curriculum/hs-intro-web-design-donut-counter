var guests = parseInt(prompt('How many guests at your party?'));
var donuts = parseInt(prompt('How many donuts are there?'));

//write a conditional to check if there are enough donuts
if (donuts > guests) {
  //alert the user a message telling them the numbers of donuts and guests and if there are enough or not.
  alert('There are '+donuts+' donuts and '+guests+' guests which is plenty for all.');
} else {
  alert('Uh oh! There are '+donuts+' donuts and '+guests+' guests which is not enough!');
}