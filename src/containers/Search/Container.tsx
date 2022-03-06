import React from 'react';
import Presenter from './Presenter';

interface Producet {
  name: string
}

export type ProducetList = Array<Producet>

export interface State {
  keyword: string
  product: ProducetList
  searchedList: ProducetList
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
      searchedList: []
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


  render() {
    const { keyword, searchedList } = this.state;
    return (
      <Presenter
        value={keyword}
        searchedList={searchedList}
        onKeyPress={this.handleKeyPress}
        onChangeInput={this.handleChangeInput}
        onClear={this.handleClearPress}
      />
    )
  }
}

export default Search;