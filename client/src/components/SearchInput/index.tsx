import React from 'react';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextInput from '../TextInput'
import {SearchInputProps} from "./SearchInput.types";

const SearchInput = (props: SearchInputProps) => {
  const {
    searchValue,
    onSearchFieldChange,
    onFocus,
    isDisabled,
  } = props;
  //

  return (
    <SeachInputContainer>
      <StyledInput
        placeholder="Paste Reddit post URL"
        value={searchValue}
        onChange={event => onSearchFieldChange(event.target.value)}
        onFocus={onFocus}
        disabled={isDisabled}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <HighlightOffIcon onClick={() => onSearchFieldChange('')} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
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