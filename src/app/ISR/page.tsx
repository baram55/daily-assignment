import { Cat } from "@/types";
import React from "react";

const ISR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: { revalidate: 2 },
  });
  const result = await response.json();
  const cat: Cat = result;

  return (
    <main>
      <h1 className="text-center m-4 text-lg">사실</h1>
      <p className="text-center m-4 text-sm">{cat.fact}</p>
      <h1 className="text-center m-4 text-lg">키</h1>
      <p className="text-center m-4 text-sm">{cat.length}</p>
    </main>
  );
};

export default ISR;
