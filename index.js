module.exports = {

  /**
   * Add event
   * @param {Dom Element} el
   * @param {String} event
   * @param {Function} handler
   */
  addEvent: function (el, event, handler) {
    if (!el) {
      return;
    }
    if (el.attachEvent) {
      el.attachEvent('on' + event, handler);
    } else if (el.addEventListener) {
      el.addEventListener(event, handler, true);
    } else {
      el['on' + event] = handler;
    }
  },

  /**
   * remove event
   * @param {Dom Element} el
   * @param {String} event
   * @param {Function} handler
   */
  removeEvent: function (el, event, handler) {
    if (!el) {
      return;
    }
    if (el.detachEvent) {
      el.detachEvent('on' + event, handler);
    } else if (el.removeEventListener) {
      el.removeEventListener(event, handler, true);
    } else {
      el['on' + event] = null;
    }
  }

};
