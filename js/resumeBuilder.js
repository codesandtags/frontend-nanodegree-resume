/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
        "name": "Edwin Torres",
        "role": "Full Stack Software Developer",
        "contacts": {
            "mobile": "3123962374",
            "email": "etorres.net@gmail.com",
            "twitter": "codesandtags",
            "github": "codesandtags",
            "blog": "http://codesandtags.org/",
            "location": "Bogota, COL"
        },
        "welcomeMessage": "7+ years experience in IT, experience as Software Developer in Java and JavaScript, Software Tester engineer and Automation, working below Agile Methodologies, passionate for my work and Software Programming using good practices, always an apprentice and self-taught person by conviction.",
        "skills": ["JavaScript", "CSS", "Grunt", "BackBone JS", "Marionette JS", "ES6", "SASS", "Angular 2", "Java", "TDD"],
        "bioPic": "images/profile.jpg",
        "display": function() {
            var formattedName = HTMLheaderName.replace("%data%", inName(this.name));
            var formattedRole = HTMLheaderRole.replace("%data%", this.role);
            var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
            var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
            var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
            var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
            var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
            var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
            var formattedBlog = HTMLblog.replace("%data%", this.contacts.blog);
            var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

            $('#header')
                .prepend(formattedRole)
                .prepend(formattedName)
                .append(formattedBioPic)
                .append(formattedWelcome);

            $('#topContacts')
                .append(formattedLocation)
                .append(formattedMobile)
                .append(formattedEmail)
                .append(formattedGithub)
                .append(formattedTwitter)
                .append(formattedBlog);


            if (this.skills) {
                $('#header').append(HTMLskillsStart);

                this.skills.forEach(function(skill) {
                    var formattedSkill = HTMLskills.replace("%data%", skill);
                    $('#skills').append(formattedSkill);
                });
            }
        }
    },
    education = {
        "schools": [
            {
                "name": "Escuela Colombiana de Carreras Industriales",
                "dates": "2008-2014",
                "city": "Bogota",
                "degree": "BA",
                "location": "Cra. 19 #49-27, Bogotá"
            }
        ],
        "onlineCourses": [
            {
                "title": "JavaScript Road Trip",
                "school": "CodeSchool",
                "dates": "2016",
                "url": "https://www.codeschool.com/learn/javascript"
            },
            {
                "title": "Programming Mobile Applications for Android Handheld Systems",
                "school": "University of Maryland College Park",
                "dates": "2014-2015",
                "url": "https://www.coursera.org/account/accomplishments/certificate/ZF2PAVTXMQ"
            }
        ],
        "display": function() {

            $('#education').append(HTMLschoolStart);

            for (var school in this.schools) {
                var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
                var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
                var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);

                $('.education-entry:last').append(formattedName);
                $('.education-entry:last').append(formattedDegree);
                $('.education-entry:last').append(formattedDates);
                $('.education-entry:last').append(formattedLocation);
            }

            $('#education').append(HTMLonlineClasses);

            for (var course in this.onlineCourses) {
                var formattedName = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
                var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
                var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
                var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);

                $('.education-entry:last').append(formattedName);
                $('.education-entry:last').append(formattedTitle);
                $('.education-entry:last').append(formattedDates);
                $('.education-entry:last').append(formattedURL);
            }
        }
    },
    work = {
        "jobs": [
            {
                "employer": "Prodigious Brand Logistic",
                "title": "Front End Developer",
                "dates": "May 2016 - Currently",
                "location": "Cll. 26 No. 92 - 32, Connecta, Bogotá",
                "description": "I’ve been working on an amazing Project called Helios, this is a Global Alliance between Renault and Nissan with the purpose of developing a new global digital customer engagement platform. Here I've been working with  AEM (Adobe Experience Manager), JavaScript, BackboneJS, MarionetteJS, SASS, Good practices in JavaScript, JavaScript patterns, Jasmine (TDD), Grunt."
            },
            {
                "employer": "Prodigious Brand Logistic",
                "title": "Senior Software Engineer",
                "dates": "Aug 2015 - Currently",
                "location": "Cll. 26 No. 92 - 32, Connecta, Bogotá",
                "description": "I’ve been working on an amazing Project called Helios, this is a Global Alliance between Renault and Nissan with the purpose of developing a new global digital customer engagement platform. Prodigious is part of Publicis Groupe, together with other agencies as DigitasLbi locate in London UK. Here I've been working with JAVA, AEM (Adobe Experience Manager), JavaScript, BackboneJS, MarionetteJS, Spring Framework, ApiGee, MongoDB and Elastic Search using good practices and guidelines."
            },
            {
                "employer": "Conexia S.A.",
                "title": "Semi Senior Developer",
                "dates": "Sep 2014 - Jul 2015",
                "location": "Cra. 9 #77-67, Bogotá",
                "description": "I was working in an interesting project relate with the health system in Colombia for some EPS like Emsanar, Saludcoop. Here I've been working with JAVA, Spring Framework, Prime Faces, Jira, Unit Testing, RESTful Services, Fixing bugs, improvements over code and documentation."
            },
            {
                "employer": "Casa Editorial El Tiempo - Metrocuadrado.com",
                "title": "Software Developer Engineer",
                "dates": "Mar 2013 - Sep 2014",
                "location": "Cra 68 B Bis # 44-55, Bogotá",
                "description": "I was working in one of the biggest portal in Colombia related with real estate ads. Here I worked with Java, Spring Framework, Oracle Databases, Fixing bugs, Software Design and planning requirements, deployment tasks on different environments (QA, UAT, PRD), optimization and refactoring code."
            },
            {
                "employer": "PayU America Latina",
                "title": "Software Semi Senior Test Engineer",
                "dates": "Dic 2010 - Nov 2012",
                "location": "Cl. 93b #1725, Bogotá",
                "description": "I was working in an amazing and challenging project for one of the biggest payment company in Colombia. Here I was in charge to lead and perform the whole lifecycle assurance testing. Here I did design of testing plans, automation testing using Selenium WebDriver, security testing, non functional and functional testing using Jmeter / SOAPUI and manual execution."
            }
        ],
        "display": function() {
            for (var job in this.jobs) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
                var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
                var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);

                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(formattedLocation);
                $('.work-entry:last').append(formattedEmployerTitle);
                $('.work-entry:last').append(formattedDates);
                $('.work-entry:last').append(formattedDescription);
            }
        }
    },
    projects = {
        "projects": [
            {
                "title": "My portfolio",
                "dates": "2016",
                "description": "This is a project for the 'JavaScript Basics' course by Udacity. This project is created using JavaScript, Jquery, Helpers, JSON, Google Maps",
                "images": [
                    {
                        "image": "images/udacity.png",
                        "sizes": [200, 200],
                        "url": "https://www.udacity.com/course/javascript-basics--ud804"
                    },
                    {
                        "image": "images/javascript-basics.png",
                        "sizes": [500, 200],
                        "url": "https://www.udacity.com/course/javascript-basics--ud804"
                    },
                    {
                        "image": "images/udacity3.png",
                        "sizes": [200, 200],
                        "url": "https://www.udacity.com/course/javascript-basics--ud804"
                    },
                ]
            },
            {
                "title": "Codes and Tags Blog",
                "dates": "2016",
                "description": "Codes and Tags is a place where there are topics of interest related to programming, Web application development and Software Testing documented.",
                "images": [
                    {
                        "image": "images/codesandtags.png",
                        "sizes": [600, 500],
                        "url": "http://codesandtags.org"
                    }

                ]
            }
        ],
        "display": function() {
            for (var project in this.projects) {
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);

                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last').append(formattedProjectTitle);
                $('.project-entry:last').append(formattedProjectDates);
                $('.project-entry:last').append(formattedProjectDescription);

                if(this.projects[project].images.length){
                    var images = this.projects[project].images;
                    images.forEach(function(image){
                        var formattedProjectImage = HTMLprojectImage
                            .replace("%image%", image.image)
                            .replace("%url%", image.url)
                            .replace("%width%", image.sizes[0])
                            .replace("%height%", image.sizes[1]);

                        $('.project-entry:last').append(formattedProjectImage);
                    });
                }


            }
        }
    };

bio.display();
work.display();
education.display();
projects.display();
captureClicks();

function captureClicks() {
    $(document).click(function(event) {
        logClicks(event.pageX, event.pageY);
    });
}


function inName(name) {
    var names = name.split(" "),
        firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase(),
        lastName = names[1].toUpperCase(),
        fullName;

    fullName = firstName + " " + lastName;

    return fullName;
}


$('#mapDiv').append(googleMap);
