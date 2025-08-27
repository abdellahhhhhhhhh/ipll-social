function isValidPassword(password) {
  if (typeof password !== 'string') return false;

  // 1) longueur >= 8
  if (password.length < 8) return false;

  // 2) au moins un caractère spécial (hors espace)
  if (!/[^A-Za-z0-9\s]/.test(password)) return false;

  // 3) au moins un chiffre
  if (!/[0-9]/.test(password)) return false;

  // 4) ne contient pas "IPL" (insensible à la casse)
  if (/ipl/i.test(password)) return false;

  return true;
}

module.exports = isValidPassword;
