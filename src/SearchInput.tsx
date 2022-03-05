import React from 'react';

/*
* 1. 키워드 입력 시 해당 키워드를 저장한다.
* 2. 해당 키워드는 상위 컨테이너로 전달한다.
*
* */

interface Props {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<Props> = ({
  onChangeInput,
  onKeyPress,
}) => {
  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      <span>X</span>
    </section>
  )
}
export default SearchInput;