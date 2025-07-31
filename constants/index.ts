export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Meta",
    jobTitle: "Frontend Engineer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 88,
      ATS: {
        score: 92,
        tips: [],
      },
      toneAndStyle: {
        score: 89,
        tips: [],
      },
      content: {
        score: 87,
        tips: [], 
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 88,
        tips: [],
      },
    },
  },
  {
    id: "2",
    companyName: "Amazon",
    jobTitle: "DevOps Specialist",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 62,
      ATS: {
        score: 70,
        tips: [],
      },
      toneAndStyle: {
        score: 68,
        tips: [],
      },
      content: {
        score: 65,
        tips: [],
      },
      structure: {
        score: 72,
        tips: [],
      },
      skills: {
        score: 66,
        tips: [],
      },
    },
  },
  {
    id: "3",
    companyName: "Netflix",
    jobTitle: "Mobile Application Developer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 79,
      ATS: {
        score: 80,
        tips: [],
      },
      toneAndStyle: {
        score: 82,
        tips: [],
      },
      content: {
        score: 77,
        tips: [],
      },
      structure: {
        score: 81,
        tips: [],
      },
      skills: {
        score: 78,
        tips: [],
      },
    },
  },
];


export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //evaluate for ATS compatibility
        tips: {
          type: "good" | "improve";
          tip: string; //provide 3–4 pointers
        }[];
      };
      toneAndStyle: {
        score: number; //score out of 100
        tips: {
          type: "good" | "improve";
          tip: string; //short summary of the point
          explanation: string; //detailed reason
        }[];
      };
      content: {
        score: number; //score out of 100
        tips: {
          type: "good" | "improve";
          tip: string; //short summary of the point
          explanation: string; //detailed reason
        }[];
      };
      structure: {
        score: number; //score out of 100
        tips: {
          type: "good" | "improve";
          tip: string;
          explanation: string;
        }[];
      };
      skills: {
        score: number; //score out of 100
        tips: {
          type: "good" | "improve";
          tip: string;
          explanation: string;
        }[];
      };
    }`;


export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are a specialist in resume analysis and ATS optimization.
  Review this resume critically and give an honest evaluation.
  Low scores are acceptable if the resume needs improvement.
  Your suggestions should be detailed, actionable, and based on resume quality.
  If a job description is included, align your feedback accordingly.
  Job Title: ${jobTitle}
  Job Description: ${jobDescription}
  Please use the following format for your response: ${AIResponseFormat}
  Only return a pure JSON object, with no extra text, markdown, or comments.`;
