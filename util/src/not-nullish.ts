export function notNullish<T>(item: T | null | undefined): item is T {
  return item != null
}
