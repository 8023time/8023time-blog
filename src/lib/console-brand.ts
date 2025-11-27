interface ConsoleBrand {
  name: string;
  github: string;
  blog: string;
}

const consoleBrand: ConsoleBrand = {
  name: '8023TIME',
  github: 'https://github.com/8023time',
  blog: 'https://blog.8023time.com/',
};

export function consoleBrandApp(data?: ConsoleBrand) {
  data = { ...consoleBrand, ...data };
  return function () {
    console.log(
      `%c${data.name}`,
      'color:#fff;background:#4f46e5;padding:8px 16px;border-radius:6px;font-size:15px;font-weight:600;',
    );
    console.log(
      `%cGitHub%c ${data.github}`,
      'color:#fff;background:#10b981;padding:6px 12px;border-radius:6px;font-size:14px;font-weight:600;',
      'background:#f3f4f6;color:#374151;padding:6px 12px;border-radius:6px;font-size:14px;',
    );
    console.log(
      `%cBlog%c ${data.blog}`,
      'color:#fff;background:#3b82f6;padding:6px 12px;border-radius:6px;font-size:14px;font-weight:600;',
      'background:#f3f4f6;color:#374151;padding:6px 12px;border-radius:6px;font-size:14px;',
    );
    console.log(`%c🌸 欢迎来到 ${data.name} 的个人空间  🎉`, 'color: #3b82f6; font-size: 14px; font-weight: bold');
  };
}
