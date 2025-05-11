import { AboutData } from "@/types/about";
import { BlogData } from "@/types/blog";
import { CommunityData } from "@/types/community";
import { EducationData } from "@/types/education";
import { EventData } from "@/types/event";
import { ExperienceData } from "@/types/experience";
import { Tools } from "@/types/tools";
import { VideoData } from "@/types/video";

const API_BASE_URL = "https://api.dileepa.dev";

export async function getAboutData(): Promise<AboutData> {
  const res = await fetch(`${API_BASE_URL}/about`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch about data");
  }
  return res.json();
}

export async function getExperiencesData(): Promise<ExperienceData[]> {
  const res = await fetch(`${API_BASE_URL}/experiences`);
  if (!res.ok) {
    throw new Error("Failed to fetch experience data");
  }
  return res.json();
}

export async function getToolsData(): Promise<Tools[]> {
  const res = await fetch(`${API_BASE_URL}/tools`);
  if (!res.ok) {
    throw new Error("Failed to fetch tools data");
  }
  return res.json();
}

export async function getEducationsData(): Promise<EducationData[]> {
  const res = await fetch(`${API_BASE_URL}/educations`);
  if (!res.ok) {
    throw new Error("Failed to fetch education data");
  }
  return res.json();
}

export async function getCommunitiesData(): Promise<CommunityData[]> {
  const res = await fetch(`${API_BASE_URL}/communities`);
  if (!res.ok) {
    throw new Error("Failed to fetch community data");
  }
  return res.json();
}

export async function getEventsData(): Promise<EventData[]> {
  const res = await fetch(`${API_BASE_URL}/events`);
  if (!res.ok) {
    throw new Error("Failed to fetch events data");
  }
  return res.json();
}

export async function getVideosData(): Promise<VideoData[]> {
  const res = await fetch(`${API_BASE_URL}/videos`);
  if (!res.ok) {
    throw new Error("Failed to fetch videos data");
  }
  return res.json();
}

export async function getBlogsData(): Promise<BlogData[]> {
  const res = await fetch(`${API_BASE_URL}/blogs`);
  if (!res.ok) {
    throw new Error("Failed to fetch blogs data");
  }
  return res.json();
}
