import React, { useState, useEffect } from 'react';

import {
    TheList, ListItem, ListImage, EditButton,
    MyDeleteOutline,
    ItemTitleContainer,
    ItemAddButton
} from "../../styles/styled-elements";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import services from '../../services';
import axios from 'axios';

const CategoryList = () => {
    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false)
    const getCategoryData = async () => {
        let data = await services.getCategoryData();
        if (data.data.success) {
            setData(data.data.data);
            setLoaded(true)
        }
    }
    useEffect(() => { getCategoryData() }, []);

    const handleDelete = async (id) => {
        let res = await axios.delete(`http://localhost:8080/api/v1/category/${id}`);
        if (res.data.success) {
            getCategoryData();
        }
        //setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 100
        },
        {
            field: "categoryName",
            headerName: "Category",
            width: 200
        },
        {
            field: "description",
            headerName: "Description",
            width: 200
        },
        {
            field: "image",
            headerName: "Image",
            width: 200,
            renderCell: (params) => {
                return (
                    <ListItem>
                        <ListImage src={`data: png/jpg;base64,${params.row.image}`} lt="image" />
                        {params.row.categoryName}
                    </ListItem>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/category/" + params.row.id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <MyDeleteOutline
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return <>
        {
            !loaded ? <div>Still loading...</div> :
                (
                    <TheList>
                        <ItemTitleContainer>
                            <h1>Category List</h1>
                            <Link to="/newcategory">
                                <ItemAddButton>Add New</ItemAddButton>
                            </Link>
                        </ItemTitleContainer>
                        <div style={{ height: 20 }}></div>
                        <DataGrid
                            rows={data}
                            disableSelectionOnClick
                            columns={columns}
                            pageSize={8}
                            checkboxSelection
                        />
                    </TheList>
                )
        }
    </>
}

export default CategoryList
