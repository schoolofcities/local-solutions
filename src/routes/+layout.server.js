// // export const csr = true;
// // export const ssr = false;

import { getSolutions } from '$lib/solutions';
import { base } from '$app/paths';

export async function load({ fetch }) {
    const geoRes = await fetch(`${base}/data/1981_canada_centroids.geojson`);
    const mapGeo = await geoRes.json();
    let provinceGeo = {};

    mapGeo.features.forEach((province) => {
        provinceGeo[province.properties.Postal] = province;
    })

    return {
        ...(await getSolutions(fetch)),
        mapGeo,
        provinceGeo
    };
}

export const prerender = true; 
