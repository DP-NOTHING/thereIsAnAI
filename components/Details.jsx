"use client";
import React from "react";
import {
  Container,
  Image,
  Text,
  Stack,
  Tabs,
  Group,
  Space,
  Divider,
  Title,
  Rating,
  Box,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Reviews from "./Reviews";
import Alternates from "./Alternates";
import ProandCons from "./ProandCons";
import QnA from "./QnA";

const Details = ({ data }) => {
  return (
    <Container size="md">
      <Group direction="column" style={{ marginBottom: "15px" }}>
        <Stack>
          <Group>
            <Image src={data.logo} alt="App Icon" width={64} height={64} />

            <Stack style={{ marginLeft: "15px" }}>
              <Title order={1}>{data.title}</Title>
              <Rating value={3} />
            </Stack>
          </Group>
          <div>
            <Text size="sm">{data.description}</Text>
          </div>
        </Stack>
        <Space h="md" />
        <Stack></Stack>
      </Group>

      <Tabs defaultValue="Overview">
        <Tabs.List>
          <Tabs.Tab value="Overview">Overview Content</Tabs.Tab>
          <Tabs.Tab value="Reviews">Reviews Content</Tabs.Tab>
          <Tabs.Tab value="Alternatives">Alternatives Content</Tabs.Tab>
          <Tabs.Tab value="Q&A">Q&A</Tabs.Tab>
          <Tabs.Tab value="Pros & Cons">Pros & Cons Content</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Overview" style={{ margin: "15px" }}>
          <Text size="sm">{data.overview}</Text>
          <Space h="lg" />
          <div>
            <Carousel
              slideSize="70%"
              slideGap="sm"
              controlsOffset="xl"
              controlSize={40}
              loop
              withIndicators
            >
              {data.screenshots.map((screenshot, index) => (
                <Carousel.Slide key={index}>
                  <Image src={screenshot} alt={`Screenshot ${index + 1}`} />
                </Carousel.Slide>
              ))}

              {/* <Carousel.Slide><Image src="https://www.cssdesignawards.com/cdasites/2024/202405/20240528090646.jpg" alt="Screenshot 1" /></Carousel.Slide>
      <Carousel.Slide><Image src="https://res.cloudinary.com/learncomputeracademy/images/w_1011,h_569,c_scale/f_webp/v1690401427/awwwards-screenshot/awwwards-screenshot.jpg?_i=AA" alt="Screenshot 2" /></Carousel.Slide> */}
            </Carousel>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="Reviews">
          <Reviews reviews={data.reviews} />
        </Tabs.Panel>
        <Tabs.Panel value="Alternatives">
          <Alternates alternates={data.alternates} />
        </Tabs.Panel>
        <Tabs.Panel value="Q&A">
          <QnA questions={data.questions} />
        </Tabs.Panel>
        <Tabs.Panel value="Pros & Cons">
          <ProandCons pros={data.pros} cons={data.cons} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Details;
