import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleViewSelector } from "./ArticleViewSelector";

export default {
  title: "5_entities/ArticleViewSelector",
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
