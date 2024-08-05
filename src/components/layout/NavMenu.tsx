"use client";

import * as React from "react";
import { BookOpenCheck, ChevronsUpDown, Hotel, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const NavMenu = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown />
          <span className="sr-only">Select Page</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer flex gap-2"
          onClick={() => router.push("/hotel/new")}
        >
          <PlusIcon size={15} />
          <span>Add Hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex gap-2"
          onClick={() => router.push("/hotel/list")}
        >
          <Hotel size={15} />
          <span>My Hotels</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex gap-2"
          onClick={() => router.push("/bookings")}
        >
          <BookOpenCheck size={15} />
          <span>My Bookings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
