import Todo from '../app/todo';
import React from 'react';
import { mount } from 'enzyme';

test('TodoComponent calls doneChange when todo is clicked', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const doneChange = jest.fn();
  const wrapper = mount(<Todo todo={todo} doneChange={doneChange} />);

  const p = wrapper.find('.toggle-todo');
  p.simulate('click');
  expect(doneChange).toBeCalledWith(1);
});

test('TodoComponent calls deleteTodo when delete is clicked', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const deleteTodo = jest.fn();
  const wrapper = mount(<Todo todo={todo} deleteTodo={deleteTodo} />);

  const p = wrapper.find('.delete-todo');
  p.simulate('click');
  expect(deleteTodo).toBeCalledWith(1);
});

test('TodoComponent validate todo text', () => {
  const todo = { id: 1, done: false, name: 'Example' };
  const wrapper = mount(<Todo todo={todo} />);
  const el = wrapper.find('.toggle-todo');
  expect(el.text()).toBe('Example');
});
