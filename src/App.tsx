import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <header className="search-header">
          <h1>검색</h1>
        </header>
        <main className="search-main">
          <section className="search-form">
            <input type="text" placeholder="검색어를 입력하세요" />
            <span>X</span>
          </section>
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
        </main>
      </div>
    )
  }
}

export default App;