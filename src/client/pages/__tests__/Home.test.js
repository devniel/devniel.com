import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from '../../__testUtils__';
import svg from '../../__testUtils__/fakes/svg';

import sinon from 'sinon';

import HomeConnected from '../Home';

describe('Home HOC', () => {
  let store;
  let root;

  let fakeXHR;
  let requests;
  let dispatchSpy;

  beforeEach(async () => {
    // To attend ReactSVG xhr requests
    fakeXHR = sinon.useFakeXMLHttpRequest();
    requests = [];
    fakeXHR.onCreate = xhr => {
      requests.push(xhr);
    };

    store = createMockStore();

    // It's important to create the spy on store.dispatch before
    // providing it.
    dispatchSpy = sinon.spy(store, 'dispatch');

    root = mount(
      <Provider store={store}>
        <HomeConnected.component />
      </Provider>
    );

    requests.forEach(request => {
      request.respond(200, {}, svg);
    });

    //jest.runAllTimers();
  });

  afterEach(() => {
    fakeXHR.restore();
  });

  it('should render correctly', () => {
    expect(root).toMatchSnapshot();
  });

  it('when clicking the Dail component an action should be queued', async () => {
    const dail = root.find('Dail');
    dail.simulate('click');
    sinon.assert.calledOnce(dispatchSpy);
  }, 500000);
});
