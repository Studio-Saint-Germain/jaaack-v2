
const HIGHLIGHTED_CATEGORY_ID = 3;

export interface Category {
    id: number;
    count: number;
    description: string;
    name: string;
    slug: string;
    taxonomy: string;
}

async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/categories`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

  async function getActiveCategories(): Promise<Category[]> {
    const categories = await getCategories();
    const filtereedCategories = categories.filter((category: Category) => category.count > 0);
    
    return filtereedCategories;
  }

export const categoriesApi = {
    getCategories,
    getActiveCategories
}