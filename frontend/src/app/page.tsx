import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <h1>トップページ</h1>
      {session && (
        <div>
          {session.user?.name} {session.user?.email} {session.user?.image}
        </div>
      )}
    </>
  );
}
