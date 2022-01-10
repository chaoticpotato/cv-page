import Styled from 'styled-components';

export const ScSidebar = Styled.div`
  max-width: 300px;
  width: 95%;
  margin-left: auto;
  height: 100%;
  padding: 5em 2em 2em;

  h1 a { text-decoration: none; color: #444; }

  .title { margin: 0 0 .25em -.1em; }

  .desc {
    margin: 0;
    font-family: Quicksand, sans-serif;
    background: linear-gradient(60deg,rgba(69,169,252,0.75) 0%, rgba(193,96,210,0.75) 50%,rgba(226,90,9,0.75) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    letter-spacing: -0.75px;
    transition: all .2s ease-in-out;

    &:hover {
      background: linear-gradient(60deg,rgba(193,96,210,0.75) 0%,rgba(226,90,9,0.75) 50%,rgba(69,169,252,0.75) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .menu {
    padding: 2.5em 0 1.5em;
    font-family: Quicksand, sans-serif;

    ul { padding: 0; margin: 0; list-style: none; }

    a {
      display: block;
      text-decoration: none;
      font-size: 1em;
      padding: .5em 0;
      color: #080808;
      transition: text-indent .15s;
      position: relative;

      &:after {
        content: "";
        display: inline-block;
        width: .5rem;
        height: .5rem;
        transition: all .2s ease-in-out;
        transform: scale(0) rotate(0);
        position: absolute;
        top: 16px;
        border-radius: 2px;
        left: 0;
        background: linear-gradient(60deg,rgba(69,169,252,0.75) 0%, rgba(193,96,210,0.75) 50%,rgba(226,90,9,0.75) 100%);
      }

      &:not(.isActive):hover { text-indent: 1rem; }
      &.isActive, &:hover {
        text-indent: 1rem;
      
        &:after { transform: scale(1) rotate(225deg); }
      }
    }
  }

  @media print { 
    .desc {
      color: #147ac3;
      background: transparenet;
      -webkit-background-clip: content-box;
      -webkit-text-fill-color: unset;
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
        height: 100%;

        &:not(.isActive):hover, &.isActive { text-indent: 0; box-shadow: inset 0 -3px #e5885e; }
        &.isActive:after,
        &:hover:after { transform: scale(0); }
      }
    }

    @media screen and (max-width: 420px) {
      width: 100%;
      text-align: center;
    
      .title {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
`
