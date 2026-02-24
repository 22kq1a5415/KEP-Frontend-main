import React from 'react';
import { NavItem, CourseCategory, LMSResource } from './types.ts';
import { ASSETS } from './assets.ts';
// Re-export ASSETS so it can be accessed by files importing from constants.tsx
export { ASSETS };
import { 
  Layout, 
  Book, 
  FileText, 
  MessageSquare, 
  Users, 
  BookOpen, 
  BarChart, 
  Briefcase, 
  Settings, 
  Shield 
} from 'lucide-react';

export const COMPANY_INFO = {
  name: "KESHAVA ELITE PROJECTS PVT.LTD",
  brandName: "KESHAVA ELITE PROJECTS",
  logo: ASSETS.LOGOS.PRIMARY,
  cin: "U62099AP2023PTC110407",
  tagline: "Empowering Future Innovators Through Robotics & STEM Excellence",
  email: "info@keshavaeliteprojects.in",
  phone: "+91 7659867411",
  address: "Andhra Pradesh, India",
  mission: "To deliver accessible, industry-aligned, and project-based technology education through modern labs, expert mentorship, and innovation-driven learning.",
  vision: "To create India’s most impactful Robotics & STEM innovation ecosystem — empowering every student to become a creator of technology, not just a consumer.",
  /* UPDATED: Changed cOe to CoE */
  aboutSnapshot: "Keshava Elite Projects is an ed-tech innovation organization specializing in STEM Robotics Labs for Schools and Center of Excellence (CoE) Programs for Colleges. We design ecosystems where students gain hands-on experience in AI, IoT, and Robotics.",
  philosophy: [
    "Learning by Building",
    "Innovation over Memorization",
    "Projects over Theory",
    "Industry over Outdated Curriculum",
    "Access for Every Student"
  ],
  trainingFeatures: [
    "Hands-on Projects",
    "Industry Case Studies",
    "Certification",
    "Internship Support",
    "Placement Assistance",
    "Startup Mentorship"
  ]
};

// Derived exports for branding consistency across components
export const BRAND_NAME = COMPANY_INFO.brandName;
export const TAGLINE = COMPANY_INFO.tagline;

// Role-specific sidebar configurations for the dashboard system
export const STUDENT_SIDEBAR = [
  { name: 'Overview', path: '/dashboard/student', icon: <Layout size={20} /> },
  { name: 'My Courses', path: '/dashboard/student/courses', icon: <Book size={20} /> },
  { name: 'Assignments', path: '/dashboard/student/assignments', icon: <FileText size={20} /> },
  { name: 'Support', path: '/dashboard/student/support', icon: <MessageSquare size={20} /> },
];

export const TRAINER_SIDEBAR = [
  { name: 'Overview', path: '/dashboard/trainer', icon: <Layout size={20} /> },
  { name: 'My Students', path: '/dashboard/trainer/students', icon: <Users size={20} /> },
  { name: 'Curriculum', path: '/dashboard/trainer/curriculum', icon: <BookOpen size={20} /> },
  { name: 'Reports', path: '/dashboard/trainer/reports', icon: <BarChart size={20} /> },
];

export const HR_SIDEBAR = [
  { name: 'Overview', path: '/dashboard/hr', icon: <Layout size={20} /> },
  { name: 'Staff Directory', path: '/dashboard/hr/staff', icon: <Users size={20} /> },
  { name: 'Recruitment', path: '/dashboard/hr/recruitment', icon: <Briefcase size={20} /> },
  { name: 'Settings', path: '/dashboard/hr/settings', icon: <Settings size={20} /> },
];

export const ADMIN_SIDEBAR = [
  { name: 'Overview', path: '/dashboard/admin', icon: <Layout size={20} /> },
  { name: 'System Logs', path: '/dashboard/admin/logs', icon: <Shield size={20} /> },
  { name: 'User Management', path: '/dashboard/admin/users', icon: <Users size={20} /> },
  { name: 'Settings', path: '/dashboard/admin/settings', icon: <Settings size={20} /> },
];

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { 
    label: 'Services', 
    path: '/services',
    children: [
      /* UPDATED: Kept as STEM Labs to match component Title */
      { label: 'STEM Labs', path: '/services#stem-labs' },
      /* UPDATED: Changed cOe to CoE */
      { label: 'CoE Hubs', path: '/services#CoE' },
      /* UPDATED: Changed SaaS (already correct, but ensured consistency) */
      { label: 'SaaS Products', path: '/services#saas' },
      { label: 'STEM & AI Robotics (K1-K12)', path: '/services#k12' }
    ]
  },
  { label: 'For Schools', path: '/for-schools' },
  { label: 'Courses', path: '/courses' },
  { label: 'Careers', path: '/careers' },
  { label: 'Impact', path: '/impact' },
  { label: 'Contact', path: '/contact' },
];

export const COURSE_DATA: CourseCategory[] = [
  {
    title: "Information Technology",
    icon: "terminal",
    courses: [
      {
        id: "full-stack",
        title: "Full-Stack Development",
        imageUrl: "https://i.postimg.cc/tTmy6HDP/Fullstack_Development.png",
        description: "Master modern web ecosystems from React UI to Spring Microservices.",
        duration: "6 Months",
        features: ["React 19", "Spring Boot", "Docker", "AWS"],
        modules: ["Frontend Architecture", "Backend Engineering", "DevOps basics", "API Security", "Database Scaling"],
        fullPrice: 24999, registrationFee: 2999
      },
      {
        id: "data-science",
        title: "Data Science & Analytics",
        imageUrl: "https://i.postimg.cc/ZYVvf9Dm/Data_Science_Analytics.png",
        description: "Industrial data intelligence using predictive modeling.",
        duration: "6 Months",
        features: ["Python", "Pandas", "Scikit-Learn"],
        modules: ["Data Wrangling", "Statistical Analysis", "ML Models", "Data Visualization", "Big Data Processing"],
        fullPrice: 29999, registrationFee: 3999
      },
      {
        id: "ai-ml",
        title: "Artificial Intelligence & ML",
        imageUrl: "https://i.postimg.cc/B6mXbydL/AI_ML.png",
        description: "Frontier of computing: Neural nets and NLP.",
        duration: "5 Months",
        features: ["TensorFlow", "NLP", "Neural Nets"],
        modules: ["Deep Learning", "Generative AI", "Computer Vision", "Reinforcement Learning", "AI Ethics"],
        fullPrice: 34999, registrationFee: 4999
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        imageUrl: "https://i.postimg.cc/6q52WwqM/Cyber_Security.png",
        description: "Protecting Industry 4.0 perimeters and data assets.",
        duration: "4 Months",
        features: ["Kali Linux", "Ethical Hacking", "SOC"],
        modules: ["Network Security", "Pen-Testing", "Incident Response", "Cloud Security", "Cryptography"],
        fullPrice: 32999, registrationFee: 4599
      },
      {
        id: "cloud",
        title: "Cloud Computing",
        imageUrl: "https://i.postimg.cc/XvdyxQt2/Cloud_Computing.png",
        description: "Scalable infrastructure management for enterprise tech.",
        duration: "4 Months",
        features: ["AWS", "Azure", "Serverless"],
        modules: ["Cloud Architecture", "Containerization", "Scaling Strategies", "Infrastructure as Code", "VPC & Networking"],
        fullPrice: 26999, registrationFee: 3499
      },
      {
        id: "python-dev",
        title: "Python Developer",
        imageUrl: "https://i.postimg.cc/mrp2YMgX/Python_Developer.png",
        description: "Complete backend mastery using Python and Django.",
        duration: "4 Months",
        features: ["Django", "FastAPI", "Automation"],
        modules: ["Advanced Python", "Asynchronous Programming", "Database Integration", "Scripting", "Web Frameworks"],
        fullPrice: 18999, registrationFee: 2499
      }
    ]
  },
  {
    title: "Core Engineering",
    icon: "cpu",
    courses: [
      {
        id: "ai-robotics",
        title: "AI Robotics",
        imageUrl: "https://i.postimg.cc/VsRn3ZvR/AI_Robotics.png",
        description: "Combining Artificial Intelligence with mechanical robotics.",
        duration: "6 Months",
        features: ["Computer Vision", "ROS", "Kinematics"],
        modules: ["Sensing", "Actuation", "Robot Vision", "Navigation", "Path Planning"],
        fullPrice: 38999, registrationFee: 5999
      },
      {
        id: "iot",
        title: "Internet of Things (IoT)",
        imageUrl: "https://i.postimg.cc/rzXBGy49/Internet_of_Things_(IOT).png",
        description: "Master the ecosystem of connected industrial devices.",
        duration: "4 Months",
        features: ["MQTT", "Sensors", "Arduino"],
        modules: ["Sensor Interfacing", "Networking", "Cloud IoT", "Embedded C", "Security"],
        fullPrice: 24999, registrationFee: 3499
      },
      {
        id: "iort",
        title: "IoRT (Internet of Robotics Things)",
        imageUrl: "https://i.postimg.cc/8zBSHvtc/Internet_of_Robotics_things_(IORT).png",
        description: "Advanced intersection of IoT and Autonomous Robotics.",
        duration: "4 Months",
        features: ["Real-time OS", "Edge Computing", "Sensors"],
        modules: ["Edge AI", "Robot Connectivity", "Swarm Robotics", "Industrial IoT Protocols"],
        fullPrice: 29999, registrationFee: 3999
      },
      {
        id: "embedded",
        title: "Embedded Systems",
        imageUrl: "https://i.postimg.cc/L8zHbw6f/Embedded_Systems.png",
        description: "Firmware and Hardware-level engineering masters.",
        duration: "4 Months",
        features: ["ARM Cortex", "RTOS", "C++"],
        modules: ["Microcontroller Pro", "Device Drivers", "Kernel Programming", "IoT Protocols", "PCB Design"],
        fullPrice: 24999, registrationFee: 3499
      },
      {
        id: "drone-robotics",
        title: "Drone & Aerial Robotics",
        imageUrl: "https://i.postimg.cc/nrCFSLCZ/Drone_Aerial_Robotics.png",
        description: "UAV Design, flight dynamics, and autonomous missions.",
        duration: "4 Months",
        features: ["PX4", "ArduPilot", "ROS"],
        modules: ["Flight Control", "Telemetry Systems", "Drone Assembly", "Payload Integration", "Aerial Imaging"],
        fullPrice: 32999, registrationFee: 4999
      }
    ]
  },
  {
    title: "Business & Management",
    icon: "briefcase",
    courses: [
      {
        id: "business-growth",
        title: "Business Growth Specialist",
        imageUrl: "https://i.postimg.cc/VkSt0YRX/Business_Growth_Specialist.png",
        description: "Strategies for scaling startups and technical entities.",
        duration: "3 Months",
        features: ["Marketing", "Sales", "Strategy"],
        modules: ["Customer Acquisition", "Growth Hacking", "Operational Scaling", "Venture Capital", "Branding"],
        fullPrice: 19999, registrationFee: 2499
      },
      {
        id: "stock-market",
        title: "Stock Market & Investment Training",
        imageUrl: "https://i.postimg.cc/wMLqYGcc/Stock_Market_Investment_Training.png",
        description: "Technical analysis and capital market protocols.",
        duration: "2 Months",
        features: ["Technical Analysis", "Options", "Forex"],
        modules: ["Price Action", "Derivative Strategies", "Risk Management", "Portfolio Balancing", "Market Psychology"],
        fullPrice: 12999, registrationFee: 1499
      },
      {
        id: "power-bi",
        title: "Power BI Mastery",
        imageUrl: "https://i.postimg.cc/dVB00gMj/Power_BI_Mastery.png",
        description: "Advanced data visualization and business intelligence reporting.",
        duration: "2 Months",
        features: ["DAX", "Data Modeling", "ETL"],
        modules: ["Dashboard Design", "Power Query", "Advanced Analytics", "Enterprise Reporting"],
        fullPrice: 11999, registrationFee: 1299
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing Strategies",
        imageUrl: "https://i.postimg.cc/pLn9XsW6/Digital_Marketing_Strategies.png",
        description: "Mastering the digital landscape for business visibility.",
        duration: "3 Months",
        features: ["SEO", "SEM", "Content Strategy"],
        modules: ["Social Media", "Paid Ads", "Analytics", "Email Marketing", "Brand Strategy"],
        fullPrice: 14999, registrationFee: 1999
      }
    ]
  }
];

export const MOCK_RESOURCES: LMSResource[] = [
  {
    id: '1',
    title: 'Intro to Full Stack Architecture',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: ASSETS.GALLERY.PLACEHOLDER_BASE + "it/400/225",
    category: 'Information Technology',
    date: '2023-10-15'
  }
];