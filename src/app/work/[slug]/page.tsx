import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';
// Removed formatDate from here!
import { getPosts } from '@/utils/utils'; 
import { Button, Column, RevealFx, Row, Text, Heading } from '@once-ui-system/core';
import { baseURL } from '@/resources';

// We added the missing formatDate function directly into this file
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// We fixed images to be a string[] array!
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

interface WorkProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getPosts(['src', 'app', 'work', 'projects']);
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: WorkProps) {
  const post = getPosts(['src', 'app', 'work', 'projects']).find((post: Post) => post.slug === params?.slug);

  if (!post) {
    return {};
  }

  const { title, publishedAt: publishedTime, summary: description, images } = post.metadata;
  // Safely grabs the first image from the array, or defaults to the generated image
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

export default function Project({ params }: WorkProps) {
  const post = getPosts(['src', 'app', 'work', 'projects']).find((post: Post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <Column maxWidth="m" gap="l" paddingX="s" horizontal="center">
      <Row fillWidth marginBottom="s">
        <Button href="/#insights" variant="tertiary" size="s" prefixIcon="chevronLeft">
  Back to Insights
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