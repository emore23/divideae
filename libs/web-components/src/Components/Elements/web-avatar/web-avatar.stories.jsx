// Dependencies
/* @jsx h */
import { h, Prop } from '@stencil/core';

// Assets
import coverThumbnail from '../../../Assets/estefani.jpg';

export default {
  title: 'Element/Avatar',
};

const Template = args => {
  return (
    <web-avatar
			avatar={args.avatar}
		/>
  );
};

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  avatar: coverThumbnail,
};