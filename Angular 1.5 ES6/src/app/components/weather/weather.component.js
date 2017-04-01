
import controller from './weather.controller';

const weatherComponent = {

	controller,
	bindings: {
		list: '<'
	},
	template: require('./index.html')

};

export default weatherComponent;
