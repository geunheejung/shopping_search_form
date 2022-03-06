import React from 'react';
import SearchInput from "../../components/SearchInput";
import SearchResult from "../../SearchResult";

export type ProducetList = Array<{
  name: string
}>

export const TAB_ID = {
  RECOMMEND: 'recommend',
  LATELY: 'lately'
} as const;

export type TAB_TYPE = typeof TAB_ID[keyof typeof TAB_ID];

export type SearchTab = Array<{ id: TAB_TYPE, title: string }>

export interface State {
  keyword: string
  product: ProducetList
  searchedList: ProducetList
  searchTab: SearchTab
  selectedTabId: TAB_TYPE
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
      searchedList: [],
      searchTab: [
        { id: TAB_ID.RECOMMEND, title: '추천 검색어' },
        { id: TAB_ID.LATELY, title: '최근 검색어' },
      ],
      selectedTabId: TAB_ID.RECOMMEND
    }
  }

  searchKeyword = () => {
    /*
    * 1. 현재 검색 키워드를 가져온다.
    * 2. 상품 목록에서 상품명을 조회한다.
    * 3. 포함되는 상품들을 가져온다.
    * *
     */
    const { keyword, product } = this.state;

    const filtered = product.filter(({ name }) => name.includes(keyword));

    this.setState({ searchedList: filtered });
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

  handleClearPress = (e: React.MouseEvent<HTMLButtonElement>) => {
    /*
    * 1. 현재 검색 키워드를 초기화한다.
    * 2. 현재 검색 결과를 초기화한다.
    * */

    this.setState({
      keyword: '',
      searchedList: []
    });
  }

  handleTabClick = (id: TAB_TYPE) => {
    debugger
    /*
    * 1. 현재 tabIndex를 바꾼다.
    * 2.
    *
    * */

    this.setState({ selectedTabId: id });
  }

  render() {
    const { keyword, searchedList, searchTab, selectedTabId } = this.state;

    return (
      <div className="search-wrapper">
        <header className="search-header">
          <h1>검색</h1>
        </header>
        <main className="search-main">
          <SearchInput
            value={keyword}
            onChangeInput={this.handleChangeInput}
            onClear={this.handleClearPress}
            onKeyPress={this.handleKeyPress}
          />
          <SearchResult
            searchTab={searchTab}
            searchedList={searchedList}
            selectedTabId={selectedTabId}
            onTabClick={this.handleTabClick}
          />
        </main>
      </div>
    )
  }
}

export default Search;