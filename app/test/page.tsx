/* eslint-disable @next/next/no-img-element */
import { supabase } from "../lib/supabase/client";

export default async function supabaseTest() {
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
  const { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    return (
      <div>
        <h2>Error fethcing the data from the database.</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Supabase Products</h2>
      {products?.map((item: Product) => (
        <div key={item.id}>
          <h2>{item.title}</h2>

          <img src={item.image} alt={item.title} width={300} height={300} />

          <p>{item.description}</p>

          <p>{item.price}</p>
          <p>{item.rating_count}</p>
          <p>{item.rating_rate}</p>
        </div>
      ))}
    </div>
  );
}
