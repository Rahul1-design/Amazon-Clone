import React from "react";

type pageProps = {
  params: Promise<{
    query: string;
  }>;
};

const page = async ({ params }: pageProps) => {
  const { query } = await params;
  return <div>{query}</div>;
};

export default page;
