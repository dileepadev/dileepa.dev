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
    <section id="community" className="sectionTransition py-20">
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center">
          <span className="textGradientColor bg-clip-text">Community Work</span>
        </h2>

        {/* Tech Communities */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center animate-on-scroll">
            <HiOutlineUsers className="textColor mr-2" size={26} />
            <span className="textGradientColor bg-clip-text">
              Tech Communities
            </span>
          </h3>
          <div className="space-y-4">
            {currentCommunities.map((community) => (
              <div
                key={community.name}
                className="primaryCardTheme borderColor p-5 rounded-lg shadow-sm"
              >
                <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
                  <Image
                    src={community.logo || "/placeholder.svg"}
                    alt={`${community.name} logo`}
                    height={80}
                    width={80}
                    className="object-contain p-2"
                  />
                  <div className="flex-1 w-full text-left">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      {" "}
                      <div className="mb-2 w-full">
                        <h3 className="textColor md:text-lg text-base font-semibold flex items-center">
                          {community.name}
                          {community.current && (
                            <span className="miniCardChipTheme ml-2 px-2 py-0.5 text-xs rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </h3>
                        <div className="textButtonColor buttonTransition text-sm md:text-base">
                          {community.role}
                        </div>
                        <div className="textSecondaryColor text-sm md:text-base">
                          {community.period}
                        </div>
                      </div>
                    </div>
                    <p className="textSecondaryColor text-sm md:text-base">
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
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center animate-on-scroll">
            <HiOutlineMicrophone className="textColor mr-2" size={26} />
            <span className="textGradientColor bg-clip-text">
              Public Speaking Events
            </span>
          </h3>
          <div className="space-y-4">
            {currentSpeakingEvents.map((talk) => (
              <div
                key={talk.title}
                className="primaryCardTheme borderColor p-6 rounded-lg shadow-sm"
              >
                <h4 className="textColor md:text-lg text-base font-semibold">
                  {talk.title}
                </h4>
                <div className="textSecondaryColor buttonTransition text-sm md:text-base mb-3">
                  {talk.date} | {talk.location}
                </div>
                <p className="textSecondaryColor buttonTransition text-sm md:text-base mb-4">
                  {talk.description}
                </p>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="textButtonSecondaryColor buttonTransition font-medium text-sm flex items-center"
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
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center animate-on-scroll">
            <HiOutlineVideoCamera className="textColor mr-2" size={26} />
            <span className="textGradientColor bg-clip-text">
              YouTube Videos
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentVideos.map((video) => (
              <Link
                key={video.title}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="primaryCardTheme borderColor block rounded-lg overflow-hidden shadow-sm"
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
                  <h4 className="textColor font-semibold text-sm md:text-base mb-1 line-clamp-2">
                    {video.title}
                  </h4>{" "}
                  <div className="textSecondaryColor flex justify-between text-sm">
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
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center animate-on-scroll">
            <HiOutlineDocumentText className="textColor mr-2" size={26} />
            <span className="textGradientColor bg-clip-text">Blog Posts</span>
          </h3>
          <div className="space-y-6">
            {currentBlogPosts.map((post) => (
              <div
                key={post.title}
                className="primaryCardTheme borderColor p-6 rounded-lg shadow-sm"
              >
                <h4 className="textColor text-md md:text-lg font-semibold">
                  {post.title}
                </h4>
                <div className="textSecondaryColor flex justify-between text-sm mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="textSecondaryColor mb-4 text-sm">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="textButtonSecondaryColor font-medium flex items-center text-sm"
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
