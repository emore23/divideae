// Dependencies
/* @jsx h */
import { h } from '@stencil/core';
import { action } from '@storybook/addon-actions';

// Assets
import backgroundCover from '../../../../Assets/background-cover.jpg';
import coverThumbnail from '../../../../Assets/estefani.jpg';

export default {
  title: 'Compositions/Card Profile',
};

const Template = (args) => {
  return (
    <web-card 
			backgroundCover={args.backgroundCover} 
			profileArgs={args.profileArgs} 
			onEditUserPerfilClicked={action('editUserPerfilClicked')} 
		/>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
	backgroundCover,
	profileArgs: {
		coverThumbnail,
		name: 'Estefani Moré',
		occupation: 'Dev Front-end',
		direction: 'column',
	}
};