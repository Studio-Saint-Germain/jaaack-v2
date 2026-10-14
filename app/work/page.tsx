import { categoriesApi, HIGHLIGHTED_CATEGORY_ID } from "../api/categories";
import { projectsApi } from "../api/projects";
import WorkGrid from "./components/work-grid/work-grid";

export const metadata = {
  title: 'Jack Antoine Charlot - Director & Animation Director - Work',
  description: 'Explore the award-winning work of Jack Antoine Charlot, a visionary director and animation expert. Discover captivating storytelling and breathtaking artistry.',
  alternates: { canonical: '/work' },
}

export default async function Work() {
  const [projects, categories] = await Promise.all([
    projectsApi.getProjects(['_embed', 'acf_format=standard']),
    categoriesApi.getActiveCategories(),
  ]);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center md:pl-16 md:py-0">
        {/* Highlighted only drives the home page, not a filter */}
        <WorkGrid projects={projects} categories={categories.filter((category) => category.id !== HIGHLIGHTED_CATEGORY_ID)} />
      </main>
    </>
  )
}