"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function TokenLogo() {
  return (
    <CardContainer>
      <CardBody className="border-transparent items-center justify-center mx-auto">
        <CardItem>
          <Image
            src="/images/token.png"
            height="540"
            width="540"
            alt="token logo"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
