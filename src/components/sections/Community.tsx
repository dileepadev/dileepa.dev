import {
  getCommunitiesData,
  getEventsData,
  getVideosData,
  // getBlogsData,
} from "@/lib/api";
import CommunitiesPagination from "./community/CommunitiesPagination";
import EventsPagination from "./community/EventsPagination";
import VideosPagination from "./community/VideosPagination";
// import BlogsPagination from "./community/BlogsPagination";
import {
  FaPeopleGroup,
  FaMicrophone,
  FaVideo,
  // FaFileLines,
} from "react-icons/fa6";

export default async function CommunityPage() {
  const communityData = await getCommunitiesData();
  const eventsData = await getEventsData();
  const videosData = await getVideosData();
  // const blogsData = await getBlogsData();

  return (
    <section id="community" className="sectionTransition py-20">
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center">
          <span className="textGradientColor bg-clip-text">Community Work</span>
        </h2>

        {/* Tech Communities */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center justify-center animate-on-scroll">
            <FaPeopleGroup className="textColor mr-2" size={26} />
            <span className="textGradientColor bg-clip-text">
              Tech Communities
            </span>
          </h3>

          <CommunitiesPagination
            communityData={communityData}
            itemsPerPage={3}
          />
        </div>

        {/* Public Speaking Events */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center justify-center animate-on-scroll">
            <FaMicrophone className="textColor mr-2" size={22} />
            <span className="textGradientColor bg-clip-text">
              Public Speaking
            </span>
          </h3>

          <EventsPagination eventsData={eventsData} itemsPerPage={3} />
        </div>

        {/* Videos */}
        <div className="max-w-3xl mx-auto">
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center justify-center animate-on-scroll">
            <FaVideo className="textColor mr-2" size={22} />
            <span className="textGradientColor bg-clip-text">Videos</span>
          </h3>

          <VideosPagination videosData={videosData} itemsPerPage={4} />
        </div>

        {/* Blogs */}
        {/* <div className="max-w-3xl mx-auto mb-16">
          <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 flex items-center justify-center animate-on-scroll">
            <FaFileLines className="textColor mr-2" size={22} />
            <span className="textGradientColor bg-clip-text">Blogs</span>
          </h3>

          <BlogsPagination blogsData={blogsData} itemsPerPage={3} />
        </div> */}
      </div>
    </section>
  );
}
