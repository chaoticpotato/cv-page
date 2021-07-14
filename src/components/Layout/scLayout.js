import Styled from 'styled-components';

export const ScLayout = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  font-size: 16px;
  line-height: 1.5;

  .avatar {
    width: 225px;
    border-radius: 50%;
    float: right;
    margin: 0 0 1em 1em;
    overflow: hidden;
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
    padding: 4em 4em 3em;
    max-width: 640px;

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
      width: 100%;
      margin-left: 0;
    }
  }
`;