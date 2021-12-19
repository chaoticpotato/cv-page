import Styled from 'styled-components';

export const ScLayout = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  font-size: 16px;
  line-height: 1.5;

  .bioBox {
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    flex: 0 0 200px;
    margin-left: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .summary {
    border-bottom: 1px solid #eee;
    margin-bottom: 1.5rem;

    p { margin-bottom: 1.5rem; }

    h2 {
      text-transform: uppercase;
      font-family: Quicksand,sans-serif;
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: .25rem;
      color: #ea8558;
    }
  }

  .l-m {
    background-color: #fff;
    flex: 0 1 35%;
    overflow: auto;
    box-shadow: 0 0 1px 0px black;
    z-index: 1;
  }
  .l-c {
    background-color: #f2f4;
    background: linear-gradient(60deg, rgba(193, 96, 210, 0.75) 0%, rgba(226, 90, 9, 0.75) 50%, rgba(69, 169, 252, 0.75) 100%);
    flex: 1 1 auto;
    padding: 4em;
    overflow: auto;

    @media print { overflow: initial; background: #fff; }
  }
  
  .c {
    background-color: #fff;
    padding: 4em 3em 3em 4em;
    max-width: 640px;
    border-radius: 1.25rem;

    @media print { padding: 0!important; }
  }

  @media screen and (max-width: 980px), print {
    flex-direction: column;

    .l-m { flex: 0 0 auto; }
    .l-c { padding: 2em 0; }
    .c {
      max-width: unset;
      width: 90%;
      margin: 0 auto;
      padding: 3em 3em 2em;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    .avatar {
      margin-left: 0;
      flex: 0 0 auto;
      width: 160px;
      box-shadow: 0px 4px 5px -1px rgb(175 97 17 / 50%);
    }

    .bio h2 { text-align: center; margin-bottom: .5rem; }

    .bioBox {
      flex-direction: column-reverse;
      padding: 2rem 1.5rem .5rem;
      margin-bottom: 2rem;
      background-color: #ffcba6;
      border-radius: 1rem;
      text-align: center;
      font-size: 1rem;
    }

    .c { padding: 2em 2em 2.5em 2em; border-radius: .75em; }

    h2 { font-size: 1.75rem; }
  }
`;