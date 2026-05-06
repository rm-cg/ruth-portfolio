"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { Row, IconButton } from "@once-ui-system/core";

// 100% Strict Typing
interface ScrollablePostsProps {
  children: ReactNode;
}

export default function ScrollablePosts({ children }: ScrollablePostsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Scrolls exactly one card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    // FIXED: We removed absolute positioning! The arrows are now locked inside the Flex row using gap="12".
    <Row flex={3} vertical="center" fillWidth gap="12" paddingX="12">
      
      {/* Left Clicker Arrow */}
      <IconButton 
        onClick={() => scroll("left")} 
        icon="chevronLeft" 
        variant="secondary" 
        size="m" 
      />

      {/* Standard HTML scroll container */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          flex: 1, // Takes up the exact space between the two arrows
          overflowX: "auto",
          gap: "16px",
          paddingBottom: "24px",
          paddingTop: "8px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
        }}
      >
        {/* CSS to physically hide the ugly bottom scrollbar */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        {children}
      </div>

      {/* Right Clicker Arrow */}
      <IconButton 
        onClick={() => scroll("right")} 
        icon="chevronRight" 
        variant="secondary" 
        size="m" 
      />

    </Row>
  );
}