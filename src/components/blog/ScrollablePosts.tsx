"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { IconButton } from "@once-ui-system/core";

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
    // 100% Bulletproof Flexbox: Three items strictly side-by-side. 
    <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "16px" }}>
      
      {/* LEFT ARROW: flexShrink 0 guarantees it cannot be squished or hidden */}
      <div style={{ flexShrink: 0 }}>
        <IconButton 
          onClick={() => scroll("left")} 
          icon="chevronLeft" 
          variant="secondary" 
          size="l" 
        />
      </div>

      {/* THE CARDS: flex 1 forces it to fit perfectly between the two arrows */}
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

      {/* RIGHT ARROW: flexShrink 0 guarantees it cannot be squished or hidden */}
      <div style={{ flexShrink: 0 }}>
        <IconButton 
          onClick={() => scroll("right")} 
          icon="chevronRight" 
          variant="secondary" 
          size="l" 
        />
      </div>

    </div>
  );
}