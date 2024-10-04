import type { Meta, StoryObj } from '@storybook/angular';
import { DemoDsComponent } from '../lib/demo-ds.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DemoDsComponent> = {
  title: 'Demo Design System/Example Component',
  component: DemoDsComponent,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<DemoDsComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DemoDs: Story = {
  args: {},
};
