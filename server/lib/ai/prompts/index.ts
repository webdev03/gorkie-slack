import type { RequestHints } from '~/types';
import { corePrompt } from './core';
import { examplesPrompt } from './examples';
import { personalityPrompt } from './personality';
import { replyPrompt } from './tasks';
import { toolsPrompt } from './tools';

export const getRequestPromptFromHints = (requestHints: RequestHints) => `\
<context>
The current date and time is ${requestHints.time}.
You're in the ${requestHints.server} Slack workspace, inside the ${
  requestHints.channel
} channel.
You joined the server on ${new Date(requestHints.joined).toLocaleDateString()}.
Your current status is ${requestHints.status} and your activity is ${
  requestHints.activity
}.
</context>`;

export const systemPrompt = ({
  requestHints,
}: {
  requestHints: RequestHints;
}) => {
  const requestPrompt = getRequestPromptFromHints(requestHints);

  return [
    corePrompt,
    personalityPrompt,
    examplesPrompt,
    requestPrompt,
    toolsPrompt,
    replyPrompt,
  ]
    .filter(Boolean)
    .join('\n')
    .trim();
};
