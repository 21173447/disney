import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Spinner from './Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Fetching = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);



  const itemsPerPage = 10;
  const apiUrl = 'https://api.disneyapi.dev/character?page=2&pageSize=149';





  useEffect(() => {

    axios.get(apiUrl)
      .then(response => {
        setCharacters(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <p><Spinner /></p>;
  if (error) return <p>{error}</p>;


  //pagination 
  const pageCount = Math.ceil(characters.length / itemsPerPage);
  const currentCharacters = characters.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };



  return (
    <div className='bg-[#220d22] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] '>
      <p className='text-center text-3xl text-white pt-10'>
        Character information
        <div className=' flex justify-center pt-5'>
          <hr class=" border-[3px]  w-32 flex  border-white " />
        </div>
      </p>
      <div className='grid grid-cols-2 place-items-center  px-28 sm:grid-cols-2 sm:px-0 md:grid-cols-4 lg:grid-cols-5 gap-2 py-10 '  >

        {currentCharacters.map(character => (

          <a
            href={character.sourceUrl}
            className='w-48 border-[1.5px] border-purple-700 rounded-lg overflow-hidden shadow-md bg-white hover:translate-x-1 hover:translate-y-1 transform duration-200'  
            key={character._id}
          
          >

            <img
              src={character.imageUrl}
              onError={(e) => e.target.src = 'https://via.placeholder.com/300x200'}
              className="w-48 h-40 object-fill"
            />

            <div className='text-sm  p-3 bg-[#220d22] '>
              <p><span className='text-purple-700 font-semibold text-[10px]'>Name:</span> <span className='text-[11px] semi-bold text-white'>{character.name}</span></p>
              <p> <span className='text-purple-700 font-semibold text-[10px]'>Created: </span><span className='text-[10px] text-white'>{character.createdAt.substring(0,10)}</span></p>
              <p><span className='text-purple-700 font-semibold text-[10px]'>Show: </span><span className='text-[9px] text-justify px-1 text-white'>{character.tvShows}</span></p>
            </div>

          </a>
        ))}
      </div>
      <div className='pt-3 bg-[#220d22] border-[1px]  border-purple-700  w-full p-3'>
        <ReactPaginate
          className='grid grid-flow-col place-content-center gap-5 text-white '
          previousLabel="PREV"
          nextLabel="NEXT"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active text-purple-900  w-4 border-black "
        />
      </div>

    </div>
  );
};

export default Fetching;
