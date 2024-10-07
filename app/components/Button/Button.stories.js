import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["md", "sm", "lg", "xl"],
      control: { type: "select" },
    },
    type: {
      options: ["danger", "success", "outline", "secondary", "primary", "link"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hovered", "disabled", "focused", "default"],
      control: { type: "select" },
    },
    breakpoint: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    editText: "Button",
    rightIcon: true,
    leftIcon: true,
    text: true,
    size: "md",
    type: "danger",
    stateProp: "hovered",
    breakpoint: "desktop",
    className: {},
  },
};
