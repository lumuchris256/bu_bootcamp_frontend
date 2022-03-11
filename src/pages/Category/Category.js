import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import {
    ItemContainer, ItemTitleContainer, ItemAddButton,
    ItemShowImg, ItemUploadImg, ItemUpdateButton, ItemUpload
} from "../../styles/styled-elements";
import {
    CategoryBottomContainer, CategoryForm, CategoryTopContainer,
    FormLeft,
    ImageContainer,
    Preview
} from './CategoryStyles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Category = () => {
    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setData({ ...data, image: e.target.files });
            setSelectedImage(e.target.files[0]);
        }
    };
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    const params = useParams();
    const getSelectedCategory = async () => {
        if (params.categoryid) {
            let res = await axios.get(`http://localhost:8080/api/v1/category/${params.categoryid}`);
            setData(res.data.data);
            setLoaded(true);
        }
    }
    useEffect(() => { getSelectedCategory() }, []);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data) {
            let formData = new FormData();
            if (data.image) {
                formData.append("file", data.image[0]);
            }
            formData.append("categoryName", data.categoryName);
            formData.append("description", data.description);
            let res = await axios.put(`http://localhost:8080/api/v1/category/${params.categoryid}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            if (res.data.success) {
                Array.from(document.querySelectorAll("input")).forEach(
                    input => (input.value = "")
                );
                setData({});
                removeSelectedImage();
            }
        }
    }

    return (
        <>
            {!loaded ? <div>loading...</div>
                : <ItemContainer>
                    <ItemTitleContainer>
                        <h1>Edit Category</h1>
                        <Link to="/newcategory">
                            <ItemAddButton>Add New</ItemAddButton>
                        </Link>
                    </ItemTitleContainer>
                    <CategoryTopContainer>
                    </CategoryTopContainer>
                    <CategoryBottomContainer>
                        <CategoryForm>
                            <FormLeft>
                                <label>Category Name</label>
                                <input
                                    type="text"
                                    placeholder="Name of Category"
                                    name='categoryName'
                                    value={data.categoryName}
                                    onChange={handleInputChange}
                                />

                                <label>Description</label>
                                <input
                                    type="text"
                                    placeholder="Description"
                                    name='description'
                                    value={data.description}
                                    onChange={handleInputChange}
                                />

                                <ItemUpload>
                                    <ItemUploadImg src={selectedImage
                                        ? URL.createObjectURL(selectedImage) :
                                        `data: png/jpg;base64,${data.image}`}
                                        alt="upload-img" />
                                    <label for="file">
                                        <Publish />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} onChange={imageChange} />
                                </ItemUpload>
                                <ItemUpdateButton onClick={handleSubmit}>Update</ItemUpdateButton>
                            </FormLeft>
                        </CategoryForm>
                    </CategoryBottomContainer>
                </ItemContainer>
            }

        </>
    )
}
export default Category
