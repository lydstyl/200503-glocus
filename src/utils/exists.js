export function exists(string) {
  if (string.startsWith('pas de')) {
    return false;
  }

  return true;
}
