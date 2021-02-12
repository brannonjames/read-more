import React from 'react';
import styled from 'styled-components';
import {SearchResultProps} from "./SearchResult.types";

const SearchResult = (props: SearchResultProps) => {
  return (
    <StyledSearchResult tabIndex="-1" onClick={props.onClick}>{props.children}</StyledSearchResult>
  )
};

const StyledSearchResult = styled.li`
  display: flex;
  align-items: center;
  padding: 18px 6px;
  font-weight: bold;
   &:not(:last-of-type) {
    border-bottom: 1px solid lightslategray;
   }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

export default SearchResult;