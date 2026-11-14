import {
  Globe, AppWindow, Smartphone, Monitor, Boxes, Workflow, BarChart3, FileBarChart, Sparkles,
  HeartPulse, ShoppingCart, Building2, GraduationCap, Briefcase, Store, Settings2,
  ClipboardList, Search, PenTool, Code2, ShieldCheck, Rocket,
  Wrench, Users, Layers, TrendingUp, Handshake,
  Receipt, MessageSquareText, Stethoscope, LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "SmartGrowApp",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  tagline: "Turning Your Ideas Into Powerful Digital Solutions",
  description:
    "SmartGrowApp is a software development company delivering custom software, web and mobile applications, ERP and CRM solutions, business automation, and Power BI analytics.",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
};

export const SERVICES: Service[] = [
  { slug: "website-development", title: "Website Development", icon: Globe,
    summary: "Fast, polished, search-friendly websites that present your business with confidence.",
    items: ["Corporate websites", "Business websites", "Dynamic websites", "Responsive websites", "SEO-friendly websites", "Website redesign and modernization"] },
  { slug: "web-application-development", title: "Web Application Development", icon: AppWindow,
    summary: "Secure, scalable web applications built around the way your business actually works.",
    items: ["Custom business applications", "Enterprise applications", "Management portals", "Workflow applications", "Role-based applications", "API-integrated applications"] },
  { slug: "mobile-application-development", title: "Mobile Application Development", icon: Smartphone,
    summary: "Mobile experiences that keep your teams and customers connected on the go.",
    items: ["Android applications", "Business mobility solutions", "API-integrated mobile applications", "Cross-platform mobile solutions"] },
  { slug: "windows-application-development", title: "Windows Application Development", icon: Monitor,
    summary: "Reliable desktop software for billing, operations and database-driven workflows.",
    items: ["Desktop applications", "Billing applications", "Business management applications", "Database-driven applications", "Customized Windows software"] },
  { slug: "erp-crm-solutions", title: "ERP and CRM Solutions", icon: Boxes,
    summary: "Connected modules that bring operations, customers and people into one system.",
    items: ["Complete ERP solutions", "Customer Relationship Management", "Employee Management", "HR Management", "Inventory Management", "Business Process Management"] },
  { slug: "business-process-automation", title: "Business Process Automation", icon: Workflow,
    summary: "Remove repetitive manual work with automation that is dependable and easy to audit.",
    items: ["Workflow automation", "Email automation", "Approval automation", "Microsoft Power Automate", "Power Apps solutions", "API-based automation"] },
  { slug: "data-analytics-business-intelligence", title: "Data Analytics and Business Intelligence", icon: BarChart3,
    summary: "Turn raw data into clear insight your leadership can act on.",
    items: ["Data processing", "Data analysis", "Power BI dashboards", "Business intelligence solutions", "Management reports", "Data visualization"] },
  { slug: "reporting-solutions", title: "Reporting Solutions", icon: FileBarChart,
    summary: "Accurate, automated reports and dashboards tailored to every stakeholder.",
    items: ["Custom report development", "MIS reports", "Operational reports", "SSRS reporting", "Automated report generation", "Interactive dashboards"] },
  { slug: "ai-powered-solutions", title: "AI-Powered Solutions", icon: Sparkles,
    summary: "Practical AI and LLM integrations that make everyday business workflows smarter.",
    items: ["AI integration", "Intelligent document processing", "Email classification", "Sentiment analysis", "AI-assisted business workflows", "LLM-powered application development"] },
];

export const TECH_GROUPS = [
  { title: "Application Development", icon: Code2, items: ["C#", "ASP.NET Core", ".NET 8+", "MVC Architecture", "Web API / REST API"] },
  { title: "Data & Databases", icon: Layers, items: ["Microsoft SQL Server", "Entity Framework", "Dapper", "SSIS", "SSRS"] },
  { title: "Frontend Experience", icon: LayoutDashboard, items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"] },
  { title: "Analytics & Automation", icon: BarChart3, items: ["Python", "Pandas", "Power BI", "Power Platform", "Power Apps", "Power Automate"] },
  { title: "Intelligent Solutions", icon: Sparkles, items: ["Artificial Intelligence", "LLM integrations"] },
];

export const WHY = [
  { icon: PenTool, title: "Customized Solutions", text: "Software tailored to your business requirements." },
  { icon: Users, title: "Experienced Development Team", text: "Extensive experience across multiple technologies and domains." },
  { icon: Rocket, title: "End-to-End Development", text: "From requirement analysis to development, deployment, and support." },
  { icon: TrendingUp, title: "Scalable Architecture", text: "Applications designed for future business growth." },
  { icon: ShieldCheck, title: "Quality and Reliability", text: "Focus on performance, security, and usability." },
  { icon: Handshake, title: "Customer-Focused Approach", text: "Transparent communication and customer satisfaction." },
];

export const PROCESS = [
  { icon: ClipboardList, title: "Requirement Gathering", text: "We listen first, capturing goals, users and constraints." },
  { icon: Search, title: "Analysis and Planning", text: "Scope, architecture and milestones defined clearly." },
  { icon: PenTool, title: "UI/UX Design", text: "Intuitive interfaces designed around real workflows." },
  { icon: Code2, title: "Development and Integration", text: "Clean, maintainable code and seamless integrations." },
  { icon: ShieldCheck, title: "Testing and Quality Assurance", text: "Thorough testing for performance, security and usability." },
  { icon: Rocket, title: "Deployment and Support", text: "Smooth go-live followed by dependable ongoing support." },
];

export type Project = {
  title: string;
  category: string;
  icon: LucideIcon;
  overview: string;
  features: string[];
  tech: string[];
};

export const PROJECTS: Project[] = [
  { title: "Complete ERP Project", category: "Enterprise Software", icon: Boxes,
    overview: "Comprehensive enterprise management solution designed to streamline multiple business operations through centralized modules and workflows.",
    features: ["Centralized modules", "Role-based access", "Workflow approvals", "Management reporting"],
    tech: ["ASP.NET Core", "SQL Server", "SSRS"] },
  { title: "Billing Software", category: "Retail & Transactions", icon: Receipt,
    overview: "Customized billing and transaction management application designed to simplify business billing operations.",
    features: ["Invoice generation", "Transaction tracking", "Printable bills", "Sales reports"],
    tech: ["C#", "SQL Server", "Windows"] },
  { title: "CRM Application", category: "Customer Management", icon: Users,
    overview: "Customer relationship management system for tracking customer information, interactions, follow-ups, and business activities.",
    features: ["Customer records", "Interaction history", "Follow-up reminders", "Activity tracking"],
    tech: ["ASP.NET Core", "Web API", "SQL Server"] },
  { title: "Customer Survey Application", category: "Feedback & Analytics", icon: MessageSquareText,
    overview: "Digital survey solution for collecting customer feedback, managing responses, and generating analytical reports.",
    features: ["Survey creation", "Response management", "Analytical reports", "Export options"],
    tech: ["ASP.NET Core", "JavaScript", "Power BI"] },
  { title: "Medical Research Project", category: "Healthcare & Research", icon: Stethoscope,
    overview: "Specialized medical research application supporting structured data collection, research workflows, monitoring, and analytical reporting.",
    features: ["Structured data collection", "Research workflows", "Monitoring", "Analytical reporting"],
    tech: ["ASP.NET Core", "SQL Server", "Python"] },
  { title: "Business Management Applications", category: "Operations & Productivity", icon: Settings2,
    overview: "Customized applications developed to simplify business operations, manage information, and improve productivity.",
    features: ["Information management", "Process simplification", "Dashboards", "Custom modules"],
    tech: ["C#", "Power Apps", "SQL Server"] },
];

export const INDUSTRIES = [
  { icon: HeartPulse, title: "Healthcare and Medical Research", text: "Structured data capture, research workflows and clinical reporting." },
  { icon: ShoppingCart, title: "Retail and Billing", text: "Billing, inventory and point-of-sale style applications." },
  { icon: Building2, title: "Corporate and Enterprise Businesses", text: "ERP, workflow automation and enterprise integrations." },
  { icon: GraduationCap, title: "Education", text: "Management portals, records and reporting for institutions." },
  { icon: Briefcase, title: "Professional Services", text: "Client management, time tracking and document workflows." },
  { icon: Store, title: "Small and Medium Businesses", text: "Affordable, right-sized software that grows with you." },
  { icon: Wrench, title: "Business Operations and Management", text: "Operational dashboards, approvals and MIS reporting." },
];

export const BUDGETS = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "Above ₹10,00,000",
  "Not sure yet",
];

export const CONTACT_METHODS = ["Email", "Phone call", "WhatsApp", "Video meeting"];

export const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Other / Not sure yet"];
