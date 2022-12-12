
/* eslint-env es6 */
/* eslint-disable no-console */
const dfMessenger = document.querySelector('df-messenger');

window.addEventListener('dfMessengerLoaded', function () {
  const r1 = document.querySelector('df-messenger');
  if (r1) {
    const r2 = r1.shadowRoot.querySelector('df-messenger-chat');
    const sheet = new CSSStyleSheet();
    const width = window.innerWidth;

    if (width > 500) {
      sheet.replaceSync(`div.chat-wrapper[opened="true"] { height: 70vh }`);
      r2.shadowRoot.adoptedStyleSheets = [sheet];
    }
  }
});
