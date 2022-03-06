import React from 'react';
/*
* 1. 키워드 입력 시 해당 키워드를 저장한다.
* 2. 해당 키워드는 상위 컨테이너로 전달한다.
* */

export interface Props {
  value: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClear: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SearchInput: React.FC<Props> = ({
  value,
  onChangeInput,
  onKeyPress,
  onClear,
}) => {
  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={value}
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClear}>X</button>
    </section>
  )
}
export default SearchInput;