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
  max-width: 800px;
  position: relative;
`;

const StyledInput = styled(TextInput)`
  display: flex;
  width: calc(100% - 24px);
  font-size: 24px;
  padding: 12px;
`;

const SearchResults = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: blue;
  color: white;
  margin: 0;
  padding: 0;
`;

const SearchResult = styled.li`
  &:hover {
    cursor: pointer;
    background-color: aquamarine;
  }
`;