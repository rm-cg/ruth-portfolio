import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';
import { formatDate, getPosts } from '@/app/utils';
import { Button, Column, RevealFx, Row, Text, Heading } from '@once-ui-system/core';
import { baseURL } from '@/resources';

export async function generateStaticParams() {
    let posts = getPosts(['src', 'app', 'work', 'projects']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: any) {
    let post = getPosts(['src', 'app', 'work', 'projects']).find((post) => post.slug === params?.slug);
    if (!post) {
        return {};
    }

    let { title, publishedAt: publishedTime, summary: description, images } = post.metadata;
    let ogImage = images ? images : `${baseURL}/api/og?title=${encodeURIComponent(title)}`;

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

export default function Project({ params }: any) {
    let post = getPosts(['src', 'app', 'work', 'projects']).find((post) => post.slug === params?.slug);

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
                        {formatDate(post.metadata.publishedAt)}
                    </Text>
                </RevealFx>
            </Column>

            <RevealFx translateY="16" delay={0.4} fillWidth>
                <CustomMDX source={post.content} />
            </RevealFx>
        </Column>
    );
}