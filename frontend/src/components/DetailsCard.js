import React from "react";
import jungle from "../assets/images/jungle.jpg";

import { BuyLink } from "./BuyLink";
import {
  Container,
  PriceContainer,
  Image,
  DescriptionContainer,
  Title,
  Authors,
  Label,
  Text
} from "../styles/styles_DetailsCard";

export const DetailsCard = ({
  image,
  title,
  authors,
  categories,
  description,
  published,
  price,
  cart,
  publisher,
  pages
}) => {
  return (
    <Container>
      <Image src={image === undefined ? jungle : `${image.thumbnail}`} />
      <DescriptionContainer>
        <Title>{title === undefined ? null : title}</Title>
        <Authors>
          by {authors ? authors.join(", ") : "Authors: not provided"}
        </Authors>
        <p>
          {publisher}, {pages} pages
        </p>
        <p>{categories ? categories : "Categories: not provided"}</p>
        <Label>Description:</Label>
        <Text>{description}</Text>
        <Label>Published:</Label>
        <Text>{published ? published : "Not provided"}</Text>
      </DescriptionContainer>
      <PriceContainer>
        <p>
          {price === undefined ? "Price is not available" : `${price.amount}`}{" "}
          {price === undefined ? null : `${price.currencyCode}`}
        </p>
        {cart.buyLink && <BuyLink sales={cart}></BuyLink>}
      </PriceContainer>
    </Container>
  );
};
