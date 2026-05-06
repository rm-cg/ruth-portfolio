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
    <Row flex={3} position="relative" vertical="center" fillWidth>
      
      {/* GUARANTEED VISIBLE LEFT ARROW: Floating over the cards */}
      <div style={{ position: "absolute", left: "8px", zIndex: 999 }}>
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
          // Added 48px padding to the sides so cards don't hide under the arrows
          padding: "16px 48px 24px 48px", 
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

      {/* GUARANTEED VISIBLE RIGHT ARROW: Floating over the cards */}
      <div style={{ position: "absolute", right: "8px", zIndex: 999 }}>
        <IconButton 
          onClick={() => scroll("right")} 
          icon="chevronRight" 
          variant="secondary" 
          size="l" 
        />
      </div>

    </Row>
  );
}