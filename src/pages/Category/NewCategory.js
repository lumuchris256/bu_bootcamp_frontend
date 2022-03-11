import React, { useState } from 'react';
import { TheList } from "../../styles/styled-elements";
import axios from 'axios';
import {
    NewCategoryContainer, NewCategoryButton,
    NewCategoryForm, NewCategoryItem,
    NewCategoryLeft, Preview, ImageContainer
} from './CategoryStyles';
import { useHistory } from 'react-router-dom';


const initialValues = {
    categoryName: '',
    description: '',
    image: null
}


const NewCategory = () => {
    let history = useHistory();
    const [data, setData] = useState(initialValues);
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
            let res = await axios.post(`http://localhost:8080/api/v1/category/create`, formData, {
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
                history.push('/categories');
            }
        }
    }

    return (
        <TheList>
            <NewCategoryContainer>
                <NewCategoryLeft>
                    <h1>New Category</h1>
                    <NewCategoryForm>
                        <NewCategoryItem>
                            <label>Image</label>
                            <input
                                type="file"
                                id="file"
                                accept="image/*"
                                onChange={imageChange}
                            />
                        </NewCategoryItem>
                        <NewCategoryItem>
                            <label>Category Name</label>
                            <input
                                type="text"
                                placeholder="Name of Category"
                                name='categoryName'
                                onChange={handleInputChange}
                            />
                        </NewCategoryItem>
                        <NewCategoryItem>
                            <label>Description</label>
                            <input
                                type="text"
                                placeholder="description"
                                name='description'
                                onChange={handleInputChange}
                            />
                        </NewCategoryItem>
                        <NewCategoryButton onClick={handleSubmit}>Create Category</NewCategoryButton>
                    </NewCategoryForm>
                </NewCategoryLeft>
                <ImageContainer>
                    {selectedImage && (
                        <Preview>
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="preview"
                            />
                            <button onClick={removeSelectedImage}>
                                Remove This Image
                            </button>
                        </Preview>
                    )}
                </ImageContainer>
            </NewCategoryContainer>
        </TheList>
    )
}
export default NewCategory
