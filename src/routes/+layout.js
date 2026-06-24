// export const csr = true;
// export const ssr = false;

import Papa from 'papaparse';
import { base } from '$app/paths';

export async function load({ fetch }) {
    const geoRes = await fetch(`${base}/data/1981_canada_centroids.geojson`);
    const mapGeo = await geoRes.json();
    let provinceGeo = {};

    mapGeo.features.forEach((province) => {
        provinceGeo[province.properties.Postal] = province;
    })

    const contentFile = await fetch('/data/all-solutions.csv');
    const contentText = await contentFile.text();

    const parsedContent = Papa.parse(contentText, {
        header: true,     
        encoding: "utf-8",
        skipEmptyLines: true
    });

    function cleanData(arr) {
        let provinceCounts = {
            'AB': 0,
            'BC': 0,
            'MB': 0,
            'NB': 0,
            'NL': 0,
            'NS': 0,
            'NU': 0,
            'NT': 0,
            'ON': 0,
            'PE': 0,
            'QC': 0,
            'SK': 0,
            'YT': 0,
            'Across Canada': 0
        };

        let categorySolutions = {};
        
        let unsortedSolutions = arr.map(item => {
                item.Tags = item.Tags.split("; ");
                item.Municipalities_List = item.Municipalities_List.split(", ");
                if (item.Municipalities_List[0] == "") {
                    item.Municipalities_List.pop();
                }
                item.Provinces_List = item.Provinces_List.split(", ");
                item.ID_Num = parseInt(item.ID_Num, 10);
                item.Spotlighted = (item.Spotlighted == 'true' || item.Spotlighted == 'TRUE');
                item.Card_Thumbnail = (item.Card_Thumbnail == 'true' || item.Card_Thumbnail == 'TRUE');

                if (item.Spotlighted) {
                    item.Tags.unshift("Finalist");
                }

                return item;
            });
        
        let solutions = unsortedSolutions.toSorted((a, b) => b.Spotlighted - a.Spotlighted)

        solutions.forEach(item => {
            const category = item.Chapter;

            item.Provinces_List.forEach(province => {
                provinceCounts[province] += 1;
            });

            if (!categorySolutions[category]) {
                categorySolutions[category] = {
                    list: [],
                    counts: { 'AB': 0, 'BC': 0, 'MB': 0, 'NB': 0, 'NL': 0, 'NS': 0,
                            'NU': 0, 'NT': 0, 'ON': 0, 'PE': 0, 'QC': 0, 'SK': 0,
                            'YT': 0, 'Across Canada': 0 }
                };
            }

            categorySolutions[category].list.push(item);
            item.Provinces_List.forEach(province => {
                categorySolutions[category].counts[province] += 1;
            });
        });


        return { solutions, 
                provinceCounts, 
                categorySolutions, 
                unsortedSolutions
            };
    }

    const { solutions, 
            provinceCounts, 
            categorySolutions, 
            unsortedSolutions
    } = cleanData(parsedContent.data);

    return { solutions, 
            provinceCounts, 
            categorySolutions, 
            unsortedSolutions, 
            mapGeo, 
            provinceGeo
             };
}

export const prerender = true; 
