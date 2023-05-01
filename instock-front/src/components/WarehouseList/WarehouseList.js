import "./WarehouseList.scss";

import WarehouseListHeader from "./WarehouseListHeader/WarehouseListHeader";
import WarehouseSorter from "./WarehouseSorter/WarehouseSorter";
import WarehouseListItem from "./WarehouseListItem/WarehouseListItem";


import { useState, useEffect } from "react";

import axios from "axios";

export default function WarehouseList() {

    const [warehouseData, setWarehouseData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/warehouses")
            .then((response) => {
                setWarehouseData(response.data);
            })
            .catch((error) => {
                return <h2>{error.message}</h2>;
            })
    }, []);


    return (
        <>
            <WarehouseListHeader />
            <WarehouseSorter />
            {warehouseData.map((warehouse, index) => (
                < WarehouseListItem key={warehouse.id} warehouse={warehouse} mapIndex={index} />
            ))
            }
        </>

    )
}