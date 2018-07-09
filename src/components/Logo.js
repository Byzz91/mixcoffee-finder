import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  display: block;
  float: left;
  font-family: Roboto;
  margin: 0;
  padding: 0;
  font-size: 1.6em;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 15px 10px 10px 18px;
  color: #5a5a5a;
  user-select: none;
`;

class Logo extends Component {
  render() {
    return (
      <Title>Mixcoffee</Title>
    );
  }
}

export default Logo;