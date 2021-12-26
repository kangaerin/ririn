import './TopNav.css';

function TopNav({ changePageName }) {
  return (
    <ul className="top-nav">
      <li>
        <a onClick={() => changePageName('about')}>About</a>
      </li>
      <li>
        <a onClick={() => changePageName('counter')}>counter</a>
      </li>
      <li>
        <a onClick={() => changePageName('lotto')}>Lotto</a>
      </li>
      <li>
        <a onClick={() => changePageName('playlist')}>playlist</a>
      </li>
    </ul>
  );
}

export default TopNav;
