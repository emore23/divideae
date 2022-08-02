// Dependencies
/* @jsx h */
import { h, Prop } from '@stencil/core';

// Assets
import coverThumbnail from '../../../../Assets/estefani.jpg';

export default {
  title: 'Compositions/User profile',
};

const Template = args => {
  return (
    <web-user-profile 
			coverThumbnail={args.coverThumbnail} 
			name={args.name} 
			occupation={args.occupation} 
			direction={args.direction} 
		/>
  );
};

export const UserProfileColumn = Template.bind({});
UserProfileColumn.storyName = "Column direction";

UserProfileColumn.args = {
  coverThumbnail,
  name: 'Estefani Moré',
  occupation: 'Dev Front-end',
  direction: 'column',
};

export const UserProfileRow = Template.bind({});
UserProfileRow.storyName = "Row direction";

UserProfileRow.args = {
  coverThumbnail,
  name: 'Estefani Moré',
  occupation: 'Dev Front-end',
  direction: 'row',
};