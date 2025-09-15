export const siteConfig = {
  name: "Amy N.",
  title: "Associate Data Scientist · Georgetown MS · Penn State BS",
  description: "Portfolio site of Amy N",
  accentColor: "#60A5FA", // Light blue

  social: {
    email: "mailto:atn30@georgetown.edu",
    linkedin: "https://www.linkedin.com/in/amy-thn-nguyen/",
    github: "https://github.com/amythnn",
  },

  aboutMe: `
I’ve always been drawn to patterns and storytelling, whether in sports scores, market shifts, or the quiet details of everyday life. I like to live at the intersection of ideas, between numbers and narratives, analysis and intuition. My work spans machine learning and data visualization, but I see it all as part of the same journey: uncovering how stories hide in data and how they can guide impactful decisions for people and communities.

I grew up in the Bay Area, where weekends meant cheering on my favourite teams, tossing a football with my parents, playing a quick nine, watching classic Bollywood films, or rereading The Iliad. That love of stories in sports and culture eventually led me to study at Penn State and Georgetown, where I explore how data and technology can shape finance, policy, sports, and everyday life.

Along the way, I’ve trained in machine learning, statistical modeling, and more than my fair share of data cleaning, but I never lose sight of the human side of numbers—how they connect to people, choices, and behaviours. Outside of work, I turn to literature, Bollywood, or conversations about antiquity with the same energy I bring to a college football Saturday.

For me, curiosity ties it all together. Whether I’m building models, writing, or cheering from the stands, I’m always searching for meaning in the details and connection in the bigger picture.

Fan of: Penn State Nittany Lions, Georgetown Hoyas, Golden State Warriors, Golden State Valkyries, San Francisco Giants, San Francisco 49ers, R&B and country music, Madeline Miller, em dashes, and the Oxford comma.
`,

  skills: [
    "Python",
    "scikit-learn",
    "spaCy",
    "NLP",
    "Git/GitLab/GitHub",
    "OOP",
    "Tableau",
    "Power BI",
    "SQL",
    "DuckDB",
  ],

projects: [
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
      "Data Visualization"
    ],
  },
],
};
