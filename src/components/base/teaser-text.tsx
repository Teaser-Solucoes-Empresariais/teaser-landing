import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from '../../lib/utils';

const teaserTextVariants = cva(
  "bg-gradient-to-br from-[#C8272B] from-30% to-[#1F2B65] to-70% bg-clip-text text-transparent font-bold inline-block",
  {
    variants: {
      size: {
        "xl": "text-xl",
        "2xl": "text-2xl",
        "4xl": "text-4xl",
        "6xl": "text-6xl",
      },
    },
    defaultVariants: {
      size: "6xl",
    },
  }
);

type TeaserTextProps = VariantProps<typeof teaserTextVariants> & {
  children?: React.ReactNode;
  className?: string;
};

export function TeaserText({ size, children, className }: TeaserTextProps) {
  return (
    <span className={cn(teaserTextVariants({ size }), "py-2", className)}>
      {children ?? "Teaser Soluções"}
    </span>
  );
}
