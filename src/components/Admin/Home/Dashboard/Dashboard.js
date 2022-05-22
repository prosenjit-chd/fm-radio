import React, { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaUserTie, FaBars } from 'react-icons/fa';
import {
    BsStarFill, BsCreditCard2BackFill, BsFillHouseFill,
    BsFillCartFill, BsFillInboxesFill, BsFillGearFill
} from "react-icons/bs";
import { BsPower } from 'react-icons/bs';
import useAuth from '../../../../hooks/useAuth';

const Dashboard = () => {
    const { logout } = useAuth()
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const admin = 1;
    const activeStyle = {
        fontWeight: "bold",
        color: "#A48484",
    }

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className={`app d-flex ${toggled ? 'toggled' : ''}`}>
            <ProSidebar
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
                style={{ height: '102vh' }}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {/* <img src={user.photoURL || blankImg} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                        <span style={{ fontSize: 18, fontFamily: 'sans-serif' }}> {user?.displayName?.split(' ')[0]}</span> */}
                        Name
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">


                        {!admin ?
                            (
                                <>
                                    {/* <MenuItem icon={<BsFillCartFill />}> <NavLink activeStyle={activeStyle} to={`${url}/my-orders`}>My Orders</NavLink></MenuItem>
                                    <MenuItem icon={<BsCreditCard2BackFill />}> <NavLink activeStyle={activeStyle} to={`${url}/payment`}>Payment</NavLink></MenuItem>
                                    <MenuItem icon={<BsStarFill />}> <NavLink activeStyle={activeStyle} to={`${url}/add-review`}>Add Review</NavLink></MenuItem> */}
                                </>
                            ) : (
                                <>
                                    <MenuItem icon={<BsFillHouseFill />}> <NavLink activeStyle={activeStyle} to={'/adminhome'}>Home</NavLink></MenuItem>
                                    <MenuItem icon={<BsFillCartFill />}> <Link activeStyle={activeStyle} to={`/projects`}>Manage Projects</Link></MenuItem>
                                    <MenuItem icon={<FaUserTie />}> <Link activeStyle={activeStyle} to={`/addprojects`}>Add Projects</Link></MenuItem>
                                    <MenuItem icon={<FaUserTie />}> <Link activeStyle={activeStyle} to={`/radio`}>Radio</Link></MenuItem>
                                </>
                            )
                        }

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '40px 24px',
                        }}
                    >
                        <Button variant="danger"
                            onClick={logout}
                        ><BsPower /> Logout</Button>
                    </div>
                </SidebarFooter>
            </ProSidebar>


            {/* main */}
            <main style={{ width: '100%' }}>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <div className="d-lg-none" onClick={() => handleToggleSidebar(!toggled)}>
                                <FaBars className="mb-1 me-2" /> <span> Dashboard</span>
                            </div>
                            <div className="d-none d-lg-block" onClick={() => handleCollapsedChange(!collapsed)}>
                                <FaBars className="mb-1 me-2" /> <span> Dashboard</span>
                            </div>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <section className="p-4" style={{ minHeight: '90vh' }}>
                    <Outlet></Outlet>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;