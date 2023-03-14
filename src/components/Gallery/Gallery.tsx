import { useMemo, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import './style.css';

export default function Gallery({images, itemsPerPage}: {images: string[], itemsPerPage: number}): JSX.Element {
  const [activePage, setActivePage] = useState(1);

  const currentItems = useMemo(() => {
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return images.slice(indexOfFirstItem, indexOfLastItem);
  }, [activePage, images, itemsPerPage]);
  
  const totalPages = useMemo(() => Math.ceil(images.length / itemsPerPage), [images.length, itemsPerPage]);

  return (
    <section id="container">
        <h1>Gallery</h1>
      <div id="gallery">
     {currentItems.map((item: string): JSX.Element => {
        return(
          <img src={item} className="image" key={item} alt='qwerty' />
        )
     })}
      </div>
      <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages}/>
    </section>
  )
}
