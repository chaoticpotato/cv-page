import Styled from 'styled-components';

export const ScPastJob = Styled.article`
  .header {}
  .name { font-size: 1.5em; margin: 0; color: #44403c; line-height: 1; }
  .dates { font-family: Quicksand, sans-serif }
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
  h3 { font-size: 1.5em; margin: 0; color: #44403c; line-height: 1; }
  h3 a { color: #147ac3; text-decoration: none; }
  .t { font-size: 1em; font-family: Quicksand, sans-serif; }
  p {
    margin: 1em 0;
  }
  & + & { margin-top: 3em; }
`;

export const ScFun = Styled.span`
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  background-color: #c29c9b;
  background: #f2f3f6;
  opacity: .75;

  .title {
    font-family: Quicksand, sans-serif;
    flex: 0 0 132px;
    text-align: right;
    padding-right: 1.5rem;
    font-size: 1.25em;

    span { display: block; }
  }

  .content {
    padding: .125rem 0;
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: stretch;

    .title {
      text-align: left;
      margin-bottom: 0.5rem;
      flex: 1 1 auto;

      span { display: inline-block; width: 4px; }
    }
  }

  @media print { border: 1px solid #f2f3f5; }
`;