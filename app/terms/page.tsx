import Link from 'next/link';

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <Link href="/signIn" style={{ color: '#4a90d9', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
          ← Back
        </Link>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>Terms of Use</h1>
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '2rem' }}>Last updated: March 2026</p>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>1. Acceptance of Terms</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              By downloading, installing, or using the World Autistic app ("the App"), you agree to be bound by these Terms of Use.
              If you do not agree, do not use the App. These terms apply to all users, including parents and guardians who register
              on behalf of a child.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>2. Description of Service</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              World Autistic is an educational platform designed to support the development of children and individuals with autism
              spectrum disorder (ASD). The App provides educational activities, resources, and tools to assist learning and
              communication skills. The App is provided by Luminon Digital LTDA, Brazil.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>3. Eligibility and Parental Consent</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              The App is intended for use under the supervision of parents, guardians, or educators. Users under the age of 13 must
              have verifiable parental or guardian consent before using the App. By creating an account on behalf of a child, you
              confirm that you are that child's parent or legal guardian and consent to these Terms on their behalf.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>4. Account Responsibility</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs
              under your account. You must notify us immediately at{' '}
              <a href="mailto:jfsimon.pro@gmail.com" style={{ color: '#4a90d9' }}>jfsimon.pro@gmail.com</a>{' '}
              if you suspect unauthorized access to your account.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>5. Acceptable Use</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>You agree not to:</p>
            <ul style={{ color: '#374151', lineHeight: 1.8, fontSize: '0.95rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Use the App for any unlawful purpose or in violation of these Terms.</li>
              <li>Attempt to gain unauthorized access to any part of the App or its infrastructure.</li>
              <li>Reverse-engineer, decompile, or attempt to extract the source code of the App.</li>
              <li>Upload or transmit harmful, offensive, or inappropriate content.</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
              <li>Use the App in any way that could damage, disable, or impair its functionality.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>6. Intellectual Property</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              All content, features, and functionality of the App — including but not limited to text, graphics, logos, icons,
              and educational materials — are the exclusive property of Luminon Digital LTDA and are protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create derivative works without our express
              written permission.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>7. Disclaimer of Medical Advice</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              World Autistic is an educational tool and is <strong>not</strong> a medical device, therapy service, or substitute
              for professional medical, psychological, or therapeutic advice. The App does not diagnose, treat, or cure any
              condition. Always consult qualified healthcare professionals for medical guidance regarding autism spectrum disorder.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>8. Limitation of Liability</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              To the fullest extent permitted by applicable law, Luminon Digital LTDA shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of (or inability to use) the App,
              including but not limited to loss of data, service interruptions, or any reliance on content provided within the App.
              Our total liability to you shall not exceed the amount you paid (if any) for the App in the twelve months preceding
              the claim.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>9. Service Availability</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We strive to keep the App available at all times but do not guarantee uninterrupted access. We reserve the right to
              modify, suspend, or discontinue any part of the App at any time, with or without notice, without liability to you.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>10. Account Termination</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              You may delete your account at any time via Settings → Delete Account. We reserve the right to suspend or terminate
              accounts that violate these Terms, without prior notice. Upon termination, your right to use the App ceases
              immediately and your data will be deleted in accordance with our{' '}
              <Link href="/privacy" style={{ color: '#4a90d9' }}>Privacy Policy</Link>.
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>11. Governing Law</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              These Terms are governed by the laws of Brazil. Any disputes arising from these Terms or your use of the App
              shall be subject to the exclusive jurisdiction of the courts of Brazil. Users outside Brazil acknowledge that
              their data may be processed under Brazilian law, including the LGPD (Lei Geral de Proteção de Dados).
            </p>
          </section>

          <section style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>12. Changes to Terms</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We reserve the right to update these Terms at any time. Changes will be posted within the App with a revised
              "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section style={{ marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>13. Contact</h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Luminon Digital LTDA — Brazil<br />
              Email: <a href="mailto:jfsimon.pro@gmail.com" style={{ color: '#4a90d9' }}>jfsimon.pro@gmail.com</a><br />
              Support: <Link href="/support" style={{ color: '#4a90d9' }}>worldautistic.app/support</Link>
            </p>
          </section>

          <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/privacy" style={{ color: '#4a90d9', fontSize: '0.9rem', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
