import { useState } from 'react'
const Pagination = ({ defaultPage, limit, total }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  }

  return (
    <div>
      <button onClick={() => page !==0 && handleChangePage(page - 1)}>Prev</button>
      {Array.from(new Array(totalPage), (_, i) => i)
        .map(i => (
          <button key={i} onClick={() => handleChangePage(i)} style={{ backgroundColor: page === i ? 'skyblue' : ''}}>{i + 1}</button>
      ))}
      <button onClick={() => page + 1 !== totalPage && handleChangePage(page + 1)}>Next</button>
    </div>
  )
}

export default Pagination;