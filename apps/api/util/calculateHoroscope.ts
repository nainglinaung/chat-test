export enum ZodiacSign {
  Aries = 'Aries',
  Taurus = 'Taurus',
  Gemini = 'Gemini',
  Cancer = 'Cancer',
  Leo = 'Leo',
  Virgo = 'Virgo',
  Libra = 'Libra',
  Scorpio = 'Scorpio',
  Sagittarius = 'Sagittarius',
  Capricorn = 'Capricorn',
  Aquarius = 'Aquarius',
  Pisces = 'Pisces',
}

interface HoroscopeRange {
  sign: ZodiacSign;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
}

const horoscopeRanges: HoroscopeRange[] = [
  {
    sign: ZodiacSign.Aries,
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
  },
  {
    sign: ZodiacSign.Taurus,
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
  },
  {
    sign: ZodiacSign.Gemini,
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
  },
  {
    sign: ZodiacSign.Cancer,
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
  },
  {
    sign: ZodiacSign.Leo,
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
  },
  {
    sign: ZodiacSign.Virgo,
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
  },
  {
    sign: ZodiacSign.Libra,
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
  },
  {
    sign: ZodiacSign.Scorpio,
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
  },
  {
    sign: ZodiacSign.Sagittarius,
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
  },
  {
    sign: ZodiacSign.Capricorn,
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
  },
  {
    sign: ZodiacSign.Aquarius,
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
  },
  {
    sign: ZodiacSign.Pisces,
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
  },
];

export const calculateHoroscope = (birthDate: Date): ZodiacSign | null => {
  if (isNaN(birthDate.getTime())) {
    return null;
  }

  const month = birthDate.getMonth() + 1; // Months are zero-indexed
  const day = birthDate.getDate();

  for (const range of horoscopeRanges) {
    if (
      (month === range.startMonth && day >= range.startDay) ||
      (month === range.endMonth && day <= range.endDay)
    ) {
      return range.sign;
    }
  }

  return null;
};
