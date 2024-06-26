import { useRouter } from "next/router";
import React from "react";

const settings = () => {
  const router = useRouter();

  const name = router.query.user;
  return <div>settings inside {router.query.user}/settings</div>;
};

export default settings;
