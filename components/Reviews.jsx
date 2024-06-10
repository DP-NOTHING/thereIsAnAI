import {
  Box,
  Group,
  Rating,
  Stack,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import React from "react";

export default function Reviews({ reviews }) {
  return (
    <>
      <Box style={{ padding: "20px" }}>
        <Rating value={0} size="md" />
        <Textarea placeholder="Write a review" style={{ marginTop: "20px" }} />
        <Group mt={"xl"} mb={"xl"}>
          <Rating value={3} size="xl" />
          <Text size="xl">4.5</Text>
        </Group>
        <Title order={2} mt={"xl"} mb={"xl"}>
          Reviews
        </Title>
        <Stack>
          {reviews.map((review) => (
            <Box key={review.user}>
              <Group>
                <Rating value={review.rating} />
                <Text size="xl">{review.review}</Text>
              </Group>
              <Group>
                <Text size="sm">{review.user}</Text>-{" "}
                <Text size="sm">{review.date}</Text>
              </Group>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
}
