type ClassNameItem = Record<string, boolean> | string;

export function cls(...args: ClassNameItem[]) {
  const classNameList: string[] = [];
  for (const arg of args) {
    if (typeof arg === 'string') {
      classNameList.push(arg);
    } else if (typeof arg === 'object' && arg !== null) {
      for (const k in arg) {
        if (arg[k]) {
          classNameList.push(k);
        }
      }
    }
  }
  return classNameList.join(' ');
}
