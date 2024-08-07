import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "6_shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "1_app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

export default {
  title: "3_widget/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
