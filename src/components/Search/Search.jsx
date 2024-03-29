import { useState, useRef } from 'react'
import { ReactComponent as SearchIcon } from './search.svg'
import { ReactComponent as CloseIcon } from './close.svg'
import './index.css'

function Search({ onSubmit: propsOnSubmit, onInput }) {
  const [inputText, setInputText] = useState('')
  const inputRef = useRef(null)

  const handleInput = () => {
    setInputText(inputRef.current.value)
    onInput && onInput(inputRef.current.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    propsOnSubmit(inputText)
    //setInputText('')
  }

  const handleClearInput = (e) => {
    e.stopPropagation()
    setInputText('')
    onInput && onInput('')
  }

  return (
    <form
      className="search"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        className="search__input"
        ref={inputRef}
        placeholder="Поиск"
        onInput={handleInput}
      />
      <button
        type="button"
        className="search__btn"
      >
        {inputText && (
          <CloseIcon
            onClick={handleClearInput}
            className="search__icon-clear"
          />
        )}
        {inputText && (
          <SearchIcon
            onClick={handleFormSubmit}
            className="search__icon"
          />
        )}
      </button>
    </form>
  )
}

export default Search
