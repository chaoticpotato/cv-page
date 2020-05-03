import Styled from 'styled-components';

export const ScSidebar = Styled.div`
  max-width: 300px;
  width: 95%;
  margin-left: auto;
  height: 100%;
  padding: 5em 2em 2em;

  .title { font-size: 2em; }
  .desc {}
  .menu {
    padding: 1.5em 0;

    ul { padding: 0; margin: 0; list-style: none; }

    a {
      display: block;
      text-decoration: none;
      font-size: 1em;
      padding: .5em 0;
      color: #080808;
    }
  }
`
