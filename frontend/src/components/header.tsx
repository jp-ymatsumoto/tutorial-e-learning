import { getServerSession } from "next-auth";
import Link from "next/link";

const Header = async () => {
  const session = await getServerSession();

  return (
    <div className="flex flex-row justify-between items-center h-20">
      <Link href="/">
        <h1>e-learning</h1>
      </Link>
      <div className="flex flex-row gap-x-2">
        {session ? (
          <>
            <Link href="/api/auth/signout">signout</Link>
            <Link href="/profile">{session.user?.name}</Link>
          </>
        ) : (
          <Link href="/api/auth/signin">signin</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
