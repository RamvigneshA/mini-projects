import { useEffect, useRef, useState } from 'react';
import { createClient } from 'pexels';
import './infinity.css';

function InfinityImg() {
  const [pages, setpage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('cats');
  const reference = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setLoading(true);
    const client = createClient(
      'q5FB8ipXNh6Xzf3bTsr01ZYcUE4SYf494X7fU2nN9J1qUk8N2RZR22Sz'
    );
    client.photos
      .search({
        query: query,
        page: pages,
        per_page: 12,
      })
      .then((res) => {
        setImages((prev) => [...prev, ...res.photos]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

    reference.current.addEventListener('scroll', handleScroll);
    return () => {
      reference.current.removeEventListener('scroll', handleScroll);
    };
  }, [pages, query]);

  const handleScroll = () => {
    const { clientHeight, scrollHeight, scrollTop } = reference.current;
    let scrolled = Math.ceil(scrollTop) + clientHeight;

    if (scrolled >= scrollHeight -10) {
      setpage((prev) => prev + 1);
    }
  };

  return (
    <section className="infiniteSec">
      <div style={{textAlign:'center',fontSize:'2rem',margin:'1rem',color:'lightgreen',fontFamily:'monospace',fontWeight:'600'}}>Infinite Image Scroll</div>
      <div className="searchArea">
        Search Image: <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            setQuery(inputRef.current.value);
            const container = reference.current;
            container.scrollTop = container.scrollHeight - 100;
          }}
        >
          search
        </button>
        {isLoading ? (<span className='load'>Loading...</span>):(<span className='load'>scroll now</span>)}
      </div>
      <div ref={reference} className="Intersection">
        {images.map((image, index) => {
          return (
            <img key={index} src={image.src.tiny} alt="image.photographer" />
          );
        })}
      </div>
    </section>
  );
}

export default InfinityImg;
