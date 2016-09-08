import { configure } from '@kadira/storybook';

function loadStories() {
	require('../src/stories/registration-form');
}

configure(loadStories, module);
