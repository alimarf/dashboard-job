'use client'

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const router = useRouter();

  const navCreateJobPage = () => router.push("/post-job");

  return (
    <div className="flex flex-row items-center justify-between pb-3 mb-8 border-b border-border">
      <div>
        <div>Company</div>
        <div className="font-semibold">Twitter</div>
      </div>
      <div>
        <Button onClick={navCreateJobPage} className="px-6 py-3 rounded-none">
          <PlusIcon className="w-4 h-4 mr-2" />
          Post a job
        </Button>
      </div>
    </div>
  );
};

export default Header;
