var header = $("#header"),
    topContacts = $("#topContacts"),
    workExperience = $("#workExperience");

var placeholder = "%data%";

var work = {

    "jobs" : [
        {
            "employer" : "Productivity Training Corp",
            "title" : "Full Stack Developer / Office Manager",
            "location" : "Morgan Hill, CA, US",
            "dates" : "2008 - Present",
            "description" : "I do awesome stuff here."
        },
        {
            "employer" : "Self-employed",
            "title" : "Freelance Web Developer",
            "location" : "San Jose, CA, US",
            "dates" : "2009 - Present",
            "description" : "Write awesome code."
        }
    ]

};

var projects = {
    "projects" : [
        {
            "title" : "About Me",
            "dates" : "October 2015",
            "description" : "All about Phillip",
            images: ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title" : "Online Portfolio",
            "dates" : "October 2015",
            "description" : "What I've done.",
            images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }
    ]
};

projects.display = function() {

    var activeProject,
        projectEl;

    for( i in this.projects ) {

        $("#projects").append( HTMLprojectStart );

        activeProject = this.projects[i];
        projectEl = $(".project-entry:last");

        projectEl.append( HTMLprojectTitle.replace( placeholder, activeProject.title) );
        projectEl.append( HTMLprojectDates.replace( placeholder, activeProject.dates) );
        projectEl.append( HTMLprojectDescription.replace( placeholder, activeProject.description) );

        if( activeProject.images.length ) {

            for( image in activeProject.images ) {

                projectEl.append( HTMLprojectImage.replace( placeholder, activeProject.images[image]) );

            }

        }

    }

};

projects.display();

var bio = {
    "name" : "Phillip Marashian",
    "role" : "Front-end Developer",
    "welcomeMessage" : "Hello!",
    "skills" : ["Javascript", "Angular", "PHP", "HTML", "CSS", "MySQL"],
    "contacts" : {
        "mobile" : "408-221-5005",
        "email" : "phillip.marashian@gmail.com",
        "github" : "pmarashian",
        "location" : "San Jose"
    },
    "picture" : "images/me.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "Cal Poly, San Luis Obispo",
            "location" : "San Luis Obispo, CA, US",
            "degree" : "Bachelor of Science",
            "major" : ["Physics"],
            "dates" : 2002,
            "url" : "http://www.calpoly.edu/"
        }

    ]
};

education.display = function() {

    var activeSchool,
        schoolEl,
        schoolName,
        schoolDegree;

    if( this.schools.length ) {
        for( i in this.schools ) {

            $("#education").append( HTMLschoolStart );
            schoolEl = $(".education-entry:last");

            activeSchool = this.schools[i];

            schoolName = HTMLschoolName.replace(placeholder, activeSchool.name );
            schoolDegree = HTMLschoolDegree.replace(placeholder, activeSchool.degree);

            schoolEl.append( schoolName + schoolDegree );

            schoolEl.append( HTMLschoolDates.replace(placeholder, activeSchool.dates) );
            schoolEl.append( HTMLschoolMajor.replace(placeholder, activeSchool.major) );
            schoolEl.append( HTMLschoolLocation.replace(placeholder, activeSchool.location) );

        }
    }

};

education.display();

var formattedName = HTMLheaderName.replace( placeholder, bio.name ),
    formattedRole = HTMLheaderRole.replace( placeholder, bio.role ),
    formattedWelcomeMsg = HTMLwelcomeMsg.replace( placeholder, bio.welcomeMessage ),
    formattedBioPic = HTMLbioPic.replace( placeholder, bio.picture );

header.prepend( formattedRole );
header.prepend( formattedName );
header.append( formattedWelcomeMsg );
header.prepend( formattedBioPic );

topContacts.append( HTMLmobile.replace( placeholder, bio.contacts.mobile) );
topContacts.append( HTMLgithub.replace( placeholder, bio.contacts.github) );
topContacts.append( HTMLemail.replace( placeholder, bio.contacts.email) );
topContacts.append( HTMLlocation.replace( placeholder, bio.contacts.location) );

if( bio.skills.length ) {

    header.append( HTMLskillsStart );

    for( var i in bio.skills ) {

        $("#skills").append( HTMLskills.replace( placeholder, bio.skills[i]) );

    }

}

displayWork();

function displayWork() {

    var job,
        jobEmployer,
        jobTitle,
        activeJob,
        jobLocation,
        jobDates,
        jobDescription;

    for( var i in work.jobs ) {

        job = work.jobs[ i ];

        workExperience.append( HTMLworkStart );

        activeJob = $(".work-entry:last");

        jobEmployer = HTMLworkEmployer.replace( placeholder, job.employer );
        jobTitle = HTMLworkTitle.replace( placeholder, job.title );
        jobLocation = HTMLworkLocation.replace( placeholder, job.location );
        jobDates = HTMLworkDates.replace( placeholder, job.dates );
        jobDescription = HTMLworkDescription.replace( placeholder, job.description );

        activeJob.append( jobEmployer + jobTitle );
        activeJob.append( jobLocation );
        activeJob.append( jobDates );
        activeJob.append( jobDescription );

    }

}

$(document).click(function(loc) {

    //logClicks( loc.pageX, loc.pageY );

});

function locationizer( work_obj ) {

    var locations = [];

    for( i in work_obj.jobs ) {

        locations.push( work_obj.jobs[i].location );

    }

    return locations;

}
function inName() {

    var names = bio.name.split(" ");

    names[1] = names[1].toUpperCase();

    var firstLetter = names[0][0].toUpperCase();

    names[0] = firstLetter + names[0].slice(1);

    return names.join(" ");

}

$("#mapDiv").append( googleMap );