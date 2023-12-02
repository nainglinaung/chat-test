import { calculateChineseZodiacSign, ZodiacSign } from './calculateZodaic';

interface TestCase {
  inputDate: Date;
  expectedSign: ZodiacSign | null;
}

const testCases: TestCase[] = [
  {
    inputDate: new Date('1960-11-29T00:00:00.000Z'),
    expectedSign: ZodiacSign.Rat,
  },
  {
    inputDate: new Date('1937-04-28T00:00:00.000Z'),
    expectedSign: ZodiacSign.Ox,
  },
  {
    inputDate: new Date('1926-04-21T00:00:00.000Z'),
    expectedSign: ZodiacSign.Tiger,
  },
  {
    inputDate: new Date('1987-06-17T00:00:00.000Z'),
    expectedSign: ZodiacSign.Rabbit,
  },
  {
    inputDate: new Date('1940-10-09T00:00:00.000Z'),
    expectedSign: ZodiacSign.Dragon,
  },
];

describe('Horoscope Calculator', () => {
  testCases.forEach((testCase) => {
    it(`should return ${testCase.expectedSign} for ${testCase.inputDate}`, () => {
      expect(calculateChineseZodiacSign(testCase.inputDate)).toEqual(
        testCase.expectedSign,
      );
    });
  });
});
