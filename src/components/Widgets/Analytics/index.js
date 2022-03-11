import React, { useEffect, useState } from 'react';
import services from '../../../services';
import {
    AnalyticsContainer, AnalyticsItem, AnalyticsCounterContainer,
    AnalyticsTitle
} from './AnalyticsStyles';

const Analytics = () => {
    const [featuredData, setFeaturedData] = useState();
    const [loaded, setLoaded] = useState(false)
    const getCategoryData = async () => {
        let data = await services.getCategoryData();
        if (data.data.success) {
            setFeaturedData(data.data.data);
            setLoaded(true)
        }
    }
    useEffect(() => { getCategoryData() }, []);
    return (<>
        {
            !loaded ? <div>Still loading...</div> :
                <AnalyticsContainer>
                    {featuredData && featuredData.map((item, index) => {
                        console.log(item)
                        return (
                            <AnalyticsItem key={index}>
                                <AnalyticsTitle>{item.categoryName}</AnalyticsTitle>
                                <AnalyticsCounterContainer>
                                    <span className="analyticsCount">5550</span>
                                </AnalyticsCounterContainer>
                            </AnalyticsItem>
                        );
                    })
                    }

                </AnalyticsContainer>
        }
    </>
    )
}
export default Analytics;