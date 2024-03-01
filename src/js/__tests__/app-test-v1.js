import parsed from '../app';

// автотесты -- вариант 1
test('следует вернуть объект класса GameSaving', () => {
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

  return parsed.then((data) => {
    expect(data).toEqual(object);
  });
});
