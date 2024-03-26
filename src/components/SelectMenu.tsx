import { MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import getMassageshops from "@/libs/getMassageshops";
import { MassageshopItem } from "../../interface";

export default function SelectMenu() {
  const [shops, setShops] = useState<MassageshopItem[]>([]);

  useEffect(() => {
    async function fetchShops() {
      try {
        const shops = await getMassageshops();
        setShops(shops.data);
      } catch (error) {
        console.error("Error fetching massage shops:", error);
      }
    }

    fetchShops();
  }, []);

  return (
    <>
      {shops.map((shop: MassageshopItem) => (
        <MenuItem key={shop._id} value={shop._id}>
          {shop.name}
        </MenuItem>
      ))}
    </>
  );
}