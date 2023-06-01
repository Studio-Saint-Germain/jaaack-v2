
const HIGHLIGHTED_CATEGORY_ID = 3;

export interface Project {
    id: number;
    date: Date;
    status: 'publish';
    title: {
        rendered: string;
    },
    content: {
        rendered: string;
        protected: boolean;
    },
    featured_media: number;
    categories: number[];
    acf: {
        vimeo_link: {
            title: string;
            url: string;
            target: string;
        },
        video_gif: number;
    },
}

async function getProjects(): Promise<Project[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/projects`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

async function getHighlightedProjects(): Promise<Project[]> {
    const res = await getProjects();
    const highlightedProjects =  res.filter((project: Project) => project.categories.includes(HIGHLIGHTED_CATEGORY_ID));
    return highlightedProjects;
}

export const projectsApi = {
    getProjects,
    getHighlightedProjects

}