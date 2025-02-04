'use client';

import { useEffect, useState, useRef } from "react";
import { Affiliate } from "@/types";
import ShareForm from "./share-form";
import { getShareServiceById } from "@/lib/actions/affiliate.actions";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Copy, Download } from "lucide-react";
import { formatError } from "@/lib/utils";
import { QRCodeCanvas } from "qrcode.react";

const ShareList = ({ userId }: { userId?: string }) => {
  const [affiliate, setAffiliate] = useState<Affiliate[]>([]);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAffiliate = async () => {
      try {
        const res = await getShareServiceById();
        if (res) setAffiliate([res]);
      } catch (error) {
        console.error("Failed to load share service:", error);
      }
    };

    if (userId) loadAffiliate();
  }, [userId]);

  const reload = async () => {
    try {
      const res = await getShareServiceById();
      if (res) {
        setAffiliate([res]);
      }
    } catch (error) {
      return { success: false, message: formatError(error) };
    }
  };

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const downloadQRCode = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = "share-link-qrcode.png";
        a.click();
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-6">
          {affiliate.length === 0 ? (
            <div className="text-center text-gray-500">No share service setup yet.</div>
          ) : (
            <>
              {affiliate.map((affiliate) => (
                <div key={affiliate.id} className="space-y-6">
                  <h2 className="text-2xl font-bold">Share Service Details</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Referral Code:</span>
                      <span className="text-gray-700">{affiliate.referralCode || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Affiliate Link:</span>
                      <span className="text-gray-700">{affiliate.affiliateLink || "N/A"}</span>
                    </div>

                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Share this link:</span>
                      <div className="flex items-center space-x-3">
                        <Link
                          href={`https://igift.com.ph/${affiliate.referralCode}`}
                          target="_blank"
                          className="text-gray-500 underline hover:text-yellow-500"
                        >
                          {`https://igift.com.ph/${affiliate.referralCode}`}
                        </Link>
                        <button
                          onClick={() => handleCopyClick(`https://igift.com.ph/${affiliate.referralCode}`)}
                          className="text-gray-600 hover:text-yellow-500"
                        >
                          <Copy size={24} />
                        </button>
                      </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="flex items-center space-x-6">
                      <div ref={qrRef} className="p-4 border rounded-2xl shadow-md bg-white">
                        <QRCodeCanvas value={`https://igift.com.ph/${affiliate.referralCode}`} size={128} />
                      </div>
                      <button
                        onClick={downloadQRCode}
                        className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-2xl hover:bg-yellow-500"
                      >
                        <Download size={24} />
                        <span>Download QR Code</span>
                      </button>
                    </div>

                    {affiliate.affiliateLink ? (
                      <ShareForm userId={userId ?? ''} onAffiliateLinkSubmitted={reload} />
                    ) : (
                      <div className="text-red-500">No valid affiliate link to share</div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShareList;
