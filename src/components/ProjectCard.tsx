"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

// FIXED: Added "?" to make these officially optional, satisfying the strict linter!
interface ProjectCardProps {
  href: string;
  title: string;
  priority?: boolean;
  images?: string[];
  content?: string;
  description?: string;
  avatars?: { src: string }[];
  link?: string;
}

// FIXED: Removed React.FC to bypass the missing import error!
export const ProjectCard = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}: ProjectCardProps) => {
  
  // FIXED: Safely checking our optional data up here prevents TypeScript 
  // from complaining and prevents the infamous React "0" rendering bug!
  const hasAvatars = avatars && avatars.length > 0;
  const hasDescription = description && description.trim().length > 0;
  const hasContent = content && content.trim().length > 0;

  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(hasAvatars || hasDescription || hasContent) && (
          <Column flex={7} gap="16">
            {hasAvatars && <AvatarGroup avatars={avatars} size="m" reverse />}
            {hasDescription && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {hasContent && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};