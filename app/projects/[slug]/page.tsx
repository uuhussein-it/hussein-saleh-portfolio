import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Hussein Saleh`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="brand">
            Hussein<span>Saleh</span>
          </Link>
          <Link href="/#projects" className="nav-cta">
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main>
        <header className="project-hero">
          <div className="container project-hero-inner">
            <p className="eyebrow">{project.tag}</p>
            <h1>{project.title}</h1>
            <p className="project-hero-desc">{project.description}</p>
            <div className="project-meta">
              <div>
                <strong>My role</strong>
                <span>{project.role}</span>
              </div>
              <div>
                <strong>Duration</strong>
                <span>{project.duration}</span>
              </div>
              <div>
                <strong>Tools</strong>
                <span>{project.tags.join(", ")}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="prose">
              <p className="eyebrow">Overview</p>
              {project.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="gallery">
              {project.gallery.map((img) => (
                <figure className="gallery-item" key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={840}
                    height={560}
                    style={{ objectFit: "cover" }}
                  />
                  <figcaption>{img.title}</figcaption>
                </figure>
              ))}
            </div>

            {project.modules && project.modules.length > 0 && (
              <div className="module-block">
                <p className="eyebrow">Review the e-learning</p>
                <div className="module-list">
                  {project.modules.map((m) => (
                    <a
                      key={m.url}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="module-item"
                    >
                      <span className="play-dot" aria-hidden="true" />
                      <span>{m.title}</span>
                      <span className="module-arrow">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.downloads && project.downloads.length > 0 && (
              <div className="module-block">
                <p className="eyebrow">SCORM files</p>
                <div className="module-list">
                  {project.downloads.map((d) => (
                    <a
                      key={d.url}
                      href={d.url}
                      download
                      className="module-item"
                    >
                      <span className="download-dot" aria-hidden="true" />
                      <span>{d.title}</span>
                      <span className="module-arrow">↓</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="project-cta">
              <Link href="/#projects" className="btn btn-secondary">
                ← Back to all projects
              </Link>
              <Link href="/#contact" className="btn btn-primary">
                Contact me about this project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Hussein Saleh. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}