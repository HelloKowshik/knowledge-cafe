import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-2'>
      <h2 className='text-3xl text-center'>{`Total Reading time: ${readingTime} min`}</h2>
      <h2 className='text-3xl text-center'>Bookmarks: {bookmarks.length}</h2>
      <hr />
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
