import React from 'react';
import styled from 'styled-components/macro';
import { useState } from 'react';

export const SearchInput = styled.input`
  background-color: #44444459;
  color: black;
  border: 1px solid black;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;



export const SearchBox = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restProps
  }) {
    // const [searchActive, setSearchActive] = useState(false);
  
    return (
      <Search {...restProps}>
        <SearchIcon
        //   onClick={() => setSearchActive((searchActive) => !searchActive)}
        //   data-testid="search-click"
        >
          {/* <img src="/images/icons/search.png" alt="Search" /> */}
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder="Search hotels"
        //   active={searchActive}
        //   data-testid="search-input"
        />
      </Search>
      // <div className="header__center">
      //     <input type="text" />
      //     <SearchIcon />
      //   </div>
    );
  };