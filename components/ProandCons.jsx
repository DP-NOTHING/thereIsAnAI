import React from "react";
import { Grid, Paper, Text, Group, Stack } from "@mantine/core";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";

export default function ProandCons({ pros, cons }) {
  return (
    <Stack style={{ padding: "20px" }} spacing="xl" direction="row">
      <Paper padding="md" shadow="xs">
        <Text weight={700} size="xl">
          Pros
        </Text>
        {pros.map((pro, index) => (
          <Group key={index} align="center" spacing="xs">
            <IconCircleCheck color="green" size={20} />
            <Text>{pro}</Text>
          </Group>
        ))}
      </Paper>
      <Paper padding="md" shadow="xs">
        <Text weight={700} size="xl">
          Cons
        </Text>
        {cons.map((con, index) => (
          <Group key={index} align="center" spacing="xs">
            <IconCircleX color="red" size={20} />
            <Text>{con}</Text>
          </Group>
        ))}
      </Paper>
    </Stack>
  );
}
