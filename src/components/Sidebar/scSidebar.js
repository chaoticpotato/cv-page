import Styled from 'styled-components';

export const ScSidebar = Styled.div`
  max-width: 300px;
  width: 95%;
  margin-left: auto;
  height: 100%;
  padding: 5em 2em 2em;

  .title { margin: 0 0 .25em 0; }
  .desc { margin: 0; }
  .menu {
    padding: 2.5em 0 1.5em;

    ul { padding: 0; margin: 0; list-style: none; }

    a {
      display: block;
      text-decoration: none;
      font-size: 1em;
      padding: .5em 0;
      color: #080808;
      transition: text-indent .15s;

      &:not(.isActive):hover { text-indent: .5em; }
      &.isActive { text-indent: .75em; }
    }
  }

  @media screen and (max-width: 980px), print {
    padding: 2em 0 0;
    width: 90%;
    margin: 0 auto;
    height: auto;
    max-width: unset;

    .menu {
      padding: 1.5em 0 0;

      ul { display: flex; }

      a {
        padding: .5em .75em;

        &:not(.isActive):hover, &.isActive { text-indent: 0; }
        &.isActive { box-shadow: inset 0 -3px #e5885e; }
      }
    }
  }
`
