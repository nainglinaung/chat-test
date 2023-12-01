import { calculateHoroscope, ZodiacSign } from './calculateHoroscope';

interface TestCase {
  inputDate: Date;
  expectedSign: ZodiacSign | null;
}

const testCases: TestCase[] = [
  {
    inputDate: new Date('2023-03-19T00:00:00.000Z'),
    expectedSign: ZodiacSign.Pisces,
  },
  {
    inputDate: new Date('2023-03-23T00:00:00.000Z'),
    expectedSign: ZodiacSign.Aries,
  },
  {
    inputDate: new Date('2023-04-25T00:00:00.000Z'),
    expectedSign: ZodiacSign.Taurus,
  },
  {
    inputDate: new Date('2023-05-28T00:00:00.000Z'),
    expectedSign: ZodiacSign.Gemini,
  },
  {
    inputDate: new Date('2023-06-22T00:00:00.000Z'),
    expectedSign: ZodiacSign.Cancer,
  },
  {
    inputDate: new Date('2023-08-01T00:00:00.000Z'),
    expectedSign: ZodiacSign.Leo,
  },
  {
    inputDate: new Date('2023-09-22T00:00:00.000Z'),
    expectedSign: ZodiacSign.Virgo,
  },
  {
    inputDate: new Date('2023-10-22T00:00:00.000Z'),
    expectedSign: ZodiacSign.Libra,
  },
  {
    inputDate: new Date('2023-11-21T00:00:00.000Z'),
    expectedSign: ZodiacSign.Scorpio,
  },
  {
    inputDate: new Date('2023-12-21T00:00:00.000Z'),
    expectedSign: ZodiacSign.Sagittarius,
  },
  {
    inputDate: new Date('2024-12-22T00:00:00.000Z'),
    expectedSign: ZodiacSign.Capricorn,
  },
  {
    inputDate: new Date('2024-01-20T00:00:00.000Z'),
    expectedSign: ZodiacSign.Aquarius,
  },
  { inputDate: new Date(NaN), expectedSign: null },
];

describe('Horoscope Calculator', () => {
  testCases.forEach((testCase) => {
    it(`should return ${testCase.expectedSign} for ${testCase.inputDate}`, () => {
      expect(calculateHoroscope(testCase.inputDate)).toEqual(
        testCase.expectedSign,
      );
    });
  });
});
