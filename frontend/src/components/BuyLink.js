import React from "react";
import { ToBuy } from "../styles/styles_Welcome";
export const BuyLink = props => {
  const { sales } = props;

  return (
    <ToBuy
      href={sales === undefined ? "Not available in store" : `${sales.buyLink}`}
    >
      <span role="img" aria-labelledby="shopping cart">
        🛒
      </span>
    </ToBuy>
  );
};
