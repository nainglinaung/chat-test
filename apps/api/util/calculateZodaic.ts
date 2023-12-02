export enum ZodiacSign {
  Rat = 'Rat',
  Pig = 'Pig',
  Dog = 'Dog',
  Rooster = 'Rooster',
  Monkey = 'Monkey',
  Goat = 'Goat',
  Horse = 'Horse',
  Snake = 'Snake',
  Dragon = 'Dragon',
  Rabbit = 'Rabbit',
  Tiger = 'Tiger',
  Ox = 'Ox',
  Boar = 'Boar',
}

const zodiacData = [
  {
    start: new Date('2023-01-22'),
    end: new Date('2024-02-09'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('2022-02-01'),
    end: new Date('2023-01-21'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('2021-02-12'),
    end: new Date('2022-01-31'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('2020-01-25'),
    end: new Date('2021-02-11'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('2019-02-05'),
    end: new Date('2020-01-24'),
    sign: ZodiacSign.Pig,
  },
  {
    start: new Date('2018-02-16'),
    end: new Date('2019-02-04'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('2017-01-28'),
    end: new Date('2018-02-15'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('2016-02-08'),
    end: new Date('2017-01-27'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('2015-02-19'),
    end: new Date('2016-02-07'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('2014-01-31'),
    end: new Date('2015-02-18'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('2013-02-10'),
    end: new Date('2014-01-30'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('2012-01-23'),
    end: new Date('2013-02-09'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('2011-02-03'),
    end: new Date('2012-01-22'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('2010-02-14'),
    end: new Date('2011-02-02'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('2009-01-26'),
    end: new Date('2010-02-13'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('2008-02-07'),
    end: new Date('2009-01-25'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('2007-02-18'),
    end: new Date('2008-02-06'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('2006-01-29'),
    end: new Date('2007-02-17'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('2005-02-09'),
    end: new Date('2006-01-28'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('2004-01-22'),
    end: new Date('2005-02-08'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('2003-02-01'),
    end: new Date('2004-01-21'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('2002-02-12'),
    end: new Date('2003-01-31'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('2001-01-24'),
    end: new Date('2002-02-11'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('2000-02-05'),
    end: new Date('2001-01-23'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1999-02-16'),
    end: new Date('2000-02-04'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1998-01-28'),
    end: new Date('1999-02-15'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1997-02-07'),
    end: new Date('1998-01-27'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('1996-02-19'),
    end: new Date('1997-02-06'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('1995-01-31'),
    end: new Date('1996-02-18'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('1994-02-10'),
    end: new Date('1995-01-30'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('1993-01-23'),
    end: new Date('1994-02-09'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('1992-02-04'),
    end: new Date('1993-01-22'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('1991-02-15'),
    end: new Date('1992-02-03'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1990-01-27'),
    end: new Date('1991-02-14'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('1989-02-06'),
    end: new Date('1990-01-26'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('1988-02-17'),
    end: new Date('1989-02-05'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1987-01-29'),
    end: new Date('1988-02-16'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1986-02-09'),
    end: new Date('1987-01-28'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1985-02-20'),
    end: new Date('1986-02-08'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('1984-02-02'),
    end: new Date('1985-02-19'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('1983-02-13'),
    end: new Date('1984-02-01'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('1982-01-25'),
    end: new Date('1983-02-12'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('1981-02-05'),
    end: new Date('1982-01-24'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('1980-02-16'),
    end: new Date('1981-02-04'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('1979-01-28'),
    end: new Date('1980-02-15'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1978-02-07'),
    end: new Date('1979-01-27'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('1977-02-18'),
    end: new Date('1978-02-06'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('1976-01-31'),
    end: new Date('1977-02-17'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1975-02-11'),
    end: new Date('1976-01-30'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1974-01-23'),
    end: new Date('1975-02-10'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1973-02-03'),
    end: new Date('1974-01-22'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('1972-01-16'),
    end: new Date('1973-02-02'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('1971-01-27'),
    end: new Date('1972-01-15'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('1970-02-06'),
    end: new Date('1971-01-26'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('1969-02-17'),
    end: new Date('1970-02-05'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('1968-01-30'),
    end: new Date('1969-02-16'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('1967-02-09'),
    end: new Date('1968-01-29'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1966-01-21'),
    end: new Date('1967-02-08'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('1965-02-02'),
    end: new Date('1966-01-20'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('1964-02-13'),
    end: new Date('1965-02-01'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1963-01-25'),
    end: new Date('1964-02-12'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1962-02-05'),
    end: new Date('1963-01-24'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1961-02-15'),
    end: new Date('1962-02-04'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('1960-01-28'),
    end: new Date('1961-02-14'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('1959-02-08'),
    end: new Date('1960-01-27'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('1958-02-18'),
    end: new Date('1959-02-07'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('1957-01-31'),
    end: new Date('1958-02-17'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('1956-02-12'),
    end: new Date('1957-01-30'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('1955-01-24'),
    end: new Date('1956-02-11'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1954-02-03'),
    end: new Date('1955-01-23'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('1953-02-14'),
    end: new Date('1954-02-02'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('1952-01-27'),
    end: new Date('1953-02-13'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1951-02-06'),
    end: new Date('1952-01-26'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1950-02-17'),
    end: new Date('1951-02-05'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1949-01-29'),
    end: new Date('1950-02-16'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('1948-02-10'),
    end: new Date('1949-01-28'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('1947-01-22'),
    end: new Date('1948-02-09'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('1946-02-02'),
    end: new Date('1947-01-21'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('1945-02-13'),
    end: new Date('1946-02-01'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('1944-01-25'),
    end: new Date('1945-02-12'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('1943-02-05'),
    end: new Date('1944-01-24'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1942-02-15'),
    end: new Date('1943-02-04'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('1941-01-27'),
    end: new Date('1942-02-14'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('1940-02-08'),
    end: new Date('1941-01-26'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1939-02-19'),
    end: new Date('1940-02-07'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1938-01-31'),
    end: new Date('1939-02-18'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1937-02-11'),
    end: new Date('1938-01-30'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('1936-01-24'),
    end: new Date('1937-02-10'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('1935-02-04'),
    end: new Date('1936-01-23'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('1934-02-14'),
    end: new Date('1935-02-03'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('1933-01-26'),
    end: new Date('1934-02-13'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('1932-02-06'),
    end: new Date('1933-01-25'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('1931-02-17'),
    end: new Date('1932-02-05'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1931-02-17'),
    end: new Date('1932-02-05'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1930-01-30'),
    end: new Date('1931-02-16'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('1929-02-10'),
    end: new Date('1930-01-29'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('1928-01-23'),
    end: new Date('1929-02-09'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1927-02-02'),
    end: new Date('1928-01-22'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1926-02-13'),
    end: new Date('1927-02-01'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1925-01-25'),
    end: new Date('1926-02-12'),
    sign: ZodiacSign.Ox,
  },
  {
    start: new Date('1924-02-05'),
    end: new Date('1925-01-24'),
    sign: ZodiacSign.Rat,
  },
  {
    start: new Date('1923-02-16'),
    end: new Date('1924-02-04'),
    sign: ZodiacSign.Boar,
  },
  {
    start: new Date('1922-01-28'),
    end: new Date('1923-02-15'),
    sign: ZodiacSign.Dog,
  },
  {
    start: new Date('1921-02-08'),
    end: new Date('1922-01-27'),
    sign: ZodiacSign.Rooster,
  },
  {
    start: new Date('1920-02-20'),
    end: new Date('1921-02-07'),
    sign: ZodiacSign.Monkey,
  },
  {
    start: new Date('1919-02-01'),
    end: new Date('1920-02-19'),
    sign: ZodiacSign.Goat,
  },
  {
    start: new Date('1918-02-11'),
    end: new Date('1919-01-31'),
    sign: ZodiacSign.Horse,
  },
  {
    start: new Date('1917-01-23'),
    end: new Date('1918-02-10'),
    sign: ZodiacSign.Snake,
  },
  {
    start: new Date('1916-02-03'),
    end: new Date('1917-01-22'),
    sign: ZodiacSign.Dragon,
  },
  {
    start: new Date('1915-02-14'),
    end: new Date('1916-02-02'),
    sign: ZodiacSign.Rabbit,
  },
  {
    start: new Date('1914-01-26'),
    end: new Date('1915-02-13'),
    sign: ZodiacSign.Tiger,
  },
  {
    start: new Date('1913-02-06'),
    end: new Date('1914-01-25'),
    sign: ZodiacSign.Ox,
  },
];

export const calculateChineseZodiacSign = (
  birthdate: Date,
): ZodiacSign | null => {
  for (const entry of zodiacData) {
    if (birthdate >= entry.start && birthdate <= entry.end) {
      return entry.sign;
    }
  }

  return;
};
