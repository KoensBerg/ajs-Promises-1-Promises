import parsed from '../app';

// автотесты -- вариант 2
test('следует вернуть объект класса GameSaving', async () => {
  const object = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const data = await parsed;
  expect(data).toEqual(object);
});
