var bio,
    work,
    projects,
    education,
    placeholder = "%data%";

function renderTemplate( template, data ) {

    return template.replace( placeholder, data );

}

function addToPage( div, template, data, append ) {

    var formattedText = renderTemplate( template, data );

    if( append ) {

        div.append( formattedText );

    } else {

        div.prepend( formattedText );

    }

}

bio = {
    "name" : "Fruamros Gloryem",
    "role" : "Web Developer",
    "welcomeMessage" : "Hello! Thank you for visiting my resume. I know I can make your next amazing app!",
    "skills" : ["HTML", "CSS", "javascript"],
    "contacts" : {
        "mobile" : "408-123-9187",
        "email" : "fruamros.gloryem@gmail.com",
        "github" : "fglorygem",
        "twitter" : "@fgloryem",
        "location" : "San Jose, CA"
    },
    "biopic" : "images/me.jpg",
    "display" : function() {

        var header = $("#header"),
            topContacts = $("#topContacts");

        addToPage( header, HTMLheaderRole, bio.role, false );
        addToPage( header, HTMLheaderName, bio.name, false );
        addToPage( header, HTMLwelcomeMsg, bio.welcomeMessage, true );
        addToPage( header, HTMLbioPic, bio.biopic, true );

        addToPage( topContacts, HTMLmobile, bio.contacts.mobile, true );
        addToPage( topContacts, HTMLgithub, bio.contacts.github, true );
        addToPage( topContacts, HTMLemail, bio.contacts.email, true );
        addToPage( topContacts, HTMLlocation, bio.contacts.location, true );

        if( bio.skills.length ) {

            header.append( HTMLskillsStart );

            var skillDiv = $("#skills");

            for( var skill in bio.skills ) {

                addToPage( skillDiv, HTMLskills, bio.skills[skill], true );

            }

        }

    }
};

work = {
    "jobs" : [
        {
            "employer" : "Magical Creatures Staffing",
            "title" : "Temp Position: Kitchen Gnome",
            "location" : "San Jose, CA, US",
            "dates" : "2013 - Present",
            "description" : "Responsible for timely switching of kitchen light. Awarded employee of the month twice for exceptional performance and reducing kitchen light energy usage by 12%. Looking for new employment as hours for this position vary greatly."
        },
        {
            "employer" : "Innocent Mischievousness",
            "title" : "Dryer Elf",
            "location" : "Brooklyn, IA, US",
            "dates" : "2010 - 2013",
            "description" : "Snatched socks from public laundromats. Responsible for 5 facilities. Beat company record of 4 single socks from one load."
        }
    ],
    "display" : function() {

        var workExperience,
            jobEmployer,
            jobTitle,
            activeJob,
            jobDiv;

        if( work.jobs.length ) {

            workExperience = $("#workExperience");

            for( var job in work.jobs ) {

                workExperience.append( HTMLworkStart );

                jobDiv = $(".work-entry:last");

                activeJob = work.jobs[ job ];

                // employer and title have split templates that need to be rendered together.
                jobEmployer = renderTemplate( HTMLworkEmployer, activeJob.employer );
                jobTitle = renderTemplate( HTMLworkTitle, activeJob.title );

                addToPage( jobDiv, jobEmployer + jobTitle, "", true );
                addToPage( jobDiv, HTMLworkLocation, activeJob.location, true );
                addToPage( jobDiv, HTMLworkDates, activeJob.dates, true );
                addToPage( jobDiv, HTMLworkDescription, activeJob.description, true );

            }

        }

    }

};

projects = {
    "projects" : [
        {
            "title" : "Public Chalk Art",
            "dates" : "October 2014",
            "description" : "Drew artwork on public sidewalks.",
            images: ["images/197x148.gif", "images/197x148.gif"]
        }
    ],
    "display" : function() {

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

    }
};

education = {
    "schools" : [
        {
            "name" : "Hogwarts School of Witchcraft and Wizardry, Extension Program",
            "location" : "Scotland, United Kingdom",
            "degree" : "Bachelor of Magic",
            "major" : ["Potions and Brews"],
            "dates" : 2009,
            "url" : "http://www.hogwartsishere.com/"
        },
        {
            "name" : "Magic & Mystery School",
            "location" : "Las Vegas, NV, US",
            "degree" : "Associate Degree",
            "major" : ["Magic Tricks"],
            "dates" : 2008,
            "url" : "http://www.magicalwisdom.com/"
        }

    ],
    "onlineCourses" : [
        {
            "title" : "How Kitchen Lights Work",
            "school" : "Kitchen Lights Unlimited",
            "date" : 2013,
            "url" : "http://www.kitchenlightsunlimited.com"
        }
    ],
    "display" : function() {

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

    }
};

education.display();
bio.display();
work.display();
projects.display();

$("#mapDiv").append( googleMap );