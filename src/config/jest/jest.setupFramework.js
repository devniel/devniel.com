import 'jest-extended';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { queryMock } from 'Client/__testUtils__/queryMock';

configure({ adapter: new Adapter() });

beforeEach(() => {
  queryMock.reset();
});
