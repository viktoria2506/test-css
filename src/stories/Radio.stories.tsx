import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Radio from "../components/Radio";

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
    argTypes: {
        autoFocus: {
            control: {type: 'boolean'},
            description: "Whether get focus when component mounted",
            defaultValue: false,
            table: {
                defaultValue: { summary: 'false' },
                type: {summary: 'boolean'}
              },
        },
        disabled: {
            control: {type: 'boolean'},
            description: "Disable radio",
            table: {
                defaultValue: { summary: 'false' },
                type: {summary: 'boolean'}
              },
        },
        checked: {
            control: {type: 'boolean'},
            description: "Specifies whether the radio is selected",
            table: {
                defaultValue: { summary: 'false' },
                type: {summary: 'boolean'}
              },
        },
        defaultChecked: {
            control: {type: 'boolean'},
            description: "Specifies the initial state: whether or not the radio is selected",
            table: {
                defaultValue: { summary: 'false' },
                type: {summary: 'boolean'}
              },
        },
        value: {
            description: "According to value for comparison, to determine whether the selected",
            table: {
                type: {summary: 'any'}
            }
        }
    }
  };

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        disabled: false,
        defaultChecked: false,
        children: <>Radio</>
    }
}

export const Checked: Story = {
    args: {
        defaultChecked: true,
        children: <>Radio</>
    }
}
export const Disabled: Story = {
    args: {
        disabled: true,
        checked: false,
        children: <>Radio</>
    }
}

export const DisabledChecked: Story = {
    args: {
        disabled: true,
        checked: true,
        children: <>Radio</>
    }
}