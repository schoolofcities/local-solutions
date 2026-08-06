export const chapterColours = {
  "Shared spaces":                    "#6D247A", // --brandPurple
  "Small businesses":                 "#6FC7EA", // --brandLightBlue
  "Mental health":                    "#007FA3", // --brandMedBlue
  "Housing":                          "#AB1368", // --brandPink
  "Climate change":                   "#0D534D", // --brandDarkGreen
  "Civic engagement":                 "#DC4633", // --brandRed
  "Community prosperity":             "#00A189", // --brandMedGreen
};

export const pdfPaths = {
  "Shared spaces":                    "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-2-Shared-Spaces-Dec-2025.pdf", 
  "Small businesses":                 "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-3-Small-Businesses-Dec-2025.pdf", 
  "Mental health":                    "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-4-Mental-Health-Dec-2025.pdf", 
  "Housing":                          "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/12/Learning-From-What-Works-5-Housing-FINAL-Dec-2025.pdf", 
  "Climate change":                   "https://schoolofcities.utoronto.ca/wp-content/uploads/2026/02/print-ready-Learning-From-What-Works-6.-Climate-Change-FINAL-Dec-2025.pdf", 
  "Civic engagement":                 "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-7-Civic-Engagement-and-Democracy-Dec-2025.pdf", 
  "Community prosperity":             "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/12/Learning-From-What-Works-8-Community-Prosperity-and-Dignity-FINAL-Dec-2025.pdf", 
  "Scaling social innovation":        "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-1-Scaling-Social-Innovation-Dec-2025.pdf"
};

export const provincePostalCodes = {
  "AB": "Alberta",
  "BC": "British Columbia",
  "MB": "Manitoba",
  "NB": "New Brunswick",
  "NL": "Newfoundland and Labrador",
  "NS": "Nova Scotia",
  "ON": "Ontario",
  "PE": "Prince Edward Island",
  "QC": "Quebec",
  "SK": "Saskatchewan",
  "NT": "Northwest Territories",
  "NU": "Nunavut",
  "YT": "Yukon"
}

export function hexToRgba(hex, opacity) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function slugify(text) {
  return text.trim().toLowerCase()
              .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9\s-]/g, '')
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-')
              .replace(/^-|-$/g, '');;
};

export function unSlugify(text) {
  let label = text.replace("-", " ");
  return label.charAt(0).toUpperCase() + label.slice(1);
};

export function spotlightedURL(chapter, project, id) {
 return `/local-solutions/category/${slugify(chapter)}/${id}-${slugify(project)}`
}