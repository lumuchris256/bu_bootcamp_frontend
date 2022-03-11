import React, { useState } from 'react';
import { Visibility } from '@material-ui/icons';
import {
    SmWidgetButton, SmWidgetContainer,
    SmWidgetImg, SmWidgetList, SmWidgetTitle,
    SmWidgetUser
} from './SmallWidgetStyles';

const SmallWidget = () => {
    const [authorsData, setAuthorsData] = useState(null);
    return (
        <SmWidgetContainer>
            <SmWidgetTitle>New Authors</SmWidgetTitle>
            <SmWidgetList>
                {authorsData && authorsData.map(author => (
                    <li key={author.id} className="SmWidgetListItem">
                        <SmWidgetImg src={author.avatar} alt={author.authorName} />
                        <SmWidgetUser>
                            <span className="SmWidgetUsername">{author.authorName}</span>
                            <span className="SmWidgetUserTitle">{author.location}</span>
                        </SmWidgetUser>
                        <SmWidgetButton>
                            <Visibility className="SmWidgetIcon" />
                            Display
                        </SmWidgetButton>
                    </li>
                ))}
            </SmWidgetList>
        </SmWidgetContainer>
    )
}

export default SmallWidget;
