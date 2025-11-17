// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isWindow(data: any): data is Window {
  return data !== null && data !== undefined && data === data.window;
}

const getScroll = (target: HTMLElement | Document | Window | null): number => {
  let res: number = 0;
  if (isWindow(target)) {
    res = target.pageYOffset;
  } else if (target instanceof Document) {
    res = target.documentElement.scrollTop || target.body.scrollTop;
  } else if (target instanceof HTMLElement) {
    res = target.scrollTop;
  }

  return res;
};

export default getScroll;
