import request from 'axios';
import metaTagsManager from './metaTagsManager';

const SubscribersManager = {


  /**
   * Submit new comment to server using AJAX call.
   *
   * @param {Object} comment - Comment body to post.
   * @returns {Promise} - result of ajax call.
   */
  submitComment(comment) {
    return request({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
      data: { comment },
    });
  },

};

export default SubscribersManager;
