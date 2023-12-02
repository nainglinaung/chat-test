import { calculateHoroscope, HoroscopeSign } from './calculateHoroscope';

interface TestCase {
  inputDate: Date;
  expectedSign: HoroscopeSign | null;
}

const testCases: TestCase[] = [
  {
    inputDate: new Date('2023-03-19T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Pisces,
  },
  {
    inputDate: new Date('2023-03-23T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Aries,
  },
  {
    inputDate: new Date('2023-04-25T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Taurus,
  },
  {
    inputDate: new Date('2023-05-28T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Gemini,
  },
  {
    inputDate: new Date('2023-06-22T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Cancer,
  },
  {
    inputDate: new Date('2023-08-01T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Leo,
  },
  {
    inputDate: new Date('2023-09-22T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Virgo,
  },
  {
    inputDate: new Date('2023-10-22T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Libra,
  },
  {
    inputDate: new Date('2023-11-21T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Scorpio,
  },
  {
    inputDate: new Date('2023-12-21T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Sagittarius,
  },
  {
    inputDate: new Date('2024-12-22T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Capricorn,
  },
  {
    inputDate: new Date('2024-01-20T00:00:00.000Z'),
    expectedSign: HoroscopeSign.Aquarius,
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
