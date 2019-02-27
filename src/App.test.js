import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('component tree', () => {
  expect.assertions(2);
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toMatchObject({
    type: expect.stringContaining('div'),
    props: expect.any(Object),
    children: expect.objectContaining([{
      type: expect.stringContaining('header'),
      props: expect.any(Object),
      children: expect.any(Array)
    }])
  });
});
