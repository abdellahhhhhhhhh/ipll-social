const isValidPassword = require('./passwordChecker');

test('mot de passe valide', () => {
  expect(isValidPassword('Abcdef!1')).toBe(true);
});

test('moins de 8 caractères', () => {
  expect(isValidPassword('Ab!1')).toBe(false);
});

test('sans caractère spécial', () => {
  expect(isValidPassword('Abcdefg1')).toBe(false);
});

test('sans chiffre', () => {
  expect(isValidPassword('Abcdef!a')).toBe(false);
});

test('contient "IPL" en majuscules', () => {
  expect(isValidPassword('Abcdef!1IPL')).toBe(false);
});

test('contient "ipl" en minuscules', () => {
  expect(isValidPassword('abc!123ipl')).toBe(false);
});

test('caractère spécial ne doit pas être un espace', () => {
  expect(isValidPassword('Abcdefg 1')).toBe(false);
});
