export type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

export type YYYY = `19${d}${d}` | `20${d}${d}`;

type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;

type DD = `${0}${oneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;

export type DateYMString = `${YYYY}-${MM}`;

export type DateYMDString = `${DateYMString}-${DD}`;
