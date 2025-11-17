// =======================================================
// 轻量 raf 封装（支持多帧延迟 & 可取消）
// =======================================================

// --- 基础适配：在非浏览器环境 fallback 到 setTimeout ---
const nativeRAF =
  typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function'
    ? window.requestAnimationFrame.bind(window)
    : (cb: FrameRequestCallback) => setTimeout(cb, 16);

const nativeCAF =
  typeof window !== 'undefined' && typeof window.cancelAnimationFrame === 'function'
    ? window.cancelAnimationFrame.bind(window)
    : (id: number) => clearTimeout(id);

// --- 全局任务 ID 计数器 ---
let taskId = 0;

// 存储 taskId => realRAFId
const rafMap = new Map<number, number>();

// --- 清理绑定 ---
function cleanup(id: number) {
  rafMap.delete(id);
}

// =======================================================
// wrapperRaf：支持 multi-frame 延迟执行
// =======================================================
export const raf = (callback: () => void, frames = 1): number => {
  taskId += 1;
  const id = taskId;

  const step = (remaining: number) => {
    if (remaining <= 0) {
      cleanup(id);
      callback();
      return;
    }

    const realId = nativeRAF(() => step(remaining - 1));
    rafMap.set(id, realId);
  };

  step(frames);

  return id;
};

// =======================================================
// 支持取消
// =======================================================
raf.cancel = (id: number) => {
  const realId = rafMap.get(id);
  cleanup(id);
  if (realId !== null) nativeCAF(realId!);
};

export default raf;
