"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function MicrosoftClarity() {
  useEffect(() => {
    const microsoftClarityProjectId =
      process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_PROJECT_ID;

    if (!microsoftClarityProjectId) {
      console.error("Microsoft Clarity Project ID is not defined.");
      return;
    }
    if (process.env.NODE_ENV === "production") {
      Clarity.init(microsoftClarityProjectId);
    }
  }, []);
  return null;
}
