// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}


// Create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var thirdHotel = new Hotel('Water', 80, 50); // New hotel object


// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = thirdHotel.name + ' rooms: '; // Details for the third hotel
details3 += thirdHotel.checkAvailability();
var elHotel3 = document.getElementById('hotel3'); // Get the element for the third hotel
elHotel3.textContent = details3; // Update the HTML content for the third hotel

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/