import styled from 'styled-components'

export const LgWidgetContainer = styled.div`
    flex: 2;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`
export const LgWidgetTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`
export const LgWidgetButton = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color:${props => props.bgColor || "#ebf1fe"};
    color:${props => props.fdColor || "#2a7ade"};
`
export const LgWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`
export const LgWidgetTh = styled.th`
    text-align: left;
`
export const LgWidgetUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`
export const LgWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
export const LightTd = styled.td`
    font-weight: 300;
`
