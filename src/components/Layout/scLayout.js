import Styled from 'styled-components';

export const ScLayout = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  font-size: 16px;
  line-height: 1.5;

  .l-m {
    background-color: #fff;
    flex: 0 1 35%;
    border-right: 1px solid rgba(255, 34, 255, 0.30);
    overflow: auto;
  }
  .l-c {
    background-color: #f2f4;
    flex: 1 1 auto;
    padding: 4em;
    overflow: auto;
  }
  
  .c {
    background-color: #fff;
    padding: 4em;
    height: 1000px;
    max-width: 640px;
    border: 1px solid rgba(255, 34, 255, 0.30);
  }
`;