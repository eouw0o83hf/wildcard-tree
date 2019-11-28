import sut from './index';

const code = a => a.toUpperCase().charCodeAt(0);

test('add should correctly assemble tree', () => {
  const root = sut(['a', 'b', 'ab']);

  expect(root.children[code('a')]).toBeTruthy();
  expect(root.children[code('b')]).toBeTruthy();
  expect(root.children[code('c')]).toBeFalsy();

  expect(root.children[code('a')].value).toEqual('A');
  expect(root.children[code('a')].children[code('b')].value).toEqual('AB');

  expect(root.children[code('b')].value).toEqual('B');
});

test('find should correctly find', () => {
  const root = sut(['alpha', 'test1', 'test2']);

  expect(root.find('a....')).toHaveLength(1);
  expect(root.find('al...')).toHaveLength(1);
  expect(root.find('alp..')).toHaveLength(1);
  expect(root.find('alph.')).toHaveLength(1);
  expect(root.find('alpha')).toHaveLength(1);
  expect(root.find('alpha1')).toHaveLength(0);

  expect(root.find('t....')).toHaveLength(2);
  expect(root.find('te...')).toHaveLength(2);
  expect(root.find('tes..')).toHaveLength(2);
  expect(root.find('test.')).toHaveLength(2);
  expect(root.find('test1')).toHaveLength(1);
  expect(root.find('test2')).toHaveLength(1);
});
