export default async function FeatureList() {
    const items = [
        { title: 'Server Components', description: 'Zero-bundle rendering on the server.', status: 'Active' },
        { title: 'Streaming', description: 'Incremental page updates for better performance.', status: 'Ready' },
        { title: 'Data Fetching', description: 'Async/await based data management.', status: 'Standby' },
        { title: 'Middleware', description: 'Custom server-side logic for authentication.', status: 'Active' },
    ];

    return (
        <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column' }}>
            {items.map((item, idx) => (
                <div key={idx} style={{
                    background: '#111',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #222',
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h3 style={{ margin: '0 0 0.5rem', color: '#0070f3' }}>{item.title}</h3>
                        <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>{item.description}</p>
                    </div>
                    <div style={{
                        color: item.status === 'Active' ? '#44ff44' : '#ff4444',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.2rem',
                        background: item.status === 'Active' ? '#001a00' : '#1a0000',
                        border: item.status === 'Active' ? '1px solid #003300' : '1px solid #330000'
                    }}>{item.status}</div>
                </div>
            ))}
        </div>
    );
}
