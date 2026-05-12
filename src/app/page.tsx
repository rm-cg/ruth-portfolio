import React from "react";
import { Heading, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Line, Media } from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";
import Post from "@/components/blog/Post";
import ScrollablePosts from "@/components/blog/ScrollablePosts";

export async function generateMetadata() {
  return {
    title: home.title,
    description: home.description,
    openGraph: {
      title: home.title,
      description: home.description,
      url: baseURL,
      images: [home.image],
    }
  };
}

export default function Home() {
  const allPosts = getPosts(["src", "app", "blog", "posts"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false} href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <Column fillWidth horizontal="center" gap="0">
            <RevealFx translateY="12" delay={0.4} horizontal="center">
              <Button id="about" data-border="rounded" href={about.path} variant="secondary" size="m" weight="default" arrowIcon>
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />
                  )}
                  {about.title}
                </Row>
              </Button>
            </RevealFx>

            {/* 👇 FEATURED IMAGE BLOCK 👇 */}
            <RevealFx
              translateY="24"
              delay={0.5}
              horizontal="center"
              paddingTop="64"
              paddingBottom="0"
            >
              <Media
                src="https://res.cloudinary.com/djq6yl8sw/image/upload/v1778562521/42c852aa1179610b826e652ef8987a9b_s14xfm.jpg"
                alt="Neural Networks Illustration"
                radius="l"
                aspectRatio="16/9"
                border="neutral-alpha-weak"
                sizes="(max-width: 900px) 100vw, 900px"
                style={{
                  maxWidth: "900px",
                  width: "100%",
                  objectFit: "cover",
                  filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))",
                  marginBottom: "-120px",
                  animation: "float 3s ease-in-out infinite",
                  transition: "transform 0.5s ease"
                }}
              />
              <style>{`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
              `}</style>
            </RevealFx>
            {/* 👆 END FEATURED IMAGE BLOCK 👆 */}
          </Column>
        </Column>
      </Column>

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[2]} />
      </RevealFx>

      {routes["/blog"] && (
        <Column id="insights" fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Professional Insights & Analytical Explorations
              </Heading>
            </Row>
            <ScrollablePosts>
              {allPosts.map((post) => (
                <Column
                  key={post.slug}
                  style={{ minWidth: "280px", maxWidth: "320px", scrollSnapAlign: "start" }}
                >
                  <Post post={post} thumbnail direction="column" />
                </Column>
              ))}
            </ScrollablePosts>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      <Mailchimp />
    </Column>
  );
}