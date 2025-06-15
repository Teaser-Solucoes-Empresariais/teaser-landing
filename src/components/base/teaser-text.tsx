import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const teaserTextVariants = cva(
  "bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent font-bold inline-block",
  {
    variants: {
      size: {
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
};

export function TeaserText({ size, children }: TeaserTextProps) {
  return (
    <span className={teaserTextVariants({ size })}>
      {children ?? "Teaser Soluções"}
    </span>
  );
}
