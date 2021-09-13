import styles from './mainSearch.module.css'

function MainSearch() {
  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles.search}
        placeholder="Search for a movie..."
        name="input__main-movie-search"
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  )
}

export default MainSearch;
