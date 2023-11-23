export interface PortfolioTypes {
  CompanyName: string;
  domain: string;
  description: {
    p1: string;
    p2: string;
    p3: string;
  };
  contact: {
    email: string;
    number: string;
    adress: string[];
  };
  socials: {
    twitter: string;
    linkedin: string;
  };
  scrolingText: string;
  sign: string;
  stats: {
    experience: string;
    colaborators: string;
    projects: string;
  };
  services: [{ serviceName: string }];
  aboutMe: {
    short: string;
    long: string[];
  };
  experience: {
    year: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
  }[];
  education: {
    year: string;
    school: string;
    degree: string;
    courseDescription: string;
  }[];
  skills: {
    lvl: string;
    skill: string;
    shortDescription: string;
  }[];
  awardsAndBadges: {
    year: string;
    name: string;
    shortDescription: string;
  }[];
}

export const portfolio = {
  CompanyName: "your company",
  domain: "@alias",
  description: {
    p1: "profession title",
    p2: "your full name",
    p3: "short describtion of ur profession",
  },
  contact: {
    email: "email@yourcompany.com",
    number: "078-56756-567567",
    adress: ["london , UK", "London"],
  },
  socials: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  scrolingText: "I Am Available For Contract or Freelance Work",
  sign: "Surname",
  stats: {
    experience: "04",
    colaborators: "+35",
    projects: "+14",
  },
  services: [
    {
      serviceName:
        "Description about offered skill/serviceLorem ipsum dolor nulla pariatur.Lorem Lorem ipsum",
    },
    {
      serviceName:
        "Description about offered skill/serviceLorem ipsum dolor nulla pariatur.Lorem Lorem ipsum",
    },
    {
      serviceName:
        "Description about offered skill/serviceLorem ipsum dolor nulla pariatur.Lorem Lorem ipsum",
    },
    {
      serviceName:
        "Description about offered skill/serviceLorem ipsum dolor nulla pariatur.Lorem Lorem ipsum",
    },
  ],
  aboutMe: {
    short:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    long: [
      "Lorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla pariatur.",
      " Loreo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
  },
  experience: [
    {
      year: "2007-2017",
      jobTitle: "Framer Designer & Developer",
      companyName: "Bluebase Designs",
      jobDescription:
        "Lorem ipsum dolor nulla pariatur.Lorem Lorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
    {
      year: "2007-2017",
      jobTitle: "Lorem ipsum dolor",
      companyName: "Lorem ipsum dolor",
      jobDescription:
        "Lorem ipsum dolor nulla pariatur.LoremLorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
    {
      year: "2007-2017",
      jobTitle: "Lorem ipsum dolor",
      companyName: "Lorem ipsum dolor",
      jobDescription:
        "Lorem ipsum dolor nulla pariatur.LoremLorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
    {
      year: "2007-2017",
      jobTitle: "Lorem ipsum dolor",
      companyName: "Lorem ipsum dolor",
      jobDescription:
        "Lorem ipsum dolor nulla pariatur.LoremLorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
    {
      year: "2007-2017",
      jobTitle: "Lorem ipsum dolor",
      companyName: "Lorem ipsum dolor",
      jobDescription:
        "Lorem ipsum dolor nulla pariatur.LoremLorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
  ],

  education: [
    {
      year: "2007-2017",
      school: "Lorem ipsum dolor",
      degree: "Lorem ipsum dolor",
      courseDescription:
        "Lorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
    {
      year: "2007-2017",
      school: "Lorem ipsum dolor",
      degree: "Lorem ipsum dolor",
      courseDescription:
        "Lorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
    {
      year: "2007-2017",
      school: "Lorem ipsum dolor",
      degree: "Lorem ipsum dolor",
      courseDescription:
        "Lorem ipsum dolorLorem ipsum dolor nulla pariatur.Lorem ipsum dolor nulla",
    },
  ],
  skills: [
    { lvl: "average", skill: "Lorem ipsum", shortDescription: "Lorem ipsum" },
    { lvl: "average", skill: "Lorem ipsum", shortDescription: "Lorem ipsum" },
    { lvl: "average", skill: "Lorem ipsum", shortDescription: "Lorem ipsum" },
    { lvl: "average", skill: "Lorem ipsum", shortDescription: "Lorem ipsum" },
  ],
  awardsAndBadges: [
    { year: "2017", name: "Lorem ipsum", shortDescription: "Lorem ipsum" },
    { year: "2017", name: "Lorem ipsum", shortDescription: "Lorem ipsum" },
    { year: "2017", name: "Lorem ipsum", shortDescription: "Lorem ipsum" },
    { year: "2017", name: "Lorem ipsum", shortDescription: "Lorem ipsum" },
  ],
};
