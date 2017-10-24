var bio = {
    "name": "Shana Hagood",
    "role": "Web Development Student",
    "contacts": {
        "mobile": "408-799-xxxx",
        "email": "realstarterv@gmail.com",
        "linkedin": "https://www.linkedin.com/in/shana-hagood/",
        "github": "shanahagood",
        "twitter": "https://twitter.com",
        "location": "San Jose"
    },
    "welcomeMessage": "Thanks for visiting!",
    "skills": ["HTML", "CSS", "Python", "Ruby", "JS"],
    "biopic": "images/me.jpg"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    $("#topContacts, #footerContacts").append(formattedLinkedin);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

};

var education = {
    "schools": [{
            "name": "Dev Bootcamp",
            "location": "San Francisco, CA, USA",
            "degree": "N/A",
            "dates": " 2016 ",
            "majors": ["Web Development"]
        },
        {
            "name": "West Valley Community College",
            "location": "Saratoga, CA, USA",
            "degree": "N/A",
            "dates": "2005 - 2013",
            "majors": ["Undecided"]
        }
    ],
    "onlineCourses": [{
            "title": "Intro to Programming",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com/"
        },
        {
            "title": "Intro to Ruby",
            "school": "CodeCademy",
            "dates": "2016",
            "url": "http://www.Codecademy.com/"
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses.title);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses.dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourses.url);
        $(".education-entry:last").append(formattedOnlineURL);

    });
};

var work = {
    "jobs": [{
            "employer": "Akorbi",
            "title": "Lobby Ambassador",
            "dates": "2017-2017",
            "location": "San Jose, CA, USA",
            "description": "Front desk receptionist."
        },
        {
            "employer": "Bon Appetit",
            "title": "Front of House",
            "dates": "2015-2016",
            "location": "Mountain View, CA, USA",
            "description": "Food and beverage prep, stocking, cleaning."
        },
        {
            "employer": "FedEx",
            "title": "Handler",
            "dates": "2010-2014",
            "location": "Sunnyvale, CA, USA",
            "description": "Scanning and sorting freight for on time delivery."
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmpTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmpTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

        var formattedlocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedlocation);

    });
};

var projects = {
    "projects": [{
            "title": "Make a Web Page",
            "dates": "2017",
            "description": "Built using HTML and CSS, this project demonstrates knowledge of basic website design.",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        },
        {
            "title": "Code Your Own Quiz",
            "dates": "2017",
            "description": 
            "Built a fill-in-the blanks type quiz to leverage the power of functions in Python and mastered the ability to automate repetitive tasks that can be done on a computer.",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        },
        {
            "title": "Create a Movie Website",
            "dates": "2017",
            "description": 
            "Created a simple movie website with images and trailers, this project demonstrates knowledge of Object Oriented Programming.",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        }
    ]
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var j = 0; j < projects.projects.length; j++) {
        var formattedTitle  = HTMLprojectTitle.replace("%data%", projects.projects[j].title);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[j].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[j].description);
        $(".project-entry").append(formattedTitle);
        $(".project-entry").append(formattedDate);
        $(".project-entry").append(formattedDescription);
        for (var k = 0; k < projects.projects[j].images.length; k++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[j].images[k]);
            $(".project-entry").append(formattedImage);
        }

    }
};


bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

