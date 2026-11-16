export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "how-to-choose-custom-software-development-partner",
    title: "How to Choose the Right Custom Software Development Partner",
    description:
      "A practical checklist for businesses evaluating a custom software development company: requirements, technology, communication, ownership and support.",
    category: "Custom Software",
    date: "2026-11-16",
    readMinutes: 5,
    body: [
      { type: "p", text: "Choosing a software development partner is one of the most important decisions a growing business makes. The right partner helps you turn requirements into a reliable system. The wrong one leaves you with missed deadlines, unclear costs and software nobody wants to use. Here is a practical way to evaluate your options." },
      { type: "h2", text: "1. Start with your problem, not the technology" },
      { type: "p", text: "A good partner asks about your business before talking about frameworks. Be wary of anyone who proposes a solution after a five-minute call. Expect questions about who will use the software, which tasks it should simplify, how you work today and what success looks like in six months." },
      { type: "h2", text: "2. Check relevant experience" },
      { type: "p", text: "Ask what kinds of applications the team has built: business portals, billing systems, CRM or ERP modules, mobile apps, reports and dashboards. You are not looking for a famous client list. You are looking for evidence that they understand the type of system you need." },
      { type: "ul", items: ["Can they describe similar projects and the challenges involved?", "Do they work with a modern, supported technology stack?", "Can they integrate with the tools you already use, such as databases, email and APIs?"] },
      { type: "h2", text: "3. Insist on a clear process" },
      { type: "p", text: "Reliable teams follow a visible workflow: requirement gathering, analysis and planning, UI/UX design, development, testing and deployment. Ask how often you will see progress, how changes to scope are handled and who your point of contact is." },
      { type: "h2", text: "4. Plan for quality, security and scale" },
      { type: "p", text: "Software that works for ten users should not collapse at a hundred. Ask how the team handles testing, user roles and permissions, data validation and backups, and how the architecture can grow with your business." },
      { type: "h2", text: "5. Confirm ownership and support" },
      { type: "ul", items: ["Who owns the source code and the data when the project is complete?", "Is documentation provided so another developer could maintain it?", "What happens after go-live: bug fixes, updates and enhancements?"] },
      { type: "h2", text: "6. Look at communication" },
      { type: "p", text: "Early conversations predict the whole project. Prompt, transparent and honest answers, including about what is hard or what you should not build yet, are a good sign." },
      { type: "h2", text: "Next step" },
      { type: "p", text: "If you are planning a project and want a second opinion on scope or approach, SmartGrowApp is happy to discuss your requirements with no obligation." },
    ],
  },
  {
    slug: "erp-vs-crm-which-does-your-business-need-first",
    title: "ERP vs CRM: Which Does Your Business Need First?",
    description:
      "Understand the difference between ERP and CRM software, what each one solves, and how to decide which to implement first.",
    category: "ERP & CRM",
    date: "2026-11-16",
    readMinutes: 5,
    body: [
      { type: "p", text: "ERP and CRM are often mentioned together, and the terms are easy to confuse. Both organize business information, but they focus on different parts of your operations. Knowing the difference helps you invest in the right system first." },
      { type: "h2", text: "What a CRM does" },
      { type: "p", text: "Customer Relationship Management (CRM) software focuses on everything about your customers and prospects: contact details, conversations, follow-ups, enquiries, quotations and sales activity. Its goal is to help you win and keep customers." },
      { type: "ul", items: ["Central customer and lead records", "Follow-up reminders and activity history", "Sales pipeline visibility", "Customer-facing reports"] },
      { type: "h2", text: "What an ERP does" },
      { type: "p", text: "Enterprise Resource Planning (ERP) software connects the internal operations of a business: inventory, purchasing, billing and accounts, HR, and reporting. Its goal is to make operations consistent, accurate and visible." },
      { type: "ul", items: ["Inventory and stock movement", "Purchasing, sales and billing", "HR and employee management", "Management and MIS reporting"] },
      { type: "h2", text: "Which should come first?" },
      { type: "p", text: "There is no universal answer, but these questions help:" },
      { type: "ul", items: ["If your biggest pain is losing track of leads, enquiries and follow-ups, start with a CRM.", "If your biggest pain is stock errors, billing delays or scattered spreadsheets, start with ERP modules for those areas.", "If both hurt, build in phases so modules share the same database and can later be connected."] },
      { type: "h2", text: "Do you need an off-the-shelf product or custom software?" },
      { type: "p", text: "Off-the-shelf tools are quick to start, but they may force you to change how you work. Custom ERP or CRM modules fit your processes exactly and grow with you, which is often the better choice when your workflows are unique." },
      { type: "h2", text: "A phased approach works best" },
      { type: "p", text: "Rather than a large, risky project, begin with the modules that solve the most painful problems, prove value, and expand. A well-designed architecture makes it easy to add modules later." },
    ],
  },
  {
    slug: "business-processes-you-can-automate-with-power-automate",
    title: "Business Processes You Can Automate with Power Automate",
    description:
      "Practical examples of workflows, approvals and email processes that can be automated with Microsoft Power Automate and Power Apps.",
    category: "Automation",
    date: "2026-11-16",
    readMinutes: 4,
    body: [
      { type: "p", text: "Many teams lose hours every week to repetitive tasks: copying data between files, chasing approvals, sending the same email again and again. Microsoft Power Automate and Power Apps are designed to remove this manual work using flows that run automatically." },
      { type: "h2", text: "1. Approval workflows" },
      { type: "p", text: "Leave requests, purchase requests and document approvals can be routed to the right person, with reminders and a clear record of who approved what and when." },
      { type: "h2", text: "2. Email notifications and follow-ups" },
      { type: "p", text: "Send automatic confirmations, reminders and status updates when something changes, for example when a form is submitted or a task is overdue." },
      { type: "h2", text: "3. Data collection and form processing" },
      { type: "p", text: "Capture form responses, store them in a database or spreadsheet, and notify the right team automatically, with no manual copying." },
      { type: "h2", text: "4. Report generation and distribution" },
      { type: "p", text: "Refresh reports on a schedule and send them to managers automatically, so everyone sees current numbers without asking." },
      { type: "h2", text: "5. Connecting your systems" },
      { type: "p", text: "Flows can connect applications through APIs, passing data between your business software, so the same information is not typed twice." },
      { type: "h2", text: "How to start" },
      { type: "ul", items: ["List repetitive tasks that follow clear rules.", "Pick one with a visible time cost and a defined outcome.", "Automate it, measure the result, then expand."] },
      { type: "p", text: "Automation works best when the process is understood first. If you are unsure where to begin, a short requirements discussion can identify the best candidates." },
    ],
  },
  {
    slug: "power-bi-dashboard-planning-checklist",
    title: "Power BI Dashboards: What to Plan Before You Build",
    description:
      "A planning checklist for Power BI dashboards: defining questions, preparing data, choosing visuals and keeping reports useful.",
    category: "Analytics & BI",
    date: "2026-11-16",
    readMinutes: 4,
    body: [
      { type: "p", text: "A dashboard is only useful if it helps someone make a decision. Many Power BI projects struggle not because of the tool, but because the planning was skipped. This checklist helps you avoid that." },
      { type: "h2", text: "1. Define the questions first" },
      { type: "p", text: "Ask who will use the dashboard and which decisions they need to make. A sales manager and a finance head need different views, even from the same data." },
      { type: "h2", text: "2. Know your data sources" },
      { type: "ul", items: ["Where does the data live: databases, spreadsheets or applications?", "How often does it change, and how fresh must the dashboard be?", "Who is responsible for data accuracy?"] },
      { type: "h2", text: "3. Clean and model the data" },
      { type: "p", text: "Most of the effort is preparing data: removing duplicates, standardizing values and building a sensible model with relationships. A strong data model makes every report faster and easier to maintain." },
      { type: "h2", text: "4. Choose visuals that answer questions" },
      { type: "p", text: "Use simple charts for comparisons and trends, tables for detail, and a small number of key figures at the top. Avoid crowding a page with every possible chart." },
      { type: "h2", text: "5. Plan for access and refresh" },
      { type: "p", text: "Decide who can see what, how data refreshes automatically and how the dashboard will be maintained as the business changes." },
      { type: "h2", text: "Where SmartGrowApp can help" },
      { type: "p", text: "From data processing and Python or SQL preparation to Power BI dashboards and SSRS reports, we help turn raw data into reports people actually use." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
