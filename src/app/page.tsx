"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Heatmap</h1>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <p>You clicked {count} times</p>
    </>
  );
}
