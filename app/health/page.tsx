"use client";

import { Button } from "@/components/ui/button";
import { ShieldX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotAuthorized() {
  const router = useRouter();
  const [callbackUrl, setCallbackUrl] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const previousUrl = document.referrer;
      if (previousUrl) {
        setCallbackUrl(previousUrl);
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="text-center flex flex-col items-center">
        <ShieldX className="text-red-500" size={64} />
        <h1 className="text-2xl font-semibold mt-4">Access Denied</h1>
        <p className="text-gray-600 mt-2">You are not authorized to view this page.</p>
        <Button onClick={() => router.push(callbackUrl)} className="mt-6">
          Back to Homepage
        </Button>
      </div>
    </div>
  );
}
