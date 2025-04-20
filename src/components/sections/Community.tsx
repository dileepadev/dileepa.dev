"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiOutlineUsers,
  HiOutlineMicrophone,
  HiOutlineArrowSmRight,
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import Pagination from "../Pagination";
import { speakingEvents } from "@/data/speaking-events";
import { videoContent } from "@/data/videos";
import { blogPosts } from "@/data/blog-posts";
import { techCommunities } from "@/data/tech-communities";
import Link from "next/link";

const Community = () => {
  // Add state for pagination
  const [currentSpeakingPage, setCurrentSpeakingPage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const [currentCommunitiesPage, setCurrentCommunitiesPage] = useState(1);

  // Pagination settings
  const itemsPerPage = 3;
  const videoItemsPerPage = 4;

  const totalSpeakingPages = Math.ceil(speakingEvents.length / itemsPerPage);
  const totalVideoPages = Math.ceil(videoContent.length / videoItemsPerPage);
  const totalBlogPages = Math.ceil(blogPosts.length / itemsPerPage);
  const totalCommunitiesPages = Math.ceil(
    techCommunities.length / itemsPerPage
  );

  // Get current items for each section
  const currentSpeakingEvents = speakingEvents.slice(
    (currentSpeakingPage - 1) * itemsPerPage,
    currentSpeakingPage * itemsPerPage
  );

  const currentVideos = videoContent.slice(
    (currentVideoPage - 1) * videoItemsPerPage,
    currentVideoPage * videoItemsPerPage
  );

  const currentBlogPosts = blogPosts.slice(
    (currentBlogPage - 1) * itemsPerPage,
    currentBlogPage * itemsPerPage
  );

  const currentCommunities = techCommunities.slice(
    (currentCommunitiesPage - 1) * itemsPerPage,
    currentCommunitiesPage * itemsPerPage
  );

  return (
    <section
      id="community"
      className="py-20 bg-white transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-neutral-900">
          Community Work
        </h2>

        {/* Tech Communities */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center animate-on-scroll text-neutral-800">
            <HiOutlineUsers className="mr-2 text-neutral-600" size={24} />
            Tech Communities
          </h3>
          <div className="space-y-4">
            {currentCommunities.map((community) => (
              <div
                key={community.name}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
                  <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-md overflow-hidden border border-gray-200 mb-3 md:mb-0">
                    <Image
                      src={community.logo || "/placeholder.svg"}
                      alt={`${community.name} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 w-full text-left">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      {" "}
                      <div className="mb-2 w-full">
                        <h3 className="md:text-lg text-base font-bold text-gray-900 flex items-center">
                          {community.name}
                          {community.current && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-black text-white rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </h3>
                        <div className="md:text-lg text-base text-gray-700 font-medium">
                          {community.role}
                        </div>
                        <div className="text-sm md:text-base text-gray-500">
                          {community.period}
                        </div>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 mb-3">
                      {community.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentCommunitiesPage}
            totalPages={totalCommunitiesPages}
            setCurrentPage={setCurrentCommunitiesPage}
          />
        </div>

        {/* Public Speaking */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center animate-on-scroll text-neutral-800">
            <HiOutlineMicrophone className="mr-2 text-neutral-600" size={24} />
            Public Speaking
          </h3>
          <div className="space-y-4">
            {currentSpeakingEvents.map((talk) => (
              <div
                key={talk.title}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
              >
                <h4 className="font-semibold text-md md:text-lg text-neutral-900">
                  {talk.title}
                </h4>
                <div className="text-neutral-600 text-sm mb-2">
                  {talk.date} | {talk.location}
                </div>
                <p className="text-neutral-700 mt-2 text-sm mb-3">
                  {talk.description}
                </p>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 font-medium flex items-center hover:text-black transition-colors text-sm"
                >
                  View more
                  <HiOutlineArrowSmRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentSpeakingPage}
            totalPages={totalSpeakingPages}
            setCurrentPage={setCurrentSpeakingPage}
          />
        </div>

        {/* YouTube Videos */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center animate-on-scroll text-neutral-800">
            <HiOutlineVideoCamera className="mr-2 text-neutral-600" size={24} />
            YouTube Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentVideos.map((video) => (
              <Link
                key={video.title}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="aspect-video relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>{" "}
                <div className="p-4">
                  <h4 className="font-semibold text-sm md:text-base mb-1 line-clamp-2 text-neutral-900">
                    {video.title}
                  </h4>{" "}
                  <div className="flex justify-between text-sm text-neutral-500">
                    <span>{video.views}</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Pagination
            currentPage={currentVideoPage}
            totalPages={totalVideoPages}
            setCurrentPage={setCurrentVideoPage}
          />
        </div>

        {/* Blog Posts */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center animate-on-scroll text-neutral-800">
            <HiOutlineDocumentText
              className="mr-2 text-neutral-600"
              size={24}
            />
            Blog Posts
          </h3>
          <div className="space-y-6">
            {currentBlogPosts.map((post) => (
              <div
                key={post.title}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h4 className="text-md md:text-lg font-semibold mb-2 text-neutral-900">
                  {post.title}
                </h4>
                <div className="flex justify-between text-sm text-neutral-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-neutral-700 mb-4 text-sm">{post.excerpt}</p>
                <Link
                  href="#"
                  className="text-neutral-700 font-medium flex items-center hover:text-black transition-colors text-sm"
                >
                  Read more
                  <HiOutlineArrowSmRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentBlogPage}
            totalPages={totalBlogPages}
            setCurrentPage={setCurrentBlogPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
