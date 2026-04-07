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
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>1. Who We Are</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              World Autistic is operated by Luminon Digital LTDA, Brazil. We are committed to protecting your privacy and
              handling your personal data with transparency and care. For questions, contact us at{' '}
              <a href="mailto:jfsimon.pro@gmail.com" style={{ color: '#4a90d9' }}>jfsimon.pro@gmail.com</a>.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>2. Information We Collect</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We collect only the information necessary to provide our services:
            </p>
            <ul style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.95rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Account data:</strong> name, email address, and encrypted password when you register.</li>
              <li><strong>Apple Sign In:</strong> if you sign in with Apple, we receive only what Apple shares (name and/or email).</li>
              <li><strong>Usage data:</strong> app interactions and progress within educational activities.</li>
              <li><strong>Device permissions (on request):</strong> camera, photo library, and microphone — only when you explicitly grant access for specific features.</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem', marginTop: '0.75rem' }}>
              We do <strong>not</strong> collect location data, biometrics, contacts, advertising identifiers, or any data unrelated to the app's educational purpose.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>3. Why We Collect It (Legal Basis)</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We process your data under the following legal bases (LGPD / GDPR):
            </p>
            <ul style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.95rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Contract performance:</strong> to create and manage your account and deliver the service you signed up for.</li>
              <li><strong>Legitimate interest:</strong> to improve the app, detect technical issues, and ensure security.</li>
              <li><strong>Consent:</strong> for optional permissions such as camera and microphone access.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>4. How We Use Your Information</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Your data is used exclusively to:
            </p>
            <ul style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.95rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Authenticate you and keep your account secure.</li>
              <li>Personalize your educational experience within the app.</li>
              <li>Respond to support requests.</li>
              <li>Send transactional emails (account-related only — no marketing without consent).</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem', marginTop: '0.75rem' }}>
              We do <strong>not</strong> sell, rent, or share your personal data with advertisers or third-party marketers.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>5. Data Storage and Security</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Data is stored in a secure PostgreSQL database hosted on Neon (US East region). All connections use TLS encryption.
              Passwords are stored as bcrypt hashes — never in plain text. Access to the database is restricted and monitored.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>6. Data Retention</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We retain your personal data for as long as your account is active. When you delete your account, all personal data
              (name, email, password hash, Apple ID) is permanently deleted from our systems within <strong>30 days</strong>.
              Anonymized, non-identifiable usage statistics may be retained for analytics purposes.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>7. Device Permissions</h2>
            <ul style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.95rem', paddingLeft: '1.5rem' }}>
              <li><strong>Camera / Photo Library:</strong> requested only if you choose to upload a profile photo. Not used for any other purpose.</li>
              <li><strong>Microphone:</strong> requested only for specific voice-based educational activities. Audio is not recorded or stored.</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem', marginTop: '0.75rem' }}>
              You can revoke permissions at any time in your device Settings.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>8. Children's Privacy</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              World Autistic is designed to support children with autism spectrum disorder. Accounts for minors must be created
              and managed by a parent or legal guardian. We do not knowingly collect personal information from children under 13
              without verified parental consent. If you believe a child's data has been collected without consent, contact us
              immediately at <a href="mailto:jfsimon.pro@gmail.com" style={{ color: '#4a90d9' }}>jfsimon.pro@gmail.com</a> for immediate deletion.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>9. Your Rights</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Under LGPD (Brazil) and GDPR (where applicable), you have the right to:
            </p>
            <ul style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.95rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate data.</li>
              <li>Request deletion of your data (via Settings → Delete Account, or by contacting us).</li>
              <li>Withdraw consent for optional data processing at any time.</li>
              <li>File a complaint with the relevant data protection authority.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>10. Changes to This Policy</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section style={{ marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>11. Contact Us</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Luminon Digital LTDA — Brazil<br />
              Email: <a href="mailto:jfsimon.pro@gmail.com" style={{ color: '#4a90d9' }}>jfsimon.pro@gmail.com</a><br />
              Support: <Link href="/support" style={{ color: '#4a90d9' }}>worldautistic.app/support</Link>
            </p>
          </section>

          <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/terms" style={{ color: '#4a90d9', fontSize: '0.9rem', textDecoration: 'none' }}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
