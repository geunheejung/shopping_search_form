import React from 'react';
import SearchInput from "../../components/SearchInput";
import SearchResult from "../../SearchResult";
import { Props as InputProps } from "../../components/SearchInput";
import {ProducetList} from "./Container";

interface Props extends InputProps {
  searchedList: ProducetList
}

const Presenter:React.FC<Props> = ({
  searchedList,
  ...inputProps
}) => (
  <div className="search-wrapper">
    <header className="search-header">
      <h1>검색</h1>
    </header>
    <main className="search-main">
      <SearchInput
        {...inputProps}
      />
      <SearchResult
        searchedList={searchedList}
      />
    </main>
  </div>
)

export default Presenter;