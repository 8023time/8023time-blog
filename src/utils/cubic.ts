/**
 * 前 50%：缓慢加速
 * 后 50%：平滑减速
 * 整体感觉顺滑、自然、无跳动
 */
export function easeInOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return (cc / 2) * t * t * t + b;
  }
  return (cc / 2) * ((t -= 2) * t * t + 2) + b;
}
