import React from "react";
import Image from "next/image";
import { useEffect } from "react";

import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const redirectHome = setTimeout(() => {
      router.push("/");
    }, 5000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(redirectHome);
  }, [router]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Page not found</h1>
      <div style={{ position: "relative", width: "100%", height: "60vh", maxWidth: "800px" }}>
        <Image
          src="https://www.shutterstock.com/image-vector/error-404-page-datacenter-server-600w-604255535.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
