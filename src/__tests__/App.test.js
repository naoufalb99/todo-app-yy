import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
    it('should match a snapshot', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});
