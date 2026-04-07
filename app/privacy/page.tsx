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
        body: 'World Autistic is operated by Luminon Digital LTDA, Brazil. We are committed to protecting your privacy and handling your personal data with transparency and care.\n\nData Controller: Jaime Simon\nEmail: jfsimon.pro@gmail.com',
      },
      {
        title: '2. Data We Collect',
        body: 'We collect only the data necessary to provide our services:',
        list: [
          'Account data: name, email address, and encrypted password when you register.',
          'Apple Sign In: if you sign in with Apple, we receive only what Apple shares (name and/or email).',
          'Educational progress: app interactions, activity completions, and learning progress within the platform.',
          'Subscription status: whether your account has an active subscription, processed via Hotmart.',
          'Push notification token: a browser/device endpoint stored when you enable push notifications. Used only to send app notifications.',
          'Session token: a secure httpOnly cookie to keep you signed in. Not used for advertising or tracking.',
          'Device permissions (on request): camera, photo library, and microphone — only when you explicitly grant access.',
        ],
        note: 'We do NOT collect location data, biometrics, contacts, advertising identifiers, or any data unrelated to the app\'s educational purpose.',
      },
      {
        title: '3. Health and Sensitive Data (LGPD Art. 11)',
        body: 'World Autistic is a platform designed for individuals with autism spectrum disorder (ASD). By using this platform, information related to a user\'s or their child\'s neurodevelopmental condition is implicitly associated with the account.\n\nThis constitutes health-related sensitive data ("dado sensível") under LGPD Art. 5, XIV and Art. 11. We handle this data with the highest level of protection:\n\n• We collect only what is necessary for the educational purpose of the platform.\n• We do not share health-related data with third parties for commercial, advertising, or research purposes.\n• Processing is based on explicit consent provided at account creation and on the necessity to provide the contracted educational service (LGPD Art. 11, I and II).\n• Parents and guardians are responsible for consenting on behalf of minor users.',
      },
      {
        title: '4. Why We Collect Each Data Point (Legal Basis — LGPD)',
        body: '',
        list: [
          'Name and email — Contract performance (Art. 7, V): necessary to create and manage your account.',
          'Password hash — Contract performance (Art. 7, V): necessary for secure authentication.',
          'Educational progress — Contract performance (Art. 7, V) + Legitimate interest (Art. 7, IX): to deliver and personalize the educational service.',
          'Subscription status — Contract performance (Art. 7, V): to verify access rights to paid content.',
          'Push notification token — Consent (Art. 7, I): collected only when you explicitly enable notifications; you can revoke at any time.',
          'Session cookie — Contract performance (Art. 7, V): technically required to keep you authenticated.',
          'Health-related data (ASD context) — Explicit consent (Art. 11, I) + Contract performance (Art. 11, II, a): necessary to provide the specialized educational service.',
        ],
      },
      {
        title: '5. How We Use Your Data',
        body: 'Your data is used exclusively to:',
        list: [
          'Authenticate you and keep your account secure.',
          'Personalize your educational experience within the app.',
          'Verify your active subscription.',
          'Send push notifications (only if you have enabled them).',
          'Respond to support requests.',
          'Send transactional emails (account-related only — no marketing without consent).',
        ],
        note: 'We do NOT sell, rent, or share your personal data with advertisers or third-party marketers.',
      },
      {
        title: '6. Third-Party Service Providers',
        body: 'To operate the service, we share data with the following processors, each bound by data protection agreements:',
        list: [
          'Neon (neon.tech) — PostgreSQL database hosting, United States (us-east-1). Stores all account and progress data.',
          'DigitalOcean — Application hosting, United States. Processes all web requests.',
          'Cloudinary — Cloud media platform, United States. Stores and serves the images and audio files of the educational content (frequencies) within the app.',
          'Hotmart — Payment and subscription platform. Processes subscription transactions and shares subscription status via webhook. Governed by Hotmart\'s own Privacy Policy.',
          'Apple Inc. — Authentication provider (Sign in with Apple). Governed by Apple\'s own Privacy Policy.',
          'Google / Gmail SMTP — Forwards support messages submitted through the in-app support form.',
        ],
        note: 'We do not share your data with any other third parties.',
      },
      {
        title: '7. International Data Transfer',
        body: 'Your data is stored and processed in the United States (Neon database, DigitalOcean servers). By using the App, you acknowledge this transfer outside Brazil. It is carried out under appropriate safeguards in compliance with LGPD Art. 33, based on contract performance necessity and your informed consent provided by accepting these policies.',
      },
      {
        title: '8. Cookies and Session Tokens',
        body: 'We use a single httpOnly cookie for authentication. This cookie:',
        list: [
          'Is set only after login and is required for the app to function.',
          'Does not contain advertising identifiers or tracking data.',
          'Is deleted automatically when you log out or delete your account.',
          'Cannot be accessed by JavaScript (httpOnly flag), reducing security risks.',
        ],
        note: 'We do not use third-party cookies, analytics cookies, or advertising cookies.',
      },
      {
        title: '9. Data Storage and Security',
        body: 'Data is stored in a PostgreSQL database hosted on Neon (US East). All connections use TLS encryption. Passwords are stored as bcrypt hashes — never in plain text. Access is restricted and monitored. Sensitive health-related data is subject to the same technical security measures.',
      },
      {
        title: '10. Data Retention',
        body: 'We retain your data while your account is active. When you delete your account, all personal data (name, email, password hash, Apple ID, push token, educational progress, subscription records) is permanently deleted within 30 days. Anonymized, non-identifiable statistics may be retained for analytics purposes.',
      },
      {
        title: '11. Device Permissions',
        body: '',
        list: [
          'Camera / Photo Library: requested only if you choose to upload a profile photo.',
          'Microphone: requested only for specific voice-based educational activities. Audio is not recorded or stored.',
          'Push Notifications: requested when you choose to enable notifications. You can revoke at any time in device Settings.',
        ],
      },
      {
        title: '12. Children\'s Privacy',
        body: 'World Autistic is designed to support children with autism spectrum disorder. Accounts for minors must be created and managed by a parent or legal guardian. We do not knowingly collect personal information from children under 13 without verified parental consent. If you believe a child\'s data was collected without consent, contact us at jfsimon.pro@gmail.com for immediate deletion.',
      },
      {
        title: '13. Your Rights (LGPD Art. 18)',
        body: 'You have the right to:',
        list: [
          'Confirm whether we process your data.',
          'Access the personal data we hold about you.',
          'Correct inaccurate or incomplete data.',
          'Anonymize, block, or delete unnecessary or excessive data.',
          'Request data portability.',
          'Delete data processed with your consent.',
          'Information about third parties with whom we share your data.',
          'Withdraw consent at any time.',
          'File a complaint with the ANPD (Autoridade Nacional de Proteção de Dados).',
        ],
        note: 'To exercise any of these rights, contact us at jfsimon.pro@gmail.com or use Settings → Delete Account for account deletion.',
      },
      {
        title: '14. Data Protection Officer (Encarregado — LGPD Art. 41)',
        body: 'In accordance with LGPD Art. 41, we have designated a Data Protection Officer (Encarregado de Dados) responsible for receiving communications from data subjects and the ANPD:\n\nName: Jaime Simon\nEmail: jfsimon.pro@gmail.com\n\nYou may contact the Encarregado at any time to exercise your rights, submit complaints, or request information about how your data is processed.',
      },
      {
        title: '15. Security Incidents and Breach Notification (LGPD Art. 48)',
        body: 'In the event of a security incident that may pose risk or harm to data subjects, we will:\n\n• Notify the ANPD (Autoridade Nacional de Proteção de Dados) within 2 business days of becoming aware of the incident, as required by LGPD Art. 48.\n• Notify affected users promptly via email to the address registered on their account.\n• The notification will include: nature of the affected data, information about the data subjects involved, technical and security measures applied, and the risks related to the incident.',
      },
      {
        title: '16. Users in the European Union (GDPR)',
        body: 'If you are located in the European Union or European Economic Area, please note:\n\n• Brazil does not currently have an EU adequacy decision. Data transfers from the EU to Brazil are carried out based on your explicit consent and the necessity of contract performance.\n• You have the right to lodge a complaint with your local data protection supervisory authority.\n• We do not have a formal EU representative as required by GDPR Art. 27. If you are an EU resident regularly using this service, we recommend contacting us directly at jfsimon.pro@gmail.com for any data protection concerns.\n• The legal bases for processing your data remain as described in Section 4, and your rights under GDPR (access, erasure, portability, restriction, objection) are honored as described in Section 13.',
      },
      {
        title: '17. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect any changes. Continued use of the app after changes constitutes acceptance of the updated policy.',
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
        body: 'O World Autistic é operado pela Luminon Digital LTDA, Brasil. Estamos comprometidos em proteger sua privacidade e tratar seus dados pessoais com transparência e cuidado.\n\nControlador de Dados: Jaime Simon\nE-mail: jfsimon.pro@gmail.com',
      },
      {
        title: '2. Dados que Coletamos',
        body: 'Coletamos apenas os dados necessários para fornecer nossos serviços:',
        list: [
          'Dados da conta: nome, endereço de e-mail e senha criptografada ao criar uma conta.',
          'Login com Apple: se usar o Sign in with Apple, recebemos apenas o que a Apple compartilha (nome e/ou e-mail).',
          'Progresso educacional: interações com o app, atividades concluídas e progresso de aprendizado na plataforma.',
          'Status de assinatura: se sua conta possui assinatura ativa, processado via Hotmart.',
          'Token de notificação push: endpoint do navegador/dispositivo armazenado quando você ativa as notificações. Usado apenas para envio de notificações do app.',
          'Token de sessão: cookie httpOnly seguro para manter você conectado. Não usado para publicidade ou rastreamento.',
          'Permissões do dispositivo (sob solicitação): câmera, biblioteca de fotos e microfone — apenas quando você concede acesso explicitamente.',
        ],
        note: 'Não coletamos dados de localização, biometria, contatos, identificadores de publicidade ou qualquer dado não relacionado ao propósito educacional do app.',
      },
      {
        title: '3. Dados de Saúde e Dados Sensíveis (LGPD Art. 11)',
        body: 'O World Autistic é uma plataforma voltada para pessoas com Transtorno do Espectro Autista (TEA). Ao usar a plataforma, informações relacionadas à condição neurodesenvolvmental do usuário ou de seu filho ficam implicitamente associadas à conta.\n\nIsso constitui dado sensível de saúde nos termos do Art. 5º, XIV e Art. 11 da LGPD. Tratamos esses dados com o mais alto nível de proteção:\n\n• Coletamos apenas o estritamente necessário para a finalidade educacional da plataforma.\n• Não compartilhamos dados relacionados à saúde com terceiros para fins comerciais, publicitários ou de pesquisa.\n• O tratamento se baseia no consentimento explícito fornecido no momento do cadastro e na necessidade de execução do serviço educacional contratado (LGPD Art. 11, I e II).\n• Pais e responsáveis são responsáveis pelo consentimento em nome dos usuários menores.',
      },
      {
        title: '4. Por Que Coletamos Cada Dado (Base Legal — LGPD)',
        body: '',
        list: [
          'Nome e e-mail — Execução de contrato (Art. 7º, V): necessário para criar e gerenciar sua conta.',
          'Hash de senha — Execução de contrato (Art. 7º, V): necessário para autenticação segura.',
          'Progresso educacional — Execução de contrato (Art. 7º, V) + Interesse legítimo (Art. 7º, IX): para entregar e personalizar o serviço educacional.',
          'Status de assinatura — Execução de contrato (Art. 7º, V): para verificar direitos de acesso ao conteúdo pago.',
          'Token de notificação push — Consentimento (Art. 7º, I): coletado apenas quando você ativa as notificações explicitamente; revogável a qualquer momento.',
          'Cookie de sessão — Execução de contrato (Art. 7º, V): tecnicamente necessário para manter você autenticado.',
          'Dado sensível (contexto de TEA) — Consentimento explícito (Art. 11, I) + Execução de contrato (Art. 11, II, a): necessário para fornecer o serviço educacional especializado.',
        ],
      },
      {
        title: '5. Como Usamos Seus Dados',
        body: 'Seus dados são utilizados exclusivamente para:',
        list: [
          'Autenticar você e manter sua conta segura.',
          'Personalizar sua experiência educacional no app.',
          'Verificar sua assinatura ativa.',
          'Enviar notificações push (somente se você as tiver ativado).',
          'Responder a solicitações de suporte.',
          'Enviar e-mails transacionais (somente relacionados à conta — sem marketing sem consentimento).',
        ],
        note: 'Não vendemos, alugamos ou compartilhamos seus dados pessoais com anunciantes ou profissionais de marketing terceiros.',
      },
      {
        title: '6. Terceiros Processadores de Dados',
        body: 'Para operar o serviço, compartilhamos dados com os seguintes processadores, cada um vinculado por acordos de proteção de dados:',
        list: [
          'Neon (neon.tech) — Hospedagem do banco de dados PostgreSQL, Estados Unidos (us-east-1). Armazena todos os dados de conta e progresso.',
          'DigitalOcean — Hospedagem da aplicação, Estados Unidos. Processa todas as requisições web.',
          'Cloudinary — Plataforma de mídia em nuvem, Estados Unidos. Armazena e serve as imagens e áudios do conteúdo educacional (frequências) do app.',
          'Hotmart — Plataforma de pagamento e assinaturas. Processa transações de assinatura e compartilha o status via webhook. Regido pela própria Política de Privacidade da Hotmart.',
          'Apple Inc. — Provedor de autenticação (Sign in with Apple). Regido pela própria Política de Privacidade da Apple.',
          'Google / Gmail SMTP — Encaminha mensagens de suporte enviadas pelo formulário dentro do app.',
        ],
        note: 'Não compartilhamos seus dados com nenhum outro terceiro.',
      },
      {
        title: '7. Transferência Internacional de Dados',
        body: 'Seus dados são armazenados e processados nos Estados Unidos (banco de dados Neon, servidores DigitalOcean). Ao usar o app, você reconhece essa transferência para fora do Brasil. Ela é realizada com salvaguardas adequadas em conformidade com o Art. 33 da LGPD, com base na necessidade de execução do contrato e no consentimento informado ao aceitar estas políticas.',
      },
      {
        title: '8. Cookies e Tokens de Sessão',
        body: 'Usamos um único cookie httpOnly para autenticação. Esse cookie:',
        list: [
          'É definido somente após o login e é necessário para o funcionamento do app.',
          'Não contém identificadores de publicidade ou dados de rastreamento.',
          'É excluído automaticamente ao fazer logout ou excluir sua conta.',
          'Não pode ser acessado por JavaScript (flag httpOnly), reduzindo riscos de segurança.',
        ],
        note: 'Não utilizamos cookies de terceiros, cookies de analytics ou cookies de publicidade.',
      },
      {
        title: '9. Armazenamento e Segurança dos Dados',
        body: 'Os dados são armazenados em banco PostgreSQL hospedado na Neon (US East). Todas as conexões usam criptografia TLS. As senhas são armazenadas como hashes bcrypt — nunca em texto simples. O acesso é restrito e monitorado. Os dados sensíveis relacionados à saúde estão sujeitos às mesmas medidas técnicas de segurança.',
      },
      {
        title: '10. Retenção de Dados',
        body: 'Mantemos seus dados enquanto sua conta estiver ativa. Ao excluir a conta, todos os dados pessoais (nome, e-mail, hash de senha, Apple ID, token push, progresso educacional, registros de assinatura) são permanentemente deletados em até 30 dias. Estatísticas anonimizadas e não identificáveis podem ser mantidas para fins analíticos.',
      },
      {
        title: '11. Permissões do Dispositivo',
        body: '',
        list: [
          'Câmera / Biblioteca de fotos: solicitada apenas se você optar por fazer upload de uma foto de perfil.',
          'Microfone: solicitado apenas para atividades educacionais específicas baseadas em voz. O áudio não é gravado nem armazenado.',
          'Notificações push: solicitadas quando você escolhe ativar as notificações. Você pode revogar a qualquer momento nas Configurações do dispositivo.',
        ],
      },
      {
        title: '12. Privacidade das Crianças',
        body: 'O World Autistic foi desenvolvido para apoiar crianças com Transtorno do Espectro Autista. Contas para menores devem ser criadas e gerenciadas por um pai ou responsável legal. Não coletamos intencionalmente dados de crianças menores de 13 anos sem consentimento parental verificado. Se acreditar que dados de uma criança foram coletados sem consentimento, entre em contato pelo jfsimon.pro@gmail.com para exclusão imediata.',
      },
      {
        title: '13. Seus Direitos (LGPD Art. 18)',
        body: 'Você tem o direito de:',
        list: [
          'Confirmar se realizamos o tratamento dos seus dados.',
          'Acessar os dados pessoais que temos sobre você.',
          'Corrigir dados incompletos, inexatos ou desatualizados.',
          'Anonimizar, bloquear ou eliminar dados desnecessários ou excessivos.',
          'Solicitar a portabilidade dos dados.',
          'Eliminar dados tratados com base no seu consentimento.',
          'Obter informações sobre os terceiros com quem compartilhamos seus dados.',
          'Revogar o consentimento a qualquer momento.',
          'Peticionar à ANPD (Autoridade Nacional de Proteção de Dados).',
        ],
        note: 'Para exercer esses direitos, entre em contato pelo jfsimon.pro@gmail.com ou use Configurações → Excluir Conta para solicitação de exclusão.',
      },
      {
        title: '14. Encarregado de Dados (LGPD Art. 41)',
        body: 'Nos termos do Art. 41 da LGPD, designamos um Encarregado de Dados responsável por receber comunicações dos titulares e da ANPD:\n\nNome: Jaime Simon\nE-mail: jfsimon.pro@gmail.com\n\nVocê pode contatar o Encarregado a qualquer momento para exercer seus direitos, registrar reclamações ou solicitar informações sobre o tratamento de seus dados.',
      },
      {
        title: '15. Incidentes de Segurança e Notificação (LGPD Art. 48)',
        body: 'Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, iremos:\n\n• Notificar a ANPD (Autoridade Nacional de Proteção de Dados) em até 2 dias úteis após a ciência do incidente, conforme exige o Art. 48 da LGPD.\n• Notificar os usuários afetados prontamente pelo e-mail cadastrado na conta.\n• A notificação conterá: natureza dos dados afetados, informações sobre os titulares envolvidos, medidas técnicas e de segurança adotadas, e os riscos relacionados ao incidente.',
      },
      {
        title: '16. Usuários da União Europeia (GDPR)',
        body: 'Se você está localizado na União Europeia ou no Espaço Econômico Europeu, observe:\n\n• O Brasil ainda não possui uma decisão de adequação da UE. As transferências de dados da UE para o Brasil são realizadas com base no seu consentimento explícito e na necessidade de execução do contrato.\n• Você tem o direito de registrar reclamação junto à autoridade supervisora de proteção de dados do seu país.\n• Não possuímos representante formal na UE conforme exige o Art. 27 do GDPR. Se você é residente na UE e usa este serviço regularmente, recomendamos contato direto pelo jfsimon.pro@gmail.com para questões de proteção de dados.\n• As bases legais para tratamento dos seus dados permanecem conforme descrito na Seção 4, e seus direitos sob o GDPR (acesso, exclusão, portabilidade, restrição, oposição) são garantidos conforme descrito na Seção 13.',
      },
      {
        title: '17. Alterações nesta Política',
        body: 'Podemos atualizar esta Política periodicamente. A data de "Última atualização" no topo refletirá qualquer alteração. O uso continuado do app após as alterações constitui aceitação da política atualizada.',
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
        body: 'World Autistic es operado por Luminon Digital LTDA, Brasil. Estamos comprometidos con proteger su privacidad y manejar sus datos personales con transparencia y cuidado.\n\nResponsable del Tratamiento: Jaime Simon\nCorreo: jfsimon.pro@gmail.com',
      },
      {
        title: '2. Datos que Recopilamos',
        body: 'Recopilamos solo los datos necesarios para brindar nuestros servicios:',
        list: [
          'Datos de cuenta: nombre, correo electrónico y contraseña cifrada al registrarse.',
          'Inicio de sesión con Apple: si usa Sign in with Apple, recibimos solo lo que Apple comparte (nombre y/o correo).',
          'Progreso educativo: interacciones con la app, actividades completadas y progreso de aprendizaje en la plataforma.',
          'Estado de suscripción: si su cuenta tiene una suscripción activa, procesada a través de Hotmart.',
          'Token de notificación push: endpoint del navegador/dispositivo almacenado cuando activa las notificaciones. Solo se usa para enviar notificaciones de la app.',
          'Token de sesión: cookie httpOnly segura para mantenerlo conectado. No se usa para publicidad ni seguimiento.',
          'Permisos del dispositivo (bajo solicitud): cámara, biblioteca de fotos y micrófono — solo cuando usted otorga acceso explícitamente.',
        ],
        note: 'No recopilamos datos de ubicación, biometría, contactos, identificadores publicitarios ni datos no relacionados con el propósito educativo de la app.',
      },
      {
        title: '3. Datos de Salud y Datos Sensibles (LGPD Art. 11)',
        body: 'World Autistic es una plataforma diseñada para personas con Trastorno del Espectro Autista (TEA). Al usar la plataforma, información relacionada con la condición del neurodesarrollo del usuario o de su hijo queda implícitamente asociada a la cuenta.\n\nEsto constituye dato sensible de salud según el Art. 5, XIV y Art. 11 de la LGPD. Tratamos estos datos con el más alto nivel de protección:\n\n• Recopilamos solo lo estrictamente necesario para el propósito educativo de la plataforma.\n• No compartimos datos relacionados con la salud con terceros para fines comerciales, publicitarios o de investigación.\n• El tratamiento se basa en el consentimiento explícito otorgado al momento del registro y en la necesidad de ejecutar el servicio educativo contratado (LGPD Art. 11, I y II).\n• Los padres y tutores son responsables del consentimiento en nombre de los usuarios menores.',
      },
      {
        title: '4. Por Qué Recopilamos Cada Dato (Base Legal — LGPD)',
        body: '',
        list: [
          'Nombre y correo — Ejecución de contrato (Art. 7, V): necesario para crear y gestionar su cuenta.',
          'Hash de contraseña — Ejecución de contrato (Art. 7, V): necesario para autenticación segura.',
          'Progreso educativo — Ejecución de contrato (Art. 7, V) + Interés legítimo (Art. 7, IX): para entregar y personalizar el servicio educativo.',
          'Estado de suscripción — Ejecución de contrato (Art. 7, V): para verificar derechos de acceso al contenido de pago.',
          'Token de notificación push — Consentimiento (Art. 7, I): recopilado solo cuando activa las notificaciones; revocable en cualquier momento.',
          'Cookie de sesión — Ejecución de contrato (Art. 7, V): técnicamente necesario para mantenerlo autenticado.',
          'Dato sensible (contexto de TEA) — Consentimiento explícito (Art. 11, I) + Ejecución de contrato (Art. 11, II, a): necesario para brindar el servicio educativo especializado.',
        ],
      },
      {
        title: '5. Cómo Usamos sus Datos',
        body: 'Sus datos se usan exclusivamente para:',
        list: [
          'Autenticarlo y mantener su cuenta segura.',
          'Personalizar su experiencia educativa en la app.',
          'Verificar su suscripción activa.',
          'Enviar notificaciones push (solo si las ha activado).',
          'Responder solicitudes de soporte.',
          'Enviar correos transaccionales (solo relacionados con la cuenta — sin marketing sin consentimiento).',
        ],
        note: 'No vendemos, alquilamos ni compartimos sus datos personales con anunciantes ni terceros de marketing.',
      },
      {
        title: '6. Proveedores de Servicios Externos',
        body: 'Para operar el servicio, compartimos datos con los siguientes procesadores, cada uno sujeto a acuerdos de protección de datos:',
        list: [
          'Neon (neon.tech) — Alojamiento de base de datos PostgreSQL, Estados Unidos (us-east-1). Almacena todos los datos de cuenta y progreso.',
          'DigitalOcean — Alojamiento de la aplicación, Estados Unidos. Procesa todas las solicitudes web.',
          'Cloudinary — Plataforma de medios en la nube, Estados Unidos. Almacena y sirve las imágenes y audios del contenido educativo (frecuencias) de la app.',
          'Hotmart — Plataforma de pagos y suscripciones. Procesa transacciones de suscripción y comparte el estado mediante webhook. Regido por la Política de Privacidad de Hotmart.',
          'Apple Inc. — Proveedor de autenticación (Sign in with Apple). Regido por la Política de Privacidad de Apple.',
          'Google / Gmail SMTP — Reenvía mensajes de soporte enviados a través del formulario dentro de la app.',
        ],
        note: 'No compartimos sus datos con ningún otro tercero.',
      },
      {
        title: '7. Transferencia Internacional de Datos',
        body: 'Sus datos se almacenan y procesan en Estados Unidos (base de datos Neon, servidores DigitalOcean). Al usar la app, usted reconoce esta transferencia fuera de Brasil. Se realiza con salvaguardas adecuadas conforme al Art. 33 de la LGPD, con base en la necesidad de ejecución del contrato y su consentimiento informado al aceptar estas políticas.',
      },
      {
        title: '8. Cookies y Tokens de Sesión',
        body: 'Usamos una única cookie httpOnly para autenticación. Esta cookie:',
        list: [
          'Se configura solo después del inicio de sesión y es necesaria para el funcionamiento de la app.',
          'No contiene identificadores publicitarios ni datos de seguimiento.',
          'Se elimina automáticamente al cerrar sesión o eliminar su cuenta.',
          'No puede ser accedida por JavaScript (bandera httpOnly), reduciendo riesgos.',
        ],
        note: 'No usamos cookies de terceros, analytics ni publicidad.',
      },
      {
        title: '9. Almacenamiento y Seguridad',
        body: 'Datos almacenados en PostgreSQL en Neon (US East). Conexiones con cifrado TLS. Contraseñas como hashes bcrypt, nunca en texto plano. Acceso restringido y monitoreado. Los datos sensibles de salud están sujetos a las mismas medidas técnicas de seguridad.',
      },
      {
        title: '10. Retención de Datos',
        body: 'Retenemos sus datos mientras su cuenta esté activa. Al eliminarla, todos los datos personales (nombre, correo, hash de contraseña, Apple ID, token push, progreso educativo, registros de suscripción) se eliminan permanentemente en 30 días. Estadísticas anonimizadas pueden conservarse para análisis.',
      },
      {
        title: '11. Permisos del Dispositivo',
        body: '',
        list: [
          'Cámara / Biblioteca de fotos: solo si elige subir una foto de perfil.',
          'Micrófono: solo para actividades educativas específicas de voz. El audio no se graba ni almacena.',
          'Notificaciones push: solicitadas cuando activa las notificaciones. Puede revocarlas en Configuración del dispositivo.',
        ],
      },
      {
        title: '12. Privacidad de los Niños',
        body: 'World Autistic está diseñado para niños con Trastorno del Espectro Autista. Las cuentas de menores deben ser creadas por un padre o tutor legal. No recopilamos datos de menores de 13 años sin consentimiento parental verificado. Contáctenos en jfsimon.pro@gmail.com si cree que se recopilaron datos sin consentimiento.',
      },
      {
        title: '13. Sus Derechos (LGPD Art. 18)',
        body: 'Usted tiene derecho a:',
        list: [
          'Confirmar si realizamos el tratamiento de sus datos.',
          'Acceder a los datos personales que tenemos sobre usted.',
          'Corregir datos incompletos, inexactos o desactualizados.',
          'Anonimizar, bloquear o eliminar datos innecesarios o excesivos.',
          'Solicitar la portabilidad de los datos.',
          'Eliminar datos tratados con base en su consentimiento.',
          'Obtener información sobre terceros con quienes compartimos sus datos.',
          'Revocar el consentimiento en cualquier momento.',
          'Presentar una queja ante la ANPD (Autoridade Nacional de Proteção de Dados).',
        ],
        note: 'Para ejercer estos derechos, contáctenos en jfsimon.pro@gmail.com o use Configuración → Eliminar cuenta.',
      },
      {
        title: '14. Responsable de Protección de Datos (Encarregado — LGPD Art. 41)',
        body: 'De conformidad con el Art. 41 de la LGPD, hemos designado un Responsable de Protección de Datos (Encarregado de Dados) para recibir comunicaciones de los titulares y la ANPD:\n\nNombre: Jaime Simon\nCorreo: jfsimon.pro@gmail.com\n\nPuede contactar al Responsable en cualquier momento para ejercer sus derechos, presentar quejas o solicitar información sobre el tratamiento de sus datos.',
      },
      {
        title: '15. Incidentes de Seguridad y Notificación (LGPD Art. 48)',
        body: 'En caso de un incidente de seguridad que pueda generar riesgo o daño a los titulares, procederemos a:\n\n• Notificar a la ANPD (Autoridade Nacional de Proteção de Dados) dentro de los 2 días hábiles posteriores a tomar conocimiento del incidente, según exige el Art. 48 de la LGPD.\n• Notificar a los usuarios afectados de forma oportuna al correo electrónico registrado en su cuenta.\n• La notificación incluirá: naturaleza de los datos afectados, información sobre los titulares involucrados, medidas técnicas y de seguridad adoptadas, y los riesgos relacionados con el incidente.',
      },
      {
        title: '16. Usuarios de la Unión Europea (GDPR)',
        body: 'Si usted se encuentra en la Unión Europea o el Espacio Económico Europeo, tenga en cuenta:\n\n• Brasil aún no cuenta con una decisión de adecuación de la UE. Las transferencias de datos de la UE a Brasil se realizan con base en su consentimiento explícito y la necesidad de ejecución del contrato.\n• Tiene derecho a presentar una queja ante la autoridad supervisora de protección de datos de su país.\n• No contamos con un representante formal en la UE conforme al Art. 27 del GDPR. Si usted es residente en la UE y usa este servicio regularmente, le recomendamos contactarnos directamente en jfsimon.pro@gmail.com.\n• Las bases legales para el tratamiento de sus datos son las descritas en la Sección 4, y sus derechos bajo el GDPR (acceso, supresión, portabilidad, limitación, oposición) se garantizan conforme a la Sección 13.',
      },
      {
        title: '17. Cambios en esta Política',
        body: 'Podemos actualizar esta Política periódicamente. La fecha de "Última actualización" al inicio reflejará los cambios. El uso continuado de la app tras los cambios constituye aceptación de la política actualizada.',
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
              {sec.note && <p style={{ ...s, marginTop: '0.75rem', fontStyle: 'italic' }}>{sec.note}</p>}
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
