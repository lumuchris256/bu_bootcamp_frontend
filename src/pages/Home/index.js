import React from 'react';
import { HomeContainer, HomeWidgets } from './HomeStyles';
import SmallWidget from '../../components/Widgets/SmallWidget';
import LargeWidget from '../../components/Widgets/LargeWidget';
import Analytics from '../../components/Widgets/Analytics';
export const Home = () => {
    return (
        <HomeContainer>
            <Analytics />
            <HomeWidgets>
                <SmallWidget />
                <LargeWidget />
            </HomeWidgets>
        </HomeContainer>
    )
}
