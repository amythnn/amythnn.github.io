// src/config.ts
export const siteConfig = {
  name: "Amy N.",
  title: "Duke Graduate Student · Georgetown & Penn State Alum\nInterests in Technology, Policy, & Ethics",
  description: "Portfolio site of Amy N.",
  accentColor: "#60A5FA",

  social: {
    email: "atn30@georgetown.edu", // keep plain; Hero adds mailto:
    linkedin: "https://www.linkedin.com/in/amy-thn-nguyen/",
    github: "https://github.com/amythnn",
  },

  aboutMe: `
Duke graduate student with a background in data science and economics; Georgetown and Penn State alum.

My interests and work converge at the intersection of technology, governance, and human behaviour, with a particular focus on how data and systems shape the way people make decisions, build trust, and navigate the world around them.

Outside of work, I enjoy reading, writing, watching sports, collecting jerseys and Pokémon cards, and exploring different languages and cultures through travel, food, and media.

Languages (a continuous work in progress): English, German, Hindi, and Vietnamese.

Fan of: Penn State Nittany Lions, Georgetown Hoyas, Duke Blue Devils, Golden State Warriors, Golden State Valkyries, San Francisco Giants, San Francisco 49ers, R&B and country music, Bollywood, classic literature (especially Virginia Woolf), em dashes, and the Oxford comma.
`,
  
skills: [
  "Data Science & Analytics",
  "Machine Learning",
  "Financial Technology",
  "Policy Analysis",
  "Economics",
  "Statistics",
],

projects: [
  {
    name: "Saturdays to Sundays (NCAA to NFL Pipeline)",
    description:
      "Scrapes Wikipedia NFL Draft pages for a given year, cleans and normalizes draft data, filters by conference (e.g., Big Ten and SEC), and builds interactive Plotly Sankey diagrams that visualize player pathways from college football programs to NFL teams. Includes automated data collection, preprocessing, aggregation, and exportable HTML visualizations with player-level hover details.",
    link: "https://amythnn.github.io/ncaa_nfl_pipeline",
    skills: [
        "Python",
        "pandas",
        "Web Scraping",
        "BeautifulSoup",
        "Plotly",
        "Data Visualization",
        "Data Engineering",
    ],
  },
  {
    name: "FinTech Legislative Text Analytics",
    description:
      "Uses the LegiScan API to collect, process, and analyze U.S. state legislation related to financial technology, consumer finance, digital payments, lending, and financial regulation. The project automates bill collection, metadata extraction, and text analysis to support policy research and identify emerging regulatory trends across jurisdictions.",
    link: "https://github.com/amythnn/fintech_legislative_text_analytics",
    skills: [
      "Python",
      "LegiScan API",
      "NLP",
      "Text Analytics",
      "Policy Analytics",
      "Financial Regulation",
      "Data Collection",
    ],
  },
  {
    name: "Goodreads Recommender",
    description:
      "End-to-end collaborative filtering recommender system built on Goodreads data using scikit-surprise (KNNBasic) with both user-based and item-based approaches. Includes a reproducible CLI pipeline for data cleaning, model training, evaluation, and recommendation export, with RMSE, precision@k, and recall@k performance reporting.",
    link: "https://github.com/amythnn/goodreads-recsys",
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-surprise",
      "Recommender Systems",
      "Machine Learning",
      "Model Evaluation",
    ],
  },
],
} as const;
