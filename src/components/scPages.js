import Styled from 'styled-components';

export const ScPastJob = Styled.article`
  .header {}
  .name { font-size: 1.5em; margin: 0; color: #44403c; line-height: 1; color: #ea8558; }
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

  & + & { margin-top: 2.5em; }
`;

export const ScSkillSet = Styled.article`
  display: flex;

  .name {
    flex: 0 0 3.5em;
    margin-right: .5em;
    font-weight: 700;
    color: #ea8558;
  }
  .item {
    span { margin-right: 5px; display: inline-block; }
  }

  & + & { margin-top: 1em; }
`;

export const ScAcc = Styled.article`
  h3 { font-size: 1.5em; margin: 0; color: #44403c; line-height: 1; color: #ea8558; }
  h3 a { color: #147ac3; }
  .t { font-size: 1em; margin-top: .25em; font-family: Quicksand, sans-serif; }
  p {
    margin: 1em 0;
  }
  & + & { margin-top: 3em; }
`;

export const ScFun = Styled.span`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f2f3f6;
  border-radius: 12px;
  min-width: 6rem;
  margin-bottom: 1.45em;

  .box {
    flex: 0 0 32%;
    padding: .5rem;
  }

  .title {
    font-family: Quicksand, sans-serif;
    align-self: flex-end;
    flex: 0 0 150px;

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
      align-self: center;
      flex: 1 1 auto;

      span { display: inline-block; width: 4px; }
    }
  }

  @media print { border: 1px solid #f2f3f5; }
`;