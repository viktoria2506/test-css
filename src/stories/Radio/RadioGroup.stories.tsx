import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Radio} from "antd";
import "../../styles/radio.css";

const options = [
    {
        label: "Option 1",
        value: "1",
        disabled: false
    },
    {
        label: "Option 2",
        value: "2",
        disabled: false
    },
    {
        label: "Disabled",
        value: "3",
        disabled: true
    },
    {
        label: "Option 3",
        value: "4",
        disabled: false
    }
]

const meta: Meta<typeof Radio.Group> = {
    title: 'Components/Radio/RadioGroup',
    component: Radio.Group,
    argTypes: {
        buttonStyle: {
          options: ["outline", "solid"],
          control: {type: 'select'},
          description: "The style type of radio button",
          defaultValue: "outline",
          table: {
              defaultValue: { summary: 'outline' },
              type: {summary: 'outline | solid'},
            },
        },
        defaultValue: {
            description: "Default selected value",
            table: {
                type: {summary: 'any'},
              },
        },
        disabled: {
            control: {type: 'boolean'},
            description: "Disable all radio buttons",
            defaultValue: false,
            table: {
                defaultValue: { summary: 'false' },
                type: {summary: 'boolean'},
              },
        },
        name: {
            control: {type: 'string'},
            description: "The `name` property of all `input[type='radio']` children",
            defaultValue: false,
            table: {
                type: {summary: 'string'}
              },
        },
        value: {
            control: {type: 'array'},
            description: "Used for setting the currently selected value",
            defaultValue: [],
            table: {
                type: {summary: 'any'}
              },
        },
        options: {
            control: {type: 'array'},
            description: "Set children optional",
            defaultValue: [],
            table: {
                type: {summary: 'string[] | number[] | Array<{ label: string value: string disabled?: boolean }>'}
              },
        },
        size: {
          options: ["small", "middle", "large"],
          control: {type: 'select'},
          description: "The size of radio button style",
          table: {
            type: {summary: 'small | middle | large'}
          },
        },
        optionType: {
          options: ["default", "button"],
          control: {type: 'select'},
          description: "Set Radio optionType",
          table: {
            type: {summary: 'default | button'},
            defaultValue: { summary: 'default' },
          },
      },
        onChange: {
            description: "The callback function that is triggered when the state changes",
            table: {
                type: {summary: 'function(checkedValue)'}
              },
        }
    },
    args: {
        options: options,
        defaultValue: "2"
    }
  };

export default meta;

type Story = StoryObj<typeof Radio.Group>;

export const Default: Story = {
    args: {}
}

export const Disabled: Story = {
    args: {
        disabled: true
    }
}

export const Button: Story = {
    args: {
        optionType: "button"
    }
}

export const ButtonDisabledAll: Story = {
    args: {
      optionType: "button",
      disabled: true
    }
}


export const ButtonSolid: Story = {
    args: {
        buttonStyle: 'solid',
        optionType: "button"
    }
}

export const ButtonOutline: Story = {
    args: {
      buttonStyle: 'outline',
      optionType: "button"
    }
}

export const ButtonLargeSolid: Story = {
    args: {
        size: 'large',
        buttonStyle: 'solid',
        optionType: "button"
    }
}

export const ButtonLargeOutline: Story = {
    args: {
        size: 'large',
        buttonStyle: 'outline',
        optionType: "button"
    }
}

export const ButtonMiddleSolid: Story = {
    args: {
        size: 'middle',
        buttonStyle: 'solid',
        optionType: "button"
    }
}

export const ButtonMiddleOutline: Story = {
    args: {
        size: 'middle',
        buttonStyle: 'outline',
        optionType: "button"
    }
}

export const ButtonSmallSolid: Story = {
    args: {
        size: 'small',
        buttonStyle: 'solid',
        optionType: "button"
    }
}

export const ButtonSmallOutline: Story = {
    args: {
        size: 'small',
        buttonStyle: 'outline',
        optionType: "button"
    }
}