import { CourseType } from "@/types";

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
