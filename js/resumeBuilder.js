//Load data from .json files into the html templates in helper.js and then append or prepend to index.html

//Replace the template %data% and/or %contact% with the json data
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role); 

//replace contact and data
var formattedContact = HTMLcontactGeneric.replace('%contact%', bio.name);
formattedContact = formattedContact.replace('%data%', bio.name);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formatedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);


//Header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Header Contacts
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedTwitter);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formatedBlog);
$('#topContacts').append(formattedLocation);

$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);
$("#skills").removeClass("flex-box");

for(var i = 0; i < bio.skills.length; ++i){
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
	$("#skills").append(formattedSkill);
}

var workExperience = $("#workExperience");

for(var j = 0; j < work.jobs.length; ++j){
	var jobid = "job_" + j;

	var formattedWorkStart = HTMLworkStart.replace("jobid", jobid);
	workExperience.append(formattedWorkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[j].employer);
	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[j].title);
	var employertitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[j].dates);
	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[j].location);
	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[j].description);

	var job = $("#"+jobid);
	job.append(employertitle);
	job.append(formattedDates);
	job.append(formattedLocation);
	job.append(formattedDescription);
}

var workProjects = $("#Projects");
var formattedProjectStart = HTMLprojectStart;
workProjects.append(formattedProjectStart);
var projectsStart = $(".project-entry");
for(var k = 0; k < projects.length; ++k){
	
	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects[k].title);
	var formattedProjectDates = HTMLprojectDates.replace('%data%', projects[k].dates);
	var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects[k].description);
	//var formattedProjectImage = HTMLprojectImage.replace('%data%', projects[k].employer);

	projectsStart.append(formattedProjectTitle);
	projectsStart.append(formattedProjectDates);
	projectsStart.append(formattedProjectDescription);
}


var workEducation = $("#Education");

//Footer Contacts
$('#footerContacts').append(formattedMobile);
$('#footerContacts').append(formattedEmail);
$('#footerContacts').append(formattedTwitter);
$('#footerContacts').append(formattedGithub);
$('#footerContacts').append(formatedBlog);
$('#footerContacts').append(formattedLocation);