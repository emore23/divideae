// Dependencies
/* @jsx h */

import { h } from '@stencil/core';

import { HeaderProps } from './header.model';

export default {
  title: 'Element/Header',
};

const Template = (args) => {
  return (
    <phm-header igniteSimbol={args.igniteSimbol} />
  );
};

export const Header = Template.bind({});
Header.storyName = 'default';
Header.args = {
  igniteSimbol: 'componente filho da puta de confiigurar',
};