import styled from "@emotion/styled";

export const AppWrap = styled.div``;

export const FeedWrap = styled.div`
  width: 400px;
  min-height: 100px;
  height: 100vh;
  background: #0e1151;
  padding: 1rem;
  color: white;
`;

export const FeedHandleWrap = styled.header`
  position: absolute;
  width: 230px;
  white-space: nowrap;
  text-align: right;
  top: 0;
  right: 0;
  border-bottom: 1px solid white;
  padding: 0.5rem 2rem 0.5rem 1rem;
  background: #0e1151;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);

  z-index: 1;
`;
