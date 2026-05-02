import React from "react";

const Header = (props) => {
  const callSearch = (e) => 
    props.onSearch(e.target.value);
  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <div className="search">
          <img
            src="magnifying-glass-solid-full.svg"
            alt="search icon"
            className="search-icon visually-hidden"
          />
          <label className="visually-hidden" form="search">
            Search notes
          </label>
          <input
            className="search search-field"
            type="text"
            id="search"
            placeholder="Type here to search..."
            value={props.searchText}
            onChange={callSearch}
          />
        </div>
      </aside>
    </header>
  );
};

export default Header;
