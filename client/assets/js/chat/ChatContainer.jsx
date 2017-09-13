import React from 'react';
import Menu from 'react-burger-menu/lib/menus/push';
import Header from './Header.jsx';
import Chatbox from './Chatbox.jsx';
import Chatbar from './Chatbar.jsx';
import LanguageIcon from './LanguageIcon.jsx';
// import BubbleBreak from './BubbleBreak.jsx';

const uuidv1 = require('uuid/v1');
let sessionId = uuidv1();

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: sessionId };
    this.resetSession = this.resetSession.bind(this);
  }

  // componentDidMount(){
  // sessionId = uuidv1();
  // }

  // componentWillUnmount(){

  // }

  resetSession() {
    this.setState({ id: uuidv1() });
  }

  render() {
    return (
      <div>
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          right
          noOverlay
          width={'100px'}
          customCrossIcon={
            <svg
              fill="#545757"
              height="44"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
          }
        >
          {/* note: used id="outer-container" and placed fixed elements (header and chatbar) outside of page-wrap (see below) so they stay fixed instead of scrolling with chatbox */}
          <div id="outer-container">
            <Chatbar sessionId={this.state.id} />
            <Header resetSession={this.resetSession} />
            {/************************************ Theme Icon (custom icon)************************************/}
            <div className="icon-size">
              <svg
                id="Symbol_14_1"
                data-name="Symbol 14 – 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="6461 -1056 500 500"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n      .cls-1 {\n        fill: #F0F0F0;\n        stroke: #6f7273;\n        stroke-width: 2px;\n      }\n\n      .cls-2 {\n        stroke: none;\n      }\n\n      .cls-3 {\n        fill: none;\n      }\n    '
                    }}
                  />
                </defs>
                <g
                  id="Rectangle_35"
                  data-name="Rectangle 35"
                  className="cls-1"
                  transform="translate(6461 -1056)"
                >
                  <rect className="cls-2" width={500} height={500} />
                  <rect
                    className="cls-3"
                    x={1}
                    y={1}
                    width={498}
                    height={498}
                  />
                </g>
                <path
                  id="Path_57"
                  data-name="Path 57"
                  d="M499.5.5v499H.5Z"
                  transform="translate(6461 -1056)"
                />
              </svg>
            </div>
            {/************************************ Font-Size-Icon (custom icon)************************************/}
            <div className="icon-size">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="6091 -815 51 49">
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n      .cls-1 {\n        fill: #f0f0f0;\n     stroke: none;\n font-size: 42px;\n        font-family: HelveticaNeue, Helvetica Neue;\n      }\n    '
                    }}
                  />
                </defs>
                <g
                  id="Symbol_13_1"
                  data-name="Symbol 13 – 1"
                  transform="translate(4250 -1222)"
                >
                  <text
                    id="Aa"
                    className="cls-1"
                    transform="translate(1842 447)"
                  >
                    <tspan x={0} y={0}>
                      Aa
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>
            {/************************************ Language-Icon (material.io icon)************************************/}
            {/*<div className="icon-size">
              <LanguageIcon />
              <svg
                fill="#F0F0F0"
                height="44"
                viewBox="0 0 24 24"
                width="44"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </svg>
            </div>*/}

            <div className="icon-size">
              <LanguageIcon />
            </div>
          </div>
        </Menu>

        <main id="page-wrap">
          {/*props have to be in {} or ""*/}
          <div className="grey chat-container">
            <Chatbox sessionId={this.state.id} />
          </div>
        </main>
      </div>
      //</div>
    );
  }
}
export default ChatContainer;
