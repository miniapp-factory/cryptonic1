import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-medium">{job.company}</p>
        <p className="text-sm text-muted-foreground">{job.location}</p>
        <p className="mt-2 text-sm line-clamp-3">{job.description}</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Link href={`/jobs/${job.id}`} className="text-primary hover:underline">
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}
