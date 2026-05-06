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
    // PURE HTML WRAPPER: This completely bypasses Once UI's layout engine. 
    // It guarantees the arrows cannot be hidden or clipped.
    <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
      
      {/* LEFT ARROW: Locked to the absolute left edge */}
      <div style={{ position: "absolute", left: "0px", zIndex: 9999 }}>
        <IconButton 
          onClick={() => scroll("left")} 
          icon="chevronLeft" 
          variant="secondary" 
          size="l" 
        />
      </div>

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          width: "100%",
          overflowX: "auto",
          gap: "16px",
          // 64px side padding so the cards slide perfectly *between* the arrows without touching them
          padding: "16px 64px 24px 64px", 
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

      {/* RIGHT ARROW: Locked to the absolute right edge */}
      <div style={{ position: "absolute", right: "0px", zIndex: 9999 }}>
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