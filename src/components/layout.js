import React from 'react';
import Header from './layout/header';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}