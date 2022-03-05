import React from 'react';

class SearchResult extends  React.Component {
  render() {
    return (
      <section className="search-result">
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
      </section>
    )
  }
}

export default SearchResult;