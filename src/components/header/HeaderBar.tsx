import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './headerBar.module.css';

function HeaderBar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.header__pageTitle}>WatchList</h1>
        <div className={styles.header__control}>
          <span className={styles.header__user}>Login</span>
          <FontAwesomeIcon icon={faSearch} style={{ cursor: "pointer", margin: "0rem 1rem" }} />
        </div>
      </div>
    </div>
  )
}

export default HeaderBar;
