"use client";

import useSupabase from "@/app/lib/supabase/hooks/useSupabase";
import SearchResult from "@/components/SearchResult";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { query } = useParams<{ query: string }>();
  const { filter, getFilteredData } = useSupabase();
  useEffect(() => {
    getFilteredData(query);
  }, []);

  return (
    <div>
      {filter.map((product) => (
        <SearchResult key={product.id} filter={product} />
      ))}
    </div>
  );
};

export default Page;
