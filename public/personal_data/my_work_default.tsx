interface ProjectLearned {
  learned: string;
}

export interface MyWorkItem {
  [project: string]: {
    Brief: string;
    Learned: ProjectLearned[];
    Other_Tools_Used: string[];
    repository: string;
  };
}

export const MyWork: MyWorkItem[] =
  [{
    "project": {
      "Brief": "text",
      "Learned": [
        {
          "learned": "what i leraned"
        },
        {
          "learned": "what i leraned"
        },
        {
          "learned": "what i leraned"
        },
        {
          "learned": "what i leraned"
        },
      ],
      "Other_Tools_Used": ["other tools"],
      repository: "github.com"
    },
  }, {
    "project": {
      "Brief": "text",
      "Learned": [
        {
          "learned": "what i leraned"
        },
        {
          "learned": "what i leraned"
        },
        {
          "learned": "what i leraned"
        },
        {
          "learned": "what i leraned"
        },
      ],
      "Other_Tools_Used": ["other tools"],
      repository: "github.com"
    },
  }
  ]
