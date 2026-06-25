export default function MobileBlock() {
  return (
    <>
      {/* CSS-based block — works even before JS loads */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-block { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-content { display: none !important; }
        }
      `}</style>

      <div className="mobile-block" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '2rem',
        background: '#fff'
      }}>
        <h1 style={{ fontSize: '2rem' }}>🖥️ Desktop Only</h1>
        <p style={{ marginTop: '1rem', color: '#555' }}>
          This website is not supported on mobile devices.
        </p>
        <p style={{ color: '#555' }}>
          Please open it on a desktop or laptop.
        </p>
      </div>
    </>
  );
}