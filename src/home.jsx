import React, { useState } from 'react';

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        padding: '2rem',
        textAlign: 'center',
    },
    titleCard: {
        backgroundColor: '#1e293b',
        padding: '4rem 2rem',
        borderRadius: '16px',
        border: '1px solid #334155',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    },
    header: {
        fontSize: '3.5rem',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem',
        marginTop: 0,
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#94a3b8',
        marginBottom: '2.5rem',
        lineHeight: '1.6',
    },
    buttonContainer: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    primaryBtn: {
        padding: '0.875rem 2rem',
        fontSize: '1.125rem',
        fontWeight: '600',
        color: '#ffffff',
        backgroundColor: '#3b82f6',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
    },
    primaryBtnHover: {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(59, 130, 246, 0.45)',
    },
    secondaryBtn: {
        padding: '0.875rem 2rem',
        fontSize: '1.125rem',
        fontWeight: '600',
        color: '#f8fafc',
        backgroundColor: 'transparent',
        border: '1px solid #475569',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '4rem',
        width: '100%',
    },
    featureCard: {
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #334155',
    },
    featureTitle: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: '#e2e8f0',
    },
    featureDesc: {
        color: '#94a3b8',
        fontSize: '0.95rem',
    }
};

export default function Home() {
    const [hoverPrimary, setHoverPrimary] = useState(false);
    const [hoverSecondary, setHoverSecondary] = useState(false);

    return (
        <div style={styles.container}>
            <div style={styles.titleCard}>
                <h1 style={styles.header}>Welcome to the App</h1>
                <p style={styles.subtitle}>
                    Discover a beautifully crafted interface that feels both powerful and elegant.
                    Ready to kickstart your next great idea.
                </p>

                <div style={styles.buttonContainer}>
                    <button
                        style={{
                            ...styles.primaryBtn,
                            ...(hoverPrimary ? styles.primaryBtnHover : {})
                        }}
                        onMouseEnter={() => setHoverPrimary(true)}
                        onMouseLeave={() => setHoverPrimary(false)}
                    >
                        Get Started
                    </button>
                    <button
                        style={{
                            ...styles.secondaryBtn,
                            backgroundColor: hoverSecondary ? 'rgba(248, 250, 252, 0.05)' : 'transparent',
                            borderColor: hoverSecondary ? '#64748b' : '#475569'
                        }}
                        onMouseEnter={() => setHoverSecondary(true)}
                        onMouseLeave={() => setHoverSecondary(false)}
                    >
                        Documentation
                    </button>
                </div>

                <div style={styles.featuresGrid}>
                    <div style={styles.featureCard}>
                        <div style={styles.featureTitle}>⚡️ Lightning Fast</div>
                        <div style={styles.featureDesc}>Built on Vite for instant HMR and quick builds.</div>
                    </div>
                    <div style={styles.featureCard}>
                        <div style={styles.featureTitle}>🎨 Premium UI</div>
                        <div style={styles.featureDesc}>Aesthetically pleasing dark mode by default.</div>
                    </div>
                    <div style={styles.featureCard}>
                        <div style={styles.featureTitle}>🛠️ Fully Reactive</div>
                        <div style={styles.featureDesc}>Powered by React to build complex interfaces smoothly.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
