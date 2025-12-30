// import type { Activity } from './types';

export const speed = {
  minDelay: 5,
  maxDelay: 15,
  speedMethod: 'divide',
  speedFactor: 180 * 180,
};

// Slack doesn't support statuses for bot users :(

// export const statuses: PresenceStatusData[] = [
//   'online',
//   'idle',
//   'dnd',
//   'invisible',
// ]
// export const activities: Activity[] = [
//   {
//     type: 5,
//     name: 'painting',
//     image:
//       'https://pbs.twimg.com/media/GrGH5PIaAAI7aLu?format=png&name=360x360',
//   },
//   {
//     type: 2,
//     name: 'music',
//     image: 'https://pbs.twimg.com/media/GtTOrD7bMAEfahJ?format=png&name=medium',
//   },
//   {
//     type: 3,
//     name: 'tv',
//     image: 'https://pbs.twimg.com/media/GuaO0GVbEAA3xHa?format=png&name=small',
//   },
//   {
//     type: 0,
//     name: 'in the gym',
//     image:
//       'https://pbs.twimg.com/media/GuvLw79XQAACrp3?format=png&name=900x900',
//   },
// ];

export const messageThreshold = 10;
