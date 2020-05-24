import React from 'react';
import Header from './layout/header';
import Footer from "./layout/footer";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}