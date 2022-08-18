/**
 * @desc 保留小数点
 */
export function toFixed(num = 0, count = 2) {
  const _c = Math.max(1, Math.min(10, count))
  return parseFloat(num.toFixed(_c))
}
