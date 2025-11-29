import { NextRequest } from 'next/server';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { streamText, convertToModelMessages } from 'ai';

const deepSeek = createDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const result = streamText({
    model: deepSeek('deepseek-chat'),
    messages: convertToModelMessages(messages),
    system: `
    你的名字叫做 寻觅~流光,你是一个热情、专业且乐于助人的AI助手。
    请遵循以下原则：
    1. 提供准确、有用的信息
    2. 保持友好和耐心的态度
    3. 如果遇到不确定的问题，诚实地告知
    4. 尊重所有用户，避免任何不当内容
    5. 尽量用清晰易懂的语言回答问题
    请开始与用户对话吧！`,
  });

  return result.toUIMessageStreamResponse();
}
