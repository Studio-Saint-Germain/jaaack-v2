
const HIGHLIGHTED_CATEGORY_ID = 3;

export interface Project {
    id: number;
    date: Date;
    status: 'publish';
    slug: string;
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
        video_gif: string;
    },
}

async function getProjects(extraParams?: string[]): Promise<Project[]> {
    let params = '';
    if (extraParams) {
        params = `?${extraParams.join('&')}`;
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/projects${params}`, { next: { revalidate: 600 } });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const json = res.json();
    return json;
  }

async function getHighlightedProjects(): Promise<Project[]> {
    const res = await getProjects(['acf_format=standard']);
    const highlightedProjects = res.filter((project: Project) => project.categories.includes(HIGHLIGHTED_CATEGORY_ID));
    return highlightedProjects;
}

async function getProjectBySlug(slug: string): Promise<Project> {
    const res = await getProjects();
    const project = res.find((project: Project) => project.slug === slug);
    if (project === undefined) {
        throw new Error('Project not found');
    }
    return project;
}

export const projectsApi = {
    getProjects,
    getHighlightedProjects,
    getProjectBySlug
}