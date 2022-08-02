// Dependencies
/* @jsx h */
import { h } from '@stencil/core';

// Assets
import ignite from '../../../Assets/ignite-simbol.svg';

export default {
  title: 'Element/Header',
};

const Template = (args) => {
  return (
    <web-header igniteSimbol={args.igniteSimbol} />
  );
};

export const Header = Template.bind({});
Header.storyName = 'Default';
Header.args = {
  igniteSimbol: ignite,
};