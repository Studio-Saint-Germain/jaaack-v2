export interface Drawing {
    id: number;
    title: {
        rendered: string;
    },
    acf: {
        media: {
            url: string;
            mime_type: string;
            width: number;
            height: number;
            alt: string;
        }
    }
}

// ponytail: single page of 100, paginate if the client goes beyond
async function getDrawings(): Promise<Drawing[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/drawings?per_page=100&orderby=menu_order&order=asc&acf_format=standard`, { next: { revalidate: 10 } });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

// Menu link is hidden until the client adds a first drawing; API down = hidden too, never breaks the layout
async function hasDrawings(): Promise<boolean> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/drawings?per_page=1&_fields=id`, { next: { revalidate: 10 } });
        return res.ok && (await res.json()).length > 0;
    } catch {
        return false;
    }
}

export const drawingsApi = {
    getDrawings,
    hasDrawings,
}
