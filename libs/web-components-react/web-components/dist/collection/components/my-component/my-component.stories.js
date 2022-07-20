// Dependencies
import { h } from '@stencil/core';

export default {
  title: 'Example/Component',
};

const Template = (args) => {
	return <my-component first={args.first} last={args.last}></my-component>
};

export const Example = Template.bind({});
Example.args = {
  first: 'Winnie',
  middle: 'The',
  last: 'Pooh'
};