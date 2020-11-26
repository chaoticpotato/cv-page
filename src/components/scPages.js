import Styled from 'styled-components';

export const ScPastJob = Styled.article`
  .header {}
  .name { font-size: 1.5em; margin: 0; }
  .dates {}
  .body {
    margin: .5em 0 0 0;

    a {
      font-weight: 500;
      text-decoration: none;
      box-shadow: 0 1px 0px 0px #147ac3bd;
      color: #147ac3;
    }
  }

  & + & { margin-top: 2em; }
`;

export const ScSkillSet = Styled.article`
  display: flex;

  .name {
    flex: 0 0 3.5em;
    margin-right: .5em;
    font-weight: 700;
  }
  .item {
    span { margin-right: 5px; }
  }

  & + & { margin-top: 1em; }
`;

export const ScAcc = Styled.article`
  h3 { font-size: 1.5em; margin: 0; }
  h3 a { color: #147ac3; text-decoration: none; }
  .t { font-size: 1.125em; font-style: italic; }
  p {
    margin: 1em 0;
  }
  & + & { margin-top: 3em; }
`;