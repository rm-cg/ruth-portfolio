"use client";

// FIXED: Explicitly importing just the MouseEvent type to keep the linter 100% happy!
import type { MouseEvent } from "react";
import { Column, Row, Text, Avatar } from "@once-ui-system/core";
import { useRouter } from "next/navigation";

const orgs = [
  {
    id: "gdgoc",
    name: "GDGoC PLM",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778065475/GDG_PLM_LOGO_vo7fwe.jpg",
    link: "/blog#gdgoc"
  },
  {
    id: "mathsoc",
    name: "PLM MathSoc",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778067673/PLM_MATHSOC_folgel.jpg",
    link: "/blog#mathsoc"
  },
  {
    id: "csyf",
    name: "CS Youth Force",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778065469/CSYF_LOGO_nmpizw.jpg",
    link: "/blog#csyf"
  },
  {
    id: "pnhs",
    name: "PNHS Research Club",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778071489/PNHS_LOGO_tue4pt.jpg",
    link: "/blog#pnhs"
  }
];

export default function OrgButtons() {
  const router = useRouter();

  const handleSmoothJump = (e: MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    
    // 1. Let the browser navigate to the page normally
    router.push(link);
    
    // 2. Extract the specific organization hash (e.g., "pnhs")
    const hash = link.split("#")[1];
    
    // 3. Wait exactly 1 second for the Masonry photos to finish loading and expanding the page,
    // then force the screen to smoothly scroll down to correct the layout shift!
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 1000);
  };

  return (
    <Row fillWidth wrap gap="16" horizontal="center" paddingTop="32">
      {orgs.map((org) => (
        <a
          key={org.id}
          href={org.link}
          onClick={(e) => handleSmoothJump(e, org.link)}
          style={{ textDecoration: "none", width: "40%" }}
        >
          <Column 
            horizontal="center" 
            gap="8" 
            style={{ cursor: "pointer", transition: "transform 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }} 
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <Avatar src={org.logo} size="xl" />
            <Text align="center" variant="body-default-xs" onBackground="neutral-strong">
              {org.name}
            </Text>
          </Column>
        </a>
      ))}
    </Row>
  );
}