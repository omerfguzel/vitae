import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Ömer Faruk Güzel",
  initials: "OFG",
  location: "Turkey",
  locationLink: "https://www.google.com/maps/place/Turkey",
  about:
    "Experienced Artificial Intelligence Engineer specializing in machine learning, data science, and computer vision.",
  summary:
    "As an Artificial Intelligence Engineer, I have extensive experience in developing, deploying, and fine-tuning large language models (LLMs), chatbots, and AI systems. I am skilled in Python and SQL and have worked with platforms like Linux, Raspberry Pi, and NVIDIA Jetson Nano, deploying scalable AI and machine learning models in Docker containers.",
  avatarUrl: "https://avatars.githubusercontent.com/u/61020708?v=4",
  contact: {
    email: "omerfguzel@gmail.com",
    tel: "+90 505 734 75 46",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/omerfguzel",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/omerfguzel/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Abdullah Gül University",
      degree: "Master of Science Degree in Computer Engineering",
      start: "Sep 2021",
      end: "Dec 2023",
    },
    {
      school: "Ankara University",
      degree: "Bachelor’s Degree in Biomedical Engineering",
      start: "Sep 2016",
      end: "Jun 2021",
    },
    {
      school: "Deggendorf Institute of Technology",
      degree: "Summer School in Artificial Intelligence for Industry",
      start: "Jul 2022",
      end: "Aug 2022",
    },
  ],
  work: [
    {
      company: "TheaTech",
      link: "",
      badges: [],
      title: "Artificial Intelligence Engineer",
      start: "Jan 2024",
      end: "Present",
      description:
        "Utilized and fine-tuned Large language models (LLMs), incorporating OpenAI API, Gemini API, GPT-4 Vision API, and Gemini Vision API. Deployed chatbots and utilized Streamlit to craft intuitive interfaces, designing endpoints for scalable LLM applications.",
    },
    {
      company: "IND Software",
      link: "",
      badges: [],
      title: "Machine Learning Engineer",
      start: "Jan 2023",
      end: "Jan 2024",
      description:
        "Engaged in projects focused on object detection, deep learning, and optimization, with duties encompassing data pre-processing, model training, and fine-tuning. Deployed machine learning models in Docker containers to support real-time applications.",
    },
    {
      company: "TUBITAK",
      link: "",
      badges: [],
      title: "Master of Science Student Scholar",
      start: "Nov 2021",
      end: "Jan 2023",
      description:
        "Performed comprehensive research on convolutional neural network architectures for analyzing medical images, emphasizing real-time object detection and semantic segmentation to improve the identification and classification of colon polyps.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Docker",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Scikit-learn",
    "Linux",
    "Raspberry Pi",
    "NVIDIA Jetson Nano",
    "LLM APIs",
    "Endpoint Design",
    "Cloud Platforms (AWS)",
    "MLOps (MLflow)",
  ],
  projects: [
    {
      title: "TUBITAK 1001",
      techStack: [
        "Master of Science Student Scholar",
        "YOLO",
        "U-Net",
      ],
      description:
        "Conducted extensive research on YOLO and U-Net models aimed at detecting colon polyps. Enhanced real-time object detection with YOLO and assessed U-Net's accuracy for colon polyp segmentation and classification.",
      link: {
        label: "Project Link",
        href: "#",
      },
    },
    {
      title: "TUBITAK TEYDEB",
      techStack: [
        "Master of Science Student Scholar",
        "Facial Recognition",
        "Raspberry Pi",
        "Jetson Nano",
      ],
      description:
        "Employed pre-trained models for facial recognition to classify age and gender. Compiled and refined datasets, deploying optimized models on Raspberry Pi and Jetson Nano.",
      link: {
        label: "Project Link",
        href: "#",
      },
    },
    {
      title: "TUBITAK 2209-A",
      techStack: [
        "Bachelor's Degree",
        "Machine Learning",
        "IoT",
      ],
      description:
        "Analyzed signal data from endoscopy simulators for model training. Developed machine learning models for mental workload assessment, integrating them into an IoT system for real-time alerts.",
      link: {
        label: "Project Link",
        href: "#",
      },
    },
  ],
  publications: [
    {
      title: "Optimizing Extracted Deep Features for Classification of Colon Cancer Histopathology Images",
      link: "http://www.icondata.org/uploads/kcfinder/upload/files/ICONDATA'22%20Abstract%20Proceedings%20Book.pdf",
      description: "5th International Conference on Data Science and Applications (ICONDATA'22) Proceedings Book, pp. 59.",
    },
  ],
  certifications: [
    {
      title: "AI Programming with Python Nanodegree",
      issuer: "Udacity",
      link: "https://graduation.udacity.com/confirm/GASSDPYG",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Udacity",
      link: "https://graduation.udacity.com/confirm/e/d64497ee-ee8f-11ed-9568-f73b98d973c7",
    },
    {
      title: "Machine Learning Scientist",
      issuer: "Datacamp",
      link: "https://www.datacamp.com/statement-of-accomplishment/track/d422130d68b5ad3dbc405770cf503ae044e8bf5a",
    },
    {
      title: "Introduction to Machine Learning in Production",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/YWUPMHJUENAR",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/XX5J4CZEPMGW",
    },
    {
      title: "Improving Deep Neural Networks",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/WJKYRVFBX645",
    },
    {
      title: "Structuring Machine Learning Projects",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/2M2RBHH8239J",
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/SD8GDABVV9WP",
    },
  ],
  exams: [
    {
      title: "Academic Personnel and Graduate Education Entrance Exam (ALES)",
      score: "Quantitative: 85.40%",
    },
    {
      title: "The Foreign Language Knowledge Level Determination Exam (YDS)",
      score: "English: 78.75%",
    },
  ],
  other: [
    {
      title: "Military Service",
      description: "Completed and discharged in May 2024.",
    },
  ],
} as const;