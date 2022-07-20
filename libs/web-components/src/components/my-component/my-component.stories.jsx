// Dependencies
import { h } from '@stencil/core';

export default {
  title: 'Element/Component',
};

const Template = args => {
  return (
    <my-component first={args.first} last={args.last} />
  );
};

export const Example = Template.bind({});

Example.args = {
  first: 'componente filho da puta de confiigurar',
  middle: '',
  last: ''
};