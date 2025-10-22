import { description, title, url } from "@/lib/metadata";
import { Metadata } from "next";
import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          title: "Launch Mini App",
          action: {
            type: "launch_miniapp",
            name: title,
            url: url,
            splashImageUrl: `${url}/icon.png`,
            iconUrl: `${url}/icon.png`,
            splashBackgroundColor: "#000000",
            description: description,
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-6 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
      <Button asChild>
        <a href="/jobs">View Jobs</a>
      </Button>
    </main>
  );
}
