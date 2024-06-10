import React from "react";
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
export default function Alternates({ alternates }) {
  return (
    <div>
      <Box style={{ padding: "20px" }}>
        <Title order={2} mb={"xl"}>
          Alternates
        </Title>
        <Grid gutter={"xl"}>
          {alternates.map((tool) => (
            <Grid.Col key={tool.title}>
              <Card className="customCard" padding="md" radius="xl" withBorder>
                <Group>
                  <Image
                    src={tool.logo}
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
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
