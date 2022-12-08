import { useEffect, useState } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export function useBackendData() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/products/getAllProducts");
        const data = await res.json();
        setBackendData(data);
      }
      catch (err) {
        console.log('COULD NOT FETCH BCZ', err.message);
      }
    })();
  }, []);

  return backendData;
}
