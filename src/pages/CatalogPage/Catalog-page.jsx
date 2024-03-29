import { useContext } from 'react'
import CardList from '../../components/CardList/CardList'
import Sort from '../../components/Sort/Sort'
import Spinner from '../../components/Spinner'
import { CardContext } from '../../context/cardContext'

export const CatalogPage = () => {
  const { cards } = useContext(CardContext)
  return (
    <>
      <Sort />
      <div className="content__cards">
        <CardList cards={cards} />
      </div>
    </>
  )
}
