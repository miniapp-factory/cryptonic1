import { notFound } from "next/navigation";
import { title } from "@/lib/metadata";
import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";

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

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-6 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">{title} – Job Details</h1>
      <JobCard job={job} />
      <Button asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Apply Now
        </a>
      </Button>
    </main>
  );
}
