import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "../../src/components/Button"
import Test from '../../src/components/Test';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')} text="hello" />;

export const Emoji = () => (
  <Button text="with icon" icon={"fas fa-rocket"} onClick={action("icon clicked")} />
)
