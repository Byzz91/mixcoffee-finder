import styled from 'styled-components';

export const RootBox = styled.div`
  padding: 0 0 15px 0;
`;

export const HeaderInner = styled.div`
  float: left;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  width: 700px;
`;

export const AppHeader = styled.div`
  overflow: hidden;
  background-color: #fafafa;
  border-bottom: 1px solid #ebebeb;
  margin-top: 0px;
  height: auto;
  width: 100%;
  transition: 0.1s;
`;

export const InputSearch = styled.input.attrs({
  type: "text",
  placeholder: "search files..."
})`
  height: 44px;
  vertical-align: top;
  font: normal 16px Roboto, gulim, dotum, arial, sans-serif;
  background-color: #fff;
  color: #222;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  border: none;
  margin: 8px 0 0 0;
  padding: 0 10px;
  text-indent: 5px;
  width: calc(100% - 155px);

  &:hover,
  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`;

export const Setting = styled.span`
  display: block;
  float: right;
  color: #c1c1c1;
  cursor: pointer;
  margin-top: 17px;

  &:hover {
    color: #696969;
  }
`;