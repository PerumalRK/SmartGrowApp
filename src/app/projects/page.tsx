import type { Metadata } from "next";
import { Info } from "lucide-react";
import { CtaBand, PageHero } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the types of ERP, CRM, billing, survey, medical research and business management applications SmartGrowApp develops.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Our Project Experience" text="A showcase of the application categories we have built, from ERP and CRM to billing, surveys and medical research." />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <p className="mx-auto mb-10 flex max-w-3xl items-start gap-3 rounded-xl border border-royal/20 bg-royal/5 p-4 text-sm text-slate-700">
            <Info size={18} className="mt-0.5 shrink-0 text-royal" aria-hidden />
            To protect customer confidentiality, project visuals are illustrative conceptual mockups and do not show real customer names or data.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>
      </section>
      <CtaBand title="Need Something Similar? Let's Talk." button="Discuss Your Project" />
    </>
  );
}
