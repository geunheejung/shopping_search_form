import React from 'react';
import {
  ProducetList,
  SearchTab,
  TAB_TYPE,
  View
} from "./containers/Search/Container";

/*
* 추천, 최근 검색어 Tab 구현.
* 1. Tab을 누르면 Tab Index를 저장한다.
* 2. index 방식으로 관리하려면, 각 tab마다 번호가 있어야함, 그래야 비교해서 대입 가능.
* 3. 탭을 route처럼 배열로 관리하고, 해당 배열에 포함되는 요소는 따로 스타일 처리.
*
* # 안의 내용은?
* 1. tabId 따라서 다르게 렌더링 tabId가 recommend일 경우 or lately일 경우로
* */

interface Props {
  searchedList: ProducetList
  searchTab: SearchTab
  selectedTabId: TAB_TYPE
  isNotFound: Boolean
  recommendList: Array<View>,
  onTabClick: (id: TAB_TYPE) => void
}

const SearchResult:React.FC<Props> = ({
  searchedList,
  searchTab,
  selectedTabId,
  isNotFound,
  recommendList,
  onTabClick,
}) => {
  /*
  * 1. 검색을 하지 않은경우
  * 2. 검색 함 && 검색 결과 없음
  * 3. 검색 함 && 검색 결과 있음
  * */
  return (
    <section className="search-result">
      {
        isNotFound
          ? <div>검색 결과 없음</div>
          : !!searchedList.length
            ? (
              <ul className="search-list">
                {searchedList.map((producet, index) => (
                  <li key={`${producet.name}-${index}`}>{producet.name}</li>
                ))}
              </ul>
            )
            : (
              <>
                <ul className="search-tab">
                  {searchTab.map(({ id, title }) => (
                    <button
                      key={id}
                      className={`${id} ${selectedTabId === id ? 'active' : ''}`}
                      onClick={() => onTabClick(id)}
                    >
                      {title}
                    </button>
                  ))}
                </ul>
                <ul className="search-list">
                  {recommendList.map(({ name, id , view}, index) => {
                    return (
                      <li key={id}>{`${index + 1}. ${name} - 조회수: ${view}`}</li>
                    )
                  })}
                </ul>
              </>
            )
      }

    </section>
  )
};

export default SearchResult;