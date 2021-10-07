import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Bug - Ecommerce</title>
            </Head>

            <AppBar position="static" className={styles.navbar}>
                <Toolbar>
                    <Typography>
                        BUG
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={styles.Main}>
                {children}
            </Container>
            <footer className={styles.footer}>
                All rights reserved by BUG
            </footer>
        </div>
    );
};

export default Layout;