import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="text-center mt-28 text-xl">
      <h1>Page Not Found</h1>
      <Link href={"/"}>
        <button className="mt-5">Go to Back</button>
      </Link>
    </div>
  );
};
export default NotFound;
