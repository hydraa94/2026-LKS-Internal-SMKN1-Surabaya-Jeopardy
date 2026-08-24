export default function Internal() {
    return (
        <main style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            background: '#0a0a0a',
            color: '#ededed',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ padding: '3rem', border: '1px solid #330000', borderRadius: '1rem', background: '#110000', textAlign: 'center' }}>
                <h1 style={{ color: '#ff4444', fontSize: '2.5rem', marginBottom: '1rem' }}>Restricted Area</h1>
                <p style={{ fontSize: '1.2rem', color: '#888' }}>Administrative access is required to view this component.</p>
                <div style={{ margin: '2rem 0', padding: '1rem', background: '#220000', borderRadius: '0.5rem', color: '#ff8888', fontStyle: 'italic' }}>
                    "Unauthorized access attempts are logged and reported."
                </div>
                <a href="/" style={{ color: '#0070f3' }}>Return to Safety</a>
            </div>
        </main>
    );
}
