export function pluralize(count: number, one: string, few: string, many: string) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  const isOne = lastDigit === 1 && lastTwoDigits !== 11;
  const isFew = lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20);

  if (isOne) return `${count} ${one}`;
  if (isFew) return `${count} ${few}`;

  return `${count} ${many}`;
}
