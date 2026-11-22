import { Product } from "@/app/types/Product";
import React from "react";

const SearchResult = ({ filter }: { filter: Product }) => {
  return (
    <>
      <div>
        <div>
          <h2>{filter.title}</h2>
        </div>
        <div>
          <img src={filter.image} alt={filter.title} />
        </div>
      </div>
      ;
    </>
  );
};

export default SearchResult;
