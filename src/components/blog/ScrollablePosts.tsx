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
    <Row flex={3} position="relative" vertical="center" fillWidth>
      {/* FIXED: The div is now just for positioning. The onClick is passed directly to the IconButton! */}
      <div style={{ position: "absolute", left: "-16px", zIndex: 10 }}>
        <IconButton 
          onClick={() => scroll("left")} 
          icon="chevronLeft" 
          variant="secondary" 
          size="m" 
        />
      </div>

      {/* Standard HTML scroll container */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          width: "100%",
          overflowX: "auto",
          gap: "16px",
          padding: "0 20px 24px 20px",
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

      {/* FIXED: The div is now just for positioning. The onClick is passed directly to the IconButton! */}
      <div style={{ position: "absolute", right: "-16px", zIndex: 10 }}>
        <IconButton 
          onClick={() => scroll("right")} 
          icon="chevronRight" 
          variant="secondary" 
          size="m" 
        />
      </div>
    </Row>
  );
}