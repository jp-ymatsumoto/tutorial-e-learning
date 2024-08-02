import { getCourse, getCourseVideos } from "@/lib/strapi";
import { CourseType, VideoType } from "@/types";

const CourseDetailPage = async ({ params }: { params: { courseId: string } }) => {
  const course: CourseType | null = await getCourse(Number(params.courseId));
  // console.log(course);
  let videos: VideoType[] = [];
  if (course) {
    const videoIds = course.attributes.videos.data.map((video) => Number(video.id));
    videos = await getCourseVideos(videoIds);
  }
  // console.log(videos);

  return (
    <div>
      {/* <div>{params.courseId}</div> */}
      {videos.map((video: VideoType) => (
        <div key={video.id}>
          <div>{video.attributes.title}</div>
          {video.attributes.is_free && (
            <video
              src={`http://localhost:1337${video.attributes.url.data.attributes.url}`}
              controls
              width={400}
              height={300}
            ></video>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseDetailPage;
