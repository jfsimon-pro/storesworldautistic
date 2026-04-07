'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

type Lang = 'pt' | 'en' | 'es';

const content: Record<Lang, {
  title: string;
  updated: string;
  intro: string;
  sections: { title: string; body: React.ReactNode }[];
  backHome: string;
  privacyLink: string;
}> = {
  pt: {
    title: 'Termos de Uso',
    updated: 'Ultima atualizacao: 7 de abril de 2025',
    intro: 'Bem-vindo a World Autistic. Ao criar uma conta ou utilizar nossa plataforma, voce concorda com os presentes Termos de Uso. Leia atentamente antes de prosseguir.',
    backHome: 'Voltar ao inicio',
    privacyLink: 'Politica de Privacidade',
    sections: [
      {
        title: '1. Sobre a plataforma',
        body: <p>A World Autistic e uma plataforma educacional voltada ao desenvolvimento de habilidades cognitivas, sociais e de aprendizado, especialmente desenvolvida para pessoas no espectro autista. O acesso completo esta condicionado a uma assinatura ativa adquirida pela Hotmart.</p>,
      },
      {
        title: '2. Elegibilidade e cadastro',
        body: (
          <ul>
            <li>Voce deve ter pelo menos 18 anos. Menores precisam de autorizacao de um responsavel legal.</li>
            <li>Voce e responsavel pela confidencialidade da sua senha e por todo acesso feito com suas credenciais.</li>
            <li>Voce deve fornecer informacoes verdadeiras. Contas com dados falsos podem ser encerradas.</li>
            <li>Cada assinatura corresponde a um usuario individual. Compartilhar a conta nao e permitido.</li>
          </ul>
        ),
      },
      {
        title: '3. Assinatura e pagamento',
        body: (
          <ul>
            <li>O acesso e mediante assinatura paga processada pela <strong>Hotmart</strong>.</li>
            <li>A cobranca e renovada automaticamente conforme o plano, salvo cancelamento previo.</li>
            <li>Cancelamentos e reembolsos seguem a politica da Hotmart e o Codigo de Defesa do Consumidor (CDC).</li>
            <li>Podemos alterar valores com aviso previo de 30 dias.</li>
          </ul>
        ),
      },
      {
        title: '4. Regras de uso',
        body: (
          <>
            <p>Ao usar a plataforma, voce concorda em NAO:</p>
            <ul>
              <li>Compartilhar sua senha ou credenciais com terceiros</li>
              <li>Usar a plataforma para fins ilegais ou prejudiciais</li>
              <li>Tentar burlar mecanismos de autenticacao ou acesso</li>
              <li>Reproduzir, copiar ou distribuir conteudos sem autorizacao</li>
              <li>Fazer engenharia reversa ou tentativa de acesso nao autorizado</li>
              <li>Enviar conteudo ofensivo, discriminatorio ou que viole direitos de terceiros</li>
            </ul>
          </>
        ),
      },
      {
        title: '5. Propriedade intelectual',
        body: <p>Todo o conteudo da plataforma — textos, imagens, graficos, logotipos, atividades e jogos — e de propriedade exclusiva da World Autistic ou de seus licenciantes, protegido pelas leis de propriedade intelectual. O acesso nao transfere nenhum direito de propriedade. E vedada a reproducao ou distribuicao sem autorizacao previa por escrito.</p>,
      },
      {
        title: '6. Disponibilidade e suporte',
        body: (
          <ul>
            <li>Nos buscamos manter a plataforma disponıvel 24h, mas nao garantimos disponibilidade ininterrupta.</li>
            <li>Podemos realizar manutencoes com aviso previo quando possıvel.</li>
            <li>Interrupcoes tecnicas, falhas de terceiros ou forca maior nao geram ressarcimento automatico.</li>
          </ul>
        ),
      },
      {
        title: '7. Responsabilidade e limites (conforme CDC)',
        body: (
          <>
            <p>A World Autistic responde pelos defeitos e falhas na prestacao dos servicos que lhe sejam imputaveis, nos termos do Codigo de Defesa do Consumidor (Lei n. 8.078/1990).</p>
            <p>Sem prejuizo dos direitos do consumidor previstos em lei, <strong>nao nos responsabilizamos por:</strong></p>
            <ul>
              <li>Perda de dados causada exclusivamente por falhas de conexao, dispositivo ou acao do proprio usuario</li>
              <li>Decisoes tomadas com base nos conteudos educacionais sem acompanhamento de profissional especializado</li>
              <li>Acesso nao autorizado resultante de negligencia do usuario na guarda de suas credenciais</li>
              <li>Interrupcoes causadas por casos de forca maior, falhas de infraestrutura de terceiros (ex.: provedores de nuvem) ou ataques externos fora do nosso controle razoavel</li>
            </ul>
            <p><strong>Natureza dos conteudos:</strong> os conteudos educacionais sao de apoio ao desenvolvimento e nao substituem avaliacao, diagnostico ou tratamento por profissionais de saude. A World Autistic nao se responsabiliza por decisoes clinicas ou terapeuticas baseadas exclusivamente no uso da plataforma.</p>
            <p>As limitacoes acima nao excluem nem restringem direitos inderrogaveis do consumidor, incluindo responsabilidade por dano material ou moral decorrente de falha propria do servico.</p>
          </>
        ),
      },
      {
        title: '8. Suspensao e encerramento de conta',
        body: (
          <>
            <p>Podemos suspender ou encerrar sua conta caso voce:</p>
            <ul>
              <li>Viole estes Termos de Uso</li>
              <li>Tenha assinatura cancelada ou pagamento nao processado</li>
              <li>Use a plataforma de forma fraudulenta ou abusiva</li>
            </ul>
            <p>Voce pode solicitar encerramento da sua conta pelo e-mail contato@worldautistic.com.</p>
          </>
        ),
      },
      {
        title: '9. Privacidade',
        body: <p>O tratamento dos seus dados e regido pela nossa <Link href="/privacy" style={{ color: '#0288D1', textDecoration: 'underline' }}>Politica de Privacidade</Link>, parte integrante destes Termos.</p>,
      },
      {
        title: '10. Alteracoes nos termos',
        body: <p>Podemos revisar estes Termos periodicamente. Alteracoes relevantes serao comunicadas por e-mail ou aviso na plataforma com pelo menos 15 dias de antecedencia. O uso continuado apos esse prazo implica aceite dos novos termos.</p>,
      },
      {
        title: '11. Foro e legislacao aplicavel',
        body: <p>Estes Termos sao regidos pelas leis brasileiras. Quaisquer disputas serao resolvidas pelo foro da comarca de Sao Paulo — SP, com renuncoa a qualquer outro, por mais privilegiado que seja.</p>,
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
    title: 'Terms of Use',
    updated: 'Last updated: April 7, 2025',
    intro: 'Welcome to World Autistic. By creating an account or using our platform, you agree to these Terms of Use. Please read them carefully before proceeding.',
    backHome: 'Back to home',
    privacyLink: 'Privacy Policy',
    sections: [
      {
        title: '1. About the platform',
        body: <p>World Autistic is an educational platform focused on developing cognitive, social, and learning skills, designed especially for people on the autism spectrum. Full access requires an active subscription purchased through Hotmart.</p>,
      },
      {
        title: '2. Eligibility and registration',
        body: (
          <ul>
            <li>You must be at least 18 years old. Minors require authorization from a legal guardian.</li>
            <li>You are responsible for keeping your password confidential and for all activity under your credentials.</li>
            <li>You must provide accurate information. Accounts with false data may be closed.</li>
            <li>Each subscription is for one individual user. Account sharing is not permitted.</li>
          </ul>
        ),
      },
      {
        title: '3. Subscription and payment',
        body: (
          <ul>
            <li>Access requires a paid subscription processed by <strong>Hotmart</strong>.</li>
            <li>Billing renews automatically according to your plan, unless cancelled beforehand.</li>
            <li>Cancellations and refunds follow Hotmart policy and the Brazilian Consumer Protection Code (CDC).</li>
            <li>We may adjust pricing with 30 days notice.</li>
          </ul>
        ),
      },
      {
        title: '4. Usage rules',
        body: (
          <>
            <p>By using the platform, you agree NOT to:</p>
            <ul>
              <li>Share your password or credentials with third parties</li>
              <li>Use the platform for illegal or harmful purposes</li>
              <li>Attempt to bypass authentication or access controls</li>
              <li>Reproduce, copy, or distribute content without authorization</li>
              <li>Reverse engineer or attempt unauthorized system access</li>
              <li>Submit offensive, discriminatory, or rights-infringing content</li>
            </ul>
          </>
        ),
      },
      {
        title: '5. Intellectual property',
        body: <p>All platform content — including texts, images, graphics, logos, activities, and games — is the exclusive property of World Autistic or its licensors, protected by intellectual property laws. Access does not transfer any ownership rights. Reproduction or distribution without prior written authorization is prohibited.</p>,
      },
      {
        title: '6. Availability and support',
        body: (
          <ul>
            <li>We strive to keep the platform available 24/7, but cannot guarantee uninterrupted availability.</li>
            <li>Scheduled maintenance will be communicated in advance when possible.</li>
            <li>Technical outages, third-party failures, or force majeure do not automatically entitle users to compensation.</li>
          </ul>
        ),
      },
      {
        title: '7. Liability and limits',
        body: (
          <>
            <p>World Autistic is liable for defects and failures in service delivery attributable to us, in accordance with applicable consumer protection law.</p>
            <p>Without prejudice to mandatory consumer rights, <strong>we are not liable for:</strong></p>
            <ul>
              <li>Data loss caused solely by the user's own connection, device, or actions</li>
              <li>Decisions made based on educational content without qualified professional guidance</li>
              <li>Unauthorized access resulting from user negligence in safeguarding credentials</li>
              <li>Interruptions caused by force majeure, third-party infrastructure failures (e.g., cloud providers), or external attacks beyond our reasonable control</li>
            </ul>
            <p><strong>Nature of content:</strong> educational content is developmental support and does not replace assessment, diagnosis, or treatment by healthcare professionals. World Autistic is not liable for clinical or therapeutic decisions based solely on platform use.</p>
            <p>The above limitations do not exclude or restrict mandatory consumer rights, including liability for material or moral damages arising from our own service failures.</p>
          </>
        ),
      },
      {
        title: '8. Account suspension and termination',
        body: (
          <>
            <p>We may suspend or terminate your account if you:</p>
            <ul>
              <li>Violate these Terms of Use</li>
              <li>Have a cancelled subscription or failed payment</li>
              <li>Use the platform fraudulently or abusively</li>
            </ul>
            <p>You may request account closure at any time by emailing contato@worldautistic.com.</p>
          </>
        ),
      },
      {
        title: '9. Privacy',
        body: <p>Your personal data is governed by our <Link href="/privacy" style={{ color: '#0288D1', textDecoration: 'underline' }}>Privacy Policy</Link>, which is an integral part of these Terms.</p>,
      },
      {
        title: '10. Changes to terms',
        body: <p>We may revise these Terms periodically. Material changes will be communicated by email or in-platform notice at least 15 days in advance. Continued use after that period implies acceptance of the updated terms.</p>,
      },
      {
        title: '11. Governing law and jurisdiction',
        body: <p>These Terms are governed by Brazilian law. Any disputes shall be resolved in the courts of Sao Paulo — SP, Brazil, with waiver of any other jurisdiction, however privileged.</p>,
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
    title: 'Terminos de Uso',
    updated: 'Ultima actualizacion: 7 de abril de 2025',
    intro: 'Bienvenido a World Autistic. Al crear una cuenta o utilizar nuestra plataforma, usted acepta los presentes Terminos de Uso. Lealos detenidamente antes de continuar.',
    backHome: 'Volver al inicio',
    privacyLink: 'Politica de Privacidad',
    sections: [
      {
        title: '1. Sobre la plataforma',
        body: <p>World Autistic es una plataforma educativa enfocada en el desarrollo de habilidades cognitivas, sociales y de aprendizaje, disenada especialmente para personas en el espectro autista. El acceso completo requiere una suscripcion activa adquirida a traves de Hotmart.</p>,
      },
      {
        title: '2. Elegibilidad y registro',
        body: (
          <ul>
            <li>Debe tener al menos 18 anos. Los menores necesitan autorizacion de un tutor legal.</li>
            <li>Usted es responsable de mantener la confidencialidad de su contrasena y de toda la actividad bajo sus credenciales.</li>
            <li>Debe proporcionar informacion veridica. Las cuentas con datos falsos pueden ser cerradas.</li>
            <li>Cada suscripcion es para un usuario individual. No se permite compartir la cuenta.</li>
          </ul>
        ),
      },
      {
        title: '3. Suscripcion y pago',
        body: (
          <ul>
            <li>El acceso requiere una suscripcion de pago procesada por <strong>Hotmart</strong>.</li>
            <li>La facturacion se renueva automaticamente segun el plan, salvo cancelacion previa.</li>
            <li>Las cancelaciones y reembolsos siguen la politica de Hotmart y el Codigo de Defensa del Consumidor brasileno (CDC).</li>
            <li>Podemos ajustar los precios con 30 dias de anticipacion.</li>
          </ul>
        ),
      },
      {
        title: '4. Reglas de uso',
        body: (
          <>
            <p>Al usar la plataforma, usted acepta NO:</p>
            <ul>
              <li>Compartir su contrasena o credenciales con terceros</li>
              <li>Usar la plataforma con fines ilegales o perjudiciales</li>
              <li>Intentar eludir mecanismos de autenticacion o control de acceso</li>
              <li>Reproducir, copiar o distribuir contenido sin autorizacion</li>
              <li>Realizar ingenieria inversa o intento de acceso no autorizado</li>
              <li>Enviar contenido ofensivo, discriminatorio o que viole derechos de terceros</li>
            </ul>
          </>
        ),
      },
      {
        title: '5. Propiedad intelectual',
        body: <p>Todo el contenido de la plataforma — textos, imagenes, graficos, logotipos, actividades y juegos — es propiedad exclusiva de World Autistic o sus licenciantes, protegido por leyes de propiedad intelectual. El acceso no transfiere ningun derecho de propiedad. Se prohibe la reproduccion o distribucion sin autorizacion previa por escrito.</p>,
      },
      {
        title: '6. Disponibilidad y soporte',
        body: (
          <ul>
            <li>Buscamos mantener la plataforma disponible 24/7, pero no garantizamos disponibilidad ininterrumpida.</li>
            <li>El mantenimiento programado se comunicara con anticipacion cuando sea posible.</li>
            <li>Las interrupciones tecnicas, fallas de terceros o fuerza mayor no generan compensacion automatica.</li>
          </ul>
        ),
      },
      {
        title: '7. Responsabilidad y limites',
        body: (
          <>
            <p>World Autistic es responsable por los defectos y fallas en la prestacion del servicio que le sean imputables, conforme a la legislacion de proteccion al consumidor aplicable.</p>
            <p>Sin perjuicio de los derechos del consumidor establecidos por ley, <strong>no somos responsables por:</strong></p>
            <ul>
              <li>Perdida de datos causada exclusivamente por fallas de conexion, dispositivo o acciones del propio usuario</li>
              <li>Decisiones tomadas en base al contenido educativo sin orientacion profesional calificada</li>
              <li>Acceso no autorizado resultante de negligencia del usuario en la custodia de sus credenciales</li>
              <li>Interrupciones por fuerza mayor, fallas de infraestructura de terceros (ej.: proveedores de nube) o ataques externos fuera de nuestro control razonable</li>
            </ul>
            <p><strong>Naturaleza del contenido:</strong> el contenido educativo es de apoyo al desarrollo y no sustituye la evaluacion, diagnostico o tratamiento por profesionales de la salud. World Autistic no es responsable por decisiones clinicas o terapeuticas basadas exclusivamente en el uso de la plataforma.</p>
            <p>Las limitaciones anteriores no excluyen ni restringen derechos irrenunciables del consumidor, incluyendo la responsabilidad por danos materiales o morales derivados de fallas propias del servicio.</p>
          </>
        ),
      },
      {
        title: '8. Suspension y cierre de cuenta',
        body: (
          <>
            <p>Podemos suspender o cerrar su cuenta si usted:</p>
            <ul>
              <li>Viola estos Terminos de Uso</li>
              <li>Tiene una suscripcion cancelada o pago fallido</li>
              <li>Usa la plataforma de forma fraudulenta o abusiva</li>
            </ul>
            <p>Puede solicitar el cierre de su cuenta en cualquier momento escribiendo a contato@worldautistic.com.</p>
          </>
        ),
      },
      {
        title: '9. Privacidad',
        body: <p>Sus datos personales se rigen por nuestra <Link href="/privacy" style={{ color: '#0288D1', textDecoration: 'underline' }}>Politica de Privacidad</Link>, parte integrante de estos Terminos.</p>,
      },
      {
        title: '10. Cambios en los terminos',
        body: <p>Podemos revisar estos Terminos periodicamente. Los cambios importantes se comunicaran por correo o aviso en la plataforma con al menos 15 dias de anticipacion. El uso continuado tras ese plazo implica aceptacion de los nuevos terminos.</p>,
      },
      {
        title: '11. Legislacion aplicable y jurisdiccion',
        body: <p>Estos Terminos se rigen por las leyes de Brasil. Cualquier disputa se resolvera en los tribunales de Sao Paulo — SP, Brasil, con renuncia a cualquier otro fuero, por privilegiado que sea.</p>,
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

export default function TermsPage() {
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
          <Link href="/privacy" style={{ color: '#0288D1', textDecoration: 'underline', fontSize: '0.875rem' }}>{c.privacyLink}</Link>
          <Link href="/" style={{ color: '#0288D1', textDecoration: 'underline', fontSize: '0.875rem' }}>{c.backHome}</Link>
        </div>
      </div>
    </div>
  );
}
