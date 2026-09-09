/* =====================================================================
   YOUR PORTFOLIO CONTENT
   =====================================================================
   This is the ONLY file you need to edit to update your website.
   Change the text between the quotes " " and save — refresh the page
   to see it live. Don't touch index.html, style.css, or script.js
   unless you want to change the design/layout itself.

   RULES TO AVOID BREAKING THINGS:
   - Keep the quotes " " around every piece of text.
   - Keep the commas , at the end of each line inside a list.
   - If a list has square brackets [ ], keep the brackets.
   - To add a new project/award/skill/certification, copy an existing
     block (the part between { and }), paste it, and edit the text.
   - To remove one, delete its whole { ... } block (and the comma
     before or after it, so you don't end up with two commas in a row).
   - Image/PDF filenames must be just the filename (e.g. "photo.jpg"),
     NOT a full computer path like "E:\Folder\photo.jpg" — the file
     just needs to sit in this same folder as index.html.
   ===================================================================== */

const PORTFOLIO_DATA = {

  meta: {
    siteTitle: "Md. Ferdaous Al-Farabe — Portfolio",

    // The "Projects" number on the homepage stat bar is normally
    // auto-counted (academicProjects + formulaStudentProjects).
    // Set a number here to override it manually instead — e.g. the
    // Crack Platoon entry covers both Formula Bharat and FS
    // Switzerland, so it's being counted as 2 projects.
    // Leave as 0 (or delete this line) to go back to auto-count.
    projectsCountOverride: 5,
  },

  // ---------------------------------------------------------------
  // HERO (top of the page)
  // ---------------------------------------------------------------
  hero: {
    eyebrow: "Prospective PhD Applicant",
    name: "Md. Ferdaous Al-Farabe",
    role: "Industrial & Production Engineer",
    address: "Mymensingh 2230, Bangladesh",
    tagline: "I work at the intersection of Artificial Intelligence, Machine Learning, and mathematical optimization, building data-driven, decision-support approaches to real supply chain and production problems. Right now I'm focused on Flexible Job Shop Scheduling, and on how Reinforcement Learning can be brought into that space alongside new algorithm development.",
    interestLine: "Research interests: AI & Machine Learning · Reinforcement Learning · mathematical optimization · operations research · supply chain analytics",

    // Put your photo file in this same folder and it will show here.
    photo: "photo.jpg",

    // Filename of your video CV (put the file in this same folder).
    // Leave as "" for now — the button will show "coming soon".
    videoCV: "",

    // Buttons under the intro text. "videoTrigger: true" makes a
    // button open the video popup instead of acting as a normal link.
    actions: [
      { label: "Download CV", url: "CV_Md_Ferdaous_Al-Farabe.pdf", primary: true },
      { label: "Watch Video CV", videoTrigger: true, primary: false },
      { label: "Email Me", url: "mailto:faraberuet@gmail.com", primary: false },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/farabe-ruet", primary: false },
    ],
  },

  // ---------------------------------------------------------------
  // ABOUT / BIO
  // NOTE: paragraphs can contain simple HTML like <strong> and
  // <a href="...">...</a> — that's how "RUET" and the supervisor
  // name are made bold/clickable. Close every tag you open.
  // ---------------------------------------------------------------
  about: {
    paragraphs: [
      'This is Md. Ferdaous Al-Farabe. I recently completed my B.Sc. in Industrial &amp; Production Engineering at <strong><a href="https://www.ruet.ac.bd/" target="_blank" rel="noopener">Rajshahi University of Engineering &amp; Technology (RUET)</a></strong> in August 2026, with a CGPA of 3.53/4.00.',
      "My work sits at the intersection of Artificial Intelligence, Machine Learning, and mathematical optimization, building data-driven, decision-support approaches to real supply chain, manufacturing, and scheduling problems. Right now I'm focused on Flexible Job Shop Scheduling, and on how Reinforcement Learning can be brought into that space alongside new algorithm development.",
      'My undergraduate thesis, supervised by <a href="https://www.ruet.ac.bd/nahar" target="_blank" rel="noopener"><strong>Khairun Nahar</strong></a>, models the university course scheduling problem as a <strong>Flexible Job Shop Scheduling Problem (FJSSP)</strong> and solves it using a criticality-guided memetic NSGA-II for multi-objective, Pareto-optimal scheduling.',
      "Alongside academics, I've completed an internship at Akij Bathware Limited, served as Secretary of the RUET IPE Club, and led cost planning for the university's Formula Student team. Full details on each are in the sections below.",
    ],
  },

  // ---------------------------------------------------------------
  // PHOTO GALLERY — auto-sliding slideshow shown right under the hero.
  // For each photo: put the image file in this same folder, then
  // write its filename in "src" — just the filename, not a full
  // computer path. Add/remove entries freely.
  // ---------------------------------------------------------------
  gallery: [
    { src: "ruet_pic.jpg", kicker: "Thesis Defense", caption: "A photo from the day of my undergraduate thesis defense, a memorable milestone after months of hard work and preparation." },
    { src: "picture_department.jpg", kicker: "Departmental Viva", caption: "A photo taken on the day of my 2nd year departmental board viva." },
    { src: "conf_1st.jpg", kicker: "First Research Presentation", caption: "A photo from ICMIME 2024, alongside my supervisor, the day I presented my first research paper. This conference marked the first step of my research journey and remains one of the most memorable days for me." },
    { src: "tesla_colab.png", kicker: "In Collaboration with Tesla", caption: "The inauguration ceremony of a battery pack provided by <strong>Tesla</strong>, which our Formula Student team will use in our new car, celebrated together with our team's supervisors and advisors." },
    { src: "unilever_1.jpg", kicker: "Event Organizer", caption: "Organized Unilever Bangladesh's \"Learn to Lead\" session on behalf of the <strong>RUET IPE Club</strong>, bringing together 200+ participants." },
  ],

  // ---------------------------------------------------------------
  // RESEARCH — published / under-review / submitted papers.
  // ---------------------------------------------------------------
  research: [
    {
      tag: "Under Review — Computers and Operations Research (Elsevier)",
      title: "Criticality-Guided Memetic NSGA-II for University Course Timetabling: A Multi-Objective Flexible Job Shop Scheduling Approach",
      description: "Models university course timetabling as a multi-objective Flexible Job Shop Scheduling Problem and proposes a Criticality-Guided Memetic NSGA-II, achieving up to 44.6% better makespan than standard NSGA-II.",
      fullAbstract: "University course timetabling remains a computationally challenging problem when formulated with realistic, competing objectives such as minimizing the makespan, balancing student workload, and maximizing classroom utilization. This study models the University Course Timetabling Problem as a multi-objective Flexible Job Shop Scheduling Problem (UCTP-FJSP) and proposes a Criticality-Guided Memetic NSGA-II (CGM-NSGA-II) to solve it. The proposed algorithm extends the standard NSGA-II with three interdependent components: a criticality-guided population initialization and mutation scheme that biases the search toward operations on the schedule's critical path, and a memetic local-search repair step that actively exploits this guidance. A dedicated benchmark suite of ten instances (UCTP-01 to UCTP-10) of increasing size was developed, and the proposed algorithm was compared against a Plain NSGA-II baseline and three established multi-objective metaheuristics (MOEA/D, MOPSO, and SPEA2) over ten independent runs per instance. A Taguchi-based sensitivity analysis was conducted to justify the algorithm's parameter settings prior to the main experiments. Results show that CGM-NSGA-II achieves the best average Inverted Generational Distance on all ten instances and the best average Hypervolume on nine of the ten instances among the five algorithms compared, and reduces the best achieved makespan by 10.9%–44.6% relative to the Plain NSGA-II baseline. A progressive ablation study with paired Wilcoxon signed-rank testing further shows that the criticality-guided components act synergistically rather than additively: neither guided initialization nor guided mutation alone yields a statistically significant improvement, while their combination with the memetic local-search repair does so consistently across all instances. The findings demonstrate that incorporating scheduling-specific criticality information and local search into an evolutionary framework can substantially improve the quality, convergence, and robustness of multi-objective university timetabling solutions.",
      tools: ["NSGA-II", "Memetic Algorithm", "FJSP", "MOEA/D", "MOPSO", "SPEA2"],
      links: [
        { label: "View on SSRN →", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7322879" },
      ],
    },
    {
      tag: "Submitted — ICCIT 2026, IEEE Bangladesh Section",
      title: "ANN-Based Indoor Thermal Comfort Prediction and Monitoring System",
      description: "Built an ensemble ANN model to predict indoor thermal comfort (PMV/PPD) in real time, paired with an ESP32-based sensor prototype and web dashboard.",
      fullAbstract: "Thermal comfort in an indoor environment is not solely determined by a single parameter, the ambient temperature, but by interaction between air temperature, relative humidity, air velocity, mean radiant temperature, metabolic rate, and clothing insulation. This study develops an ensemble of Artificial Neural Networks (ANNs) to predict thermal comfort in a quick and real-time manner. The data was cleaned, split, and scaled using feature-specific methods for training three ANN models that predict the Predicted Mean Vote (PMV). The Predicted Percentage of Dissatisfied (PPD) was derived from PMV using the PMV-PPD relationship defined by ISO 7730. The most important features, discovered via hyperparameter optimization and feature-importance analysis, were air temperature and clothing insulation. The ensemble model achieved R-squared of 0.9176, MAE of 0.2120, and RMSE of 0.3585 for PMV, and R-squared of 0.8546, MAE of 5.384%, and RMSE of 10.773% for PPD. Bootstrapped confidence intervals and an independent 30-sample CBE cross-validation confirmed that the model is reliable across the PMV range, with some uncertainty at the extremes of the cold condition regime. A real-time prototype was built with an ESP32 microcontroller, a DHT22 sensor, a TFT display, and a web dashboard based on the developed model to find the comfort level at a specific indoor point. The sensor measured temperature and humidity and mean radiant temperature; remaining inputs were entered via the web dashboard. The model then outputs PMV, PPD, and Thermal Sensation Category (TSC) in real time, offering an alternative to traditional PMV monitoring for smart indoor environment applications.",
      tools: ["Artificial Neural Networks", "ESP32", "IoT", "ISO 7730"],
      links: [
        { label: "Conference Website →", url: "https://iccit.org.bd/2026/" },
      ],
    },
    {
      tag: "Published — DOI: 10.46254/BA07.20240187",
      title: "Integrating Demand Forecasting and EOQ for Inventory Management in the Pharmaceutical Sector",
      description: "Combined demand forecasting with EOQ modeling to optimize inventory decisions for a key pharmaceutical drug, achieving a 0.0006 stockout probability.",
      fullAbstract: "Effective inventory management is critical in the pharmaceutical sector, where the availability of essential medications directly impacts patient care. This study investigates the integration of demand forecasting techniques and inventory optimization to improve supply chain efficiency, focusing on GLYMIN, a vital drug for managing type 2 diabetes. Two forecasting methods, Exponential Smoothing and Linear Regression, were evaluated using sales data. Linear Regression had fewer errors, with 771.04 MAD, 766,666.29 MSE, and 4.32% MAPE. The study incorporates Linear Regression forecasts into an Economic Order Quantity (EOQ) model to determine optimal inventory parameters, such as safety stock, reorder levels, and average inventory. Sensitivity analysis and Monte Carlo simulations were conducted to assess the impact of lead time and demand variability on inventory costs and stockout probabilities; stockout probability was found to be 0.0006. The proposed framework offers a scalable approach for other medications and contexts, though it is constrained by the size and scope of the dataset, suggesting future work could benefit from larger datasets and hybrid forecasting models to capture seasonality and nonlinear trends.",
      tools: ["Demand Forecasting", "EOQ", "Monte Carlo Simulation", "Inventory Management"],
      links: [
        { label: "View DOI →", url: "https://doi.org/10.46254/BA07.20240187" },
      ],
    },
    {
      tag: "Published — ResearchGate",
      title: "Advancing Retail Experience with Smart Shopping Carts: A Design Process Perspective for Bangladesh",
      description: "Designed an RFID- and IoT-based smart shopping cart to reduce checkout lines and improve inventory management in Bangladeshi supermarkets, using the Kano Model and QFD for product development.",
      fullAbstract: "Supermarkets are becoming the preferred choice for basic needs due to modernization and urbanization. Tracking product sales and issuing receipts are crucial for store officials. This work addresses two significant issues in Bangladeshi supermarkets: long checkout lines and efficient inventory management. A smart shopping cart system that records purchased items and facilitates online payments using Radio Frequency Identification (RFID) technology and Arduino is incorporated in this work. RFID technology automates billing by reading RFID tags attached to each product with a sensor on the cart. IoT facilitates real-time communication by connecting the smart cart to the store's network and delivers product and payment data to a store system. The Kano Model and Quality Function Deployment (QFD) are employed to develop the product, focusing on customer satisfaction with RFID technology with automatic billing, built-in scanners, and rechargeable battery, while also prioritizing cost minimization and improving software integration and inventory management. Stress and thermal analyses ensured durability and safety in product design. This smart cart can improve customer experience by reducing wait times and increasing operational efficiency.",
      tools: ["RFID", "IoT", "Arduino", "Kano Model", "QFD"],
      links: [
        { label: "View on ResearchGate →", url: "https://www.researchgate.net/publication/393018710_Advancing_Retail_Experience_with_Smart_Shopping_Carts_A_Design_Process_Perspective_for_Bangladesh" },
      ],
    },
  ],

  // ---------------------------------------------------------------
  // ACADEMIC PROJECTS — thesis, coursework, and academic/product
  // projects (separate from published Research above and from
  // Internship Experience below).
  // ---------------------------------------------------------------
  academicProjects: [
    {
      tag: "Machine Learning Project",
      title: "Energy-Aware Production Optimizer",
      description: "A machine learning framework that optimizes manufacturing yield and energy consumption simultaneously, achieving 98.3% F1 for yield prediction and 99.8% R² for energy forecasting.",
      fullAbstract: "A single public dataset with both yield and energy signals from the same factory wasn't available, so I took two datasets from different industries, SECOM's semiconductor sensor data and a Steel Industry energy dataset, and treated them as if they belonged to one imagined factory. The goal was to demonstrate that yield and energy consumption can be optimized simultaneously rather than as two separate problems. On the yield side, I trimmed 562 sensor features down to 100 using SelectKBest, handled a 93:7 imbalanced pass/fail ratio with SMOTE, and trained an XGBoost/LightGBM model that reached 98.3% F1. On the energy side, the forecasting model achieved 99.8% R² with just 0.677 kWh of error. I then ran an Optuna-based Pareto analysis across both models to identify the operating points with the best yield-energy trade-off, added SHAP for interpretability, and built an interactive Streamlit dashboard so users can tune sensor parameters, forecast energy use, and explore the yield-energy trade-off in real time.",
      limitations: "Since the yield and energy data come from two unrelated industries rather than one real factory, the relationship between them in this project is simulated, not observed — this is a proof-of-concept framework, not a validated deployment. The SECOM dataset is also relatively small and dated, which limits how well the yield model generalizes to a modern production line.",
      futureScope: "The natural next step is to apply the same pipeline to a real facility's paired sensor and energy data once such a dataset is available, replacing the simulated relationship with an observed one. I'd also like to extend the optimizer to a full multi-objective search (adding cost and downtime as objectives alongside yield and energy) and add live sensor ingestion so the dashboard can run on streaming data instead of static datasets.",
      cover: "poster_1.png",
      images: ["dashboard_ml_1.png", "dashbaord_ml_2 (1).png", "dashbaord_ml_3.png", "dasboard_ml_4.png", "pareto_optimization.png"],
      tools: ["XGBoost", "LightGBM", "Optuna", "SHAP", "Streamlit"],
      links: [
        { label: "Live Demo →", url: "https://energy-yield-optimizer.streamlit.app" },
        { label: "GitHub →", url: "https://github.com/Farabe2320/energy-yield-optimizer" },
      ],
    },
    {
      tag: "Product Development",
      title: "Smart Shopping Cart",
      description: "A working RFID-based smart cart prototype that auto-detects scanned items and shows a running bill in real time, built with four teammates from concept to a functioning physical prototype.",
      fullAbstract: "This was a group project with four teammates, Punno Saha, Rafiul Islam, Ratul Joy, and Nahid, where we set out to rethink the standard supermarket cart around RFID-based item detection, automatic billing, and a live digital display, so shoppers wouldn't have to queue up for manual barcode scanning. <strong>On this project, I worked on the product design, ran the stress, strain, thermal, and factor-of-safety simulations, and set up the electrical and electronics side, wiring the Arduino Nano to the EM-18 RFID reader and the 20x4 I2C LCD and getting it running on a rechargeable battery pack.</strong> For the frame, we chose High Strength Low Alloy steel through the Digital Logic material-selection method and had it welded to match the design, and we worked out a full cost model covering the bill of materials, fixed and variable costs, and a break-even analysis, landing on a per-unit cost of about 17,673 Taka against a 20,000 Taka selling price.",
      limitations: "The current build is a standalone prototype. It isn't connected to a live store inventory or POS system yet, so item data has to be pre-loaded instead of pulled from real stock. RFID read range and misreads under bag or product occlusion also haven't been stress-tested at scale.",
      futureScope: "Next steps include connecting the cart to a real store's inventory and POS backend for live stock sync, adding a companion mobile app for digital receipts and loyalty tracking, and piloting a small fleet of carts in an actual supermarket to test RFID reliability and the cost model against real usage.",
      // Headline image shown on the card.
      cover: "scientific-poster-maker.png",
      // Extra photos shown in the "View Project Details" gallery.
      images: ["pd_1.jpg", "pd_2.jpg", "pd_3.jpg"],
      // PPTX presentation — filename below must exactly match the file
      // you place in this same folder (case-sensitive, spaces included).
      // NOTE: the in-page "View Presentation" viewer only works once
      // the site is deployed live (e.g. GitHub Pages) — it can't load
      // the file from your local drive. Download always works though.
      pptx: "Product Design (Group-2).pptx",
      tools: ["RFID", "Arduino Nano", "IoT", "QFD", "Kano Model", "Cost Analysis"],
      links: [],
    },
    {
      tag: "Product Development · Team Project",
      title: "Conveyor Belt with Automated Storage and Retrieval System (ASRS)",
      description: "We built a compact Automated Storage and Retrieval System that pairs a conveyor belt with color sensing and fault detection, sorting and storing objects automatically without any manual handling.",
      fullAbstract: "This was a group project with five teammates, <strong>Punno Chandra Saha</strong>, <strong>Md. Rafiul Islam</strong>, <strong>Habibur Rahman Alamin</strong>, <strong>Iftekharul Islam Nahid</strong>, and <strong>Rupok Islam Avi</strong>, where we built a miniaturized ASRS that pairs a conveyor belt with color detection and fault detection to automate the sorting and storage of objects. <strong>On this project, I worked on the sensor logic and calibration, wrote the control code, and handled the technical documentation.</strong> The system runs on a low-cost microcontroller wired to IR sensors, a color sensor, and servo and gear motors: as an object moves along the belt, the color sensor reads it, the controller decides which bin it belongs to, and a servo routes it there, with a buzzer sounding once a bin fills up. We built and tested the prototype across two development phases, backed by a full cost analysis and a working circuit, aiming to show that the manual sorting and storage still common in small-scale industries and labs, which quietly eats into labor cost, accuracy, and space, can be automated affordably.",
      limitations: "As a low-cost, miniaturized prototype, the system currently sorts by a limited set of colors and depends on fairly consistent lighting for reliable color detection. Motor torque and belt capacity are sized for lightweight objects, and each storage bin has a fixed capacity that needs manual emptying once full.",
      futureScope: "Planned extensions include scaling the system up for higher-capacity, industrial-style use, expanding color/object classification to a wider range of items, and adding IoT connectivity for remote monitoring and inventory tracking.",
      cover: "conveyor-6.png",
      images: ["conveyor-1.jpg", "conveyor-2.jpg", "conveyor-3.jpg", "conveyor-4.jpg", "conveyor-5.png"],
      pptx: "conveyor.pptx",
      tools: ["ESP32 / Arduino", "TCS3200 Color Sensor", "IR Sensor", "Servo & DC Motors", "PCB Design", "Automation"],
      links: [
        { label: "GitHub →", url: "https://github.com/rupokavi/automated_storage-Retrieval_system" },
      ],
    },
  ],

  // ---------------------------------------------------------------
  // FORMULA STUDENT PROJECTS — shown as a separate column next to
  // Academic Projects. Uses the exact same card shape (tag, title,
  // description, fullAbstract, limitations, futureScope, cover,
  // images, pptx, tools, links) as academicProjects above.
  // ---------------------------------------------------------------
  formulaStudentProjects: [
    {
      tag: "Formula Student Team · RUET",
      title: "Team Crack Platoon — Business & Cost",
      description: "Cost lead for Bangladesh's first Formula Student team, building the full cost report and BOM for our 2024 competition entry after starting out as a Business Team member two years earlier.",
      fullAbstract: "I joined Team Crack Platoon, Bangladesh's first Formula Student team and the country's first team to build a fully electric formula car, in March 2023 as a Business Team Member. In September 2024 I was promoted to Head of Cost, a role I held through June 2025.<br><br>As Head of Cost, I prepared the full Cost Report, Cost Supplement, and Bill of Materials (BOM) for every subsystem of our formula electric vehicle E33, covering chassis, drivetrain, brakes, suspension, and electrical, ahead of Formula Bharat 2024. I ran make vs buy analysis, material costing, and manufacturing feasibility evaluations aligned with Formula Student regulations, and put together our Concept Resource Management (CRM) report, breaking down resource allocation and manufacturing feasibility for the competition judges.<br><br>I also built out three-statement financial modeling (income statement, balance sheet, and cash flow projections) to support the team's business case, and brought in my operations research background to apply Multi-Criteria Decision Making (MCDM) for material and vendor selection, weighing cost, weight, and manufacturability against each other instead of optimizing for cost alone.<br><br><strong>Our business plan presentation went on to place 10th internationally at Formula Bharat 2024, among competitors from around the world.</strong> I wasn't able to travel to India for the competition myself since I didn't have a passport at the time, but I stayed fully involved in the cost and business planning work the team carried into the event.<br><br>Alongside Formula Bharat, I also worked on the team's submission for an online Business Case Competition run by Formula Student Switzerland, where our team was scored and shortlisted in the finalist announcement among international university teams.",
      // Role history shown as a small timeline in the detail view.
      timeline: [
        { role: "Business Team Member", period: "Mar 2023 – Sep 2024", description: "Joined the business side of the team, including its Recruitment 4.0 cycle, and started out on early cost and planning work." },
        { role: "Head of Cost", period: "Sep 2024 – Jun 2025", description: "Promoted to lead cost reporting and the BOM for the team's Formula Bharat 2024 entry, the E33 electric vehicle." },
      ],
      // Headline image shown on the card.
      cover: "crack-platoon-cover.jpg",
      // "grid" = show every photo below fixed/side-by-side, no slideshow.
      galleryLayout: "grid",
      images: [
        { src: "recruitment-result.jpg", caption: "Recruitment 4.0 Results — Business Team" },
        { src: "fs-japan-2019.jpg", caption: "Team seniors at Formula SAE Japan, 2019" },
        { src: "fs-poland-2023.jpg", caption: "Meet FS Poland 2023 Teams" },
        { src: "team-crack-platoon-group.jpg", caption: "Team Crack Platoon" },
        { src: "team-e33-chassis.jpg", caption: "The E33 chassis with the team" },
        { src: "formula-bharat-2024-team.jpg", caption: "At Formula Bharat 2024" },
        { src: "formula-bharat-10th-place.jpg", caption: "10th place, Business Plan Presentation" },
        { src: "fs-switzerland-finalists.jpg", caption: "FS Switzerland business plan finalists" },
        { src: "channel24-feature.jpg", caption: "Featured on Channel 24 News" },
      ],
      // Add a pptx filename here (same folder) once you send the
      // Business Case Competition slides, e.g. "crack-platoon-business-case.pptx"
      tools: ["Cost Reporting", "BOM Management", "CBOM", "Financial Modeling", "Multi-Criteria Decision Making (MCDM)", "Make vs Buy Analysis", "Business Plan Presentation", "MS Excel"],
      links: [
        { label: "Formula Bharat 2024 Results →", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWxOOvRLoBW9IBhtHjsI0diRfidpsUgv6PG8kGBfULonxjcH7N4k5GOFBvOwYC-mPO0W5hD1i_1kIE/pubhtml?gid=1543385248&single=true" },
        { label: "FS Switzerland Business Plan Results →", url: "https://formulastudent.ch/Docs/FSCH23_Announcement_07-07_1003_Overall.pdf" },
      ],
    },
  ],

  // ---------------------------------------------------------------
  // INTERNSHIP EXPERIENCE
  // "images" — add filenames here (put the files in this folder)
  // for a mini slideshow at the top of the card, e.g.
  // images: ["akij-1.jpg", "akij-2.jpg"]
  // ---------------------------------------------------------------
  projects: [
    {
      tag: "Industrial Trainee · March 2025 – April 2025",
      title: "Akij Bathware Limited",
      description: "A one-month industrial attachment observing five production stages across different product types, from the foundry to final assembly.",
                  fullAbstract: 'This internship was part of my undergraduate coursework, a course called <strong>Industrial Practice</strong> worth <strong>2.00 credits</strong>, which requires every student to spend a month at a production factory. Out of about <strong>60 students</strong> in my class, <strong>12 of us</strong> went on attachment to the <strong><a href="https://akijbashir.com/" target="_blank" rel="noopener">Akij Bashir Group of Industries</a></strong>, where we were further split into three subgroups across different plants. My subgroup, just myself and my teammate <strong>Idrak Al Rakin</strong>, was assigned to <strong>Akij Bathware Limited</strong>, the makers of ROSA, Akij Group\'s premium faucet and bathware brand launched in October 2022. Together, we spent our month walking the floor across all five core sections, foundry, machining, grinding and polishing, electroplating, and assembly, getting hands-on exposure to how different types of products move through each stage rather than following just one item end to end. In the foundry, I looked closely at the sand core-making and gravity die-casting process and pulled a full day\'s casting defect log to find where <strong>blow holes, cold shuts, and porosity</strong> were actually coming from, then traced those back to preheating and gating issues. In machining, I ran a proper time study across the CNC and manual lathes and found that manual operations were consistently the slower, more defect-prone step compared to the CNC lines, and that quality checks were still done almost entirely by hand, quietly adding to the delay. Grinding and polishing turned out to be the real bottleneck: a takt-time analysis showed high idle time on several grinding machines even though the section had <strong>19 manual grinders and only one robotic one</strong>, so I proposed a layout change and splitting the dual-side polishing machines to cut down on unnecessary transitions between the two steps. Across the whole plant, I also noticed that although 5S signage was everywhere, there was no real system to audit or sustain it, so I built a <strong>5S audit sheet</strong> that the plant went on to adopt, and it worked well enough that the plant head started a monthly prize-giving ceremony based on each department\'s 5S score.',
      grade: "A-",
      cover: "akij-bathware-cover.jpg",
      images: ["akij-bathware-cover.jpg", "akij-with-officials.jpg", "akij-attachment-started.jpg", "akij-foundry-process.png", "akij-casting-defects-table.png", "akij-casting-defects-photos.png", "akij-machining-section.png", "akij-grinding-polishing-setup.png", "akij-machine-underutilization.png", "akij-5s-audit-sheet.png"],
      pptx: "akij-bathware-internship.pdf",
      tools: ["Time & Motion Study", "Root Cause Analysis", "5S", "Lean Manufacturing", "OEE"],
      links: [
        { label: "Company Website →", url: "https://akijbashir.com/" },
      ],
    },
  ],

  // ---------------------------------------------------------------
  // SKILLS
  // ---------------------------------------------------------------
  skills: {
    groups: [
      {
        name: "AI, ML & Optimization",
        items: ["Machine Learning", "Reinforcement Learning", "Multi-Objective Optimization", "NSGA-II", "Operations Research"],
      },
      {
        name: "Technical Tools",
        items: ["MS Excel (Pivot Tables, XLOOKUP, VBA)", "Python (Pandas)", "Power BI", "SQL", "MS PowerPoint"],
      },
      {
        name: "Manufacturing & Quality",
        items: ["Lean Six Sigma", "5S", "Process Mapping", "Root Cause Analysis"],
      },
      {
        name: "Interpersonal",
        items: ["Team Collaboration", "Leadership", "Analytical Thinking", "Negotiation & Communication", "Adaptability"],
      },
    ],
  },

  // ---------------------------------------------------------------
  // EXTRACURRICULAR & LEADERSHIP
  // ---------------------------------------------------------------
  activities: [
    {
      title: "Secretary (Admin) — RUET IPE Club",
      meta: "2022 – 2026",
      description: "Executive Committee member since 2022, promoted from general member to Assistant Secretary (Admin) and then Secretary (Admin) based on continuous performance assessment — organizing CRACKERJACK 2.0, growing the club's LinkedIn presence, and leading knowledge sessions before handing over the role at the 2026 Annual General Meeting.",
      fullAbstract: "I joined the RUET IPE Club's Executive Committee in <strong>2022</strong> as a general Executive Member. Based on continuous assessment of my work and involvement, I was promoted to <strong>Assistant Secretary (Admin)</strong> for the <strong>2024–25</strong> term. My biggest undertaking that year was <strong>CRACKERJACK 2.0</strong>, a national case competition that drew in <strong>100+ universities and 300+ teams</strong>, running from the SheSTEM fireside-chat launch event all the way through to the Grand Finale on <strong>19 April 2025</strong>. Organizing something at that scale meant coordinating logistics, sponsors, and volunteers over months, and being ready to solve problems in real time once the event itself was underway. Around the same period, I co-organized Unilever's \"Learn to Lead\" leadership development program with the rest of the club team, and separately led <strong>Brainwave</strong>, an interdepartmental case competition for <strong>80 participants</strong>, where I handled the full event planning and facilitation myself. I also represented the club at the Annual General Meeting 2024 and at \"Clean Air Starts From Us,\" an educational session on air pollution.<br><br>Based on that year, I was promoted again, this time to <strong>Secretary (Admin)</strong> for the <strong>2025–26</strong> Executive Committee. In this role, I took charge of the club's LinkedIn page, and steadily built up its content strategy until engagement had grown by <strong>36%</strong>, largely by amplifying the club's own achievements rather than just posting announcements. I also started leading knowledge sessions for members on career pathways, including sessions on Tesla engineering roles, DAAD scholarships, Lean Six Sigma, and Quality Control, which meant researching each topic properly before presenting it well enough for others to act on it. When Presentio 4.0, the club's Freshers Presentation Competition, came around, I mentored a fresher team through it, coaching them on how to think and present like industrial engineers rather than just repeat textbook material. I also delivered the orientation speech to the 24th batch, which was really my first real test of speaking to a large room and setting the tone for how new students would see the club.<br><br>My term, and the committee's, came to a close at the <strong>Annual General Meeting in August 2026</strong>, where I gave a farewell speech to the club and was presented with a crest to mark the end of my time on the Executive Committee. Looking back across all these years, this was really where I built up my leadership, event-management, communication, and people-management skills, since almost all of it came down to earning other students' trust and getting them to follow through, whether that was a fresher team, a room of volunteers, or a full auditorium.",
      // Role history shown as a small timeline in the detail view.
      timeline: [
        { role: "Secretary (Admin)", period: "Jul 2025 – Aug 2026", description: "Grew the club's LinkedIn engagement by 36%, led career-pathway knowledge sessions, mentored freshers through Presentio 4.0, and closed out the term with a farewell speech and crest at the 2026 AGM." },
        { role: "Assistant Secretary (Admin)", period: "2024 – 2025", description: "Organized CRACKERJACK 2.0 (100+ universities, 300+ teams), co-organized Unilever's \"Learn to Lead\", and led Brainwave for 80 participants." },
        { role: "Executive Member", period: "2022 – 2024", description: "Joined the Executive Committee as a general member, taking on early event-support and organizational work; promoted to Assistant Secretary (Admin) based on continuous performance assessment." },
      ],
      // Headline image shown on the card.
      cover: "ipe-exec-committee-2025.jpg",
      // "grid" = show every photo below fixed/side-by-side, no slideshow.
      galleryLayout: "grid",
      // Photos — place these files in the same folder as index.html (no subfolder).
      images: [
        { src: "ipe-exec-committee-2025.jpg", caption: "2025–26 Executive Committee" },
        { src: "ipe-orientation-speech-24batch.jpg", caption: "Orientation speech to the 24th batch" },
        { src: "ipe-crackerjack-2-0-collage.jpg", caption: "CRACKERJACK 2.0" },
        { src: "ipe-crackerjack-launch-fireside.jpg", caption: "CRACKERJACK 2.0 — SheSTEM fireside-chat launch" },
        { src: "ipe-unilever-learn-to-lead.jpg", caption: "Unilever \"Learn to Lead\" program" },
        { src: "ipe-agm-2024-collage.jpg", caption: "Annual General Meeting, 2024" },
        { src: "ipe-farewell-speech.jpg", caption: "Farewell speech at the Annual General Meeting, 2026" },
        { src: "ipe-crest-ceremony.jpg", caption: "Receiving the crest, AGM 2026" },
      ],
    },
    {
      title: "Vice President — Greater Mymensingh Zilla Association, RUET",
      meta: "2025 – 2026",
      description: "Vice President of the association that brings together RUET students from the greater Mymensingh district, organizing community events and helping guide new admission candidates on exam day.",
      fullAbstract: "I served as Vice President of the <strong>Greater Mymensingh Zilla Association, RUET</strong> for the <strong>2025–26</strong> term, the association that brings together students from our home district studying at RUET. A big part of the role was organizing events for our members throughout the year, things like the fresher's welcome, iftar gatherings, and reunions, that kept students from back home connected to each other on campus.<br><br>I also helped out on <strong>university admission test days</strong>, guiding and assisting newly-arriving candidates from Mymensingh who were unfamiliar with the campus, helping them find their exam halls and settle in before their tests, which for a lot of them was their first time ever visiting RUET.",
      cover: "gma-ruet-crest.jpg",
    },
  ],

  // ---------------------------------------------------------------
  // AWARDS & HONORS
  // ---------------------------------------------------------------
  awards: [
    {
      title: "70% Scholarship, ISCEA Prize Global Case Competition",
      meta: "2025",
      description: "Achieved a 70% scholarship in the 2025 ISCEA Prize Global Supply Chain Case Competition as part of team RUET-0104-25.",
      fullAbstract: "ISCEA, the International Supply Chain Education Alliance, runs the ISCEA Prize Global Supply Chain Case Competition, where student teams work through a real supply chain case study and compete for scholarships toward ISCEA's Global CSCA (Certified Supply Chain Analyst) certification. I took part in the <strong>2025</strong> edition as part of team <strong>RUET-0104-25</strong>, and we came away with a <strong>70% scholarship</strong> toward the certification.",
      cover: "iscea-scholarship-70percent.jpg",
    },
    {
      title: "2nd Runner-up — Poster Presentation, 8th RCF Career Fair",
      meta: "2025",
      description: "2nd Runner-up in the Poster Presentation competition at the 8th RCF Career Fair, presenting ECO CRACK, a concept for retrofitting diesel vehicles into electric ones for sustainable transportation.",
      fullAbstract: "At the <strong>8th RCF Career Fair</strong>, my team presented a poster on <strong>ECO CRACK</strong>, a concept for retrofitting existing diesel vehicles into electric ones as a more sustainable, lower-cost transportation solution, covering the situation analysis, retrofitting process, marketing strategy, SWOT, and feasibility analysis. The poster placed <strong>2nd Runner-up</strong> in the competition, earning a cash prize of <strong>BDT 1000</strong>.",
      cover: "poster-presentation-award.jpg",
    },
  ],

  // ---------------------------------------------------------------
  // HOBBIES / INTERESTS — uses the same rich card shape as other
  // sections (tag, title, description, images, cover, links).
  // "images" as a plain array of filenames = slideshow, no captions.
  // "images" as [{ src, caption }] with galleryLayout: "grid" = every
  // photo shown with its own caption underneath.
  // ---------------------------------------------------------------
  hobbiesIntro: "Alongside academic pressure and the busyness of work, I make time for travel and sports whenever I can. The moment I get a break, I'm either out playing or out exploring somewhere new, it's what keeps a good balance between my body and mind.",
  hobbies: [
    {
      tag: "Hobby",
      title: "Travel",
      description: "Traveled across different places in my country whenever work allows a break.",
      // Shows all photos at once in a fixed grid on the card itself — no slideshow, no dots.
      showAllPhotos: true,
      images: ["travel-1-beach-cycling.jpg", "travel-2-sea-view.jpg", "travel-3-fishing-boats.jpg", "travel-4-tea-garden.jpg", "travel-5-sunset.jpg", "travel-6-boat.jpg", "travel-7-river.jpg"],
    },
    {
      tag: "Hobby",
      title: "Football",
      description: "Playing football with friends whenever I get the chance to unwind.",
      cover: "football-team.jpg",
      // Add more photos here as filenames, e.g. images: ["football-2.jpg"]
      images: [],
    },
    {
      tag: "Hobby",
      title: "Cricket",
      description: "Played in my department's cricket tournament, where our team finished runners-up.",
      cover: "cricket-team.jpg",
      // Add more photos here as filenames once you send them.
      images: [],
    },
  ],

  // ---------------------------------------------------------------
  // CERTIFICATIONS
  // "image" = certificate scan/badge filename (put file in this
  // folder). "links" can point to a PDF filename or an online
  // verification URL.
  // ---------------------------------------------------------------
  certifications: [
    {
      tag: "RUET IPE Club",
      title: "Certificate of Appreciation — CRACKERJACK 2.0",
      description: "Recognizing my contribution as a member of the organizing committee for CRACKERJACK 2.0, a national business case competition run by the RUET IPE Club.",
      cover: "cert-crackerjack-2.jpg",
      tools: [],
      links: [
        { label: "View Certificate →", url: "cert-crackerjack-2.jpg" },
        { label: "Download →", url: "cert-crackerjack-2.jpg", download: true },
      ],
    },
    {
      tag: "Greater Mymensingh Association, RUET",
      title: "Certificate of Appreciation — Vice President",
      description: "Recognizing my service as Vice President of the Executive Committee 2025–26 of the Greater Mymensingh Association, RUET.",
      cover: "cert-gma-vice-president.jpg",
      tools: [],
      links: [
        { label: "View Certificate →", url: "cert-gma-vice-president.jpg" },
        { label: "Download →", url: "cert-gma-vice-president.jpg", download: true },
      ],
    },
    {
      tag: "Dassault Systèmes",
      title: "SOLIDWORKS CAD Design Associate",
      description: "Certified in SOLIDWORKS CAD Design fundamentals by Dassault Systèmes, August 2024.",
      cover: "cert-solidworks-cad.jpg",
      tools: [],
      links: [
        { label: "View Certificate →", url: "cert-solidworks-cad.jpg" },
        { label: "Download →", url: "cert-solidworks-cad.jpg", download: true },
      ],
    },
    {
      tag: "Coursera · Università di Napoli Federico II",
      title: "Modelling and Simulation of Mechanical Systems",
      description: "Completed an online course on modelling and simulation of mechanical systems, authorized by Università di Napoli Federico II, March 2024.",
      cover: "cert-coursera-mechanical-systems.jpg",
      tools: [],
      links: [
        { label: "View Certificate →", url: "cert-coursera-mechanical-systems.jpg" },
        { label: "Download →", url: "cert-coursera-mechanical-systems.jpg", download: true },
        { label: "Verify on Coursera →", url: "https://coursera.org/verify/C3Z6PZAWFMJ4" },
      ],
    },
  ],

  // ---------------------------------------------------------------
  // CONTACT / FOOTER
  // ---------------------------------------------------------------
  contact: {
    heading: "Let's talk research.",
    note: "I'm always happy to discuss potential PhD projects, collaborations, or AI/ML and operations research problems over email.",
    socials: [
      { label: "Email", url: "mailto:faraberuet@gmail.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/farabe-ruet" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=m7AHYAIAAAAJ" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Md-Farabe" },
      { label: "GitHub", url: "https://github.com/Farabe2320" },
    ],
    copyright: "© Copyright 2026 Md. Ferdaous Al-Farabe. All rights reserved.",
  },
};
