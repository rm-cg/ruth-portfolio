import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';
import { getPosts } from '@/utils/utils';
import { Button, Column, RevealFx, Row, Text, Heading } from '@once-ui-system/core';
import { baseURL } from '@/resources';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Post {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images?: string[];
  };
  content: string;
}

// FIXED: We updated params to be a Promise so Next.js knows to wait for it!
interface WorkProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPosts(['src', 'app', 'work', 'projects']);
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: WorkProps) {
  // FIXED: We added 'await' here so it successfully grabs the URL!
  const resolvedParams = await params;
  const post = getPosts(['src', 'app', 'work', 'projects']).find((post: Post) => post.slug === resolvedParams.slug);

  if (!post) {
    return {};
  }

  const { title, publishedAt: publishedTime, summary: description, images } = post.metadata;
  // FIXED: Ensure we are grabbing the first image in the array correctly
  const ogImage = images && images.length > 0 ? images : `${baseURL}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseURL}/work/${post.slug}`,
      images: [{ url: ogImage }],
    },
  };
}

// FIXED: We changed this to an 'async' function so we can 'await' the params!
export default async function Project({ params }: WorkProps) {
  const resolvedParams = await params;
  const post = getPosts(['src', 'app', 'work', 'projects']).find((post: Post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <Column maxWidth="m" gap="l" paddingX="s" horizontal="center">
      <Row fillWidth marginBottom="s">
        <Button href="/work" variant="tertiary" size="s" prefixIcon="chevronLeft">
          Projects
        </Button>
      </Row>
      <Column fillWidth gap="12">
        <RevealFx translateY="8">
          <Heading as="h1" variant="display-strong-l">{post.metadata.title}</Heading>
        </RevealFx>
        <RevealFx translateY="12" delay={0.2}>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </RevealFx>
      </Column>
      <RevealFx translateY="16" delay={0.4} fillWidth>
        <CustomMDX source={post.content} />
      </RevealFx>
    </Column>
  );
}