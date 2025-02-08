import { togetherai } from '@ai-sdk/together';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-large';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': togetherai('google/gemma-2b-it'),
    'chat-model-large': togetherai('meta-llama/Llama-3.3-70B-Instruct-Turbo-Free'),
    'chat-model-reasoning': wrapLanguageModel({
      model: togetherai('deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),

    'title-model': togetherai('meta-llama/Llama-Vision-Free'),
    'block-model': togetherai('meta-llama/Llama-Vision-Free'),
  },
  imageModels: {
    'small-model': togetherai.image('black-forest-labs/FLUX.1-schnell-Free'),
    'large-model': togetherai.image('black-forest-labs/FLUX.1-schnell-Free'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'Sorvx - 2B',
    description: 'Fast and efficient model for general tasks',
  },
  {
    id: 'chat-model-large',
    name: 'Sorvx-2 70B',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Sorvx - R1',
    description: 'Uses advanced reasoning',
  },
];
