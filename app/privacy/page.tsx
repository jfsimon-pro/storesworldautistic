'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

type Section = { title: string; body: string; list?: string[]; note?: string };
type LangContent = { title: string; updated: string; back: string; termsLink: string; sections: Section[] };
type ContentMap = { pt: LangContent; en: LangContent; es: LangContent };

const content: ContentMap = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: March 2026',
    back: '← Back',
    termsLink: 'Terms of Use',
    sections: [
      {
        title: '1. Who We Are',
        body: 'World Autistic is operated by Luminon Digital LTDA, Brazil. We are committed to protecting your privacy and handling your personal data with transparency and care. For questions, contact us at jfsimon.pro@gmail.com.',
      },
      {
        title: '2. Information We Collect',
        body: 'We collect only the information necessary to provide our services:',
        list: [
          'Account data: name, email address, and encrypted password when you register.',
          'Apple Sign In: if you sign in with Apple, we receive only what Apple shares (name and/or email).',
          'Usage data: app interactions and progress within educational activities.',
          'Device permissions (on request): camera, photo library, and microphone — only when you explicitly grant access for specific features.',
          'Session token: we store an authentication token in a secure httpOnly cookie to keep you signed in. This cookie is not used for advertising or tracking.',
        ],
        note: 'We do NOT collect location data, biometrics, contacts, advertising identifiers, or any data unrelated to the app\'s educational purpose.',
      },
      {
        title: '3. Why We Collect It (Legal Basis)',
        body: 'We process your data under the following legal bases (LGPD / GDPR):',
        list: [
          'Contract performance: to create and manage your account and deliver the service you signed up for.',
          'Legitimate interest: to improve the app, detect technical issues, and ensure security.',
          'Consent: for optional permissions such as camera and microphone access.',
        ],
      },
      {
        title: '4. How We Use Your Information',
        body: 'Your data is used exclusively to:',
        list: [
          'Authenticate you and keep your account secure.',
          'Personalize your educational experience within the app.',
          'Respond to support requests.',
          'Send transactional emails (account-related only — no marketing without consent).',
        ],
        note: 'We do NOT sell, rent, or share your personal data with advertisers or third-party marketers.',
      },
      {
        title: '5. Third-Party Service Providers',
        body: 'To operate the service, we share data with the following trusted processors, each bound by data protection agreements:',
        list: [
          'Neon (neon.tech) — PostgreSQL database hosting, located in the United States (us-east-1). Stores account data.',
          'DigitalOcean — application hosting, located in the United States. Processes web requests.',
          'Apple Inc. — authentication provider (Sign in with Apple). Governed by Apple\'s own Privacy Policy.',
          'Nodemailer / Gmail SMTP — used to forward support messages sent through the in-app support form.',
        ],
        note: 'We do not share your data with any other third parties.',
      },
      {
        title: '6. International Data Transfer',
        body: 'Your data is stored and processed in the United States (Neon database, DigitalOcean servers). By using the App, you acknowledge that your personal data is transferred outside Brazil. This transfer is carried out under appropriate safeguards in compliance with the LGPD (Art. 33), based on the necessity of the transfer for contract performance and with your informed consent provided by accepting these policies.',
      },
      {
        title: '7. Cookies and Session Tokens',
        body: 'We use a single httpOnly cookie to maintain your authenticated session. This cookie:',
        list: [
          'Is set only after you log in and is required for the app to function.',
          'Does not contain advertising identifiers or tracking data.',
          'Is automatically deleted when you log out or delete your account.',
          'Cannot be accessed by JavaScript (httpOnly flag), reducing security risks.',
        ],
        note: 'We do not use third-party cookies, analytics cookies, or advertising cookies.',
      },
      {
        title: '8. Data Storage and Security',
        body: 'Data is stored in a secure PostgreSQL database hosted on Neon (US East region). All connections use TLS encryption. Passwords are stored as bcrypt hashes — never in plain text. Access to the database is restricted and monitored.',
      },
      {
        title: '9. Data Retention',
        body: 'We retain your personal data for as long as your account is active. When you delete your account, all personal data (name, email, password hash, Apple ID, session tokens) is permanently deleted from our systems within 30 days. Anonymized, non-identifiable usage statistics may be retained for analytics purposes.',
      },
      {
        title: '10. Device Permissions',
        body: '',
        list: [
          'Camera / Photo Library: requested only if you choose to upload a profile photo. Not used for any other purpose.',
          'Microphone: requested only for specific voice-based educational activities. Audio is not recorded or stored.',
        ],
        note: 'You can revoke permissions at any time in your device Settings.',
      },
      {
        title: '11. Children\'s Privacy',
        body: 'World Autistic is designed to support children with autism spectrum disorder. Accounts for minors must be created and managed by a parent or legal guardian. We do not knowingly collect personal information from children under 13 without verified parental consent. If you believe a child\'s data has been collected without consent, contact us immediately at jfsimon.pro@gmail.com for immediate deletion.',
      },
      {
        title: '12. Your Rights',
        body: 'Under LGPD (Brazil) and GDPR (where applicable), you have the right to:',
        list: [
          'Access the personal data we hold about you.',
          'Correct inaccurate data.',
          'Request deletion of your data (via Settings → Delete Account, or by contacting us).',
          'Withdraw consent for optional data processing at any time.',
          'File a complaint with the ANPD (Brazil) or your local data protection authority.',
        ],
      },
      {
        title: '13. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top. Continued use of the app after changes constitutes acceptance of the updated policy.',
      },
      {
        title: '14. Contact & Data Controller',
        body: 'Luminon Digital LTDA — Brazil\nData Controller: Jaime Simon\nEmail: jfsimon.pro@gmail.com',
      },
    ],
  },
  pt: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: março de 2026',
    back: '← Voltar',
    termsLink: 'Termos de Uso',
    sections: [
      {
        title: '1. Quem Somos',
        body: 'O World Autistic é operado pela Luminon Digital LTDA, Brasil. Estamos comprometidos em proteger sua privacidade e tratar seus dados pessoais com transparência e cuidado. Em caso de dúvidas, entre em contato pelo e-mail jfsimon.pro@gmail.com.',
      },
      {
        title: '2. Informações que Coletamos',
        body: 'Coletamos apenas as informações necessárias para fornecer nossos serviços:',
        list: [
          'Dados da conta: nome, endereço de e-mail e senha criptografada ao criar uma conta.',
          'Login com Apple: se você usar o Sign in with Apple, recebemos apenas o que a Apple compartilha (nome e/ou e-mail).',
          'Dados de uso: interações com o app e progresso nas atividades educacionais.',
          'Permissões do dispositivo (sob solicitação): câmera, biblioteca de fotos e microfone — apenas quando você concede acesso explicitamente.',
          'Token de sessão: armazenamos um token de autenticação em um cookie httpOnly seguro para manter você conectado. Esse cookie não é usado para publicidade ou rastreamento.',
        ],
        note: 'Não coletamos dados de localização, biometria, contatos, identificadores de publicidade ou qualquer dado não relacionado ao propósito educacional do app.',
      },
      {
        title: '3. Por Que Coletamos (Base Legal)',
        body: 'Processamos seus dados com base nas seguintes bases legais (LGPD / GDPR):',
        list: [
          'Execução de contrato: para criar e gerenciar sua conta e entregar o serviço contratado.',
          'Interesse legítimo: para melhorar o app, detectar problemas técnicos e garantir segurança.',
          'Consentimento: para permissões opcionais, como acesso à câmera e microfone.',
        ],
      },
      {
        title: '4. Como Usamos Suas Informações',
        body: 'Seus dados são utilizados exclusivamente para:',
        list: [
          'Autenticar você e manter sua conta segura.',
          'Personalizar sua experiência educacional no app.',
          'Responder a solicitações de suporte.',
          'Enviar e-mails transacionais (somente relacionados à conta — sem marketing sem consentimento).',
        ],
        note: 'Não vendemos, alugamos ou compartilhamos seus dados pessoais com anunciantes ou profissionais de marketing terceiros.',
      },
      {
        title: '5. Prestadores de Serviços Terceiros',
        body: 'Para operar o serviço, compartilhamos dados com os seguintes processadores confiáveis, cada um vinculado por acordos de proteção de dados:',
        list: [
          'Neon (neon.tech) — hospedagem de banco de dados PostgreSQL, localizado nos Estados Unidos (us-east-1). Armazena dados da conta.',
          'DigitalOcean — hospedagem da aplicação, localizado nos Estados Unidos. Processa requisições web.',
          'Apple Inc. — provedor de autenticação (Sign in with Apple). Regido pela própria Política de Privacidade da Apple.',
          'Nodemailer / Gmail SMTP — usado para encaminhar mensagens de suporte enviadas pelo formulário dentro do app.',
        ],
        note: 'Não compartilhamos seus dados com nenhum outro terceiro.',
      },
      {
        title: '6. Transferência Internacional de Dados',
        body: 'Seus dados são armazenados e processados nos Estados Unidos (banco de dados Neon, servidores DigitalOcean). Ao usar o app, você reconhece que seus dados pessoais são transferidos para fora do Brasil. Essa transferência é realizada com salvaguardas adequadas em conformidade com a LGPD (Art. 33), com base na necessidade de execução do contrato e com seu consentimento informado ao aceitar estas políticas.',
      },
      {
        title: '7. Cookies e Tokens de Sessão',
        body: 'Usamos um único cookie httpOnly para manter sua sessão autenticada. Esse cookie:',
        list: [
          'É definido somente após o login e é necessário para o funcionamento do app.',
          'Não contém identificadores de publicidade ou dados de rastreamento.',
          'É excluído automaticamente ao fazer logout ou excluir sua conta.',
          'Não pode ser acessado por JavaScript (flag httpOnly), reduzindo riscos de segurança.',
        ],
        note: 'Não utilizamos cookies de terceiros, cookies de analytics ou cookies de publicidade.',
      },
      {
        title: '8. Armazenamento e Segurança dos Dados',
        body: 'Os dados são armazenados em um banco de dados PostgreSQL seguro hospedado na Neon (região US East). Todas as conexões usam criptografia TLS. As senhas são armazenadas como hashes bcrypt — nunca em texto simples. O acesso ao banco de dados é restrito e monitorado.',
      },
      {
        title: '9. Retenção de Dados',
        body: 'Mantemos seus dados pessoais enquanto sua conta estiver ativa. Ao excluir sua conta, todos os dados pessoais (nome, e-mail, hash de senha, Apple ID, tokens de sessão) são permanentemente deletados de nossos sistemas em até 30 dias. Estatísticas de uso anonimizadas e não identificáveis podem ser retidas para fins analíticos.',
      },
      {
        title: '10. Permissões do Dispositivo',
        body: '',
        list: [
          'Câmera / Biblioteca de fotos: solicitada apenas se você optar por fazer upload de uma foto de perfil. Não usada para nenhum outro propósito.',
          'Microfone: solicitado apenas para atividades educacionais específicas baseadas em voz. O áudio não é gravado nem armazenado.',
        ],
        note: 'Você pode revogar permissões a qualquer momento nas Configurações do seu dispositivo.',
      },
      {
        title: '11. Privacidade das Crianças',
        body: 'O World Autistic foi desenvolvido para apoiar crianças com transtorno do espectro autista. Contas para menores devem ser criadas e gerenciadas por um pai ou responsável legal. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos sem consentimento parental verificado. Se você acredita que os dados de uma criança foram coletados sem consentimento, entre em contato imediatamente pelo jfsimon.pro@gmail.com para exclusão imediata.',
      },
      {
        title: '12. Seus Direitos',
        body: 'Nos termos da LGPD (Brasil) e GDPR (onde aplicável), você tem o direito de:',
        list: [
          'Acessar os dados pessoais que temos sobre você.',
          'Corrigir dados imprecisos.',
          'Solicitar a exclusão dos seus dados (via Configurações → Excluir conta, ou entrando em contato conosco).',
          'Retirar o consentimento para o processamento opcional de dados a qualquer momento.',
          'Registrar uma reclamação na ANPD (Brasil) ou na autoridade de proteção de dados local.',
        ],
      },
      {
        title: '13. Alterações nesta Política',
        body: 'Podemos atualizar esta Política de Privacidade periodicamente. Quando o fizermos, revisaremos a data de "Última atualização" no topo. O uso continuado do app após as alterações constitui aceitação da política atualizada.',
      },
      {
        title: '14. Contato e Controlador de Dados',
        body: 'Luminon Digital LTDA — Brasil\nControlador de Dados: Jaime Simon\nE-mail: jfsimon.pro@gmail.com',
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: marzo de 2026',
    back: '← Volver',
    termsLink: 'Términos de Uso',
    sections: [
      {
        title: '1. Quiénes Somos',
        body: 'World Autistic es operado por Luminon Digital LTDA, Brasil. Estamos comprometidos con proteger su privacidad y manejar sus datos personales con transparencia y cuidado. Para preguntas, contáctenos en jfsimon.pro@gmail.com.',
      },
      {
        title: '2. Información que Recopilamos',
        body: 'Recopilamos solo la información necesaria para brindar nuestros servicios:',
        list: [
          'Datos de cuenta: nombre, dirección de correo electrónico y contraseña cifrada al registrarse.',
          'Inicio de sesión con Apple: si usa Sign in with Apple, recibimos solo lo que Apple comparte (nombre y/o correo electrónico).',
          'Datos de uso: interacciones con la app y progreso en actividades educativas.',
          'Permisos del dispositivo (bajo solicitud): cámara, biblioteca de fotos y micrófono — solo cuando usted otorga acceso explícitamente.',
          'Token de sesión: almacenamos un token de autenticación en una cookie httpOnly segura para mantenerlo conectado. Esta cookie no se usa para publicidad ni seguimiento.',
        ],
        note: 'No recopilamos datos de ubicación, biometría, contactos, identificadores publicitarios ni ningún dato no relacionado con el propósito educativo de la app.',
      },
      {
        title: '3. Por Qué Recopilamos (Base Legal)',
        body: 'Procesamos sus datos bajo las siguientes bases legales (LGPD / GDPR):',
        list: [
          'Ejecución de contrato: para crear y gestionar su cuenta y brindar el servicio contratado.',
          'Interés legítimo: para mejorar la app, detectar problemas técnicos y garantizar la seguridad.',
          'Consentimiento: para permisos opcionales como acceso a cámara y micrófono.',
        ],
      },
      {
        title: '4. Cómo Usamos su Información',
        body: 'Sus datos se utilizan exclusivamente para:',
        list: [
          'Autenticarlo y mantener su cuenta segura.',
          'Personalizar su experiencia educativa en la app.',
          'Responder solicitudes de soporte.',
          'Enviar correos transaccionales (solo relacionados con la cuenta — sin marketing sin consentimiento).',
        ],
        note: 'No vendemos, alquilamos ni compartimos sus datos personales con anunciantes ni terceros de marketing.',
      },
      {
        title: '5. Proveedores de Servicios Externos',
        body: 'Para operar el servicio, compartimos datos con los siguientes procesadores de confianza, cada uno sujeto a acuerdos de protección de datos:',
        list: [
          'Neon (neon.tech) — alojamiento de base de datos PostgreSQL, ubicado en Estados Unidos (us-east-1). Almacena datos de cuenta.',
          'DigitalOcean — alojamiento de la aplicación, ubicado en Estados Unidos. Procesa solicitudes web.',
          'Apple Inc. — proveedor de autenticación (Sign in with Apple). Regido por la Política de Privacidad de Apple.',
          'Nodemailer / Gmail SMTP — usado para reenviar mensajes de soporte enviados a través del formulario dentro de la app.',
        ],
        note: 'No compartimos sus datos con ningún otro tercero.',
      },
      {
        title: '6. Transferencia Internacional de Datos',
        body: 'Sus datos se almacenan y procesan en Estados Unidos (base de datos Neon, servidores DigitalOcean). Al usar la app, usted reconoce que sus datos personales son transferidos fuera de Brasil. Esta transferencia se realiza con salvaguardas adecuadas en cumplimiento de la LGPD (Art. 33), basada en la necesidad de ejecución del contrato y con su consentimiento informado al aceptar estas políticas.',
      },
      {
        title: '7. Cookies y Tokens de Sesión',
        body: 'Usamos una única cookie httpOnly para mantener su sesión autenticada. Esta cookie:',
        list: [
          'Se configura solo después del inicio de sesión y es necesaria para el funcionamiento de la app.',
          'No contiene identificadores publicitarios ni datos de seguimiento.',
          'Se elimina automáticamente al cerrar sesión o eliminar su cuenta.',
          'No puede ser accedida por JavaScript (bandera httpOnly), reduciendo riesgos de seguridad.',
        ],
        note: 'No utilizamos cookies de terceros, cookies de análisis ni cookies publicitarias.',
      },
      {
        title: '8. Almacenamiento y Seguridad de Datos',
        body: 'Los datos se almacenan en una base de datos PostgreSQL segura alojada en Neon (región US East). Todas las conexiones usan cifrado TLS. Las contraseñas se almacenan como hashes bcrypt — nunca en texto plano. El acceso a la base de datos está restringido y monitoreado.',
      },
      {
        title: '9. Retención de Datos',
        body: 'Retenemos sus datos personales mientras su cuenta esté activa. Al eliminar su cuenta, todos los datos personales (nombre, correo, hash de contraseña, Apple ID, tokens de sesión) se eliminan permanentemente de nuestros sistemas en un plazo de 30 días. Las estadísticas de uso anonimizadas y no identificables pueden conservarse con fines analíticos.',
      },
      {
        title: '10. Permisos del Dispositivo',
        body: '',
        list: [
          'Cámara / Biblioteca de fotos: solicitada solo si elige subir una foto de perfil. No se usa para ningún otro propósito.',
          'Micrófono: solicitado solo para actividades educativas específicas basadas en voz. El audio no se graba ni almacena.',
        ],
        note: 'Puede revocar los permisos en cualquier momento en la Configuración de su dispositivo.',
      },
      {
        title: '11. Privacidad de los Niños',
        body: 'World Autistic está diseñado para apoyar a niños con trastorno del espectro autista. Las cuentas de menores deben ser creadas y gestionadas por un padre o tutor legal. No recopilamos intencionalmente información personal de niños menores de 13 años sin consentimiento parental verificado. Si cree que los datos de un niño fueron recopilados sin consentimiento, contáctenos inmediatamente en jfsimon.pro@gmail.com para su eliminación inmediata.',
      },
      {
        title: '12. Sus Derechos',
        body: 'Según la LGPD (Brasil) y el GDPR (donde aplique), usted tiene derecho a:',
        list: [
          'Acceder a los datos personales que tenemos sobre usted.',
          'Corregir datos inexactos.',
          'Solicitar la eliminación de sus datos (a través de Configuración → Eliminar cuenta, o contactándonos).',
          'Retirar el consentimiento para el procesamiento opcional de datos en cualquier momento.',
          'Presentar una queja ante la ANPD (Brasil) o la autoridad de protección de datos local.',
        ],
      },
      {
        title: '13. Cambios en esta Política',
        body: 'Podemos actualizar esta Política de Privacidad periódicamente. Cuando lo hagamos, revisaremos la fecha de "Última actualización" en la parte superior. El uso continuado de la app tras los cambios constituye la aceptación de la política actualizada.',
      },
      {
        title: '14. Contacto y Responsable del Tratamiento',
        body: 'Luminon Digital LTDA — Brasil\nResponsable del Tratamiento: Jaime Simon\nCorreo: jfsimon.pro@gmail.com',
      },
    ],
  },
};

const s = { color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' } as const;
const h2s = { fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' } as const;

export default function PrivacyPage() {
  const { language } = useLanguage();
  const c: LangContent = content[language as keyof ContentMap] ?? content.en;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <Link href="/signIn" style={{ color: '#4a90d9', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
          {c.back}
        </Link>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>{c.title}</h1>
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '2rem' }}>{c.updated}</p>

          {c.sections.map((sec: Section, i: number) => (
            <section key={i} style={{ marginBottom: '1.75rem' }}>
              <h2 style={h2s}>{sec.title}</h2>
              {sec.body && <p style={{ ...s, whiteSpace: 'pre-line' }}>{sec.body}</p>}
              {sec.list && (
                <ul style={{ ...s, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  {sec.list.map((item: string, j: number) => (
                    <li key={j} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              )}
              {sec.note && (
                <p style={{ ...s, marginTop: '0.75rem', fontStyle: 'italic' }}>{sec.note}</p>
              )}
            </section>
          ))}

          <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/terms" style={{ color: '#4a90d9', fontSize: '0.9rem', textDecoration: 'none' }}>
              {c.termsLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
