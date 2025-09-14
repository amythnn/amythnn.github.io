export const siteConfig = {
  name: "Amy Nguyen",
  title: "Associate Data Scientist | Georgetown MS | Penn State Alum",
  description: "Portfolio site of Amy Nguyen",
  accentColor: "#1d4ed8", // keep or change
  social: {
    email: "atn30@georgetown.edu",
    linkedin: "https://www.linkedin.com/in/amy-thn-nguyen/",
    github: "https://github.com/amythnn",
  },
  aboutMe: `
    Georgetown graduate student and Penn State alum with a background in economics, business analytics, 
    and data science. Interests in machine learning, statistical algorithms, adaptive AI governance, 
    digital assets, credit and risk modeling, portfolio management, sports analytics, growth and 
    international economics, and neuroscience.

    Applied training in economic and behavioural theory, econometric and statistical techniques, 
    regression analysis, classification methods, natural language processing, pre-trained and classical 
    machine learning models, model performance evaluation, ETL processes, model deployment, version 
    control, and object-oriented programming (OOP).

    San Francisco Bay Area native passionate about college football Saturdays, March Madness, golf, 
    Bollywood, and antiquity studies. Avid Bay Area sports fan, proud Nittany Lion, and an enthusiast 
    of classical and modern literature.
  `,
  skills: [
    "Python", "scikit-learn", "XGBoost", "spaCy",
    "SQL", "DuckDB",
    "Tableau", "Google Analytics",
    "ML explainability (SHAP)",
    "NLP", "ETL pipelines",
    "Git/GitLab", "OOP"
  ],
  projects: [
    {
      name: "Defense or Offense First in OT?",
      description:
      "Predicts whether starting on defense vs. offense in NFL overtime correlates with a higher win percentage. Builds features from coin toss outcomes, drive results, field position, and clock; evaluates correlation and causal signals.",
      link: "https://github.com/amythnn/nfl-ot-start", 
      skills: ["Python", "pandas", "scikit-learn", "XGBoost", "DuckDB", "EDA"],
    },
    {
      name: "Loan Data Rate Prediction",
      description: "Random Forest & XGBoost pipelines with SHAP analysis on LendingClub loan data.",
      link: "https://github.com/amythnn/lendingclub-rate-ml",
      skills: ["Python", "scikit-learn", "XGBoost"],
    },
    {
      name: "Goodreads Recommender",
      description: "User/item collaborative filtering with evaluation dashboard.",
      link: "https://github.com/amythnn/goodreads-recsys",
      skills: ["Python", "Recommender Systems"],
    },
  ],
};

