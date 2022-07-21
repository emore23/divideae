export * from './components';
import { Annotations, Args as DefaultArgs, BaseStory } from '@storybook/addons';
import { StoryFnHtmlReturnType } from '@storybook/web-components/dist/ts3.9/client/preview/types';

export type Story<Args = DefaultArgs> = BaseStory<Args, StoryFnHtmlReturnType> & Annotations<Args, StoryFnHtmlReturnType>;

