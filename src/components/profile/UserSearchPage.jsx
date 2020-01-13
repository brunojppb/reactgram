import React from 'react';

export const UserSearchPage = () => {

  return(
    <div className="user-search-container">
      <h1>Buscar</h1>
      <div className="search-container">
        <form>
          <input type="text" placeholder="Busque seus amigos aqui..."/>
        </form>
      </div>
    </div>
  );

};