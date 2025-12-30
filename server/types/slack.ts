import type { SlackEventMiddlewareArgs } from '@slack/bolt';
import type { WebClient } from '@slack/web-api';

export type SlackMessageEvent = SlackEventMiddlewareArgs<'message'>['event'];

export interface SlackMessageContext {
  event: SlackMessageEvent;
  client: WebClient;
  botUserId?: string;
  teamId?: string;
}
