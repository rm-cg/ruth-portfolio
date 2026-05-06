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
      const scrollAmount = 320; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    // FIXED: We brought back Once UI's <Row flex={3}>. 
    // This instantly restores the exact space for your articles so they reappear!
    <Row flex={3} vertical="center" gap="16" fillWidth>
      
      {/* LEFT ARROW: Now locked cleanly next to the cards */}
      <IconButton 
        onClick={() => scroll("left")} 
        icon="chevronLeft" 
        variant="secondary" 
        size="m" 
      />

      {/* THE CARDS: flex: 1 ensures it stays strictly inside the Row bounds */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          flex: 1, 
          overflowX: "auto",
          gap: "16px",
          paddingBottom: "16px", 
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        {children}
      </div>

      {/* RIGHT ARROW: Now locked cleanly next to the cards */}
      <IconButton 
        onClick={() => scroll("right")} 
        icon="chevronRight" 
        variant="secondary" 
        size="m" 
      />

    </Row>
  );
}