import { base } from "$app/paths";

export const chapterColours = {
  "Shared spaces":                    "#6D247A", // --brandPurple
  "Small businesses":                 "#6FC7EA", // --brandLightBlue
  "Housing":                          "#AB1368", // --brandPink
  "Health and well-being":            "#007FA3", // --brandMedBlue
  "Climate change":                   "#0D534D", // --brandDarkGreen
  "Civic engagement":                 "#DC4633", // --brandRed
  "Youth":                            "#1E3765", // --brandLightGreen
  "Abundant local food":              "#8DBF2E", // --brandMedGreen
  "Community prosperity":             "#00A189", // --brandMedGreen
};

export const pdfPaths = {
  "Shared spaces":                    "https://utoronto.scholaris.ca/items/04fd313f-493b-4b87-a07c-8c087233f77b", 
  "Small businesses":                 "https://utoronto.scholaris.ca/items/52e625df-ed9a-4675-8c6b-22e4401a3327", 
  "Health and well-being":            "https://utoronto.scholaris.ca/items/85a0d4e4-c39f-4ff3-bf1d-967adf7789e5", 
  "Housing":                          "https://utoronto.scholaris.ca/items/3434038a-46d0-47e5-8dae-139a6b56fd2e", 
  "Climate change":                   "https://utoronto.scholaris.ca/items/e4e5f912-9896-4496-974f-7881bf83d990", 
  "Civic engagement":                 "https://utoronto.scholaris.ca/items/89aec3a1-3bc7-447a-8aaf-e72372c35a61", 
  "Youth":                            "https://utoronto.scholaris.ca/items/89aec3a1-3bc7-447a-8aaf-e72372c35a61", 
  "Abundant local food":              "https://utoronto.scholaris.ca/items/6420df36-c83f-4801-9fee-c970f3f6d4fb", 
  "Community prosperity":             "https://utoronto.scholaris.ca/items/6420df36-c83f-4801-9fee-c970f3f6d4fb", 
  "Scaling social innovation":        "https://utoronto.scholaris.ca/items/799a9d5b-2345-4a55-85a4-514ab89273b9"
};

export const chapterDescriptions = {
  "Scaling social innovation":        "How can we expand the reach of great ideas – like the ones featured in this volume – across the country? This category explores methods of scaling social innovations, using examples from Canada and around the world to highlight the importance of networks and funding, storytelling, and breaking down barriers to do more of “what works” and bring promising local solutions to new places and sectors.",
  "Shared spaces":                    "Across Canada, people are eager to participate in cultural, social, and recreational life, but the traditional public gathering places that make this possible are underfunded and struggle to keep up with population growth. The local solutions featured in this category highlight how spaces such as parking lots, decommissioned schools, churches, and vacant lots can be reimagined as vibrant public spaces and community hubs through adaptive reuse and creative placemaking.", // --brandPurple
  "Small businesses":                 "Many of Canada’s small businesses face ongoing challenges, including the lingering effects of the COVID-19 pandemic, shifting consumer habits, major infrastructure projects that reduce foot traffic, and a wave of retirements among owners. The solutions in this category offer strategies to support these vital community hubs throughout their life cycles, including succession planning, downtown core revitalization programs, and resources for entrepreneurs, contributing to more resilient local economies.", // --brandLightBlue
  "Housing":                          "Secure, affordable housing is fundamental to individual and community well-being, yet population growth, limited housing supply, and construction labour shortages have left many Canadians struggling to find and maintain stable shelter. The initiatives in this category demonstrate how creative programs, designs, and financing tools can work together to expand affordable housing, advance modular construction, and build more housing that is accessible, inclusive, and supportive.", // --brandPink
  "Health and well-being":            "Health care is a complex policy area marked by fragmented systems, unstable funding, and persistent gaps in care. This category discusses innovative approaches to improving the delivery of health care, including through social proscribing, information-sharing frameworks, and alternative dispatch models for mental health treatment. These initiatives demonstrate how local governments and community organizations are working to provide trauma-informed and culturally appropriate care, building healthier and more equitable places.", // --brandMedBlue
  "Climate change":                   "The climate crisis is no longer a future threat, but a present reality: wildfires, floods, heat waves, and storms are putting our communities at risk, and we need solutions today. This category features municipal innovations, community capacity-building programs, and data tools that support residents in identifying local vulnerabilities and co-creating sustainable approaches to climate adaptation and resilience.", // --brandDarkGreen
  "Civic engagement":                 "Canadian cities and towns are changing quickly, making robust participation in civic and social life an important contributor to democratic engagement. This collection highlights innovative solutions that create spaces for collaboration, encourage civic dialogue, and foster collective action, building trust and momentum for inclusive progress.", // --brandRed
  "Youth":                            "Canada’s youth are better educated, more connected to technology, and more inclusive than past generations, but climate change, economic uncertainty, and technological disruption make this this is a challenging time for young people. The initiatives in this category show that youth are eager to play an active role in solving problems in their schools and communities, leading projects and shaping their environments to lay the groundwork for a brighter future.", // --brandLightGreen
  "Abundant local food":              "Canadians are paying 27% more for food than they were five years ago, and many households are food insecure. The initiatives in this category are rethinking food access and distribution by creating local networks for growers and consumers, running community gardens and food forests, and working with retailers to make use of surplus food, creating more sustainable food systems across the country.", // --brandMedGreen
  "Community prosperity":             "Meaningful work is foundational to individual dignity and well-being, but poverty, unstable housing, language barriers, and rising living costs make it difficult for many people to meet these basic needs. The initiatives in this category connect people to resources and local economies, expanding employment opportunities through workforce development and social procurement.", // --brandMedGreen
};

export const chapterTextColours = {
  "Scaling social innovation":        "#ffffff",
  "Shared spaces":                    "#ffffff",
  "Small businesses":                 "#000000",
  "Housing":                          "#ffffff", // --brandPink
  "Health and well-being":            "#ffffff", // --brandMedBlue
  "Climate change":                   "#ffffff", // --brandDarkGreen
  "Civic engagement":                 "#ffffff", // --brandRed
  "Youth":                            "#ffffff", 
  "Abundant local food":              "#000000", // --brandMedGreen
  "Community prosperity":             "#ffffff", // --brandMedGreen
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
 return `${base}/category/${slugify(chapter)}/${id}-${slugify(project)}`
}