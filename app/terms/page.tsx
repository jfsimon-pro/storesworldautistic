'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

type Section = { title: string; body: string; list?: string[]; note?: string };
type LangContent = { title: string; updated: string; back: string; privacyLink: string; sections: Section[] };
type ContentMap = { pt: LangContent; en: LangContent; es: LangContent };

const content: ContentMap = {
  en: {
    title: 'Terms of Use',
    updated: 'Last updated: March 2026',
    back: '← Back',
    privacyLink: 'Privacy Policy',
    sections: [
      {
        title: '1. Acceptance of Terms',
        body: 'By downloading, installing, or using the World Autistic app ("the App"), you agree to be bound by these Terms of Use. If you do not agree, do not use the App. These terms apply to all users, including parents and guardians who register on behalf of a child.',
      },
      {
        title: '2. Description of Service',
        body: 'World Autistic is an educational platform designed to support the development of children and individuals with autism spectrum disorder (ASD). The App provides educational activities, resources, and tools to assist learning and communication skills. The App is provided by Luminon Digital LTDA, Brazil.',
      },
      {
        title: '3. Eligibility and Parental Consent',
        body: 'The App is intended for use under the supervision of parents, guardians, or educators. Users under the age of 13 must have verifiable parental or guardian consent before using the App. By creating an account on behalf of a child, you confirm that you are that child\'s parent or legal guardian and consent to these Terms on their behalf.',
      },
      {
        title: '4. Account Responsibility',
        body: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us immediately at jfsimon.pro@gmail.com if you suspect unauthorized access to your account.',
      },
      {
        title: '5. Acceptable Use',
        body: 'You agree not to:',
        list: [
          'Use the App for any unlawful purpose or in violation of these Terms.',
          'Attempt to gain unauthorized access to any part of the App or its infrastructure.',
          'Reverse-engineer, decompile, or attempt to extract the source code of the App.',
          'Upload or transmit harmful, offensive, or inappropriate content.',
          'Impersonate any person or entity, or misrepresent your affiliation with any person or entity.',
          'Use the App in any way that could damage, disable, or impair its functionality.',
        ],
      },
      {
        title: '6. Intellectual Property',
        body: 'All content, features, and functionality of the App — including but not limited to text, graphics, logos, icons, and educational materials — are the exclusive property of Luminon Digital LTDA and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
      },
      {
        title: '7. Disclaimer of Medical Advice',
        body: 'World Autistic is an educational tool and is NOT a medical device, therapy service, or substitute for professional medical, psychological, or therapeutic advice. The App does not diagnose, treat, or cure any condition. Always consult qualified healthcare professionals for medical guidance regarding autism spectrum disorder.',
      },
      {
        title: '8. No Warranty',
        body: 'The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be error-free, uninterrupted, or free of viruses or other harmful components.',
      },
      {
        title: '9. Limitation of Liability',
        body: 'To the fullest extent permitted by applicable law, Luminon Digital LTDA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of (or inability to use) the App, including but not limited to loss of data, service interruptions, or any reliance on content provided within the App. Our total liability to you shall not exceed the amount you paid (if any) for the App in the twelve months preceding the claim.',
      },
      {
        title: '10. Indemnification',
        body: 'You agree to indemnify and hold harmless Luminon Digital LTDA and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the App, your violation of these Terms, or your violation of any third-party rights.',
      },
      {
        title: '11. Service Availability',
        body: 'We strive to keep the App available at all times but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of the App at any time, with or without notice, without liability to you.',
      },
      {
        title: '12. Account Termination',
        body: 'You may delete your account at any time via Settings → Delete Account. We reserve the right to suspend or terminate accounts that violate these Terms, without prior notice. Upon termination, your right to use the App ceases immediately and your data will be deleted in accordance with our Privacy Policy.',
      },
      {
        title: '13. Governing Law',
        body: 'These Terms are governed by the laws of Brazil. Any disputes arising from these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts of Brazil. Users outside Brazil acknowledge that their data may be processed under Brazilian law, including the LGPD (Lei Geral de Proteção de Dados).',
      },
      {
        title: '14. Changes to Terms',
        body: 'We reserve the right to update these Terms at any time. Changes will be posted within the App with a revised "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated Terms.',
      },
      {
        title: '15. Contact',
        body: 'Luminon Digital LTDA — Brazil\nEmail: jfsimon.pro@gmail.com',
      },
    ],
  },
  pt: {
    title: 'Termos de Uso',
    updated: 'Última atualização: março de 2026',
    back: '← Voltar',
    privacyLink: 'Política de Privacidade',
    sections: [
      {
        title: '1. Aceitação dos Termos',
        body: 'Ao baixar, instalar ou usar o aplicativo World Autistic ("o App"), você concorda em ficar vinculado a estes Termos de Uso. Se você não concordar, não use o App. Estes termos se aplicam a todos os usuários, incluindo pais e responsáveis que se cadastram em nome de uma criança.',
      },
      {
        title: '2. Descrição do Serviço',
        body: 'O World Autistic é uma plataforma educacional desenvolvida para apoiar o desenvolvimento de crianças e indivíduos com transtorno do espectro autista (TEA). O App oferece atividades educacionais, recursos e ferramentas para auxiliar habilidades de aprendizado e comunicação. O App é fornecido pela Luminon Digital LTDA, Brasil.',
      },
      {
        title: '3. Elegibilidade e Consentimento Parental',
        body: 'O App é destinado ao uso sob supervisão de pais, responsáveis ou educadores. Usuários menores de 13 anos devem ter consentimento verificável dos pais ou responsáveis antes de usar o App. Ao criar uma conta em nome de uma criança, você confirma ser o pai ou responsável legal e consente com estes Termos em seu nome.',
      },
      {
        title: '4. Responsabilidade da Conta',
        body: 'Você é responsável por manter a confidencialidade das credenciais da sua conta e por todas as atividades que ocorrem sob ela. Você deve nos notificar imediatamente pelo jfsimon.pro@gmail.com caso suspeite de acesso não autorizado à sua conta.',
      },
      {
        title: '5. Uso Aceitável',
        body: 'Você concorda em não:',
        list: [
          'Usar o App para qualquer finalidade ilegal ou em violação destes Termos.',
          'Tentar obter acesso não autorizado a qualquer parte do App ou sua infraestrutura.',
          'Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte do App.',
          'Fazer upload ou transmitir conteúdo prejudicial, ofensivo ou inadequado.',
          'Personificar qualquer pessoa ou entidade, ou deturpar sua afiliação.',
          'Usar o App de qualquer forma que possa danificar, desabilitar ou prejudicar sua funcionalidade.',
        ],
      },
      {
        title: '6. Propriedade Intelectual',
        body: 'Todo o conteúdo, funcionalidades e recursos do App — incluindo, mas não se limitando a textos, gráficos, logotipos, ícones e materiais educacionais — são de propriedade exclusiva da Luminon Digital LTDA e estão protegidos pelas leis de propriedade intelectual aplicáveis. Você não pode reproduzir, distribuir ou criar obras derivadas sem nossa permissão expressa por escrito.',
      },
      {
        title: '7. Isenção de Responsabilidade Médica',
        body: 'O World Autistic é uma ferramenta educacional e NÃO é um dispositivo médico, serviço terapêutico ou substituto para aconselhamento médico, psicológico ou terapêutico profissional. O App não diagnostica, trata ou cura nenhuma condição. Sempre consulte profissionais de saúde qualificados para orientação médica sobre o transtorno do espectro autista.',
      },
      {
        title: '8. Ausência de Garantias',
        body: 'O App é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a garantias de comercialização, adequação a uma finalidade específica ou não violação. Não garantimos que o App será livre de erros, ininterrupto ou livre de vírus ou outros componentes prejudiciais.',
      },
      {
        title: '9. Limitação de Responsabilidade',
        body: 'Na máxima extensão permitida pela lei aplicável, a Luminon Digital LTDA não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso (ou impossibilidade de uso) do App, incluindo, mas não se limitando a perda de dados, interrupções de serviço ou qualquer dependência de conteúdo fornecido pelo App. Nossa responsabilidade total para com você não excederá o valor pago (se houver) pelo App nos doze meses anteriores à reclamação.',
      },
      {
        title: '10. Indenização',
        body: 'Você concorda em indenizar e isentar a Luminon Digital LTDA e seus diretores, funcionários e agentes de quaisquer reclamações, danos, perdas ou despesas (incluindo honorários advocatícios) decorrentes do seu uso do App, violação destes Termos ou violação de direitos de terceiros.',
      },
      {
        title: '11. Disponibilidade do Serviço',
        body: 'Nos esforçamos para manter o App disponível o tempo todo, mas não garantimos acesso ininterrupto. Reservamos o direito de modificar, suspender ou descontinuar qualquer parte do App a qualquer momento, com ou sem aviso prévio, sem responsabilidade para com você.',
      },
      {
        title: '12. Encerramento de Conta',
        body: 'Você pode excluir sua conta a qualquer momento via Configurações → Excluir Conta. Reservamos o direito de suspender ou encerrar contas que violem estes Termos, sem aviso prévio. Após o encerramento, seu direito de usar o App cessa imediatamente e seus dados serão excluídos conforme nossa Política de Privacidade.',
      },
      {
        title: '13. Lei Aplicável',
        body: 'Estes Termos são regidos pelas leis do Brasil. Quaisquer disputas decorrentes destes Termos ou do uso do App estarão sujeitas à jurisdição exclusiva dos tribunais do Brasil. Usuários fora do Brasil reconhecem que seus dados podem ser processados sob a lei brasileira, incluindo a LGPD (Lei Geral de Proteção de Dados).',
      },
      {
        title: '14. Alterações nos Termos',
        body: 'Reservamos o direito de atualizar estes Termos a qualquer momento. As alterações serão publicadas no App com uma data de "Última atualização" revisada. O uso continuado do App após as alterações constitui aceitação dos Termos atualizados.',
      },
      {
        title: '15. Contato',
        body: 'Luminon Digital LTDA — Brasil\nE-mail: jfsimon.pro@gmail.com',
      },
    ],
  },
  es: {
    title: 'Términos de Uso',
    updated: 'Última actualización: marzo de 2026',
    back: '← Volver',
    privacyLink: 'Política de Privacidad',
    sections: [
      {
        title: '1. Aceptación de los Términos',
        body: 'Al descargar, instalar o usar la aplicación World Autistic ("la App"), usted acepta quedar vinculado por estos Términos de Uso. Si no está de acuerdo, no use la App. Estos términos se aplican a todos los usuarios, incluidos padres y tutores que se registran en nombre de un niño.',
      },
      {
        title: '2. Descripción del Servicio',
        body: 'World Autistic es una plataforma educativa diseñada para apoyar el desarrollo de niños e individuos con trastorno del espectro autista (TEA). La App ofrece actividades educativas, recursos y herramientas para asistir habilidades de aprendizaje y comunicación. La App es provista por Luminon Digital LTDA, Brasil.',
      },
      {
        title: '3. Elegibilidad y Consentimiento Parental',
        body: 'La App está destinada para uso bajo la supervisión de padres, tutores o educadores. Los usuarios menores de 13 años deben tener consentimiento verificable de sus padres o tutores antes de usar la App. Al crear una cuenta en nombre de un niño, usted confirma ser el padre o tutor legal y acepta estos Términos en su nombre.',
      },
      {
        title: '4. Responsabilidad de la Cuenta',
        body: 'Usted es responsable de mantener la confidencialidad de sus credenciales de cuenta y de todas las actividades que ocurran bajo ella. Debe notificarnos de inmediato en jfsimon.pro@gmail.com si sospecha de acceso no autorizado a su cuenta.',
      },
      {
        title: '5. Uso Aceptable',
        body: 'Usted acepta no:',
        list: [
          'Usar la App para cualquier propósito ilegal o en violación de estos Términos.',
          'Intentar obtener acceso no autorizado a cualquier parte de la App o su infraestructura.',
          'Realizar ingeniería inversa, descompilar o intentar extraer el código fuente de la App.',
          'Cargar o transmitir contenido dañino, ofensivo o inapropiado.',
          'Hacerse pasar por cualquier persona o entidad, o tergiversar su afiliación.',
          'Usar la App de cualquier manera que pueda dañar, deshabilitar o perjudicar su funcionalidad.',
        ],
      },
      {
        title: '6. Propiedad Intelectual',
        body: 'Todo el contenido, características y funcionalidades de la App — incluyendo pero no limitado a textos, gráficos, logotipos, íconos y materiales educativos — son propiedad exclusiva de Luminon Digital LTDA y están protegidos por las leyes de propiedad intelectual aplicables. No puede reproducir, distribuir ni crear obras derivadas sin nuestro permiso expreso por escrito.',
      },
      {
        title: '7. Descargo de Responsabilidad Médica',
        body: 'World Autistic es una herramienta educativa y NO es un dispositivo médico, servicio terapéutico ni sustituto de asesoramiento médico, psicológico o terapéutico profesional. La App no diagnostica, trata ni cura ninguna condición. Siempre consulte a profesionales de la salud calificados para orientación médica sobre el trastorno del espectro autista.',
      },
      {
        title: '8. Sin Garantías',
        body: 'La App se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo pero no limitado a garantías de comerciabilidad, idoneidad para un propósito particular o no infracción. No garantizamos que la App esté libre de errores, sea ininterrumpida o esté libre de virus u otros componentes dañinos.',
      },
      {
        title: '9. Limitación de Responsabilidad',
        body: 'En la máxima medida permitida por la ley aplicable, Luminon Digital LTDA no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo derivado del uso (o imposibilidad de uso) de la App, incluyendo pero no limitado a pérdida de datos, interrupciones del servicio o cualquier dependencia del contenido provisto por la App. Nuestra responsabilidad total hacia usted no excederá el monto pagado (si corresponde) por la App en los doce meses anteriores al reclamo.',
      },
      {
        title: '10. Indemnización',
        body: 'Usted acepta indemnizar y mantener indemne a Luminon Digital LTDA y a sus directores, empleados y agentes de cualquier reclamación, daño, pérdida o gasto (incluidos honorarios legales) derivados de su uso de la App, su violación de estos Términos o su violación de derechos de terceros.',
      },
      {
        title: '11. Disponibilidad del Servicio',
        body: 'Nos esforzamos por mantener la App disponible en todo momento, pero no garantizamos acceso ininterrumpido. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte de la App en cualquier momento, con o sin previo aviso, sin responsabilidad hacia usted.',
      },
      {
        title: '12. Cancelación de Cuenta',
        body: 'Puede eliminar su cuenta en cualquier momento a través de Configuración → Eliminar cuenta. Nos reservamos el derecho de suspender o cancelar cuentas que violen estos Términos, sin previo aviso. Tras la cancelación, su derecho a usar la App cesa de inmediato y sus datos serán eliminados conforme a nuestra Política de Privacidad.',
      },
      {
        title: '13. Ley Aplicable',
        body: 'Estos Términos se rigen por las leyes de Brasil. Cualquier disputa derivada de estos Términos o del uso de la App estará sujeta a la jurisdicción exclusiva de los tribunales de Brasil. Los usuarios fuera de Brasil reconocen que sus datos pueden ser procesados bajo la ley brasileña, incluida la LGPD (Lei Geral de Proteção de Dados).',
      },
      {
        title: '14. Cambios en los Términos',
        body: 'Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Los cambios se publicarán en la App con una fecha de "Última actualización" revisada. El uso continuado de la App tras los cambios constituye la aceptación de los Términos actualizados.',
      },
      {
        title: '15. Contacto',
        body: 'Luminon Digital LTDA — Brasil\nCorreo: jfsimon.pro@gmail.com',
      },
    ],
  },
};

const s = { color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' } as const;
const h2s = { fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' } as const;

export default function TermsPage() {
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
            <Link href="/privacy" style={{ color: '#4a90d9', fontSize: '0.9rem', textDecoration: 'none' }}>
              {c.privacyLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
