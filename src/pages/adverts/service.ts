import { client } from "../../api/client";
import type { Advert } from "./types";

const advertsUrl = "/api/adverts";

export const getLatestAdverts = async () => {
    //const url = `${advertsUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
    //const url = advertsUrl;
    //const response = await client.get<Advert[]>(url);
    //return response.data;
    const adverts: Advert[] = await client.get(advertsUrl);
    return adverts;
}