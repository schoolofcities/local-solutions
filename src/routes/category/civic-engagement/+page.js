
import Papa from 'papaparse';

export async function load({ fetch }) {
    const contentFile = await fetch('/data/all-solutions.csv');
    const contentText = await contentFile.text();

    const parsedContent = Papa.parse(contentText, {
        header: true,     
        encoding: "utf-8",
        skipEmptyLines: true
    });

    function cleanData(arr) {
        return arr.reduce((groups, item) => {
           item.Tags = item.Tags.split("; ");
           item.Municipalities_List = item.Municipalities_List.split(", ");
           item.Provinces_List = item.Provinces_List.split(", ");
           item.ID_Num = parseInt(item.ID_Num, 10);
           item.Spotlighted = item.Spotlighted == 'true';
           item.Card_Thumbnail = item.Card_Thumbnail == 'true';

           if (item.Spotlighted) {
                item.Tags.unshift("Finalist")
           }

           if (item.Project) {
                groups.push(item);
           }
           return groups;
        }, []).sort((a, b) => b.Spotlighted - a.Spotlighted);
    }

    return {solutions: cleanData(parsedContent.data)};
}

export const prerender = true; 


