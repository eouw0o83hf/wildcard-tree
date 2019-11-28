import sut from './index';

test('should pass', () => {
  const result = sut('test 2');
  expect(result).toEqual('test 2');
});
