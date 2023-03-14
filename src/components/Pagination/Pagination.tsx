import { useCallback } from "react";

interface PropsI {
  activePage: number
  setActivePage: (value: number) => void;
  totalPages: number;
}

export default function Pagination({activePage, setActivePage, totalPages}: PropsI) {

  const nextPage = useCallback(() => {
    setActivePage(activePage + 1);
  }, [activePage]);
  
  const prevPage = useCallback(() => {
    setActivePage(activePage - 1);
  }, [activePage]);
  

  return (
    <div>
      <button onClick={prevPage} disabled={activePage === 1}>Previous</button>
      <button onClick={nextPage} disabled={activePage === totalPages}>Next</button>
    </div>
  )
}
