import type { H3Event } from 'h3';

import { like } from '../services/like-service';
import { insertNewPost } from '../services/posts-service';


export default defineWebSocketHandler({
  open(peer) {
    peer.subscribe('feeds')
  },
  message(peer, message) {
    const cookies = parseCookies({
      node: {
        req: {
          headers: peer.headers
        }
      }
    } as H3Event);

    const userId = cookies['user_id'];
    const userName = cookies['user_name'];

    if (typeof userId !== 'string' || typeof userName !== 'string') {
      return;
    }

    try {
      const ev = JSON.parse(message.text());
      if (ev.type === 'like') {
        like(+ev.postId, +userId, userName).then((post) => {
          peer.publish('feeds', {
            type: 'post:liked',
            post,
            userId,
          });
        });
      }

      if (ev.type === 'new-post') {
        insertNewPost(ev.content, userName).then((post) => {
          peer.publish('feeds', {
            type: 'post:added',
            post,
            userId,
          });
        })
      }

    } catch(e) {
      console.error(e);
    }
  }
})
