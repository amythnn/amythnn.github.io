// src/config.ts
export const siteConfig = {
  name: "Amy N.",
  title: "Associate Data Scientist · Georgetown MS · Penn State BS",
  description: "Portfolio site of Amy N.",
  accentColor: "#60A5FA",

  social: {
    email: "atn30@georgetown.edu", // keep plain; Hero adds mailto:
    linkedin: "https://www.linkedin.com/in/amy-thn-nguyen/",
    github: "https://github.com/amythnn",
  },

  aboutMe: `
My interests and work converge at the intersection of technology, governance, and human behaviour. At its core, I’m interested in how data and systems shape the way people make decisions, build trust, and navigate the world around them.

Outside of work, I enjoy reading, writing, watching sports, collecting jerseys and Pokémon cards, and exploring different languages and cultures through travel, food, and media.

Languages (a continuous work in progress): English, German, Hindi, and Vietnamese.

Fan of: Penn State Nittany Lions, Georgetown Hoyas, Duke Blue Devils, Golden State Warriors, Golden State Valkyries, San Francisco Giants, San Francisco 49ers, R&B and country music, Bollywood, classic literature (especially Virginia Woolf), em dashes, and the Oxford comma.
`,

  skills: [
    "Python",
    "scikit-surprise",
    "pandas",
    "NumPy",
    "NLP",
    "spaCy",
    "Git/GitLab/GitHub",
    "OOP",
    "Tableau",
    "Power BI",
    "SQL",
    "DuckDB",
  ],

projects: [
  {
    name: "Saturdays to Sundays (NCAA to NFL Pipeline)",
    description:
      "Scrapes Wikipedia NFL Draft pages for a given year, cleans & normalizes pick tables, filters by conference (e.g. Big Ten and SEC), and builds an interactive Sankey diagram (one link per player) showing college to NFL team flows. The Sankey visualization is viewable directly through the deployed project page, and the GitHub repo provides full source code plus instructions to navigate by year/conference.",
    link: "https://amythnn.github.io/ncaa_nfl_pipeline",
    skills: [
      "Python",
      "pandas",
      "requests",
      "BeautifulSoup (bs4)",
      "lxml/html5lib",
      "Plotly",
      "Data Visualization",
      "Web Scraping",
      "CLI"
    ],
  },
  {
    name: "Goodreads Recommender",
    description:
      "End-to-end CF recommender on Goodreads data using scikit-surprise (KNNBasic) with user- and item-based variants (cosine). Reproducible CLI pipeline: clean → train → evaluate → export. Reports RMSE, precision@k, recall@k, and writes artifacts (eda_summary.json, metrics.json, sample_recs.json).",
    link: "https://github.com/amythnn/goodreads-recsys",
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-surprise",
      "Recommender Systems",
      "Data Visualization",
    ],
  },
],
} as const;
