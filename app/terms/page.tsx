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
        title: '2. What the Platform Is',
        body: 'World Autistic is an educational platform designed to support the development of children and individuals with autism spectrum disorder (ASD). The App provides educational activities, resources, and tools to assist learning and communication skills.\n\nThe App is provided by Luminon Digital LTDA, Brazil. It is NOT a medical device, therapy service, or healthcare provider.',
      },
      {
        title: '3. Eligibility and Registration',
        body: 'To use the App you must:',
        list: [
          'Be at least 18 years old, or have a parent or legal guardian register on your behalf.',
          'Provide accurate and complete registration information.',
          'Maintain the security of your login credentials.',
          'Have only one active account per person.',
        ],
        note: 'Accounts for children under 13 must be created and managed by a parent or legal guardian, who assumes full responsibility for the account.',
      },
      {
        title: '4. Subscription, Payment, and Cancellation',
        body: 'Access to premium content requires an active subscription. Subscriptions are managed through Hotmart, our payment partner.\n\nPayment:\n• Subscription fees are charged at the time of purchase and at each renewal period.\n• All prices are displayed before purchase and may vary by plan.\n• Payments are processed securely by Hotmart.\n\nCancellation:\n• You may cancel your subscription at any time through your Hotmart account or by contacting support at jfsimon.pro@gmail.com.\n• Cancellation takes effect at the end of the current billing period. You will retain access until that date.\n• We do not offer partial refunds for unused periods, except where required by applicable law.\n\nRefunds:\n• Refund requests must be submitted within 7 days of purchase by contacting jfsimon.pro@gmail.com.\n• Refunds are subject to Hotmart\'s refund policy.',
      },
      {
        title: '5. Account Responsibility',
        body: 'You are responsible for all activity under your account. Notify us immediately at jfsimon.pro@gmail.com if you suspect unauthorized access.',
      },
      {
        title: '6. Acceptable Use',
        body: 'You agree not to:',
        list: [
          'Use the App for any unlawful purpose.',
          'Attempt unauthorized access to any part of the App or its infrastructure.',
          'Reverse-engineer, decompile, or extract the source code of the App.',
          'Upload or transmit harmful, offensive, or inappropriate content.',
          'Impersonate any person or entity.',
          'Share your account credentials with others.',
          'Use the App in any way that could damage, disable, or impair its functionality.',
        ],
      },
      {
        title: '7. Intellectual Property',
        body: 'All content, features, and functionality of the App — including text, graphics, logos, icons, and educational materials — are the exclusive property of Luminon Digital LTDA and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
      },
      {
        title: '8. Disclaimer of Medical Advice',
        body: 'World Autistic is an educational tool and is NOT a medical device, therapy service, or substitute for professional medical, psychological, or therapeutic advice. The App does not diagnose, treat, or cure any condition. Always consult qualified healthcare professionals for medical guidance regarding autism spectrum disorder.',
      },
      {
        title: '9. No Warranty',
        body: 'The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be error-free, uninterrupted, or free of harmful components.',
      },
      {
        title: '10. Limitation of Liability',
        body: 'To the fullest extent permitted by law, Luminon Digital LTDA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including loss of data, service interruptions, or reliance on app content. Our total liability shall not exceed the amount you paid for the App in the twelve months preceding the claim.',
      },
      {
        title: '11. Indemnification',
        body: 'You agree to indemnify and hold harmless Luminon Digital LTDA and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the App, violation of these Terms, or violation of any third-party rights.',
      },
      {
        title: '12. Service Availability',
        body: 'We strive to keep the App available at all times but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of the App at any time, with or without notice, without liability to you.',
      },
      {
        title: '13. Account Termination',
        body: 'You may delete your account at any time via Settings → Delete Account. We reserve the right to suspend or terminate accounts that violate these Terms without prior notice. Upon termination, your right to use the App ceases immediately and your data will be deleted per our Privacy Policy.',
      },
      {
        title: '14. Governing Law and Jurisdiction',
        body: 'These Terms are governed by the laws of Brazil. Any disputes arising from these Terms or use of the App shall be subject to the exclusive jurisdiction of the courts of the District of São Paulo, State of São Paulo, Brazil, to the exclusion of any other forum, however privileged it may be.',
      },
      {
        title: '15. Changes to Terms',
        body: 'We reserve the right to update these Terms at any time. Changes will be posted with a revised "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated Terms.',
      },
      {
        title: '16. Contact',
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
        body: 'Ao baixar, instalar ou usar o aplicativo World Autistic ("o App"), você concorda em ficar vinculado a estes Termos de Uso. Se não concordar, não use o App. Estes termos se aplicam a todos os usuários, incluindo pais e responsáveis que se cadastram em nome de uma criança.',
      },
      {
        title: '2. O que é a Plataforma',
        body: 'O World Autistic é uma plataforma educacional desenvolvida para apoiar o desenvolvimento de crianças e indivíduos com Transtorno do Espectro Autista (TEA). O App oferece atividades educacionais, recursos e ferramentas para auxiliar habilidades de aprendizado e comunicação.\n\nO App é fornecido pela Luminon Digital LTDA, Brasil. Ele NÃO é um dispositivo médico, serviço terapêutico ou prestador de saúde.',
      },
      {
        title: '3. Elegibilidade e Cadastro',
        body: 'Para usar o App você deve:',
        list: [
          'Ter pelo menos 18 anos, ou ter um pai ou responsável legal que realize o cadastro em seu nome.',
          'Fornecer informações de cadastro precisas e completas.',
          'Manter a segurança das suas credenciais de acesso.',
          'Possuir apenas uma conta ativa por pessoa.',
        ],
        note: 'Contas para menores de 13 anos devem ser criadas e gerenciadas por um pai ou responsável legal, que assume total responsabilidade pela conta.',
      },
      {
        title: '4. Assinatura, Pagamento e Cancelamento',
        body: 'O acesso ao conteúdo premium requer uma assinatura ativa. As assinaturas são gerenciadas pela Hotmart, nossa parceira de pagamentos.\n\nPagamento:\n• As taxas de assinatura são cobradas no momento da compra e a cada renovação.\n• Todos os preços são exibidos antes da compra e podem variar conforme o plano.\n• Os pagamentos são processados com segurança pela Hotmart.\n\nCancelamento:\n• Você pode cancelar sua assinatura a qualquer momento pela sua conta na Hotmart ou entrando em contato pelo jfsimon.pro@gmail.com.\n• O cancelamento entra em vigor ao final do período de cobrança vigente. Você manterá o acesso até essa data.\n• Não oferecemos reembolso proporcional por períodos não utilizados, exceto quando exigido pela legislação aplicável.\n\nReembolso:\n• Solicitações de reembolso devem ser feitas em até 7 dias após a compra pelo jfsimon.pro@gmail.com.\n• Os reembolsos estão sujeitos à política de reembolso da Hotmart.',
      },
      {
        title: '5. Responsabilidade da Conta',
        body: 'Você é responsável por todas as atividades realizadas sob sua conta. Notifique-nos imediatamente pelo jfsimon.pro@gmail.com caso suspeite de acesso não autorizado.',
      },
      {
        title: '6. Uso Aceitável',
        body: 'Você concorda em não:',
        list: [
          'Usar o App para qualquer finalidade ilegal.',
          'Tentar obter acesso não autorizado a qualquer parte do App ou sua infraestrutura.',
          'Realizar engenharia reversa, descompilar ou extrair o código-fonte do App.',
          'Fazer upload ou transmitir conteúdo prejudicial, ofensivo ou inadequado.',
          'Personificar qualquer pessoa ou entidade.',
          'Compartilhar suas credenciais de acesso com terceiros.',
          'Usar o App de forma que possa danificar, desabilitar ou prejudicar sua funcionalidade.',
        ],
      },
      {
        title: '7. Propriedade Intelectual',
        body: 'Todo o conteúdo, funcionalidades e recursos do App — incluindo textos, gráficos, logotipos, ícones e materiais educacionais — são de propriedade exclusiva da Luminon Digital LTDA e estão protegidos pelas leis de propriedade intelectual. Você não pode reproduzir, distribuir ou criar obras derivadas sem nossa permissão expressa por escrito.',
      },
      {
        title: '8. Isenção de Responsabilidade Médica',
        body: 'O World Autistic é uma ferramenta educacional e NÃO é um dispositivo médico, serviço terapêutico ou substituto para aconselhamento médico, psicológico ou terapêutico profissional. O App não diagnostica, trata ou cura nenhuma condição. Sempre consulte profissionais de saúde qualificados para orientação sobre o Transtorno do Espectro Autista.',
      },
      {
        title: '9. Ausência de Garantias',
        body: 'O App é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas, incluindo garantias de comercialização, adequação a uma finalidade específica ou não violação. Não garantimos que o App será livre de erros, ininterrupto ou livre de componentes prejudiciais.',
      },
      {
        title: '10. Limitação de Responsabilidade',
        body: 'Na máxima extensão permitida pela lei, a Luminon Digital LTDA não será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso do App, incluindo perda de dados, interrupções de serviço ou dependência de conteúdo do app. Nossa responsabilidade total não excederá o valor pago pelo App nos doze meses anteriores à reclamação.',
      },
      {
        title: '11. Indenização',
        body: 'Você concorda em indenizar e isentar a Luminon Digital LTDA e seus diretores, funcionários e agentes de quaisquer reclamações, danos, perdas ou despesas (incluindo honorários advocatícios) decorrentes do seu uso do App, violação destes Termos ou violação de direitos de terceiros.',
      },
      {
        title: '12. Disponibilidade do Serviço',
        body: 'Nos esforçamos para manter o App disponível, mas não garantimos acesso ininterrupto. Reservamos o direito de modificar, suspender ou descontinuar qualquer parte do App a qualquer momento, com ou sem aviso prévio, sem responsabilidade.',
      },
      {
        title: '13. Encerramento de Conta',
        body: 'Você pode excluir sua conta a qualquer momento via Configurações → Excluir Conta. Reservamos o direito de suspender ou encerrar contas que violem estes Termos sem aviso prévio. Após o encerramento, seu acesso cessa imediatamente e seus dados serão excluídos conforme nossa Política de Privacidade.',
      },
      {
        title: '14. Foro e Lei Aplicável',
        body: 'Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo, Estado de São Paulo, Brasil, para dirimir quaisquer controvérsias decorrentes destes Termos ou do uso do App, com exclusão de qualquer outro, por mais privilegiado que seja.',
      },
      {
        title: '15. Alterações nos Termos',
        body: 'Reservamos o direito de atualizar estes Termos a qualquer momento. As alterações serão publicadas com data de "Última atualização" revisada. O uso continuado do App após as alterações constitui aceitação dos Termos atualizados.',
      },
      {
        title: '16. Contato',
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
        body: 'Al descargar, instalar o usar la aplicación World Autistic ("la App"), usted acepta quedar vinculado por estos Términos de Uso. Si no está de acuerdo, no use la App. Estos términos aplican a todos los usuarios, incluidos padres y tutores que se registran en nombre de un niño.',
      },
      {
        title: '2. Qué es la Plataforma',
        body: 'World Autistic es una plataforma educativa diseñada para apoyar el desarrollo de niños e individuos con Trastorno del Espectro Autista (TEA). La App ofrece actividades educativas, recursos y herramientas para asistir habilidades de aprendizaje y comunicación.\n\nLa App es provista por Luminon Digital LTDA, Brasil. NO es un dispositivo médico, servicio terapéutico ni proveedor de salud.',
      },
      {
        title: '3. Elegibilidad y Registro',
        body: 'Para usar la App usted debe:',
        list: [
          'Tener al menos 18 años, o que un padre o tutor legal se registre en su nombre.',
          'Proporcionar información de registro precisa y completa.',
          'Mantener la seguridad de sus credenciales de acceso.',
          'Tener solo una cuenta activa por persona.',
        ],
        note: 'Las cuentas para menores de 13 años deben ser creadas y gestionadas por un padre o tutor legal, quien asume total responsabilidad por la cuenta.',
      },
      {
        title: '4. Suscripción, Pago y Cancelación',
        body: 'El acceso al contenido premium requiere una suscripción activa. Las suscripciones se gestionan a través de Hotmart, nuestro socio de pagos.\n\nPago:\n• Las tarifas de suscripción se cobran al momento de la compra y en cada renovación.\n• Todos los precios se muestran antes de la compra y pueden variar según el plan.\n• Los pagos son procesados de forma segura por Hotmart.\n\nCancelación:\n• Puede cancelar su suscripción en cualquier momento a través de su cuenta en Hotmart o contactándonos en jfsimon.pro@gmail.com.\n• La cancelación entra en vigor al final del período de facturación actual. Mantendrá el acceso hasta esa fecha.\n• No ofrecemos reembolsos proporcionales por períodos no utilizados, salvo lo requerido por la ley aplicable.\n\nReembolsos:\n• Las solicitudes de reembolso deben enviarse dentro de los 7 días posteriores a la compra a jfsimon.pro@gmail.com.\n• Los reembolsos están sujetos a la política de reembolso de Hotmart.',
      },
      {
        title: '5. Responsabilidad de la Cuenta',
        body: 'Usted es responsable de todas las actividades realizadas bajo su cuenta. Notifíquenos de inmediato en jfsimon.pro@gmail.com si sospecha acceso no autorizado.',
      },
      {
        title: '6. Uso Aceptable',
        body: 'Usted acepta no:',
        list: [
          'Usar la App para cualquier propósito ilegal.',
          'Intentar acceso no autorizado a cualquier parte de la App.',
          'Realizar ingeniería inversa, descompilar o extraer el código fuente.',
          'Cargar o transmitir contenido dañino, ofensivo o inapropiado.',
          'Hacerse pasar por cualquier persona o entidad.',
          'Compartir sus credenciales de acceso con otros.',
          'Usar la App de manera que pueda dañar o perjudicar su funcionamiento.',
        ],
      },
      {
        title: '7. Propiedad Intelectual',
        body: 'Todo el contenido, características y funcionalidades de la App — incluyendo textos, gráficos, logotipos, íconos y materiales educativos — son propiedad exclusiva de Luminon Digital LTDA y están protegidos por las leyes de propiedad intelectual aplicables. No puede reproducir, distribuir ni crear obras derivadas sin permiso expreso por escrito.',
      },
      {
        title: '8. Descargo de Responsabilidad Médica',
        body: 'World Autistic es una herramienta educativa y NO es un dispositivo médico, servicio terapéutico ni sustituto de asesoramiento médico, psicológico o terapéutico profesional. La App no diagnostica, trata ni cura ninguna condición. Siempre consulte a profesionales de la salud calificados para orientación sobre el Trastorno del Espectro Autista.',
      },
      {
        title: '9. Sin Garantías',
        body: 'La App se provee "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas. No garantizamos que la App esté libre de errores, sea ininterrumpida o libre de componentes dañinos.',
      },
      {
        title: '10. Limitación de Responsabilidad',
        body: 'En la máxima medida permitida por ley, Luminon Digital LTDA no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso de la App. Nuestra responsabilidad total no excederá el monto pagado por la App en los doce meses anteriores al reclamo.',
      },
      {
        title: '11. Indemnización',
        body: 'Usted acepta indemnizar y mantener indemne a Luminon Digital LTDA y a sus directores, empleados y agentes de cualquier reclamación, daño o gasto derivado de su uso de la App, violación de estos Términos o violación de derechos de terceros.',
      },
      {
        title: '12. Disponibilidad del Servicio',
        body: 'Nos esforzamos por mantener la App disponible, pero no garantizamos acceso ininterrumpido. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte en cualquier momento sin responsabilidad.',
      },
      {
        title: '13. Cancelación de Cuenta',
        body: 'Puede eliminar su cuenta a través de Configuración → Eliminar cuenta. Nos reservamos el derecho de suspender cuentas que violen estos Términos sin previo aviso. Tras la cancelación, su acceso cesa de inmediato y sus datos serán eliminados conforme a nuestra Política de Privacidad.',
      },
      {
        title: '14. Ley Aplicable y Jurisdicción',
        body: 'Estos Términos se rigen por las leyes de la República Federativa de Brasil. Se elige el foro de la comarca de São Paulo, Estado de São Paulo, Brasil, para resolver cualquier controversia derivada de estos Términos o del uso de la App, con exclusión de cualquier otro foro, por privilegiado que sea.',
      },
      {
        title: '15. Cambios en los Términos',
        body: 'Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Los cambios se publicarán con una fecha de "Última actualización" revisada. El uso continuado tras los cambios constituye aceptación de los Términos actualizados.',
      },
      {
        title: '16. Contacto',
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
              {sec.note && <p style={{ ...s, marginTop: '0.75rem', fontStyle: 'italic' }}>{sec.note}</p>}
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
