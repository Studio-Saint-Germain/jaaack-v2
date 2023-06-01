export interface Page {
    id: number;
    date: Date;
    slug: string;
    title: {
        rendered: string;
    },
    content: {
        rendered: string;
    },
    featured_media: number;
    background_image: string;
    acf: [];
    _embedded: {
        'wp:featuredmedia': [
            {
                title: {
                    rendered: string;
                },
                media_details: {
                    sizes: {
                        full: {
                            source_url: string;
                        }
                    }
                }
            }
        ]

    }
}

async function getPages(): Promise<Page[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/pages`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const json = res.json();
    return json;
  }

  async function getPageById(id: number): Promise<Page> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/pages/${id}?_embed`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const json = res.json();
    return json;
  }


export const pagesApi = {
    getPages,
    getPageById,
}