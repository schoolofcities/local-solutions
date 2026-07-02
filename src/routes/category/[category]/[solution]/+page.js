import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
    const data = await parent();
    
    const ID_Num = parseInt(params.solution.split("-")[0]);
    const solution = data.unsortedSolutions[ID_Num];

    if (!solution?.Spotlighted) {
        error(404, 'Not found');
    }

    return { solution, params };
}