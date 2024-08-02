import { getCourses } from "@/lib/strapi";
import { CourseType } from "@/types";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  const courses: CourseType[] = await getCourses();
  // console.log(courses);

  return (
    <>
      <h1>トップページ</h1>
      {session && (
        <div>
          {session.user?.name} {session.user?.email} {session.user?.image}
        </div>
      )}
      <div>
        {courses.map((course) => (
          <div className="w-80 border" key={course.id}>
            <Link href={`/courses/${course.id}`}>
              <Image
                src={`http://localhost:1337${course.attributes.thumbnail.data.attributes.url}`}
                width={course.attributes.thumbnail.data.attributes.width}
                height={course.attributes.thumbnail.data.attributes.height}
                alt="thumbnail"
                className="object-cover h-40"
                priority
              />
              <div className="text-base font-bold">{course.attributes.title}</div>
              <div className="text-base font-bold">{course.attributes.price} 円</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
