"use client";

import React, { useState } from "react";
import type { CSSProperties } from "react";
import { Media, MasonryGrid, Row, Column, Button } from "@once-ui-system/core";
import { gallery } from "@/resources";

// This strictly defines the image to eliminate all "any" errors
interface GalleryImage {
  src: string;
  alt: string;
  orientation?: string;
}

export default function GalleryView() {
  // Sets "Data Analytics" as the default view, entirely removing "All"
  const [filter, setFilter] = useState<"Data Analytics" | "Organizational">("Data Analytics");

  // This automatically sorts your current certificates based on their alt text
  const filteredImages = gallery.images.filter((image: GalleryImage) => {
    // Keywords to identify Data/Tech certificates
    const isDataOrTech = image.alt.toLowerCase().includes("data") || 
                         image.alt.toLowerCase().includes("python") || 
                         image.alt.toLowerCase().includes("cloud") ||
                         image.alt.toLowerCase().includes("automate");
                         image.alt.toLowerCase().includes("career");

    if (filter === "Data Analytics") return isDataOrTech;
    if (filter === "Organizational") return !isDataOrTech; // Everything else goes to Org
    
    return false;
  });

  return (
    <Column fillWidth gap="m">
      {/* Strictly 2 Interactive Category Buttons - wrap is now correctly passed as a boolean! */}
      <Row horizontal="center" gap="s" wrap paddingBottom="m">
        <Button 
          variant={filter === "Data Analytics" ? "primary" : "secondary"} 
          onClick={() => setFilter("Data Analytics")}
        >
          Data Analytics / Career
        </Button>
        <Button 
          variant={filter === "Organizational" ? "primary" : "secondary"} 
          onClick={() => setFilter("Organizational")}
        >
          Organizational & Leadership
        </Button>
      </Row>

      {/* Filtered Masonry Grid - Natural Sizes */}
      <MasonryGrid columns={2} s={{ columns: 1 }}>
        {filteredImages.map((image: GalleryImage, index: number) => (
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={image.src}
            src={image.src}
            alt={image.alt}
            style={{ objectFit: "contain" } as CSSProperties}
          />
        ))}
      </MasonryGrid>
    </Column>
  );
}