"use client";

import React from "react";
import { Column, Row, Text, Avatar } from "@once-ui-system/core";

// I added placeholder links for your custom logos. 
// Just swap the "logo" link with your real Cloudinary image link later!
const orgs = [
  {
    id: "gdgoc",
    name: "GDGoC PLM",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v12345/ADD_GDGOC_LOGO_HERE.jpg",
    link: "/blog#gdgoc"
  },
  {
    id: "mathsoc",
    name: "PLM MathSoc",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v12345/ADD_MATHSOC_LOGO_HERE.jpg",
    link: "/blog#mathsoc"
  },
  {
    id: "csyf",
    name: "CS Youth Force",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v12345/ADD_CSYF_LOGO_HERE.jpg",
    link: "/blog#csyf"
  },
  {
    id: "pnhs",
    name: "PNHS Research Club",
    logo: "https://res.cloudinary.com/djq6yl8sw/image/upload/v12345/ADD_PNHS_LOGO_HERE.jpg",
    link: "/blog#pnhs"
  }
];

export default function OrgButtons() {
  return (
    <Row fillWidth wrap gap="16" horizontal="center" paddingTop="32">
      {orgs.map((org) => (
        // FIXED: We now wrap the Column in a standard <a> tag so the href works perfectly!
        <a
          key={org.id}
          href={org.link}
          style={{ textDecoration: "none", width: "40%" }}
        >
          <Column horizontal="center" gap="8">
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