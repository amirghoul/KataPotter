import { BOOK_NAMES, BOOK_PRICE_EURO, DISCOUNT } from '../utils';

const decreaseOccurrences = (
  occurrencesMap: Map<string, number>,
): Map<string, number> =>
  new Map(
    Array.from(occurrencesMap).map(([book, occurrences]) => [
      book,
      Math.max(0, occurrences - 1),
    ]),
  );

const getDiscountForSize = (distinctTitles: number): number =>
  DISCOUNT.get(distinctTitles) || 1;

const countNonZeroValues = (occurrencesMap: Map<string, number>): number =>
  Array.from(occurrencesMap.values()).reduce(
    (acc, val) => acc + (val > 0 ? 1 : 0),
    0,
  );

const countBookOccurrences = (books: string[]): Map<string, number> =>
  new Map(
    BOOK_NAMES.map(book => [
      book,
      books.filter(currentBook => currentBook === book).length,
    ]),
  );

const createFilledArray = (size: number, length: number): number[] =>
  Array(length).fill(size);

const optimizePacks = (packs: number[]): number[] => {
  const packCounts: number[] = new Array(6).fill(0);
  for (const size of packs) {
    packCounts[size]++;
  }

  const min = Math.min(packCounts[3], packCounts[5]);
  return [
    ...createFilledArray(1, packCounts[1]),
    ...createFilledArray(2, packCounts[2]),
    ...createFilledArray(3, packCounts[3] - min),
    ...createFilledArray(4, packCounts[4] + min * 2),
    ...createFilledArray(5, packCounts[5] - min),
  ];
};

export function calculatePrice(books: string[]): number {
  let occurrencesMap = countBookOccurrences(books);

  const packs: number[] = [];

  while (countNonZeroValues(occurrencesMap) > 0) {
    packs.push(countNonZeroValues(occurrencesMap));
    occurrencesMap = decreaseOccurrences(occurrencesMap);
  }

  return optimizePacks(packs)
    .map(size => size * BOOK_PRICE_EURO * getDiscountForSize(size))
    .reduce((acc, val) => acc + val, 0);
}
