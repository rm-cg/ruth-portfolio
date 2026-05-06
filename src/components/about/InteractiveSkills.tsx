"use client";

import React, { useState } from "react";
import { Column, Row, Text, Tag, RevealFx, Icon } from "@once-ui-system/core";

interface SkillTag {
  name: string;
  icon: string;
}

interface Skill {
  title: string;
  description: string;
  tags?: SkillTag[];
}

export default function InteractiveSkills({ skills }: { skills: Skill[] }) {
  
  // FIXED: We use array destructuring to safely grab the first item.
  // This completely bypasses the syntax bug from earlier
  const [firstSkill] = skills || [];
  
  const [activeSkill, setActiveSkill] = useState<string | null>(
    firstSkill ? firstSkill.title : null
  );

  return (
    <Column fillWidth gap="12">
      {skills.map((skill) => {
        const isActive = activeSkill === skill.title;

        return (
          <Column
            key={skill.title}
            fillWidth
            border="neutral-medium"
            radius="m"
            background={isActive ? "brand-alpha-weak" : "transparent"}
            style={{ cursor: "pointer", transition: "all 0.2s ease" }}
            onClick={() => setActiveSkill(isActive ? null : skill.title)}
          >
            {/* Clickable Header */}
            <Row fillWidth padding="20" horizontal="between" vertical="center">
              <Text variant="heading-strong-l" onBackground={isActive ? "brand-strong" : "neutral-strong"}>
                {skill.title}
              </Text>
              <Icon
                name={isActive ? "chevronUp" : "chevronDown"}
                onBackground="neutral-weak"
                size="m"
              />
            </Row>

            {/* Expanding Content */}
            {isActive && (
              <RevealFx translateY="4">
                <Column fillWidth paddingX="20" paddingBottom="20" gap="16">
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8">
                      {skill.tags.map((tag) => (
                        <Tag key={tag.name} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                </Column>
              </RevealFx>
            )}
          </Column>
        );
      })}
    </Column>
  );
}