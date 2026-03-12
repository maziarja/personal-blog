"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MenuIcon from "../ui/icon-menu";
import { useState } from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { XIcon } from "lucide-react";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const onClose = () => setOpen(false);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        {!open ? (
          <Button variant="ghost" size={"icon"}>
            <MenuIcon />
          </Button>
        ) : (
          <Button variant="secondary" size={"icon"}>
            <XIcon />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent
        avoidCollisions={false}
        align="end"
        alignOffset={-49}
        sideOffset={12}
        className="w-[calc(100vw-32px)] space-y-2"
      >
        <Link
          href={"/"}
          onClick={onClose}
          className={`${pathname === "/" ? "text-accent-foreground text-preset-6" : "text-preset-7"} block`}
        >
          Home
        </Link>
        <Separator />
        <Link
          href={"/blog"}
          onClick={onClose}
          className={`${pathname === "/blog" ? "text-preset-6" : "text-accent-foreground text-preset-7"} block`}
        >
          Blog
        </Link>
        <Separator />
        <Link
          href={"/about"}
          onClick={onClose}
          className={`${pathname === "/about" ? "text-preset-6" : "text-accent-foreground text-preset-7"} block`}
        >
          About
        </Link>
        <Separator />
        <Link
          href={"/newsletter"}
          onClick={onClose}
          className={`${pathname === "/newsletter" ? "text-preset-6" : "text-accent-foreground text-preset-7"} block`}
        >
          Newsletter
        </Link>
      </PopoverContent>
    </Popover>
  );
}

export default MobileMenu;
