'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

type Lang = 'pt' | 'en' | 'es';

const alertBox: React.CSSProperties = {
  backgroundColor: '#fff7ed',
  border: '2px solid #fb923c',
  borderRadius: '8px',
  padding: '1rem 1.25rem',
  marginBottom: '1rem',
};

const content: Record<Lang, {
  title: string;
  updated: string;
  intro: string;
  sections: { title: string; body: React.ReactNode }[];
  backHome: string;
  termsLink: string;
}> = {
  pt: {
    title: 'Politica de Privacidade',
    updated: 'Ultima atualizacao: 7 de abril de 2025',
    intro: 'A World Autistic valoriza a sua privacidade e esta comprometida com a protecao dos seus dados pessoais. Esta Politica descreve como coletamos, usamos, armazenamos e protegemos suas informacoes, em conformidade com a Lei Geral de Protecao de Dados (LGPD — Lei n. 13.709/2018).',
    backHome: 'Voltar ao inicio',
    termsLink: 'Termos de Uso',
    sections: [
      {
        title: '1. Quais dados coletamos',
        body: (
          <ul>
            <li><strong>Dados de cadastro:</strong> nome completo, e-mail e senha (armazenada com hash seguro).</li>
            <li><strong>Dados de perfil:</strong> data de nascimento, idioma preferido, avatar e configuracoes de som.</li>
            <li><strong>Dados de uso:</strong> progresso em atividades, pontuacoes, tempo de uso, streaks e conquistas.</li>
            <li><strong>Dados de compra:</strong> nome, e-mail, CPF (quando fornecido) e ID de transacao via Hotmart. Nao armazenamos dados de cartao.</li>
            <li><strong>Notificacoes push:</strong> chave de inscricao (somente com sua autorizacao).</li>
            <li><strong>Dados tecnicos:</strong> cookies de sessao e tokens de autenticacao.</li>
            <li><strong>Registro de consentimento:</strong> data e hora em que voce aceitou os Termos e autorizou o tratamento de dado sensivel, com versao do documento.</li>
          </ul>
        ),
      },
      {
        title: '2. Dados sensiveis de saude (LGPD art. 11)',
        body: (
          <>
            <div style={alertBox}>
              <p style={{ margin: 0, fontWeight: 600, color: '#9a3412' }}>Aviso sobre dado pessoal sensivel</p>
              <p style={{ margin: '0.5rem 0 0', color: '#7c2d12' }}>
                O uso desta plataforma — desenvolvida para pessoas no espectro autista — implica indiretamente a revelacao de informacao relacionada a saude, constituindo <strong>dado pessoal sensivel</strong> (LGPD art. 5, II). Seu tratamento segue as regras restritas do art. 11 da mesma lei.
              </p>
            </div>
            <ul>
              <li>Nao coletamos diagnosticos, laudos ou prontuarios medicos.</li>
              <li>O dado sensivel inferido e tratado com nivel de protecao equivalente ao de dados de saude.</li>
              <li>O consentimento e colhido de forma destacada no cadastro (art. 11, I, LGPD).</li>
              <li>Esse dado nunca e compartilhado com terceiros.</li>
              <li>Voce pode revogar o consentimento a qualquer momento, o que implicara encerramento da conta.</li>
            </ul>
          </>
        ),
      },
      {
        title: '3. Por que coletamos e base legal',
        body: (
          <SimpleTable
            headers={['Dado', 'Finalidade', 'Base legal (LGPD)']}
            rows={[
              ['Nome e e-mail', 'Criar e identificar sua conta', 'Execucao de contrato'],
              ['Senha', 'Autenticar seu acesso', 'Execucao de contrato'],
              ['Progresso e uso', 'Personalizar experiencia e relatorios', 'Contrato / Legıtimo interesse'],
              ['Dados de compra / CPF', 'Verificar assinatura ativa e identificacao fiscal', 'Execucao de contrato'],
              ['Dado de saude inferido', 'Prestar o servico educacional adequado', 'Consentimento explicito (art. 11, I)'],
              ['Registro de consentimento', 'Comprovar aceitacao dos termos (LGPD art. 8 §5)', 'Obrigacao legal'],
              ['Notificacoes push', 'Enviar lembretes (com autorizacao)', 'Consentimento'],
              ['Cookies de sessao', 'Manter sessao e seguranca', 'Legıtimo interesse'],
            ]}
          />
        ),
      },
      {
        title: '4. Por quanto tempo guardamos seus dados',
        body: (
          <ul>
            <li><strong>Dados de conta:</strong> enquanto ativa. Apos exclusao, ate 90 dias para backup.</li>
            <li><strong>Dados de compra:</strong> 5 anos (legislacao fiscal brasileira).</li>
            <li><strong>Logs de acesso:</strong> 6 meses (Marco Civil da Internet, Lei n. 12.965/2014).</li>
            <li><strong>Inscricao push:</strong> ate voce revogar a permissao.</li>
          </ul>
        ),
      },
      {
        title: '5. Com quem compartilhamos e transferencia internacional',
        body: (
          <>
            <ul>
              <li><strong>Hotmart (Brasil/EUA):</strong> processamento de pagamentos e assinaturas.</li>
              <li><strong>Cloudinary (EUA):</strong> armazenamento de imagens de perfil.</li>
              <li><strong>Neon / PostgreSQL (EUA):</strong> banco de dados em nuvem com criptografia.</li>
              <li><strong>Telegram (EUA/Dubai):</strong> canal de comunicacao adicional para assinantes com acesso habilitado.</li>
            </ul>
            <p>Nao vendemos, alugamos ou comercializamos seus dados com terceiros para publicidade.</p>
            <p><strong>Transferencia internacional (LGPD art. 33):</strong> Cloudinary, Neon, Hotmart e Telegram sao empresas fora do Brasil. A transferencia ocorre com base no seu consentimento expresso colhido no cadastro e na necessidade de execucao do contrato. Adotamos medidas de seguranca adequadas e verificamos que esses fornecedores possuem politicas de privacidade compativeis.</p>
          </>
        ),
      },
      {
        title: '6. Seus direitos (LGPD)',
        body: (
          <>
            <ul>
              <li>Confirmar e acessar seus dados</li>
              <li>Corrigir dados incompletos ou inexatos</li>
              <li>Solicitar anonimizacao, bloqueio ou exclusao</li>
              <li>Revogar consentimento a qualquer momento</li>
              <li>Portabilidade dos seus dados</li>
              <li>Exclusao da conta e dados</li>
            </ul>
            <p>Para exercer esses direitos: <strong>contato@worldautistic.com</strong></p>
          </>
        ),
      },
      {
        title: '7. Seguranca',
        body: <p>Adotamos criptografia de senhas, HTTPS, tokens com validade limitada e controle de acesso restrito ao banco de dados.</p>,
      },
      {
        title: '8. Cookies',
        body: <p>Utilizamos apenas cookies essenciais para autenticacao e sessao. Nao usamos cookies de rastreamento ou publicidade.</p>,
      },
      {
        title: '9. Menores de idade (LGPD art. 14)',
        body: (
          <>
            <p>Nossa plataforma e destinada a usuarios com 18 anos ou mais. Responsaveis legais podem utilizar a plataforma em nome de criancas ou adolescentes sob sua tutela, assumindo total responsabilidade pelos dados inseridos.</p>
            <p>Quando identificarmos que dados de menores foram coletados sem autorizacao de responsavel legal, esses dados serao excluidos imediatamente. Para reportar esse tipo de situacao: <strong>contato@worldautistic.com</strong></p>
          </>
        ),
      },
      {
        title: '10. Incidentes de seguranca e vazamento de dados (LGPD art. 48)',
        body: (
          <p>Em caso de incidente de seguranca que possa acarretar risco ou dano relevante aos titulares, notificaremos a Autoridade Nacional de Protecao de Dados (ANPD) e os usuarios afetados em prazo razoavel, conforme exigido pelo art. 48 da LGPD, informando a natureza dos dados afetados, as medidas tecnicas e de seguranca adotadas e as acoes tomadas para reverter ou mitigar os efeitos do incidente.</p>
        ),
      },
      {
        title: '11. Registro e prova de consentimento',
        body: (
          <p>Armazenamos de forma segura a data, hora e versao dos documentos no momento em que voce aceitou os Termos de Uso e autorizou o tratamento de dados sensiveis. Esses registros sao mantidos como prova de consentimento valido nos termos do art. 8, §5 da LGPD e nao sao excluidos mesmo apos encerramento da conta, pelo prazo necessario para cumprimento de obrigacao legal.</p>
        ),
      },
      {
        title: '12. Contato',
        body: (
          <>
            <p><strong>E-mail:</strong> contato@worldautistic.com</p>
            <p><strong>Site:</strong> worldautistic.com</p>
          </>
        ),
      },
    ],
  },

  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: April 7, 2025',
    intro: 'World Autistic is committed to protecting your personal data. This Privacy Policy describes how we collect, use, store, and protect your information, in compliance with the Brazilian General Data Protection Law (LGPD — Law No. 13,709/2018) and applicable international standards.',
    backHome: 'Back to home',
    termsLink: 'Terms of Use',
    sections: [
      {
        title: '1. Data we collect',
        body: (
          <ul>
            <li><strong>Registration data:</strong> full name, email address, and password (stored as a secure hash).</li>
            <li><strong>Profile data:</strong> date of birth, preferred language, avatar, and sound settings.</li>
            <li><strong>Usage data:</strong> activity progress, scores, time spent, streaks, and achievements.</li>
            <li><strong>Purchase data:</strong> name, email, tax ID (CPF, when provided), and transaction ID from Hotmart. We do not store card details.</li>
            <li><strong>Push notifications:</strong> subscription key (only if you grant permission).</li>
            <li><strong>Technical data:</strong> session cookies and authentication tokens.</li>
            <li><strong>Consent record:</strong> date, time, and version of the documents when you accepted the Terms and authorized sensitive data processing.</li>
          </ul>
        ),
      },
      {
        title: '2. Sensitive health data (LGPD art. 11)',
        body: (
          <>
            <div style={alertBox}>
              <p style={{ margin: 0, fontWeight: 600, color: '#9a3412' }}>Notice about sensitive personal data</p>
              <p style={{ margin: '0.5rem 0 0', color: '#7c2d12' }}>
                Using this platform — designed specifically for people on the autism spectrum — indirectly reveals health-related information, which constitutes <strong>sensitive personal data</strong> under LGPD art. 5, II. Its processing is subject to the stricter rules of art. 11 of the same law.
              </p>
            </div>
            <ul>
              <li>We do not collect diagnoses, medical records, or clinical reports.</li>
              <li>The inferred sensitive data is treated with health-data-level protection.</li>
              <li>Explicit consent is collected separately during registration (art. 11, I, LGPD).</li>
              <li>This data is never shared with third parties.</li>
              <li>You may withdraw consent at any time, which will result in account closure.</li>
            </ul>
          </>
        ),
      },
      {
        title: '3. Why we collect it and legal basis',
        body: (
          <SimpleTable
            headers={['Data', 'Purpose', 'Legal basis (LGPD)']}
            rows={[
              ['Name & email', 'Create and identify your account', 'Contract performance'],
              ['Password', 'Authenticate your access', 'Contract performance'],
              ['Progress & usage', 'Personalize experience and reports', 'Contract / Legitimate interest'],
              ['Purchase data / CPF', 'Verify active subscription and tax identification', 'Contract performance'],
              ['Inferred health data', 'Deliver appropriate educational service', 'Explicit consent (art. 11, I)'],
              ['Consent record', 'Prove valid consent (LGPD art. 8 §5)', 'Legal obligation'],
              ['Push notifications', 'Send reminders (with your permission)', 'Consent'],
              ['Session cookies', 'Maintain session and security', 'Legitimate interest'],
            ]}
          />
        ),
      },
      {
        title: '4. How long we keep your data',
        body: (
          <ul>
            <li><strong>Account data:</strong> while active. Up to 90 days after deletion for backup.</li>
            <li><strong>Purchase data:</strong> 5 years (Brazilian tax law).</li>
            <li><strong>Access logs:</strong> 6 months (Brazilian Internet Act, Law No. 12,965/2014).</li>
            <li><strong>Push subscription:</strong> until you revoke permission.</li>
          </ul>
        ),
      },
      {
        title: '5. Who we share data with and international transfers',
        body: (
          <>
            <ul>
              <li><strong>Hotmart (Brazil/USA):</strong> payment processing and subscription management.</li>
              <li><strong>Cloudinary (USA):</strong> profile image storage.</li>
              <li><strong>Neon / PostgreSQL (USA):</strong> encrypted cloud database.</li>
              <li><strong>Telegram (USA/Dubai):</strong> additional communication channel for subscribers with enabled access.</li>
            </ul>
            <p>We do not sell, rent, or trade your data with third parties for advertising purposes.</p>
            <p><strong>International data transfers (LGPD art. 33):</strong> Cloudinary, Neon, Hotmart, and Telegram are companies based outside Brazil. Data transfers occur based on your express consent collected during registration and on the necessity to perform the service contract. We adopt adequate security measures and verify that these providers maintain compatible privacy and security policies.</p>
          </>
        ),
      },
      {
        title: '6. Your rights (LGPD)',
        body: (
          <>
            <ul>
              <li>Confirm and access your data</li>
              <li>Correct incomplete or inaccurate data</li>
              <li>Request anonymization, blocking, or deletion</li>
              <li>Withdraw consent at any time</li>
              <li>Data portability</li>
              <li>Account and data deletion</li>
            </ul>
            <p>To exercise these rights: <strong>contato@worldautistic.com</strong></p>
          </>
        ),
      },
      {
        title: '7. Security',
        body: <p>We use password hashing, HTTPS, time-limited authentication tokens, and restricted database access controls.</p>,
      },
      {
        title: '8. Cookies',
        body: <p>We use only essential cookies for authentication and session management. We do not use tracking or advertising cookies.</p>,
      },
      {
        title: '9. Minors (LGPD art. 14)',
        body: (
          <>
            <p>Our platform is intended for users aged 18 or older. Legal guardians may use the platform on behalf of children or adolescents under their care, assuming full responsibility for the data provided.</p>
            <p>If we identify that data from minors was collected without guardian authorization, it will be deleted immediately. To report such cases: <strong>contato@worldautistic.com</strong></p>
          </>
        ),
      },
      {
        title: '10. Security incidents and data breaches (LGPD art. 48)',
        body: (
          <p>In the event of a security incident that may cause relevant risk or harm to data subjects, we will notify the Brazilian National Data Protection Authority (ANPD) and affected users within a reasonable timeframe as required by LGPD art. 48, informing the nature of the affected data, the security measures adopted, and the actions taken to reverse or mitigate the effects of the incident.</p>
        ),
      },
      {
        title: '11. Consent record and proof',
        body: (
          <p>We securely store the date, time, and version of the documents at the moment you accepted the Terms of Use and authorized sensitive data processing. These records are maintained as proof of valid consent under LGPD art. 8 §5 and are not deleted upon account closure, for the period required to fulfill legal obligations.</p>
        ),
      },
      {
        title: '12. Contact',
        body: (
          <>
            <p><strong>Email:</strong> contato@worldautistic.com</p>
            <p><strong>Website:</strong> worldautistic.com</p>
          </>
        ),
      },
    ],
  },

  es: {
    title: 'Politica de Privacidad',
    updated: 'Ultima actualizacion: 7 de abril de 2025',
    intro: 'World Autistic esta comprometida con la proteccion de sus datos personales. Esta Politica describe como recopilamos, usamos, almacenamos y protegemos su informacion, en cumplimiento con la Ley General de Proteccion de Datos de Brasil (LGPD — Ley n. 13.709/2018) y estandares internacionales aplicables.',
    backHome: 'Volver al inicio',
    termsLink: 'Terminos de Uso',
    sections: [
      {
        title: '1. Datos que recopilamos',
        body: (
          <ul>
            <li><strong>Datos de registro:</strong> nombre completo, correo electronico y contrasena (almacenada con hash seguro).</li>
            <li><strong>Datos de perfil:</strong> fecha de nacimiento, idioma preferido, avatar y configuracion de sonido.</li>
            <li><strong>Datos de uso:</strong> progreso en actividades, puntuaciones, tiempo de uso, rachas y logros.</li>
            <li><strong>Datos de compra:</strong> nombre, correo, RUT/CPF (cuando se proporcione) e ID de transaccion via Hotmart. No almacenamos datos de tarjeta.</li>
            <li><strong>Notificaciones push:</strong> clave de suscripcion (solo con su autorizacion).</li>
            <li><strong>Datos tecnicos:</strong> cookies de sesion y tokens de autenticacion.</li>
            <li><strong>Registro de consentimiento:</strong> fecha, hora y version de los documentos en el momento en que acepto los Terminos y autorizo el tratamiento de datos sensibles.</li>
          </ul>
        ),
      },
      {
        title: '2. Datos sensibles de salud (LGPD art. 11)',
        body: (
          <>
            <div style={alertBox}>
              <p style={{ margin: 0, fontWeight: 600, color: '#9a3412' }}>Aviso sobre dato personal sensible</p>
              <p style={{ margin: '0.5rem 0 0', color: '#7c2d12' }}>
                El uso de esta plataforma — disenada para personas en el espectro autista — revela indirectamente informacion relacionada con la salud, lo que constituye un <strong>dato personal sensible</strong> segun el art. 5, II de la LGPD. Su tratamiento esta sujeto a las reglas estrictas del art. 11 de la misma ley.
              </p>
            </div>
            <ul>
              <li>No recopilamos diagnosticos, informes medicos ni historial clinico.</li>
              <li>El dato sensible inferido recibe proteccion equivalente a datos de salud.</li>
              <li>El consentimiento se obtiene de forma destacada en el registro (art. 11, I, LGPD).</li>
              <li>Este dato nunca se comparte con terceros.</li>
              <li>Puede retirar el consentimiento en cualquier momento, lo que implicara el cierre de la cuenta.</li>
            </ul>
          </>
        ),
      },
      {
        title: '3. Por que los recopilamos y base legal',
        body: (
          <SimpleTable
            headers={['Dato', 'Finalidad', 'Base legal (LGPD)']}
            rows={[
              ['Nombre y correo', 'Crear e identificar su cuenta', 'Ejecucion de contrato'],
              ['Contrasena', 'Autenticar su acceso', 'Ejecucion de contrato'],
              ['Progreso y uso', 'Personalizar experiencia e informes', 'Contrato / Interes legitimo'],
              ['Datos de compra / CPF', 'Verificar suscripcion activa e identificacion fiscal', 'Ejecucion de contrato'],
              ['Dato de salud inferido', 'Prestar el servicio educativo adecuado', 'Consentimiento explicito (art. 11, I)'],
              ['Registro de consentimiento', 'Probar consentimiento valido (LGPD art. 8 §5)', 'Obligacion legal'],
              ['Notificaciones push', 'Enviar recordatorios (con permiso)', 'Consentimiento'],
              ['Cookies de sesion', 'Mantener sesion y seguridad', 'Interes legitimo'],
            ]}
          />
        ),
      },
      {
        title: '4. Cuanto tiempo guardamos sus datos',
        body: (
          <ul>
            <li><strong>Datos de cuenta:</strong> mientras este activa. Hasta 90 dias tras eliminacion para respaldo.</li>
            <li><strong>Datos de compra:</strong> 5 anos (legislacion fiscal brasilena).</li>
            <li><strong>Registros de acceso:</strong> 6 meses (Ley de Internet de Brasil, n. 12.965/2014).</li>
            <li><strong>Suscripcion push:</strong> hasta que revoque el permiso.</li>
          </ul>
        ),
      },
      {
        title: '5. Con quien compartimos y transferencias internacionales',
        body: (
          <>
            <ul>
              <li><strong>Hotmart (Brasil/EE.UU.):</strong> procesamiento de pagos y gestion de suscripciones.</li>
              <li><strong>Cloudinary (EE.UU.):</strong> almacenamiento de imagenes de perfil.</li>
              <li><strong>Neon / PostgreSQL (EE.UU.):</strong> base de datos en la nube con cifrado.</li>
              <li><strong>Telegram (EE.UU./Dubai):</strong> canal de comunicacion adicional para suscriptores con acceso habilitado.</li>
            </ul>
            <p>No vendemos, alquilamos ni comercializamos sus datos con terceros para publicidad.</p>
            <p><strong>Transferencias internacionales (LGPD art. 33):</strong> Cloudinary, Neon, Hotmart y Telegram son empresas fuera de Brasil. La transferencia ocurre con base en su consentimiento expreso obtenido en el registro y en la necesidad de ejecucion del contrato. Adoptamos medidas de seguridad adecuadas y verificamos que estos proveedores mantengan politicas de privacidad compatibles.</p>
          </>
        ),
      },
      {
        title: '6. Sus derechos (LGPD)',
        body: (
          <>
            <ul>
              <li>Confirmar y acceder a sus datos</li>
              <li>Corregir datos incompletos o inexactos</li>
              <li>Solicitar anonimizacion, bloqueo o eliminacion</li>
              <li>Retirar el consentimiento en cualquier momento</li>
              <li>Portabilidad de sus datos</li>
              <li>Eliminacion de cuenta y datos</li>
            </ul>
            <p>Para ejercer estos derechos: <strong>contato@worldautistic.com</strong></p>
          </>
        ),
      },
      {
        title: '7. Seguridad',
        body: <p>Usamos cifrado de contrasenas, HTTPS, tokens de autenticacion con validez limitada y control de acceso restringido a la base de datos.</p>,
      },
      {
        title: '8. Cookies',
        body: <p>Utilizamos solo cookies esenciales para autenticacion y sesion. No usamos cookies de seguimiento ni publicidad.</p>,
      },
      {
        title: '9. Menores de edad (LGPD art. 14)',
        body: (
          <>
            <p>Nuestra plataforma esta destinada a usuarios de 18 anos o mas. Los tutores legales pueden utilizar la plataforma en nombre de ninos o adolescentes bajo su custodia, asumiendo plena responsabilidad por los datos proporcionados.</p>
            <p>Si identificamos que datos de menores fueron recopilados sin autorizacion del tutor, seran eliminados de inmediato. Para reportar: <strong>contato@worldautistic.com</strong></p>
          </>
        ),
      },
      {
        title: '10. Incidentes de seguridad y filtracion de datos (LGPD art. 48)',
        body: (
          <p>En caso de un incidente de seguridad que pueda causar riesgo o dano relevante a los titulares, notificaremos a la Autoridad Nacional de Proteccion de Datos de Brasil (ANPD) y a los usuarios afectados en un plazo razonable, conforme al art. 48 de la LGPD, informando la naturaleza de los datos afectados, las medidas de seguridad adoptadas y las acciones tomadas para revertir o mitigar los efectos del incidente.</p>
        ),
      },
      {
        title: '11. Registro y prueba de consentimiento',
        body: (
          <p>Almacenamos de forma segura la fecha, hora y version de los documentos en el momento en que acepto los Terminos de Uso y autorizo el tratamiento de datos sensibles. Estos registros se mantienen como prueba de consentimiento valido segun el art. 8 §5 de la LGPD y no se eliminan al cerrar la cuenta, por el periodo necesario para cumplir con obligaciones legales.</p>
        ),
      },
      {
        title: '12. Contacto',
        body: (
          <>
            <p><strong>Correo:</strong> contato@worldautistic.com</p>
            <p><strong>Sitio:</strong> worldautistic.com</p>
          </>
        ),
      },
    ],
  },
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const c = content[language as Lang] ?? content.pt;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f9ff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#1e293b',
    }}>
      <div style={{ backgroundColor: '#0288D1', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '2.5rem', height: '2.5rem', backgroundColor: '#FFD700',
          borderRadius: '0.5rem', borderBottom: '3px solid #F1B812',
          textDecoration: 'none', color: '#6f5300', fontSize: '1.2rem', fontWeight: 'bold',
        }}>←</Link>
        <h1 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{c.title}</h1>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{c.updated}</p>
        <p style={{ lineHeight: 1.7, marginBottom: '2rem' }}>{c.intro}</p>

        {c.sections.map((s, i) => (
          <section key={i} style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '1.125rem', fontWeight: 700, color: '#0288D1',
              marginBottom: '0.75rem', paddingBottom: '0.375rem', borderBottom: '2px solid #e0f2fe',
            }}>{s.title}</h2>
            <div style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{s.body}</div>
          </section>
        ))}

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/terms" style={{ color: '#0288D1', textDecoration: 'underline', fontSize: '0.875rem' }}>{c.termsLink}</Link>
          <Link href="/" style={{ color: '#0288D1', textDecoration: 'underline', fontSize: '0.875rem' }}>{c.backHome}</Link>
        </div>
      </div>
    </div>
  );
}

function SimpleTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#e0f2fe' }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#0369a1', border: '1px solid #bae6fd' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f8fafc' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '0.75rem', border: '1px solid #e2e8f0', verticalAlign: 'top' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
