import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 「今日」「今週」「今月」の切り替わりを、日本時間の深夜0時ではなく朝6時にするための基準日時。
// 深夜0時〜6時台の分は前日扱いになるよう、実際のJST時刻から6時間差し引いた日時を返す。
export function getJSTDate() {
  const jst = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
  jst.setHours(jst.getHours() - 6);
  return jst;
}
