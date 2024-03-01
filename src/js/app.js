import GameSavingLoader from './GameSavingLoader';

const parsed = GameSavingLoader.load()
  .then((saving) => JSON.parse(saving))
  // eslint-disable-next-line no-console
  .catch(console.warn);

export default parsed;
