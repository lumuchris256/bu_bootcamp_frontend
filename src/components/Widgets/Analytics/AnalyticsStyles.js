import styled from 'styled-components';


export const AnalyticsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const AnalyticsItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export const AnalyticsTitle = styled.span`
    font-size: 20px;
`
export const AnalyticsCounterContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    .AnalyticsCount{
        font-size: 30px;
        font-weight: 600;
    }
`
export const AnalyticsSub = styled.span`
    font-size: 15px;
    color: gray;
`
