export function LazyLoading<T>(fn: () => Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, 2000);
  });
}
