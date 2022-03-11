import React from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import _isEmpty from 'lodash/isEmpty';
import _sortBy from 'lodash/sortBy';
import SearchInput from "../../components/SearchInput";
import SearchResult from "../../SearchResult";

export type ProducetList = Array<{
  id: string
  name: string
}>

export const TAB_ID = {
  RECOMMEND: 'recommend',
  LATELY: 'lately'
} as const;

export type TAB_TYPE = typeof TAB_ID[keyof typeof TAB_ID];

export type SearchTab = Array<{ id: TAB_TYPE, title: string }>

export type View = {
  id: string,
  view: number
  name: string
}

interface IViews {
  [id: string]: View
}

export interface State {
  keyword: string
  product: ProducetList
  searchedList: ProducetList
  searchTab: SearchTab
  selectedTabId: TAB_TYPE
  isNotFound: Boolean
  views: IViews
}

class Search extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      keyword: '',
      product: [
        {
          id: 'salady',
          name: '샐러드'
        },
        {
          id: 'curry',
          name: '커리'
        },
        {
          id: 'burger',
          name: '햄버거'
        },
      ],
      searchedList: [],
      searchTab: [
        {id: TAB_ID.RECOMMEND, title: '추천 검색어'},
        {id: TAB_ID.LATELY, title: '최근 검색어'},
      ],
      selectedTabId: TAB_ID.RECOMMEND,
      isNotFound: false,
      views: {}
    }
  }

  getRecommendList = () => {
    const { views } = this.state;
    if (_isEmpty(views)) return [];

    const recommendList = _sortBy(Object.values(views), ({ view }) => view).reverse();

    return recommendList;
  }

  searchKeyword = () => {
    const { keyword, product } = this.state;

    // 1. keyword가 없는 상태에서 검색 할 경우 -> 검색 결과/검색 상태 초기화.
    if (!keyword.length) {
      this.setState({
        searchedList: [],
        isNotFound: false
      });
      return;
    }

    const filtered = product.filter(({ name }) => name.includes(keyword));

    // 2. keyword 있는 상태 && 검색 결과 없음 -> 결과 없음 상태 처리
    if (!filtered.length) {
      this.setState({ isNotFound: true });
      return;
    }

    const getViews = () => {
      const { views } = this.state;
      const _views: IViews = _cloneDeep(views);

      for (const { id, name } of filtered) {
        _views[id] = {
          id,
          view: views[id] ? views[id].view + 1 : 1,
          name
        }
      }

      return _views;
    }

    // 3. keyword 있음 && 검색 결과 있음 -> 검색 결과/검색 상태 처리
    this.setState({
      searchedList: filtered,
      isNotFound: false,
      views: getViews()
    });
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
    this.setState({ selectedTabId: id });
  }

  render() {
    const {
      keyword,
      searchedList,
      searchTab,
      selectedTabId,
      isNotFound,
    } = this.state;

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
            isNotFound={isNotFound}
            recommendList={this.getRecommendList()}
            onTabClick={this.handleTabClick}
          />
        </main>
      </div>
    )
  }
}

export default Search;