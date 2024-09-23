import React, { useState } from 'react';
import axios from 'axios';




const Hero = () => {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = 'https://api.disneyapi.dev/character';

  // Handle search input change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle search and API call
  const handleSearch = async () => {
    if (!search) {
      alert('Please enter a search term');
      return;
    }

    setLoading(true);
    setError(null);

    // fetching the data that is to be disyed when  searching
    try {
      const response = await axios.get(`${apiUrl}?name=${search}`);
      setCharacters(response.data.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const Count = characters && characters.length;

  return (
    <>
      <section className='relative h-[50vh] bg-hero'>
       


        <div className='text-center py-8 space-y-4 relative text-black '>
          <h2 className='text-6xl text-white '>
            Explore your Favourite 
          </h2> 
          <p  className='text-3xl text-white' >Disney Characters.</p>  

          <div className='flex items-center justify-center'>
            <input
              className='p-3 w-96'
              type="text"
              value={search}
              onChange={handleChange}
              placeholder='Search here'
            />
            <button
              className='p-3 bg-blue-500 text-white'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {loading && <p className='text-glitch'>Searching...</p>}
          {error && <p>{error}</p>}

          {Count > 0 && (
            <ul className="grid grid-cols-2 relative z-30 w-full h-[500px] bg-white  place-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 py-10">
              {characters.map((character) => (
                <li key={character._id} className="border-black p-4 ">
                  <img
                    src={character.imageUrl}
                    alt={character.name}
                    className="w-40 h-40 rounded-3xl  hover:translate-x-1 translate-y-1  duration-300"
                  />
                  <h2 className="text-lg  ">{character.name}</h2>
                  <a
                    href={character.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-blue-500 hover:underline  text-sm'
                  >
                    Read more
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
