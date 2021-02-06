import React from 'react';
import styled from 'styled-components'
import TextInput from '../TextInput'
import {SearchInputProps} from "./SearchInput.types";

const SearchInput = (props: SearchInputProps) => {
  const { searchValue, onSearchFieldChange, posts, onAdd } = props;
  //
  const isSinglePost = posts.length === 1;
  const noPosts = posts.length === 0;
  //
  const handleAdd = (post) => {
    onAdd(post)
  };

  return (
    <SeachInputContainer>
      <StyledInput
        placeholder="Paste Reddit post URL"
        value={searchValue}
        onChange={onSearchFieldChange}
      />
      {
        !noPosts && (
          <SearchResults>
            {
              isSinglePost && (
                <SearchResult
                  onClick={() => handleAdd(posts[0])}
                  tabIndex="-1"
                >
                  {`Add "${posts[0].title}" to your list`}
                </SearchResult>
              )
            }
          </SearchResults>
        )
      }
    </SeachInputContainer>
  )
};

export default SearchInput;

const SeachInputContainer = styled.div`
  display: flex;
  width: 98%;
  max-width: 1222px;
  position: relative;
`;

const StyledInput = styled(TextInput)`
  display: flex;
  width: 100%;
  padding: 12px;
  && {
    .MuiInputBase-root {
      font-size: 2rem;
    }    
  }
`;

const SearchResults = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  background-color: white;
  border-left: 2px solid ${({ theme }) => theme.palette.secondary.main};
  border-right: 2px solid ${({ theme }) => theme.palette.secondary.main};
  border-bottom: 2px solid ${({ theme }) => theme.palette.secondary.main};
`;

const SearchResult = styled.li`
  padding: 12px;
  font-weight: bold;
   &:not(:last-of-type) {
    border-bottom: 1px solid lightslategray;
   }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;