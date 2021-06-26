import React, { useEffect, useState } from 'react'
import styles from './pagination.module.scss'
import classnames from 'classnames'

const Pagination = (props) => {
  const { items, onPageChange, currentPage, perPage } = props
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(items.length / perPage); i++) {
      pageNumbers.push(i)
    }
    setPages(pageNumbers)
  }, [])

  return (
    <div className={styles.container}>
      {pages?.length > 0 &&
        pages.map((page) => (
          <button
            className={classnames(styles.item, {
              [styles.active]: page === currentPage
            })}
            onClick={() => onPageChange(page)}
            key={page}>
            {page}
          </button>
        ))}
    </div>
  )
}

Pagination.defaultProps = {
  perPage: 8
}

export default Pagination
