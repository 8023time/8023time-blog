import raf from './raf';
import getScroll, { isWindow } from './getScroll';
import { easeInOutCubic } from './cubic';

export interface ScrollToOptions {
  /**
   * @description: 获取滑动的容器
   */
  getContainer?: () => HTMLElement | Window | Document;
  /**
   * @description: 回调函数
   */
  callback?: () => void;
  /**
   * @description: 持续时间
   */
  duration?: number;
}

export default function scrollTo(target: number, options: ScrollToOptions = {}): void {
  const { getContainer = () => window, callback, duration = 500 } = options;
  const container = getContainer();
  const scrollTop = getScroll(container);
  const startTime = Date.now();

  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, target, duration);
    if (isWindow(container)) {
      (container as Window).scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof Document || container.constructor.name === 'HTMLDocument') {
      (container as Document).documentElement.scrollTop = nextScrollTop;
    } else {
      (container as HTMLElement).scrollTop = nextScrollTop;
    }
    if (time < duration) {
      raf(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };
  raf(frameFunc);
}
