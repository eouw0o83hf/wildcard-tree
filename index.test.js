import sut from './index';

test('should pass', () => {
  const result = sut(['alpha', 'test', 'total']);
  expect(result['A'.charCodeAt(0)]).toHaveLength(1);
  expect(result['T'.charCodeAt(0)]).toHaveLength(2);
});
