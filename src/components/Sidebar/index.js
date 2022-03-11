import React from 'react';
import { Link } from "react-router-dom";
import {
    SidebarContainer, SidebarWrapper, SidebarMenu,
    SidebarTitle, SidebarList, SidebarListItem, MyLineStyle,
    MyAssessment, MyPermIdentity, MyStorefront
} from './SidebarStyles';

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>SideMenu</SidebarTitle>
                    <SidebarList>
                        <Link to="/" className="link">
                            <SidebarListItem>
                                <MyLineStyle />
                                Dashboard
                            </SidebarListItem>
                        </Link>
                        <Link to="/categories" className="link">
                            <SidebarListItem>
                                <MyStorefront />
                                Categories
                            </SidebarListItem>
                        </Link>
                        <Link to="#" className="link">
                            <SidebarListItem>
                                <MyAssessment />
                                Articles
                            </SidebarListItem>
                        </Link>
                        <Link to="#" className="link">
                            <SidebarListItem>
                                <MyPermIdentity />
                                Authors
                            </SidebarListItem>
                        </Link>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}