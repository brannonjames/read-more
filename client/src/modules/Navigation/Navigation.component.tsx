import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import {NavigationProps} from "./Navigation.types";
import NavigationStore from './Navigation.store';

const { sharedInstancce: navigationStore } = NavigationStore;

const Navigation = observer((props: NavigationProps) => {

  const numChildren = React.Children.count(props.children);

  return (
    <OuterContainer>
      <InnerContainer
        numChildren={numChildren}
        pageNum={navigationStore.navIndex}
        shouldAnimate={navigationStore.shouldAnimateTransition}
      >
        {
          React.Children.map(props.children, (child, index) => (
            <ScreenContainer
              numChildren={numChildren}
              index={index}
            >
              {child}
            </ScreenContainer>
          ))
        }
      </InnerContainer>
    </OuterContainer>
  )
});

const OuterContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
`;

const InnerContainer = styled.div`
  height: 100vh;
  width: ${props => props.numChildren * 100}%;
  position: relative;
  transform: translateX(-${props => props.pageNum * (100 / props.numChildren)}%);
  transition: transform ${props => props.shouldAnimate ? '200ms' : '0'}
`;

const ScreenContainer = styled.div`
  height: 100%;
  width: ${props => 100 / props.numChildren}%;
  position: absolute;
  left: ${props => (100 / props.numChildren) * props.index}%;
`;

export default Navigation;