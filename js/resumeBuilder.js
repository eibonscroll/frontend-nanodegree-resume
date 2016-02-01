/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace('%data%', "Michael Purvis")
var formattedRole = HTMLheaderRole.replace('%data%', "Programmer")
 //$('#main').append('Michael Purvis');
$("#header").append(formattedName);
$("#header").append(formattedRole);
var skills = ["Fullstack", "FrontEnd", "Game Programming", "C++", "JavaScript"];

var bio = {
  name:"Michael Purvis",
  role:"Programmer",
  contact:"mikegpurvis@gmail.com",
  pictureurl:"",
  welcome:"Welcome",
  skills:skills
};

var formattedContact = HTMLemail.replace('%data%', bio.contact);

$('#main').append(formattedContact);
