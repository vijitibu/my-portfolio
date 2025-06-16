export type ExperienceType = {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
};

export const Experiences: ExperienceType[] = [
  {
    title: "UI Engineer",
    company: "Rivyv Technologies",
    duration: "March 2025 - Present",
    description: [
      "Transformed Figma designs into pixel-perfect, responsive React components using TypeScript.",
      "Ensured cross-device compatibility with a mobile-first approach and media query tuning.",
      "Collaborated with designers and product teams to refine UI/UX for accessibility and performance.",
      "Utilized Tailwind CSS and custom theming to maintain consistent design systems across the application.",
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Senior Software Developer",
    company: "BVDATA SOLUTIONS, KOTTAYAM, KERALA.",
    duration: "July 2018 - June 2021",
    description: [
      "Maintained company brand standards by adhering to design and style guidelines.",
      "Developed a responsive website using React.js, Material-UI, and Tailwind CSS.",
      "Integrated Telerik Reporting to enable dynamic and customizable report generation.",
      "Participated in agile ceremonies like sprint planning and retrospectives to boost team productivity.",
      "Built scalable frontend components with React.js in Visual Studio Code.",
      "Ensured high code quality and performance by applying optimization and accessibility best practices.",
      "Wrote and executed unit tests using Jest for reliable frontend code coverage.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "MUI"],
  },
  {
    title: "Full Stack Developer",
    company: "FREE LEARN INDIA PVT. LTD. TRIVANDRUM, KERALA.",
    duration: "July 2018 - June 2021",
    description: [
      "Built and maintained scalable React components using TypeScript.",
      "Improved performance by optimizing image loading and code splitting.",
      "Collaborated with UI/UX team to refine design into responsive layouts.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "E-Governance Programmer",
    company: "Mahatma Gandhi University, Kottayam, Kerala",
    duration: "Nov 2014-March 2017",
    description: [
      "Designed and developed e-governance applications to streamline university operations.",
      "Collaborated with stakeholders to define and translate requirements into technical features.",
      "Performed thorough testing to ensure system reliability, security, and performance.",
      "Conducted training and support sessions for users to enable effective adoption.",
    ],
    technologies: ["Php 5", "JavaScript", "MySQL 5"],
  },
  {
    title: "Computer Programmer",
    company: "Mahatma Gandhi University, Kottayam, Kerala",
    duration: "Dec 2009–Nov 2014",
    description: [
      "Proficient in project management, leading teams to successful outcomes.",
      "Experienced in utilizing advanced technologies including MVC and CMS.",
      "Managing a project handling admissions, exams, valuations, results, and revaluation for CBCSS UG Programs at M.G University.",
      "Creating reports using TCPDF and FPDF Libraries",
      "Technical Support for software solutions",
    ],
    technologies: ["Php 5", "CodeIgniter Framework", "JavaScript", "MySQL 5"],
  },
  {
    title: "Programmer Analyst (PHP)",
    company: "Infovista Technology Solutions Pvt. Ltd., Ernakulam, Kerala",
    duration: "Aug 2008-Sep 2009",
    description: [
      "Developed dynamic PHP-based web applications with MySQL integration.",
      "Worked closely with clients to tailor solutions to business requirements.",
      "Optimized complex database queries for performance and scalability.",
      "Performed unit testing and debugging to ensure robust application delivery.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
];
