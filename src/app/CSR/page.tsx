"use client";

import { Cat } from "@/types";
import React, { useEffect, useState } from "react";

const CSR = () => {
  const [cat, setCat] = useState<Cat>({ fact: "없음", length: -1 });

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(`https://catfact.ninja/fact`, {
        cache: "no-cache",
      });
      const result = await response.json();
      setCat(result);
    };
    fetchCat();
  }, []);

  if (!cat) {
    return <div>불러오는 중...</div>;
  }

  return (
    <main>
      <h1 className="text-center m-4 text-lg">사실</h1>
      <p className="text-center m-4 text-sm">{cat.fact}</p>
      <h1 className="text-center m-4 text-lg">키</h1>
      <p className="text-center m-4 text-sm">{cat.length}</p>
    </main>
  );
};

export default CSR;
