'use client';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Undo2 } from "lucide-react";

export default function HealthForumPresentationPage() {
    const router = useRouter();
  return (
    <>
    <Button variant="outline" onClick={() => router.push("/resources")} className="fixed top-2 right-4 hover:bg-gold hover:text-black">
          <Undo2/>Back to Resources
    </Button>
    <div className="fixed inset-0 flex items-center justify-center bg-black mt-10">
      <Card className="max-w-7xl w-full h-[46rem] p-4 border-gold/[0.25]">
        <CardContent className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.canva.com/design/DAGULif8bV0/s55Astj3t611WdJF4v6N9Q/view?embed"
            allowFullScreen
            title="iGift Health Forum Presentation"
          ></iframe>
        </CardContent>
      </Card>
    </div>
    </>
  );
}