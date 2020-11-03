import { GET_GALLERIES } from "../gql/gallery.gql";
import { GET_META } from "../gql/meta.gql";
import { Gallery } from "../interfaces/gallery.interface";
import { Metadata } from "../interfaces/meta.interface";
import { post, query } from "../libs/client";
import { GET_BANNER } from "../gql/banner.gql";

export async function getMeta(): Promise<Metadata> {
    const data = await query(GET_META);
    return data.allSiteMetas[0];
}

export async function getGalleries(): Promise<Gallery[]> {
    const data = await query(GET_GALLERIES);
    return data.allGalleries.filter(gallery => gallery.title !== 'My Favorite Music');
}

export async function getBanner(key: string): Promise<any> {
    const data = await query(GET_BANNER, { key });
    return data.allBanners[0];
}

export async function sendMessage(name: string, email: string, message: string) {
    await post('/nest-api/contacts', { name, email, message });
}
