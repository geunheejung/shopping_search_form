import React from 'react';
import SearchInput from "../../components/SearchInput";
import SearchResult from "../../SearchResult";
import { Props as InputProps } from "../../components/SearchInput";

interface Props extends InputProps {}

const Presenter:React.FC<Props> = ({
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
      <SearchResult />
    </main>
  </div>
)

export default Presenter;