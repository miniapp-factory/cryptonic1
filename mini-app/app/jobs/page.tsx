import { title } from "@/lib/metadata";
import JobCard from "@/components/job-card";

const jobs = [
  {
    id: "1",
    title: "Smart Contract Engineer",
    company: "ChainForge",
    location: "Remote",
    description:
      "Design, develop, and audit smart contracts for DeFi protocols.",
  },
  {
    id: "2",
    title: "Web3 Frontend Developer",
    company: "MetaVerse Labs",
    location: "Berlin, Germany",
    description:
      "Build responsive dApps using React, Next.js, and wagmi.",
  },
  {
    id: "3",
    title: "Blockchain Product Manager",
    company: "TokenX",
    location: "San Francisco, CA",
    description:
      "Lead product strategy for NFT marketplace and tokenomics.",
  },
];

export default function JobsPage() {
  return (
    <main className="flex flex-col gap-6 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">{title} – Jobs</h1>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
}
