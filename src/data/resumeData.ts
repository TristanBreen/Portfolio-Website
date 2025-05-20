export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  period: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

export interface ResumeData {
  about: string;
  education: Education;
  skills: string[];
  experience: Experience;
  projects: { [key: string]: Project };
  contact: Contact;
}

export const resumeData: ResumeData = {
  about: "I'm a Software Engineering student and full-stack developer passionate about creating efficient, user-friendly applications. I specialize in both systems-level programming and modern web development, with a focus on creating elegant solutions to complex problems!",
  
  education: {
    degree: "B.S. in Software Engineering, Arizona State University",
    period: "Aug 2021 – May 2025"
  },
  
  skills: [
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "React.js",
    "Android Development",
    "Supabase",
    "Docker",
    "AWS",
    "OpenCV",
    "Tesseract"
  ],
  
  experience: {
    title: "Full-Stack Developer",
    company: "Rob Dollar Foundation",
    period: "Aug 2024 – May 2025",
    description: [
      "Developed a Bluetooth-connected cycling safety application with mobile interface and ESP32 firmware",
      "Designed and implemented Supabase backend for real-time data storage and retrieval",
      "Created an administrative web dashboard for monitoring device status and user activity",
      "Implemented secure authentication and permission systems for different user roles"
    ]
  },
  
projects: {
  "image_processor": {
    id: "image_processor",
    name: "High-Performance Image Processor",
    description: "A collection of high-performance image processing filters implemented in C and compiled to WebAssembly for web use. The application provides grayscale, edge detection, and color inversion filters with near-native performance in the browser.",
    technologies: ["C", "WebAssembly", "JavaScript", "HTML Canvas"],
    features: [
      "Low-level C implementation for maximum performance",
      "WebAssembly compilation for browser compatibility",
      "Multiple filter options with real-time preview",
      "Command-line style documentation and interface",
      "https://github.com/TristanBreen/PictureEditor"
    ]
  },
  "stock_tool": {
    id: "stock_tool",
    name: "Stock Analysis Tool",
    description: "A Python-based stock analysis tool that utilizes machine learning to analyze RSI and MACD indicators. The application generates static chart snapshots and provides detailed summary statistics for making informed investment decisions.",
    technologies: ["Python", "Machine Learning", "Pandas", "Matplotlib", "Financial APIs"],
    features: [
      "RSI and MACD technical indicator analysis",
      "Machine learning predictions for trend forecasting",
      "Automated chart generation for visual analysis",
      "Comprehensive statistical reporting for decision support",
      "https://github.com/TristanBreen/Stock-Analysis-Prediction-Tool"
    ]
  },
  "terminal_portfolio": {
    id: "terminal_portfolio",
    name: "Terminal-Style Portfolio Website",
    description: "A streamlined, interactive portfolio presented as a command-line interface. Visitors navigate top-level directories like `/about`, `/skills`, `/experience`, and `/projects`, and can use flags to reveal source code snippets. The site showcases full-stack and systems projects in a memorable terminal aesthetic.",
    technologies: ["React.js", "JavaScript", "Supabase", "Node.js", "Vercel"],
    features: [
      "Shell-like UI with typing animations",
      "Flat directory structure (`/about`, `/skills`, `/experience`, `/projects`)",
      "`--source` flag to display React components, WebAssembly glue code, firmware snippets, and CI/CD configs",
      "Responsive, dark-mode, monospaced design with ARIA accessibility",
      "https://github.com/TristanBreen/Portfolio-Website"
    ]
  }
},

  
  contact: {
    email: "tristanbreen@gmail.com",
    github: "https://github.com/TristanBreen",
    linkedin: "https://www.linkedin.com/in/tristan-breen-93129a261/"
  }
};