const technologies = [
  'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Hugging Face',
  'AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform',
  'React', 'Next.js', 'Node.js', 'Python', 'Go', 'PostgreSQL',
  'MongoDB', 'Redis', 'CI/CD', 'MLOps', 'RAG', 'LLM Fine-tuning',
];

export default function TechMarquee() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] py-10">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-6 inline-flex items-center gap-0 text-sm font-medium text-slate-500"
          >
            <span className="mr-6 h-1 w-1 rounded-full bg-accent/40" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
