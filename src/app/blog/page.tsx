import { Column, Heading, Line, Media, Text, MasonryGrid } from "@once-ui-system/core";
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

// ============================================================================
// 📸 THE MAGIC ARRAYS (PRE-FILLED WITH YOUR LINKS)
// ============================================================================

const gdgPhotos = [
  { id: "GDG 1", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778065475/GDG_PLM_LOGO_vo7fwe.jpg" },
  { id: "GDG 2", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041522/received_32234488962831846_fhhjtr.png" },
  { id: "GDG 3", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041524/received_3258879644269110_thllh7.png" },
  { id: "GDG 4", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041520/received_2309882712805820_efbuvf.jpg" },
  { id: "GDG 6", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041325/FB_IMG_1758202419391_iqwxry.jpg" },
  { id: "GDG 7", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041320/FB_IMG_1756648296489_dpim5b.jpg" },
  { id: "GDG 8", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041332/IMG_20260425_140257_918_le9vr8.jpg" },
  { id: "GDG 9", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041505/received_1116374050454040_kvc9dy.jpg" },
  { id: "GDG 11", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041518/received_2006747543418459_vgqb43.png" },
  { id: "GDG 12", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041508/received_1335919008066613_baebxv.png" },
  { id: "GDG 13", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041651/retouch_2025090519522057_bxmxzc.jpg" },
  { id: "GDG 14", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041524/received_649509888196213_f7x5zs.jpg" },
  { id: "GDG 15", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041326/FB_IMG_1775986258156_bj5ree.jpg" },
  { id: "GDG 16", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041333/Messenger_creation_E0870FC1-53C2-4084-8E30-54195D13DF70_ojjct0.jpg" },
  { id: "GDG 17", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041508/received_1660411831769665_gibvcj.webp" },
  { id: "GDG 18", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778065475/GDG_PLM_LOGO_vo7fwe.jpg" },
];

const mathSocPhotos = [
  { id: "MathSoc 2", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041595/FB_IMG_1756648280828_vwt9we.jpg" },
  { id: "MathSoc 3", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041595/FB_IMG_1755457528239_gpqc88.jpg" },
  { id: "MathSoc 4", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041568/2025-04-23_15.57.45_ife72z.jpg" },
  { id: "MathSoc 5", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041618/FB_IMG_1778035244116_gtx1vs.jpg" },
  { id: "MathSoc 6", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041627/FB_IMG_1778034412442_pxhpo4.jpg" },
  { id: "MathSoc 7", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041620/received_1295375535742216_cxvba5.jpg" },
  { id: "MathSoc 8", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041617/FB_IMG_1778035224982_jfnwpc.jpg" },
  { id: "MathSoc 9", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041614/FB_IMG_1778035214807_btqgpc.jpg" },
  { id: "MathSoc 10", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041618/FB_IMG_1778035229595_r6fiyl.jpg" },
  { id: "MathSoc 11", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041613/FB_IMG_1778035186642_zfenp9.jpg" },
  { id: "MathSoc 12", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041609/FB_IMG_1778035192965_ualgct.jpg" },
  { id: "MathSoc 13", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041607/FB_IMG_1778035179138_nuz8mx.jpg" },
  { id: "MathSoc 14", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041603/FB_IMG_1778034305058_nzsn56.jpg" },
  { id: "MathSoc 15", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041596/FB_IMG_1770033148085_kflcuz.jpg" },
  { id: "MathSoc 16", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041590/2025-06-01_21.08.50_dgz8aa.jpg" },
  { id: "MathSoc 17", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041587/2025-06-11_00.19.43_uyshmf.png" },
  { id: "MathSoc 18", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041585/2025-06-01_21.01.19_pj6ydx.jpg" },
  { id: "MathSoc 19", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041585/2025-06-01_21.00.30_iczckr.jpg" },
  { id: "MathSoc 20", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041581/2025-06-01_21.00.11_detd6j.jpg" },
  { id: "MathSoc 21", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041580/2025-05-14_21.43.51_uuagoz.jpg" },
  { id: "MathSoc 22", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041578/2025-05-14_21.40.29_ehyu3t.jpg" },
  { id: "MathSoc 23", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041574/2025-04-30_17.59.58_yedqaz.jpg" },
  { id: "MathSoc 24", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041567/2025-03-04_20.30.37_hl3vjm.jpg" },
  { id: "MathSoc 25", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041562/2025-03-04_20.27.44_oecl38.jpg" },
];

const csyfPhotos = [
  { id: "CSYF 1", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041315/2025-05-13_19.57.49_tyftbv.jpg" },
  { id: "CSYF 2", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041315/FB_IMG_1778035172424_nem9xf.jpg" },
  { id: "CSYF 3", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041315/FB_IMG_1778035258018_vqldwc.jpg" },
  { id: "CSYF 4", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041315/FB_IMG_1778035219403_yumdxi.jpg" },
];

const pnhsPhotos = [
  { id: "PNHS 2", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041652/DSC_0662_nm9mht.jpg" },
  { id: "PNHS 3", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041613/received_1059427358367700_nezare.jpg" },
  { id: "PNHS 4", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041560/received_778665433966573_ntofwv.jpg" },
  { id: "PNHS 5", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041554/received_2190272401169302_hzwtbz.jpg" },
  { id: "PNHS 6", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041554/received_156532223979985_dbnmib.jpg" },
  { id: "PNHS 7", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041553/DSC_0939_z95vcp.jpg" },
  { id: "PNHS 8", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041538/DSC_0792_gqbmfu.jpg" },
  { id: "PNHS 9", src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041531/DSC_0005_qyj6g8.jpg" },
];

export default function Involvement() {
  return (
    <Column maxWidth="m" fillWidth gap="xl" horizontal="center" paddingBottom="xl">
      <Column fillWidth gap="24" horizontal="center" marginBottom="l">
        <Heading as="h1" variant="display-strong-l" align="center">{blog.title}</Heading>
      </Column>

      {/* 1. GDGoC PLM SECTION */}
      <Column id="gdgoc" fillWidth gap="m" paddingTop="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center" onBackground="neutral-strong" style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}>
          Google Developer Groups on Campus - PLM
        </Heading>
        <Column fillWidth paddingTop="l">
          <MasonryGrid columns={3} s={{ columns: 2 }}>
            {gdgPhotos.map((photo) => (
              <Column key={photo.id} border="neutral-medium" background="neutral-alpha-weak" padding="4" radius="m">
                {photo.src ? (
                  <Media enlarge radius="s" alt={photo.id} src={photo.src} style={{ width: "100%", height: "auto", objectFit: "contain" } as CSSProperties} />
                ) : (
                  <Column fillWidth minHeight={135} background="neutral-alpha-medium" radius="s" vertical="center" horizontal="center">
                    <Text variant="body-default-xs" onBackground="neutral-weak">{photo.id}</Text>
                  </Column>
                )}
              </Column>
            ))}
          </MasonryGrid>
        </Column>
      </Column>

      <Line background="neutral-alpha-medium" fillWidth marginTop="l" />

      {/* 2. PLM MathSoc SECTION */}
      <Column id="mathsoc" fillWidth gap="m" paddingTop="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center" onBackground="neutral-strong" style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}>
          PLM Mathematical Society
        </Heading>
        <Column fillWidth paddingTop="l">
          <MasonryGrid columns={3} s={{ columns: 2 }}>
            {mathSocPhotos.map((photo) => (
              <Column key={photo.id} border="neutral-medium" background="neutral-alpha-weak" padding="4" radius="m">
                {photo.src ? (
                  <Media enlarge radius="s" alt={photo.id} src={photo.src} style={{ width: "100%", height: "auto", objectFit: "contain" } as CSSProperties} />
                ) : (
                  <Column fillWidth minHeight={135} background="neutral-alpha-medium" radius="s" vertical="center" horizontal="center">
                    <Text variant="body-default-xs" onBackground="neutral-weak">{photo.id}</Text>
                  </Column>
                )}
              </Column>
            ))}
          </MasonryGrid>
        </Column>
      </Column>

      <Line background="neutral-alpha-medium" fillWidth marginTop="l" />

      {/* 3. CS Youth Force SECTION */}
      <Column id="csyf" fillWidth gap="m" paddingTop="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center" onBackground="neutral-strong" style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}>
          College of Science Youth Force
        </Heading>
        <Column fillWidth paddingTop="l">
          <MasonryGrid columns={3} s={{ columns: 2 }}>
            {csyfPhotos.map((photo) => (
              <Column key={photo.id} border="neutral-medium" background="neutral-alpha-weak" padding="4" radius="m">
                {photo.src ? (
                  <Media enlarge radius="s" alt={photo.id} src={photo.src} style={{ width: "100%", height: "auto", objectFit: "contain" } as CSSProperties} />
                ) : (
                  <Column fillWidth minHeight={135} background="neutral-alpha-medium" radius="s" vertical="center" horizontal="center">
                    <Text variant="body-default-xs" onBackground="neutral-weak">{photo.id}</Text>
                  </Column>
                )}
              </Column>
            ))}
          </MasonryGrid>
        </Column>
      </Column>

      <Line background="neutral-alpha-medium" fillWidth marginTop="l" />

      {/* 4. PNHS Research Club SECTION */}
      <Column id="pnhs" fillWidth gap="m" paddingTop="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center" onBackground="neutral-strong" style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}>
          PNHS Research Club
        </Heading>
        <Column fillWidth paddingTop="l">
          <MasonryGrid columns={3} s={{ columns: 2 }}>
            {pnhsPhotos.map((photo) => (
              <Column key={photo.id} border="neutral-medium" background="neutral-alpha-weak" padding="4" radius="m">
                {photo.src ? (
                  <Media enlarge radius="s" alt={photo.id} src={photo.src} style={{ width: "100%", height: "auto", objectFit: "contain" } as CSSProperties} />
                ) : (
                  <Column fillWidth minHeight={135} background="neutral-alpha-medium" radius="s" vertical="center" horizontal="center">
                    <Text variant="body-default-xs" onBackground="neutral-weak">{photo.id}</Text>
                  </Column>
                )}
              </Column>
            ))}
          </MasonryGrid>
        </Column>
      </Column>

    </Column>
  );
}