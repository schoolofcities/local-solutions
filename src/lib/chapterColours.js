export const chapterColours = {
  "Shared spaces":                    "#6D247A", // --brandPurple
  "Small businesses":                 "#6FC7EA", // --brandLightBlue
  "Housing":                          "#AB1368", // --brandPink
  "Health and well-being":            "#007FA3", // --brandMedBlue
  "Climate change":                   "#0D534D", // --brandDarkGreen
  "Civic engagement":                 "#DC4633", // --brandRed
  "Youth":                            "#1E3765", // --brandLightGreen
  "Abundant local food":              "#8DBF2E", // --brandMedGreen
  "Community prosperity":                  "#00A189", // --brandMedGreen
};

export const pdfPaths = {
  "Shared spaces":                    "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-2-Shared-Spaces-Dec-2025.pdf", 
  "Small businesses":                 "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-3-Small-Businesses-Dec-2025.pdf", 
  "Health and well-being":            "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-4-Mental-Health-Dec-2025.pdf", 
  "Housing":                          "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/12/Learning-From-What-Works-5-Housing-FINAL-Dec-2025.pdf", 
  "Climate change":                   "https://schoolofcities.utoronto.ca/wp-content/uploads/2026/02/print-ready-Learning-From-What-Works-6.-Climate-Change-FINAL-Dec-2025.pdf", 
  "Civic engagement":                 "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-7-Civic-Engagement-and-Democracy-Dec-2025.pdf", 
  "Youth":                            "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-7-Civic-Engagement-and-Democracy-Dec-2025.pdf", 
  "Abundant local food":              "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/12/Learning-From-What-Works-8-Community-Prosperity-and-Dignity-FINAL-Dec-2025.pdf", 
  "Community prosperity":                  "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/12/Learning-From-What-Works-8-Community-Prosperity-and-Dignity-FINAL-Dec-2025.pdf", 
  "Scaling social innovation":        "https://schoolofcities.utoronto.ca/wp-content/uploads/2025/11/Learning-From-What-Works-1-Scaling-Social-Innovation-Dec-2025.pdf"
};

export const chapterDescriptions = {
  "Scaling social innovation":        "How can we expand the reach of great ideas – like the ones featured in this volume – across the country? This chapter explores methods of scaling social innovations, using examples from Canada and around the world to highlight the importance of networks and funding, storytelling, and breaking down barriers to do more of “what works” and bring promising local solutions to new places and sectors.",
  "Shared spaces":                    "Across Canada, people are eager to participate in cultural, social, and recreational life, but the traditional public gathering places that make this possible are underfunded and struggle to keep up with population growth. The local solutions featured in this chapter highlight how spaces such as parking lots, decommissioned schools, churches, and vacant lots can be reimagined as vibrant public spaces and community hubs through adaptive reuse and creative placemaking.", // --brandPurple
  "Small businesses":                 "Many of Canada’s small businesses face ongoing challenges, including the lingering effects of the COVID-19 pandemic, shifting consumer habits, major infrastructure projects that reduce foot traffic, and a wave of retirements among owners. The solutions in this chapter offer strategies to support these vital community hubs throughout their life cycles, including succession planning, downtown core revitalization programs, and resources for entrepreneurs, contributing to more resilient local economies.", // --brandLightBlue
  "Housing":                          "Secure, affordable housing is fundamental to individual and community well-being, yet population growth, limited housing supply, and construction labour shortages have left many Canadians struggling to find and maintain stable shelter. The initiatives in this chapter demonstrate how creative programs, designs, and financing tools can work together to expand affordable housing, advance modular construction, and build more housing that is accessible, inclusive, and supportive.", // --brandPink
  "Health and well-being":            "", // --brandMedBlue
  "Climate change":                   "The climate crisis is no longer a future threat, but a present reality: wildfires, floods, heat waves, and storms are putting our communities at risk, and we need solutions today. This chapter features municipal innovations, community capacity-building programs, and data tools that support residents in identifying local vulnerabilities and co-creating sustainable approaches to climate adaptation and resilience.", // --brandDarkGreen
  "Civic engagement":                 "Canadian cities and towns are changing quickly, making robust participation in civic and social life an important contributor to democratic engagement, particularly for young people, who are developing their capacity to make social change. This chapter highlights innovative solutions that create spaces for collaboration and civic dialogue, empower youth to shape their communities, and foster collective action, building trust and momentum for inclusive progress.", // --brandRed
  "Youth":                            "", // --brandLightGreen
  "Abundant local food":              "", // --brandMedGreen
  "Community prosperity":             "", // --brandMedGreen
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
  let label = text.replaceAll("-", " ");
  return label.charAt(0).toUpperCase() + label.slice(1);
};

export function spotlightedURL(chapter, project, id) {
 return `/local-solutions/category/${slugify(chapter)}/${id}-${slugify(project)}`
}