import React, { Component } from 'react';
import styled from 'styled-components';

import IconClose from 'react-icons/lib/io/close';
// import IconExpand from 'react-icons/lib/io/expand';
// import IconContract from 'react-icons/lib/io/contract';

const TitleBarBox = styled.ul`
  display: block;
  height: 30px;
  ${'' /* background-color: #b51818; */}
  background-color: #FFF;
  margin: 0;
  padding: 0;
  cursor: move;

  & > li {
    display: inline-block;
    float: right;
    cursor: pointer;
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
`;

class TitleBar extends Component {
  render() {
    return (
      <TitleBarBox>
        <li>
          <IconWrapper>
            <IconClose />
          </IconWrapper>
        </li>
      </TitleBarBox>
    );
  }
}

export default TitleBar;