import styled from 'styled-components';

export const CategoryTopContainer = styled.div`
display: flex;
`
export const TopLeftContainer = styled.div`
flex: 1;
`
export const TopRightContainer = styled(TopLeftContainer)`
padding: 20px;
margin: 20px;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export const InfoTopContainer = styled.div`
display: flex;
align-items: center;
.categoryName {
    font-weight: 600;
}
`
export const InfoBottomContainer = styled.div`
margin-top: 10px;
`
export const InfoItemContainer = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
.categoryInfoValue {
    font-weight: 300;
}
`
export const CategoryBottomContainer = styled.div`
padding: 20px;
margin: 20px;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export const CategoryForm = styled.form`
display: flex;
justify-content: space-between;
`
export const FormLeft = styled.div`
display: flex;
flex-direction: column;
label {
    margin-bottom: 10px;
    color: gray;
}
input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
}
select{
    margin-bottom: 10px;
}
`
export const FormRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
export const NewCategoryContainer = styled.div`
    display: flex;
`
export const NewCategoryLeft = styled.div`
    flex: 1;
`
export const ImageContainer = styled.div`
    flex: 3;
`
export const NewCategoryForm = styled.form`
    margin-top: 10px;
`
export const NewCategoryItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    label {
        color: gray;
        font-weight: 600;
        margin-bottom: 10px;
    }
    input, select {
        padding: 10px;
    }
`
export const NewCategoryButton = styled.button`
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: #1876F2;
    color: white;
    font-weight: 600;
    cursor: pointer;
`
export const Preview = styled.div`
    margin-top: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    img{
        max-width: 100%;
        max-height: 320px;
        object-fit: cover;
    }
    button{
        cursor: pointer;
        padding: 15px;
        background-color:red;
        color: white;
        border: none;
        font-weight: 600;
    }
`
