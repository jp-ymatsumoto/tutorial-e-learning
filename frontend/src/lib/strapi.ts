import { CourseType, VideoType } from "@/types";

/**
 * 全コースを取得する
 * @returns Promise<CourseType[]>
 */
export async function getCourses(): Promise<CourseType[]> {
  try {
    const res = await fetch(`http://localhost:1337/api/courses?populate=*`);
    const courses = await res.json();
    // console.log(courses);
    return courses.data;
  } catch (error) {
    // console.log(error);
    return [];
  }
}

/**
 * コースを取得する
 * @param courseId number コースID
 * @returns Promise<CourseType | null>
 */
export async function getCourse(courseId: number): Promise<CourseType | null> {
  try {
    const res = await fetch(`http://localhost:1337/api/courses/${courseId}?populate=*`);
    const course = await res.json();
    // console.log(course);
    return course.data;
  } catch (error) {
    // console.log(error);
    return null;
  }
}

/**
 * コースの動画を取得する
 * @param videoIds number[] 動画IDの配列
 * @returns Promise<VideoType[]>
 */
export async function getCourseVideos(videoIds: number[]): Promise<VideoType[]> {
  try {
    const res = await Promise.all(
      videoIds.map(async (videoId) => {
        const res = await fetch(`http://localhost:1337/api/videos/${videoId}?populate=*`);
        const video = await res.json();
        return video.data;
      })
    );
    // console.log(res);
    return res;
  } catch (error) {
    // console.log(error);
    return [];
  }
}
