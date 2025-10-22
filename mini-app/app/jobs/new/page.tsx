import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function NewJobPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app you would send this data to a backend or blockchain
    console.log({ title, company, location, description });
    // For now just redirect back to jobs list
    router.push("/jobs");
  };

  return (
    <main className="flex flex-col gap-6 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">Post a New Job</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-4"
      >
        <div className="space-y-1">
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="description">Job Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </main>
  );
}
