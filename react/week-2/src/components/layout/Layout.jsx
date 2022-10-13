import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  height: 800px;

  /*컨텐츠창 가운데정렬*/
  margin: 0 auto;
`;
