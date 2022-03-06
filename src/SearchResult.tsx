import React from 'react';
import {ProducetList} from "./containers/Search/Container";

interface Props {
  searchedList: ProducetList
}

const SearchResult:React.FC<Props> = ({ searchedList }) => {
  return (
    <section className="search-result">
      {
        !!searchedList.length
          ? (
            <ul>
              {searchedList.map((producet, index) => (
                <li key={`${producet.name}-${index}`}>{producet.name}</li>
              ))}
            </ul>
          )
          : (
            <>
              <ul className="search-tab">
                <ol className="recommend">
                  <button>추천 검색어</button>
                </ol>
                <ol className="lately">
                  <button>최근 검색어</button>
                </ol>
              </ul>
              <ul className="search-list">
                <li>1. 샐러드</li>
                <li>2. 커리</li>
                <li>3. 햄버거</li>
              </ul>
            </>
          )
      }

    </section>
  )
};

export default SearchResult;