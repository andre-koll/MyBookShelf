"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="flex items-center gap-x-2"
    >
      <PlusCircle className="w-3.5 h-3.5" />
      <span>{pending ? "Saving..." : "Save"}</span>
    </Button>
  );
}