import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isVisible?: boolean;
};

const ModalContainer = styled.div<{ isVisible?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  height: calc(100% - 5em);
  width: calc(100% - 20em);
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = (props: Props) => {
  const { children, isVisible } = props;

  return isVisible && <ModalContainer>{children}</ModalContainer>;
};
