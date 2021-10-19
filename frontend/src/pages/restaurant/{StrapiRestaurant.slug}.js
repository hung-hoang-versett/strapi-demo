import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Markdown from "react-markdown";

export const query = graphql`
  query RestaurantQuery($slug: String!) {
    strapiRestaurant(slug: { eq: $slug }) {
      strapiId
      name
      description
    }
  }
`;

const Restaurant = ({ data }) => {
  const restaurant = data.strapiRestaurant;
  const seo = {
    metaTitle: restaurant.name,
    metaDescription: restaurant.description,
    shareImage: restaurant.image,
  };

  return (
    <Layout seo={seo}>
      <div>
        <div style={{ display: "grid" }}>
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            <h1 style={{ color: `white` }}>{restaurant.name}</h1>
          </div>
        </div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <Markdown source={restaurant.description} escapeHtml={false} />

            <hr className="uk-divider-small" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Restaurant;
