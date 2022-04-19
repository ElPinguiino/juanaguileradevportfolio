/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Juan J. Aguilera",
  title: "Hello World",
  subTitle: emoji(
    "Nice to meet you, my name is Juan. I am a passionate Software Developer with a background in IT Support who has experience building web applications in a variety of Frameworks, Libraries, and Languages. Currently, I enjoy using React for the Frontend and Django for the backend but, love to build things in with whatever tools are most appropiate for the job."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1ubl3tsjn7tmf25pGYVt1Xo7DCNVgzNlWoNg2PHrEpH0/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ElPinguiino",
  linkedin: "https://www.linkedin.com/in/juan-aguilera-97b945b9",
  gmail: "juanjaguilera1@gmail.com",
  gitlab: "https://gitlab.com/ElPinguiino",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER WITH AN INTEREST IN EVERY PART OF THE DEVELOPMENT PROCESS",
  skills: [
    emoji(
      "Develop highly interactive mobile-first Frontend UIs with an accompanying backend for complete functionality of web applications."
    ),
    emoji(
      "Integrate with third party services and software through the use of RESTful APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Western Governor's University",
      logo: require("./assets/images/wguLogo.png"),
      subHeader: "Bachelor's of Science, Cloud and Systems Adminstration",
      duration: "June 2018 - Present",
      desc: "Currently pursuing a Bachelor's degree in Cloud and Systems Adminstration, expected to be done in July of 2022.",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Integrations Engineer",
      company: "NICE CxOne",
      companylogo: require("./assets/images/nicecxone.png"),
      date: "February 2022 – Present",
      desc: "Develop, Test, and Ship IVR scripts for customers and clients using propietary software that abstracts code into actions and is based on the .NET framework"
    },
    {
      role: "Full Stack Developer",
      company: "Developing Life",
      companylogo: require("./assets/images/developingLife.png"),
      date: "March 2021 - Present",
      desc: "Full Stack Developer for Developing life, working on all aspects of an application from the design to the coding to the deployment."
    },
    {
      role: "Technical Support Engineer Level 2",
      company: "DellEMC",
      companylogo: require("./assets/images/dellEMC.png"),
      date: "December 2014 – January 2022",
      desc: "Assisted customers in troubleshooting and resolving technical issues with their enterprise grade software defined storage solution",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "COMPANIES AND PROJECTS THAT I HAVE WORKED ON/WITH",
  projects: [
    {
      image: require("./assets/images/rapidapi.png"),
      projectName: "UAE Home Search",
      projectDesc: "Project made using React and Next.js that enables you to search through available homes in the UAE using RapidAPI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uaehomesearch.vercel.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/ElPinguiino/uaehomesearch"
        }
      ]
    },
    {
      image: require("./assets/images/juanOfAKind.png"),
      projectName: "Juan Of A Kind",
      projectDesc: "Website for a Food Truck that was made using Django and React",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://juanofakind.kitchen"
        },
        {
          name: "Source Code",
          url: "https://github.com/ElPinguiino/django_react_joak"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "Social Tiles WebApp",
      projectDesc: "Full Stack App Developed using React and Sanity.io",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/ElPinguiino/socialmedia_app"
        },
        {
          name: "Visit Website",
          url:"https://socialtiles.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "Certifications",

  achievementsCards: [
    {
      title: "CompTIA",
      subtitle:
        "Multiple CompTIA certifications: A+, Network+, Security+, Project+, Linux+.",
      image: require("./assets/images/compTia.png"),
      footerLink: [
      ]
    },
    {
      title: "Project Management",
      subtitle:
        "Completed the ITIL project management certification",
      image: require("./assets/images/itil.jpg"),
      footerLink: [

      ]
    },

    {
      title: "AWS",
      subtitle: "I have the AWS certified Cloud Practioner certification and am working towards my AWS Certified SysOps Administrator ",
      image: require("./assets/images/aws.jpg"),
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Feel free to reach out with any questions about porjects or work.",
  number: "385-259-3063",
  email_address: "juanjaguilera1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
