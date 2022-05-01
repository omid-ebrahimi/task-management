export function shrink(text: string | null, maxLength: number): string {
  if (text) {
    return text.length > maxLength
      ? text.substring(0, maxLength - 3) + '...'
      : text
  }
  return ''
}
