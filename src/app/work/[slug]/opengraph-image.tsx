import { loadCover, OG_SIZE, renderOgCard } from '@/lib/og/card';

import { getProjectBySlug, projects } from '@/data/projects';

export const alt = 'Bullah Labs case study';
export const size = OG_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Share card for one case study: title, tagline and the product's screen. */
export default async function CaseStudyOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return renderOgCard({ kicker: 'Work', title: 'Case study not found' });
  }

  const image = await loadCover(project.slug);
  return renderOgCard({
    kicker: `Case study · ${project.industry}`,
    title: project.title,
    body: project.tagline,
    footer: project.client,
    aside: image
      ? {
          kind: 'cover',
          image,
          width: project.coverWidth,
          height: project.coverHeight,
          caption: `${project.category} · ${project.year}`,
        }
      : undefined,
  });
}
