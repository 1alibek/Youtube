import React from "react";
import Card from "../card";

import  Product  from "../../../../utils";

const Products = () => {
  return (
    <div>
     
      <div className="grid grid-cols-3 gap-2">
        {Product.map((value) => {
          return <Card data={value} />;
        })}
      </div>
    </div>
  );
};

export default Products;
