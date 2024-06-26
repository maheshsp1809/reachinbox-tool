import { useRouter } from "next/router";
import React, { useEffect } from "react";
const useUser = () => ({
  user: "mahesh",
  loading: false,
});
const index = () => {
  const router = useRouter();
  const userhook = useUser();
  console.log(userhook);
  useEffect(() => {
    if (userhook.user == null) {
      router.replace("/");
    }
  }, [router, userhook.user]);
  return (
    <>
      <div>This is index page for {router.query.user}</div>;
      <button
        //   String interpolation  can also be used `/user/${router.query.user}/settings`
        onClick={(e) =>
          router.push({
            pathname: "/user/[userbracket]/settings",
            query: { user: router.query.user },
          })
        }
      >
        open settings page inside this folder only
      </button>
      <button onClick={(e) => router.replace("/mahesh")}>
        Go to Home page
      </button>
    </>
  );
};

export default index;
