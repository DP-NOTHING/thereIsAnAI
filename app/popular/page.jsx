"use client";
import Details from "@/components/Details";
import { Heading } from "@/components/Heading";
import { Navbar } from "@/components/NavBar";
import {
  Card,
  Image,
  Group,
  Text,
  Badge,
  Button,
  Grid,
  Title,
} from "@mantine/core";
import Link from "next/link";

export default function Home() {
  const aiTools = [
    {
      title: "Adspire",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496580.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "webr",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496581.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "Adspire",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496588.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "Adspire",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496585.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "Andr",
      description: "Adsrvsrvs",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496577.png?f=webp&w=256",
      price: "from $12",
    },
    {
      title: "Adspire",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496582.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "webr",
      description: "Avrsds",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496578.png?f=webp&w=256",
      price: "Free ",
    },
    {
      title: "Adspire",
      description: "sefvtr",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496576.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "Assistena",
      description: "Academic assistant",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496575.png?f=webp&w=256",
      price: "Free",
    },
    {
      title: "Adspire",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496554.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "webr",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496583.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "andr",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496586.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "Assistena",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496579.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "Adspire",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496584.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
    {
      title: "Assistena",
      description: "Ads",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-cdn-1758346-1496587.png?f=webp&w=256",
      price: "Free + from $9.99",
    },
  ];

  return (
    <>
      <Title order={1} style={{ marginTop: "15px", padding: "20px" }}>
        Popular{" "}
      </Title>
      <Grid
        gutter="md"
        justify="center"
        styles={{
          root: { padding: "20px" },
        }}
      >
        {aiTools.map((tool) => (
          <Grid.Col span={{ base: 12, xs: 4 }} key={tool.title}>
            <Link
              href={`/details/${tool.title.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className="customCard"
                shadow="sm"
                padding="sm"
                radius="md"
                withBorder
              >
                <Group>
                  <Image
                    src={tool.image}
                    width={100}
                    height={100}
                    alt={tool.title}
                  />
                  <Text fw={500} size="lg">
                    {tool.title}
                  </Text>
                </Group>

                <Group justify="space-between" mt="sm" mb="sm">
                  <Text size="sm" c="dimmed">
                    {tool.description}
                  </Text>
                  <Badge color="grey">{tool.price}</Badge>
                </Group>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>

      {/* <Details /> */}
    </>
  );
}
