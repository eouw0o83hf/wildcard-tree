import sut from './index';

test('should pass', () => {
  const result = sut('test');
  expect(result).toEqual('lol');
});
