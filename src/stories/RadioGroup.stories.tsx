import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Radio from "../components/Radio";

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
    }
  };

export default meta;

type Story = StoryObj<typeof Radio.Group>;

export const Default: Story = {
  args: {
    defaultValue: 1,
    children: <>
    <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4} disabled>D</Radio>
    </>
  }
}

export const ButtonGroup: Story = {
  args: {
    defaultValue: 1,
    optionType: "button",
    children: <>
    <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4} disabled>D</Radio>
    </>
  }
}