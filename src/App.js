import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import VisiblePostList from './containers/VisiblePostList';
import { fetchPosts, searchPosts} from './redux/actions';
import { useDispatch } from 'react-redux';
import './App.css';

function App()
{
  const dispatch = useDispatch();

  React.useEffect(() =>
  {
    dispatch(fetchPosts()); // Fetch posts when the app loads
  }, [ dispatch ]);

  const handleSearch = (searchTerm) =>
  {
    dispatch(searchPosts(searchTerm));
  }

  const handleCategoryChange = (category) =>
  {
    dispatch(fetchPosts(category));
  };

  return (
    <div className="App">
      <Header />
      <div className="filters-container">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter onCategoryChange={handleCategoryChange} />
      </div>
      <div className='postList'>
        <VisiblePostList />
      </div>
    </div>
  );
}

export default App;
