import type { Metadata } from "next";
import LibraryExperience from "@/components/LibraryExperience";
export const metadata: Metadata = {
  title: "University Library | Huda University Gusau",
  description: "Explore Huda University’s library, research resources, subject guides and library support.",
};
export default function LibraryPage() { return <LibraryExperience/>; }
