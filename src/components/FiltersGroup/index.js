import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const ratingsFilterList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRatings, activeRatingId} = props
      const onClickRatingItem = () => changeRatings(rating.ratingId)

      const ratingClassName =
        rating.ratingId === activeRatingId ? 'active-rating' : 'rating'

      return (
        <li
          className="rating-list-container"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img src={ratingsList.imageUrl} className={ratingClassName} alt="" />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsList = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{ratingsFilterList()}</ul>
    </div>
  )

  const categoryFilterList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)

      const categoryClassName =
        category.categoryId === activeCategoryId ? 'activeCategory' : 'category'

      return (
        <li
          className="category-list-container"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className="category-name">{category.name}</p>
        </li>
      )
    })
  }

  const renderCategoryList = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{categoryFilterList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyEvent={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryList()}
      {renderRatingsList()}
      <button className="clear-btn" type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
