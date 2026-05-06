import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getPosts } from "@/app/utils";
import { AvatarGroup, Column, Heading, Line, Media, Row, Schema, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, person, about, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { ScrollToHash } from "@/components/ScrollToHash";

interface WorkProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: WorkProps) {
  const post = getPosts(["src", "app", "work", "projects"]).find((post: any) => post.slug === params.slug);

  if (!post) {
    return;
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      url: baseURL,
      images: [post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`],
    },
  };
}

export default function Project({ params }: WorkProps) {
  const post = getPosts(["src", "app", "work", "projects"]).find((post: any) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const avatars = post.metadata.team?.map((member: any) => member.avatar) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="brand-weak">
            {post.metadata.team?.map((member: any, idx: number) => (
              <span key={idx}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>
      {post.metadata.images && post.metadata.images.length > 0 && (
        <Media priority aspectRatio="16 / 9" radius="m" alt="image" src={post.metadata.images as string} />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related projects
        </Heading>
        <Projects exclude={[post.slug]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}