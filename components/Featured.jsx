"use client";
import {
  Badge,
  Box,
  Card,
  Grid,
  Group,
  Title,
  Text,
  Image,
} from "@mantine/core";
import Link from "next/link";
// import Image from "next/image";
import React from "react";

export default function Featured() {
  const aiTools = [
    {
      title: "Adspire",
      description: "Ads",
      image: "/images/adspire.png",
      price: "Free + from $9.99",
    },
    {
      title: "Assistena",
      description: "Academic assistant",
      image: "/images/assistena.png",
      price: "Free",
    },
  ];
  return (
    <div>
      <Box>
        <Title order={2} style={{ marginTop: "15px" }}>
          Featured
        </Title>
      </Box>

      {aiTools.map((tool) => (
        <Grid.Col key={tool.title}>
          <Link
            href={`/details/${tool.title.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              className="customCard"
              shadow="rgba(199, 72, 72, 0.16) 0px 3px 6px, rgba(199, 72, 72, 0.23) 0px 3px 6px"
              padding="sm"
              radius="xl"
              withBorder
            >
              <Group>
                <Image
                  src="https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496574.png?f=webp&w=256"
                  width={60}
                  height={60}
                  alt={tool.title}
                />
                <Text fw={500} size="lg">
                  {tool.title}
                </Text>
              </Group>
              <Group justify="space-between" mt="sm">
                <Text size="sm" c="dimmed">
                  {tool.description}
                </Text>
                <Badge color="grey">{tool.price}</Badge>
              </Group>
            </Card>
          </Link>
        </Grid.Col>
      ))}
    </div>
  );
}
