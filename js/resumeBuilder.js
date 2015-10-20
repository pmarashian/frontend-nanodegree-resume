var bio,
    work,
    projects,
    education;

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

        var skillDiv,
            header = $("#header"),
            topContacts = $("#topContacts"),
            footerContacts = $("#footerContacts");

        addToPage( header, HTMLheaderRole, this.role, false );
        addToPage( header, HTMLheaderName, this.name, false );
        addToPage( header, HTMLbioPic, this.biopic, true );
        addToPage( header, HTMLwelcomeMsg, this.welcomeMessage, true );

        addToPage( topContacts, HTMLmobile, this.contacts.mobile, true );
        addToPage( topContacts, HTMLgithub, this.contacts.github, true );
        addToPage( topContacts, HTMLemail, this.contacts.email, true );
        addToPage( topContacts, HTMLlocation, this.contacts.location, true );

        addToPage( footerContacts, HTMLmobile, this.contacts.mobile, true );
        addToPage( footerContacts, HTMLgithub, this.contacts.github, true );
        addToPage( footerContacts, HTMLemail, this.contacts.email, true );

        if( this.skills.length ) {

            header.append( HTMLskillsStart );

            skillDiv = $("#skills");

            for( var skill in this.skills ) {

                addToPage( skillDiv, HTMLskills, this.skills[skill], true );

            }

        }

        function addToPage( div, template, data, append ) {

            var formattedText = template.replace( "%data%", data );

            if( append ) {

                div.append( formattedText );

            } else {

                div.prepend( formattedText );

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

        var jobEmployer,
            jobTitle,
            activeJob,
            jobDiv,
            workExperience = $("#workExperience");

        if( this.jobs.length ) {

            for( var job in this.jobs ) {

                workExperience.append( HTMLworkStart );

                jobDiv = $(".work-entry:last");

                activeJob = this.jobs[job];

                // employer and title have split templates that need to be rendered together.
                jobEmployer = renderTemplate( HTMLworkEmployer, activeJob.employer );
                jobTitle = renderTemplate( HTMLworkTitle, activeJob.title );

                addToPage( jobDiv, jobEmployer + jobTitle, "" );
                addToPage( jobDiv, HTMLworkLocation, activeJob.location );
                addToPage( jobDiv, HTMLworkDates, activeJob.dates );
                addToPage( jobDiv, HTMLworkDescription, activeJob.description );

            }

        }

        function renderTemplate( template, data ) {

            return template.replace( "%data%", data );

        }

        function addToPage( div, template, data ) {

            var formattedText = renderTemplate( template, data );

            div.append( formattedText );

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
            projectDiv;

        if( this.projects.length ) {

            for( var project in this.projects ) {

                $("#projects").append( HTMLprojectStart );

                activeProject = this.projects[project];

                projectDiv = $(".project-entry:last");

                addToPage( projectDiv, HTMLprojectTitle, activeProject.title );
                addToPage( projectDiv, HTMLprojectDates, activeProject.dates );
                addToPage( projectDiv, HTMLprojectDescription, activeProject.description );

                if( activeProject.images.length ) {

                    for( var image in activeProject.images ) {

                        addToPage( projectDiv, HTMLprojectImage, activeProject.images[image] );

                    }

                }

            }

        }

        function addToPage( div, template, data ) {

            var formattedText = template.replace( "%data%", data );

            div.append( formattedText );

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
            activeDiv,
            schoolName,
            schoolDegree,
            activeCourse,
            courseTitle,
            courseSchool;

        if( this.schools.length ) {

            for( var school in this.schools ) {

                $("#education").append( HTMLschoolStart );

                activeDiv = $(".education-entry:last");

                activeSchool = this.schools[school];

                schoolName = renderTemplate( HTMLschoolName, activeSchool.name );
                schoolDegree = renderTemplate( HTMLschoolDegree, activeSchool.degree );

                addToPage( activeDiv, schoolName + schoolDegree, "" );
                addToPage( activeDiv, HTMLschoolDates, activeSchool.name );
                addToPage( activeDiv, HTMLschoolMajor, activeSchool.name );
                addToPage( activeDiv, HTMLschoolLocation, activeSchool.location );

            }
        }

        if( this.onlineCourses.length ) {

            $("#education").append( HTMLonlineClasses );

            for( var course in this.onlineCourses ) {

                $("#education").append( HTMLschoolStart );

                activeDiv = $(".education-entry:last");

                activeCourse = this.onlineCourses[course];

                courseTitle = renderTemplate( HTMLonlineTitle, activeCourse.title );
                courseSchool = renderTemplate( HTMLonlineSchool, activeCourse.school );

                addToPage( activeDiv, courseTitle + courseSchool, "" );
                addToPage( activeDiv, HTMLonlineDates, activeCourse.date );
                addToPage( activeDiv, HTMLonlineURL, activeCourse.url );

            }
        }

        function renderTemplate( template, data ) {

            return template.replace( "%data%", data );

        }

        function addToPage( div, template, data ) {

            var formattedText = renderTemplate( template, data );

            div.append( formattedText );

        }

    }
};

education.display();
bio.display();
work.display();
projects.display();

$("#mapDiv").append( googleMap );