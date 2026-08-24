import SearchBar from './components/SearchBar';

export default function Home() {
    return (
        <main style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            background: '#202124', // Standard Google-like dark background
            color: '#e8eaed',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 20px'
        }}>
            {/* Top Navbar */}
            <nav style={{
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '20px',
                display: 'flex',
                gap: '20px',
                fontSize: '14px'
            }}>
                <a href="#" style={{ color: '#e8eaed', textDecoration: 'none', opacity: 0.8 }}>Gmail</a>
                <a href="#" style={{ color: '#e8eaed', textDecoration: 'none', opacity: 0.8 }}>Images</a>
                <div style={{ background: '#303134', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '18px' }}>👤</span>
                </div>
            </nav>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '584px' }}>
                {/* Title / Logo */}
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{
                        fontSize: '92px',
                        fontWeight: 'bold',
                        margin: 0,
                        letterSpacing: '-5px',
                        color: '#4285F4', // Blue link color as logo base
                        userSelect: 'none'
                    }}>
                        <span style={{ color: '#4285F4' }}>U</span>
                        <span style={{ color: '#EA4335' }}>m</span>
                        <span style={{ color: '#FBBC05' }}>U</span>
                        <span style={{ color: '#4285F4' }}>m</span>
                        <span style={{ color: '#34A853' }}>S</span>
                        <span style={{ color: '#EA4335' }}>R</span>
                        <span style={{ color: '#FBBC05' }}>C</span>
                    </h1>
                </div>

                {/* Search Bar */}
                <SearchBar />

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                    <button style={{
                        background: '#303134',
                        color: '#e8eaed',
                        border: '1px solid transparent',
                        padding: '10px 16px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}>UmUm Search</button>
                    <button style={{
                        background: '#303134',
                        color: '#e8eaed',
                        border: '1px solid transparent',
                        padding: '10px 16px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}>I'm Feeling Lucky</button>
                </div>

                {/* Languages or Info */}
                <div style={{ marginTop: '30px', fontSize: '13px', color: '#bdc1c6' }}>
                    UmUm offered in:
                    <a href="#" style={{ color: '#8ab4f8', textDecoration: 'none', marginLeft: '10px' }}>English</a>
                    <a href="#" style={{ color: '#8ab4f8', textDecoration: 'none', marginLeft: '10px' }}>Jawa</a>
                    <a href="#" style={{ color: '#8ab4f8', textDecoration: 'none', marginLeft: '10px' }}>Indonesian</a>
                </div>
            </div>

            {/* Footer */}
            <footer style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: '#171717',
                color: '#969ba1',
                fontSize: '14px'
            }}>
                <div style={{ padding: '15px 30px', borderBottom: '1px solid #3c4043' }}>Indonesia</div>
                <div style={{ padding: '15px 30px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '27px' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Advertising</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Business</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>How Search works</a>
                    </div>
                    <div style={{ display: 'flex', gap: '27px' }}>
                        <a href="/internal" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Settings</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
