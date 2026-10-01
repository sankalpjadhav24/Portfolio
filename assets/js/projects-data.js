/**
 * Projects Portfolio Data
 * Personal projects and engineering work by Sankalp Jadhav
 */

const PROJECTS_DATA = [
  {
    id: "mindwar-arena",
    title: "MindWar Arena — Modular Strategy Game Engine",
    flagship: true,
    category: "systems-games",
    categoryLabel: "Game Engineering & Search Algorithms",
    status: "Active Development",
    badge: "Flagship Project",
    githubUrl: "https://github.com/sankalpjadhav24",
    visual: "assets/images/mindwar-preview.svg",
    alt: "MindWar Arena state engine and Minimax decision tree preview",
    summary: "A modular, deterministic board game engine in Python supporting 9 strategy games. Built with decoupled state machines, Minimax search with Alpha-Beta pruning, and automated unit testing.",
    problem: "When building board game software, game rules often get tangled up with drawing logic. This makes it painful to add new games and causes subtle state bugs or slow AI search times when looking several moves ahead.",
    solution: "I designed a modular engine in Python using object-oriented principles. The core state machine is completely decoupled from how the board is drawn. For the AI opponent, I implemented Minimax with Alpha-Beta pruning and wrote automated unit tests to ensure win-conditions and valid moves remain consistent.",
    architecture: [
      {
        title: "Decoupled Game State Machine",
        detail: "Game rules, valid move generation, and win/loss states are isolated behind a clean interface, making it easy to add new games without touching the renderer."
      },
      {
        title: "Minimax with Alpha-Beta Pruning",
        detail: "Implemented adversarial search with heuristic position evaluation and branch cut-offs (α ≥ β) to keep AI decision-making fast and responsive."
      },
      {
        title: "Automated Invariant Testing",
        detail: "Built unit tests verifying turn transitions, move validation, and boundary cases across simulated game sessions."
      },
      {
        title: "Rendering & Event Loop",
        detail: "Handled user inputs and board updates using Pygame and ModernGL pipelines, maintaining a smooth 60 FPS target loop."
      }
    ],
    technologies: ["Python 3", "Minimax Algorithm", "Alpha-Beta Pruning", "OOP", "Pygame", "ModernGL", "Unit Testing", "Data Structures"],
    metrics: [
      { label: "Supported Games", value: "9 Strategy Games" },
      { label: "Search Strategy", value: "Alpha-Beta Pruning" },
      { label: "Rule Verification", value: "Unit Test Suite" },
      { label: "Rendering", value: "Pygame + ModernGL" }
    ]
  },
  {
    id: "cloudburst-prediction",
    title: "Cloudburst Prediction System",
    flagship: false,
    category: "ai-ml",
    categoryLabel: "Machine Learning & Weather Telemetry",
    status: "Completed Research Project",
    badge: "Machine Learning",
    githubUrl: "https://github.com/sankalpjadhav24",
    visual: "assets/images/cloudburst-preview.svg",
    alt: "Cloudburst prediction data pipeline and model accuracy preview",
    summary: "A machine learning pipeline in Python that analyzes rapid barometric pressure drops and humidity spikes to identify early risk factors for localized cloudburst events.",
    problem: "Cloudbursts are intense, sudden downpours that cause devastating flash floods within minutes. Standard large-scale forecasts often miss these fast-moving local atmospheric shifts.",
    solution: "I built an end-to-end classification pipeline in Python. Using Pandas for exploratory data analysis, I cleaned weather telemetry and focused on atmospheric pressure differentials and humidity changes. Then I trained and cross-validated Random Forest and Logistic Regression models to evaluate early warning accuracy.",
    architecture: [
      {
        title: "Data Cleaning & Rolling Variances",
        detail: "Processed multi-station sensor telemetry with Pandas, computing rolling-window pressure changes to catch rapid anomalies."
      },
      {
        title: "Feature Correlation",
        detail: "Identified the strongest indicators preceding sudden heavy rainfall, filtering out noisy redundant sensor inputs."
      },
      {
        title: "Model Training & Evaluation",
        detail: "Trained Random Forest and Logistic Regression models using stratified K-fold cross-validation, keeping false negatives as low as possible."
      },
      {
        title: "Alert Output Simulation",
        detail: "Structured the model outputs into probability thresholds for early warnings."
      }
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Random Forest", "Logistic Regression", "Feature Engineering"],
    metrics: [
      { label: "Lead Time Target", value: "30–60 Min Window" },
      { label: "Models Used", value: "Random Forest & LogReg" },
      { label: "Key Signal", value: "Pressure Drop Rate" },
      { label: "Validation", value: "Stratified K-Fold" }
    ]
  },
  {
    id: "finxpert-platform",
    title: "FinXpert — Market Analytics Dashboard",
    flagship: false,
    category: "systems-games",
    categoryLabel: "FinTech & Real-Time Data Pipelines",
    status: "Hackathon Project · FinEdge",
    badge: "Hackathon Project",
    teamContext: "FinEdge Hackathon · 3-Member Team (I built the backend failover caching & market volatility data integration)",
    githubUrl: "https://github.com/sankalpjadhav24",
    visual: "assets/images/finxpert-preview.svg",
    alt: "FinXpert financial charts and failover caching architecture",
    summary: "A real-time market analytical dashboard built during the FinEdge Hackathon. Features volatility index feeds, technical indicator formulas (EMA/RSI), and resilient failover data caching.",
    problem: "During volatile market moments, external trading APIs often get overloaded or hit rate limits. If a dashboard relies purely on live responses, the entire interface freezes up.",
    solution: "Working in a 3-person team, I took charge of the data caching and reliability pipeline. I built an in-memory caching mechanism to buffer incoming market feeds from HyperTrade APIs. If the live feed dropped or slowed down, the dashboard smoothly fell back to verified cached snapshots while technical indicators (EMA 9/21/50, RSI 14) continued calculating.",
    architecture: [
      {
        title: "Failover In-Memory Caching (My Primary Role)",
        detail: "Designed a fast fallback buffer so the dashboard remains functional and never shows broken charts during API rate limits or brief connection drops."
      },
      {
        title: "Technical Indicator Pipeline",
        detail: "Wrote mathematical implementations for Exponential Moving Averages (EMA 9/21/50) and Relative Strength Index (RSI 14)."
      },
      {
        title: "Market Feed Integration",
        detail: "Connected and parsed data streams from HyperTrade market endpoints and volatility indices."
      },
      {
        title: "Risk Profiling Matrix",
        detail: "Mapped calculated volatility against user-selected risk tolerances to surface clear alert banners."
      }
    ],
    technologies: ["Python", "Java", "HyperTrade API", "Data Caching", "Technical Analysis (EMA/RSI)", "Git Collaboration"],
    metrics: [
      { label: "Team Size", value: "3 Developers" },
      { label: "Reliability", value: "API Fallback Cache" },
      { label: "Indicators", value: "EMA, RSI, Volatility" },
      { label: "Event", value: "FinEdge Hackathon" }
    ]
  },
  {
    id: "stockmarket-ai",
    title: "StockMarket AI — Deep Learning Trend Forecaster",
    flagship: false,
    category: "ai-ml",
    categoryLabel: "Deep Learning & Time-Series",
    status: "Completed Experiment",
    badge: "Deep Learning",
    githubUrl: "https://github.com/sankalpjadhav24",
    visual: "assets/images/stockmarket-preview.svg",
    alt: "StockMarket AI LSTM network architecture and projection curves",
    summary: "A time-series deep learning model built with PyTorch using stacked LSTM layers to predict stock momentum, combined with an evolutionary algorithm for portfolio weight optimization.",
    problem: "Financial time-series data is notoriously noisy. Simple linear models miss the sequential dependencies that develop over weeks and months.",
    solution: "I built a recurrent neural network using PyTorch with two stacked LSTM layers. I fed it 60-day normalized sequence windows with indicators like RSI and SMA, and wrote a genetic algorithm to experiment with Sharpe-ratio-based portfolio weighting, viewing the outputs in an interactive desktop UI.",
    architecture: [
      {
        title: "Stacked LSTM Neural Network",
        detail: "Constructed 2-layer LSTM cells with dropout to capture sequential dependencies across 60-day trading windows without overfitting."
      },
      {
        title: "Feature Engineering & Scaling",
        detail: "Normalized historical price curves with MinMaxScaler and blended in momentum indicators (SMA, RSI) to enrich training tensors."
      },
      {
        title: "Evolutionary Portfolio Optimization",
        detail: "Used a genetic algorithm targeting Sharpe ratio optimization to search for balanced multi-asset weights."
      },
      {
        title: "Interactive Desktop UI",
        detail: "Built a Tkinter desktop interface to compare real curves against model projections in real time."
      }
    ],
    technologies: ["Python", "PyTorch", "LSTM Networks", "Pandas", "MinMaxScaler", "Genetic Algorithms", "Tkinter", "Matplotlib"],
    metrics: [
      { label: "Core Framework", value: "PyTorch" },
      { label: "Architecture", value: "2-Layer LSTM" },
      { label: "Input Window", value: "60-Day Sequence" },
      { label: "Optimization", value: "Genetic Algorithm" }
    ]
  },
  {
    id: "java-mvc-database",
    title: "Java Web & Database Systems Prototype",
    flagship: false,
    category: "web-db",
    categoryLabel: "Backend Infrastructure & MVC",
    status: "Completed Project",
    badge: "Backend Systems",
    githubUrl: "https://github.com/sankalpjadhav24",
    visual: "assets/images/java-mvc-preview.svg",
    alt: "Java Servlets JDBC MVC Enterprise System Architecture",
    summary: "A client-server web application written in Core Java following the Model-View-Controller (MVC) architecture, using Servlets, JDBC, Apache Tomcat, and MySQL.",
    problem: "When learning server-side Java, it's easy to mix SQL calls into HTML generation, which leads to messy, insecure, and hard-to-maintain code.",
    solution: "I built this project to practice writing clean, production-style enterprise Java without relying on heavy frameworks. I structured the application strictly around MVC: Servlets manage request routing and sessions, JDBC handles parameterized database queries, and Apache Tomcat serves the dynamic responses.",
    architecture: [
      {
        title: "MVC Separation of Concerns",
        detail: "Separated domain models, controller servlets, and presentation layers for cleaner code and predictable request routing."
      },
      {
        title: "Safe JDBC Persistence",
        detail: "Used prepared statements with parameterized SQL queries to prevent injection vulnerabilities and keep transactions consistent."
      },
      {
        title: "Tomcat Server Lifecycle",
        detail: "Configured thread handling, session tracking, and request dispatching within the Apache Tomcat servlet container."
      },
      {
        title: "Normalized Relational Schemas",
        detail: "Designed 3NF database tables in MySQL with primary/foreign keys to maintain referential integrity."
      }
    ],
    technologies: ["Core Java", "Java Servlets", "JDBC", "Apache Tomcat", "MySQL", "MVC Architecture", "HTML5/CSS3"],
    metrics: [
      { label: "Pattern", value: "Model-View-Controller" },
      { label: "Persistence", value: "JDBC Prepared Queries" },
      { label: "Server", value: "Apache Tomcat" },
      { label: "Schema", value: "3NF Normalization" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS_DATA };
}
