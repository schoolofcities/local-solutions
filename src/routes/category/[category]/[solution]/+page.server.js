// src/routes/category/[category]/[solution]/+page.server.ts

import { slugify } from '$lib/chapterColours';
import { getSolutions } from '$lib/solutions';

export async function entries() {
    const { unsortedSolutions } = await getSolutions(fetch);

    return unsortedSolutions
        .filter(s => s.Spotlighted)
        .map(s => ({
            category: slugify(s.Chapter),
            solution: `${s.ID_Num}-${slugify(s.Project)}`
        }));
}
// if (solution.Spotlighted)