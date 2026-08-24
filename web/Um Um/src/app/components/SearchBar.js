"use client"
import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            alert(`Searching for "${query}"... zero results. Please try another term or try searching using React Server Components.`);
        }
    };

    return (
        <div style={{ width: '100%', position: 'relative' }}>
            <form onSubmit={handleSearch} style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                background: 'transparent',
                border: '1px solid #5f6368',
                borderRadius: '24px',
                padding: '0 14px',
                minHeight: '44px',
                boxSizing: 'border-box'
            }}>
                {/* Search Icon (SVG magnifier) */}
                <div style={{
                    marginRight: '13px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <svg style={{ height: '20px', width: '20px', fill: '#9aa0a6' }} focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </div>

                {/* Input */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        padding: '10px 0',
                        color: '#e8eaed',
                        fontSize: '16px',
                        outline: 'none'
                    }}
                />

                {/* Voice Search (Mockup) */}
                <div style={{ marginLeft: '13px', display: 'flex', gap: '15px' }}>
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%234285f4' d='m12 14c1.66 0 3-1.34 3-3v-4c0-1.66-1.34-3-3-3s-3 1.34-3 3v4c0 1.66 1.34 3 3 3z'/%3E%3Cpath fill='%2334a853' d='m11 18.08v2.92h2v-2.92c3.38-.49 6-3.38 6-6.88h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4h-2c0 3.5 2.62 6.39 6 6.88z'/%3E%3C/svg%3E"
                        style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                        alt="voice search"
                    />
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23fbcf0d' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E"
                        style={{ width: '20px', height: '20px', cursor: 'pointer', alignSelf: 'center' }}
                        alt="info"
                    />
                </div>
            </form>
        </div>
    );
}
