"use client";

import type { CSSProperties } from "react";
import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

// This strictly defines the image to eliminate all "any" errors
interface GalleryImage {
  src: string;
  alt: string;
  orientation?: string;
}

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image: GalleryImage, index: number) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={image.src}
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
          style={{ objectFit: "contain" } as CSSProperties}
        />
      ))}
    </MasonryGrid>
  );
}