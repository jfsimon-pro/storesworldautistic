import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <Link href="/signIn" style={{ color: '#4a90d9', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
          ← Back
        </Link>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '2rem' }}>Last updated: March 2026</p>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>1. Information We Collect</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We collect information you provide directly to us, such as your name, email address, and password when you create an account.
              If you sign in with Apple, we receive only the information Apple shares with us (which may include your name and email address).
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>2. How We Use Your Information</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to personalize your experience. We do not sell your personal information to third parties.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>3. Data Storage</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Your data is stored securely in our database. We use industry-standard security measures to protect your personal information.
              Passwords are stored as encrypted hashes and are never stored in plain text.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>4. Media and Photos</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              If you choose to upload a profile photo, we request access to your photo library or camera. This access is only used
              to allow you to select or take a photo for your profile. We do not access your photos for any other purpose.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>5. Microphone</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              The app may request microphone access for voice-based educational activities. This access is only active during
              those specific activities and is not used to record or store audio without your knowledge.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>6. Account Deletion</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              You can delete your account at any time from the Settings screen. When you delete your account, all your personal
              data is permanently removed from our systems within 30 days.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>7. Children's Privacy</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              World Autistic is designed to support children with autism spectrum disorder. Accounts for children must be created
              and managed by a parent or guardian. We do not knowingly collect personal information from children without parental consent.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>8. Contact Us</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:jfsimon.pro@gmail.com" style={{ color: '#4a90d9' }}>jfsimon.pro@gmail.com</a>{' '}
              or visit our <Link href="/support" style={{ color: '#4a90d9' }}>Support page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
