import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const drawerVariants = cva(
  "fixed inset-0 z-50 transition-transform duration-300 ease-in-out",
  {
    variants: {
      side: {
        left: "translate-x-0",
        right: "translate-x-full",
        top: "translate-y-0",
        bottom: "translate-y-full",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

export function Drawer({
  children,
  side = "right",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof drawerVariants>) {
  return (
    <div
      data-slot="drawer"
      className={cn(drawerVariants({ side }), props.className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function DrawerTrigger({
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button data-slot="drawer-trigger" {...props}>
      {children}
    </button>
  );
}

export function DrawerContent({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="drawer-content" className="bg-background p-4" {...props}>
      {children}
    </div>
  );
}

export function DrawerHeader({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="drawer-header" className="mb-4" {...props}>
      {children}
    </div>
  );
}

export function DrawerFooter({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="drawer-footer" className="mt-4" {...props}>
      {children}
    </div>
  );
}

export function DrawerClose({
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button data-slot="drawer-close" {...props}>
      {children}
    </button>
  );
}

export function DrawerDescription({
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p data-slot="drawer-description" className="text-muted-foreground" {...props}>
      {children}
    </p>
  );
}

export function DrawerTitle({
  children,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2 data-slot="drawer-title" className="text-foreground font-semibold" {...props}>
      {children}
    </h2>
  );
}
