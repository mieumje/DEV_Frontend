import { useState } from 'react'
const Pagination = ({ defaultPage, limit, total }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  return (
    <div>
      <button>Prev</button>
      {Array.from(new Array(totalPage), (_, i) => i)
        .map(i => (
          <button key={i} style={{ backgroundColor: page === i ? 'skyblue' : ''}}>{i + 1}</button>
      ))}
      <button>Next</button>
    </div>
  )
}

export default Pagination;