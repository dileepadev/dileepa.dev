import { AboutData } from "@/types/about";
import { Experience } from "@/types/experience";
import { Tools } from "@/types/tools";

export async function getAboutData(): Promise<AboutData> {
  const res = await fetch("https://api.dileepa.dev/about", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch about data");
  }
  return res.json();
}

export async function getExperiencesData(): Promise<Experience[]> {
  const res = await fetch("https://api.dileepa.dev/experiences");
  if (!res.ok) {
    throw new Error("Failed to fetch experience data");
  }
  return res.json();
}

export async function getToolsData(): Promise<Tools[]> {
  const res = await fetch("https://api.dileepa.dev/tools");
  if (!res.ok) {
    throw new Error("Failed to fetch tools data");
  }
  return res.json();
}

export async function getEducationsData(): Promise<Experience[]> {
  const res = await fetch("https://api.dileepa.dev/educations");
  if (!res.ok) {
    throw new Error("Failed to fetch education data");
  }
  return res.json();
}

export async function getCommunitiesData(): Promise<Experience[]> {
  const res = await fetch("https://api.dileepa.dev/communities");
  if (!res.ok) {
    throw new Error("Failed to fetch community data");
  }
  return res.json();
}

export async function getEventsData(): Promise<Experience[]> {
  const res = await fetch("https://api.dileepa.dev/events");
  if (!res.ok) {
    throw new Error("Failed to fetch events data");
  }
  return res.json();
}

export async function getVideosData(): Promise<Experience[]> {
  const res = await fetch("https://api.dileepa.dev/videos");
  if (!res.ok) {
    throw new Error("Failed to fetch videos data");
  }
  return res.json();
}

export async function getBlogsData(): Promise<Experience[]> {
  const res = await fetch("https://api.dileepa.dev/blogs");
  if (!res.ok) {
    throw new Error("Failed to fetch blogs data");
  }
  return res.json();
}
