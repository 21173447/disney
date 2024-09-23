import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { HiArrowSmRight } from "react-icons/hi";
import Spinner from './Spinner';

const Fetching = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

 
  const itemsPerPage = 10;
  const apiUrl = "http://api.disneyapi.dev/character?page=2&pageSize=149";

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

  const pageCount = Math.ceil(characters.length  / itemsPerPage);
  const currentCharacters = characters.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className=''>
      <p className='text-center text-3xl text-gray-500 pt-2'>
        Character information
        <div className=' flex justify-center pt-5'>
          <hr class=" border-[3px]  w-32 flex  border-gray-500 " />
        </div>
      </p>
      <ul className='grid grid-cols-2 place-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 py-10'>

        {currentCharacters.map(character => (

          <li className='border w-48 rounded-lg overflow-hidden shadow-md bg-white hover:translate-x-1 hover:translate-y-1 transform  duration-200 ' key={character._id}>
            <img src={character.imageUrl} className="w-48 h-40 " />
            <div className='text-sm  p-1 '>
              <p><span className='text-gray-400 font-semibold text-[10px]'>Name:</span> <span className='text-[13px] '>{character.name}</span></p>
              <p> <span className='text-gray-400 font-semibold text-[10px]'>Created: </span><span className='text-[10px]'>{character.createdAt}</span></p>
              <p> <span className='text-gray-400 font-semibold text-[10px]'>Updated: </span><span className='text-[10px]'>{character.updatedAt}</span></p>
              <p><span className='text-gray-400 font-semibold text-[10px]'>Show: </span><span className='text-[13px]'>{character.tvShows}</span></p>
            </div>
            <div className='p-1'>
              <a
                href={character.sourceUrl}
                target="_blank"
                className='text-blue-500 hover:underline text-sm text-center '
              >
                <div class="flex items-center">
                  Read more <HiArrowSmRight className='mt-1 ml-1' />
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className='pt-3 bg-white border-[1px] w-full p-3'>
        <ReactPaginate
          className='grid grid-flow-col place-content-center gap-5 text-gray-400 '
          previousLabel="PREV"
          nextLabel="NEXT"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active text-blue-900  w-4 border-black "
        />
      </div>

    </div>
  );
};

export default Fetching;
