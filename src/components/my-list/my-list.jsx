import React from "react";
import Logo from "../logo/logo.jsx";
import PageTitleMyList from "../page-title-my-list/page-title-my-list.jsx";
import UserBlock from "../user-block/user-block.jsx";
import Copyright from "../copyright/copyright.jsx";
import CatalogMyListFilms from "../catalog-my-list-films/catalog-my-list-films.jsx";
import PropTypes from "prop-types";


const MyList = (props) => {
  const {updateData} = props;

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <PageTitleMyList/>
          <UserBlock/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            <CatalogMyListFilms updateData={updateData}/>
          </div>
        </section>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
};

MyList.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default MyList;

