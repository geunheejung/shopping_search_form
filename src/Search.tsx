import React from 'react';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

interface Producet {
  name: string
}

interface State {
  keyword: string
  product: Array<Producet>
  result: Array<Producet>
}

class Search extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      keyword: '',
      product: [
        {
          name: '샐러드'
        },
        {
          name: '커리'
        },
        {
          name: '햄버거'
        },
      ],
      result: []
    }
  }

  searchKeyword = () => {
    /*
    * 1. 현재 검색 키워드를 가져온다.
    * 2. 상품 목록에서 상품명을 조회한다.
    * 3. 포함되는 상품들을 가져온다.
    * */

    const { keyword, product } = this.state;

    const filtered = product.filter(({ name }) => name.includes(keyword));

    this.setState({ result: filtered });
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;

    this.setState({ keyword: value });
  }

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const {key} = e;
    if (key !== 'Enter') return;

    this.searchKeyword();
  }


  render() {
    return (
      <div className="search-wrapper">
        <header className="search-header">
          <h1>검색</h1>
        </header>
        <main className="search-main">
          <SearchInput
            onChangeInput={this.handleChangeInput}
            onKeyPress={this.handleKeyPress}
          />
          <SearchResult />
        </main>
      </div>
    )
  }
}

export default Search;