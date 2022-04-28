import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = ({ title, description, children }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      <link rel="canonical" href="http://mysite.com/example" />
      {description && <meta name="description" content={description} />}
      {children}
    </Helmet>
  );
};

export default ReactHelmet;
