import WebLinks from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src="/profile_picture.jpg"
            alt="Profile Picture"
            width="200"
            height="200"
            className="rounded-full"
            priority
          />
          <div className="font-bold text-4xl my-4 mt-10 text-center">
            Dileepa Bandara
          </div>
          <div className="font-title text-lg">Coming Soon</div>
          <div className="flex mt-4">
            <Link
              href={WebLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:text-gray-400 transition duration-900"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href={WebLinks.xtwitter}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:text-gray-400 transition duration-900"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href={WebLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-900"
            >
              <FaLinkedinIn size={24} />
            </Link>
          </div>
          <Link
            href="mailto:contact@dileepabandara.dev"
            className="text-center mt-4 hover:text-gray-400 transition duration-900"
          >
            contact@dileepabandara.dev
          </Link>
        </div>
      </main>
    </div>
  );
}
