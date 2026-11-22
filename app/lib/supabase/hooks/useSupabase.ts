import { useState } from "react";
import { supabase } from "../client";

export default function useSupabase() {
  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating_rate: number;
    rating_count: number;
  };
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<Product[]>([]);

  const getDataFromSupabase = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      setProducts(data);
    }
  };

  const getFilteredData = async (query: string) => {
    const searchQuery = query.trim();
    if (!searchQuery) {
      return;
    }
    const term = `%${searchQuery}%`;
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .or(
        `title.ilike.${term},description.ilike.${term},category.ilike.${term}`,
      );
    if (error) {
      console.log(error);
      return;
    }
    if (!data || data.length === 0) {
      console.log(`No matching products for "${searchQuery}"`);
      setFilter([]);
      return;
    }
    setFilter(data);
    console.log(data);
  };
  return { products, getDataFromSupabase, filter, getFilteredData };
}
