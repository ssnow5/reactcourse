import React from "react";
// import { useSelector } from 'react-redux';
import { ProductsContext } from "../context/products-context";
// import { useContext } from "react";
import { useStore } from "../hooks-store/store";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  const state = useStore()[0];
  console.log(state);
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );

  // const favoriteProducts = useContext(ProductsContext).products.filter(
  //   (p) => p.isFavorite
  // );

  const favoriteProducts = state.products.filter((p) => {
    // console.log(p);
    return p.isFavorite;
  });

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
