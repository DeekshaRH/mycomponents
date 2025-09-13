import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with validation states, variants, and additional features like password toggle and clear button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Controlled component wrapper
const ControlledInput = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <div style={{ width: '300px' }}>
      <InputField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    </div>
  );
};

export const Default: Story = {
  render: ControlledInput,
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6" style={{ width: '300px' }}>
      <ControlledInput
        variant="outlined"
        label="Outlined (Default)"
        placeholder="Outlined input"
      />
      <ControlledInput
        variant="filled"
        label="Filled"
        placeholder="Filled input"
      />
      <ControlledInput
        variant="ghost"
        label="Ghost"
        placeholder="Ghost input"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6" style={{ width: '300px' }}>
      <ControlledInput
        size="sm"
        label="Small"
        placeholder="Small input"
      />
      <ControlledInput
        size="md"
        label="Medium (Default)"
        placeholder="Medium input"
      />
      <ControlledInput
        size="lg"
        label="Large"
        placeholder="Large input"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-6" style={{ width: '300px' }}>
      <ControlledInput
        label="Normal"
        placeholder="Normal input"
      />
      <ControlledInput
        label="With Helper Text"
        placeholder="Enter your username"
        helperText="Your username must be unique"
      />
      <ControlledInput
        label="Invalid"
        placeholder="Enter email"
        invalid
        errorMessage="Please enter a valid email address"
        value="invalid-email"
      />
      <ControlledInput
        label="Disabled"
        placeholder="Disabled input"
        disabled
        value="Disabled value"
      />
      <ControlledInput
        label="Loading"
        placeholder="Loading input"
        loading
        value="Loading..."
      />
    </div>
  ),
};

export const Password: Story = {
  render: ControlledInput,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    value: 'secretpassword',
  },
};

export const WithClearButton: Story = {
  render: ControlledInput,
  args: {
    label: 'Search',
    placeholder: 'Search something...',
    clearable: true,
    value: 'Sample text to clear',
  },
};

export const PasswordWithClear: Story = {
  render: ControlledInput,
  args: {
    label: 'Password with Clear',
    placeholder: 'Enter password',
    type: 'password',
    clearable: true,
    value: 'password123',
  },
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6" style={{ width: '400px' }}>
      <h2 className="text-xl font-semibold text-on-surface mb-4">Sign Up Form</h2>
      
      <ControlledInput
        label="Full Name"
        placeholder="Enter your full name"
        required
      />
      
      <ControlledInput
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        required
      />
      
      <ControlledInput
        label="Password"
        placeholder="Create a strong password"
        type="password"
        helperText="Password must be at least 8 characters long"
        required
      />
      
      <ControlledInput
        label="Phone Number"
        placeholder="(555) 123-4567"
        type="tel"
      />
      
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-hover text-on-primary font-medium py-3 px-4 rounded-radius transition-colors"
      >
        Sign Up
      </button>
    </form>
  ),
};