import { Column, Heading, Row, Line, Media } from "@once-ui-system/core";
import { baseURL, blog } from "@/resources";
import React from "react";
import type { CSSProperties } from "react";

export async function generateMetadata() {
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${baseURL}${blog.path}`,
      images: [`/api/og/generate?title=${encodeURIComponent(blog.title)}`],
    },
  };
}

export default function Involvement() {
  return (
    <Column maxWidth="m" fillWidth gap="xl" horizontal="center" paddingBottom="xl">
      <Column fillWidth gap="24" horizontal="center" marginBottom="l">
        <Heading as="h1" variant="display-strong-l">{blog.title}</Heading>
      </Column>

      {/* 1. GDGoC PLM SECTION */}
      <Column id="gdgoc" fillWidth gap="m" paddingTop="l">
        <Heading as="h2" variant="display-strong-s" onBackground="neutral-strong">
          Google Developer Groups on Campus - PLM
        </Heading>
        <Row fillWidth gap="12" wrap paddingTop="8">
          <Row border="neutral-medium" radius="m" minWidth={240} height={160}>
            <Media enlarge radius="m" alt="GDGoC Data Study Jam" src="https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995038/DATA_STUDY_JAM_vz2a1s.jpg" style={{ objectFit: "contain" } as CSSProperties} />
          </Row>
          <Row border="neutral-medium" radius="m" minWidth={240} height={160}>
            <Media enlarge radius="m" alt="Ready Set Grow" src="https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995022/COP_RSG_PARTICIPANT_njbgrv.jpg" style={{ objectFit: "contain" } as CSSProperties} />
          </Row>
        </Row>
      </Column>

      {/* FREAKING SEPARATING LINE */}
      <Line background="neutral-alpha-medium" fillWidth />

      {/* 2. PLM MathSoc SECTION */}
      <Column id="mathsoc" fillWidth gap="m" paddingTop="l">
        <Heading as="h2" variant="display-strong-s" onBackground="neutral-strong">
          PLM Mathematical Society
        </Heading>
        <Row fillWidth gap="12" wrap paddingTop="8">
          <Row border="neutral-medium" radius="m" minWidth={240} height={160}>
            <Media enlarge radius="m" alt="MathSoc Photo" src="https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995002/COP_GAWAD_SIPNAYAN_PARTICIPANT_tb5nmd.jpg" style={{ objectFit: "contain" } as CSSProperties} />
          </Row>
          <Row border="neutral-medium" radius="m" minWidth={240} height={160}>
            <Media enlarge radius="m" alt="Mathira Mathibay" src="https://res.cloudinary.com/djq6yl8sw/image/upload/v1777994985/COA_MATHIRA_MATHIBAY_ORGANIZER_ke44ue.png" style={{ objectFit: "contain" } as CSSProperties} />
          </Row>
        </Row>
      </Column>

      <Line background="neutral-alpha-medium" fillWidth />

      {/* 3. CS Youth Force SECTION */}
      <Column id="csyf" fillWidth gap="m" paddingTop="l">
        <Heading as="h2" variant="display-strong-s" onBackground="neutral-strong">
          College of Science Youth Force
        </Heading>
        <Row fillWidth gap="12" wrap paddingTop="8">
          <Row border="neutral-medium" radius="m" minWidth={240} height={160}>
            <Media enlarge radius="m" alt="CSYF Photo" src="https://res.cloudinary.com/djq6yl8sw/image/upload/v1777994990/COA_CSGA_PARTICIPANT_aqtzfm.png" style={{ objectFit: "contain" } as CSSProperties} />
          </Row>
        </Row>
      </Column>

      <Line background="neutral-alpha-medium" fillWidth />

      {/* 4. PNHS Research Club SECTION */}
      <Column id="pnhs" fillWidth gap="m" paddingTop="l">
        <Heading as="h2" variant="display-strong-s" onBackground="neutral-strong">
          PNHS Research Club
        </Heading>
        <Row fillWidth gap="12" wrap paddingTop="8">
          <Row border="neutral-medium" radius="m" minWidth={240} height={160}>
            {/* Using your S.B.A.S.S. prototype action shot for the research club! */}
            <Media enlarge radius="m" alt="PNHS Photo" src="https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041648/DSC_0661_xggowh.jpg" style={{ objectFit: "contain" } as CSSProperties} />
          </Row>
        </Row>
      </Column>

    </Column>
  );
}