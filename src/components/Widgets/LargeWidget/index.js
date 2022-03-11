import React, { useState } from 'react';
import {
    LgWidgetButton, LgWidgetContainer,
    LgWidgetImg, LgWidgetTable, LgWidgetTh, LgWidgetTitle,
    LgWidgetUser, LightTd
} from './LargeWidgetStyles';

const LargeWidget = () => {
    const [latestArticles, setLatestArticles] = useState(null);
    return (
        <LgWidgetContainer>
            <LgWidgetTitle>Latest Articles</LgWidgetTitle>
            <LgWidgetTable>
                <tr>
                    <LgWidgetTh>Title</LgWidgetTh>
                    <LgWidgetTh>Body</LgWidgetTh>
                    <LgWidgetTh>Category</LgWidgetTh>
                    <LgWidgetTh>Author</LgWidgetTh>
                </tr>
                {
                    latestArticles && Object.keys(latestArticles).map(item => (
                        <tr key={item.id}>
                            <LgWidgetUser>
                                <LgWidgetImg src={item.avatar} alt={item.username} />
                                <span>{item.username}</span>
                            </LgWidgetUser>
                            <LightTd>{item.date}</LightTd>
                            <LightTd>{item.transaction}</LightTd>
                            <td>
                                <LgWidgetButton bgColor={item.bgColor} fdColor={item.fdColor} >{item.type}</LgWidgetButton>
                            </td>
                        </tr>
                    ))
                }
            </LgWidgetTable>
        </LgWidgetContainer>
    )
}

export default LargeWidget;
