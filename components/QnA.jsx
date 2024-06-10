import React from "react";
import { Accordion } from "@mantine/core";
import { IconHelpCircle, IconHelp } from "@tabler/icons-react";

export default function QnA({ questions }) {
  return (
    <div>
      <h2>Q&A</h2>
      <Accordion variant="separated" radius="lg">
        {questions.map((item, index) => (
          <Accordion.Item key={index} value={item.question}>
            <Accordion.Control icon={<IconHelp />}>
              {item.question}
            </Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
// What is ImageToCaption designed to do?
// ImageToCaption is designed to generate captions for uploaded images using AI algorithms.
// Where can one access ImageToCaption?
// ImageToCaption is accessible through its website, imagetocaption.ai.
// What is required to generate captions using ImageToCaption?
// Users need to upload an image to ImageToCaption to generate a caption.
// What type of users can use ImageToCaption?
// ImageToCaption can be used by any individuals, businesses, or organizations who need to generate captions for images.
// How can the captions generated by ImageToCaption be used?
// The captions generated by ImageToCaption can be used in social media posts, blog articles, and other types of content.
// What are the steps to generate a caption using ImageToCaption?
// The steps to generate a caption using ImageToCaption are: upload an image to the platform and the AI algorithms will analyze the image and generate a relevant caption. The generated caption can then be copied and used as required.
// Does ImageToCaption require any specific browser configurations?
// IDK
// Can ImageToCaption analyze any type of image?
// IDK
// Does ImageToCaption offer assistance or support for the users?
// IDK
// How fast does ImageToCaption generate captions for an image?
// The precise speed at which ImageToCaption generates captions was not specified on their website, but the tool is designed to quickly analyze images and generate captions.
// Is ImageToCaption accessible on mobile devices?
// IDK
// Does ImageToCaption require any software installation?
// No software installation is required to use ImageToCaption. It is a web-based tool available through its website.
// What type of AI algorithms does ImageToCaption utilize?
// ImageToCaption uses AI algorithms to analyze images and generate captions. The specific type of AI algorithms used was not mentioned on their website.
// How accurate are the captions generated by ImageToCaption?
// The accuracy of the captions generated by ImageToCaption was not specified on their website.
// Can I use ImageToCaption for my business?
// Yes, businesses can use ImageToCaption for generating captions for their images.