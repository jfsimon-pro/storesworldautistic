# Documentação Legal — Política de Privacidade e Termos de Uso

## O que foi implementado

Duas páginas legais completas, com traduções em **pt / en / es**, que detectam automaticamente o idioma do app:

| Rota | Arquivo | Conteúdo |
|---|---|---|
| `/privacy` | `app/privacy/page.tsx` | Política de Privacidade |
| `/terms` | `app/terms/page.tsx` | Termos de Uso |

Ambas estão linkadas no rodapé da tela de login (`app/(signin)/signIn/page.tsx`).

---

## O que cada página cobre

### Política de Privacidade (`/privacy`)

1. Quem somos (empresa, controlador de dados, contato)
2. O que coletamos — nome, email, senha (hash), Apple ID, dados de uso, cookie de sessão, permissões de câmera/mic
3. Base legal (LGPD / GDPR) — execução de contrato, interesse legítimo, consentimento
4. Como usamos os dados — autenticação, personalização, suporte, e-mail transacional
5. **Terceiros processadores** — Neon (DB), DigitalOcean (hosting), Apple (auth), Gmail SMTP (suporte)
6. **Transferência internacional** — dados nos EUA, base LGPD Art. 33
7. **Cookies / token de sessão** — httpOnly, sem publicidade, sem rastreamento
8. Armazenamento e segurança — TLS, bcrypt
9. Retenção — dados deletados em 30 dias após exclusão de conta
10. Permissões de dispositivo — câmera e microfone
11. Privacidade infantil — menores de 13, consentimento parental
12. Direitos do usuário — acesso, correção, exclusão, ANPD
13. Alterações na política
14. Contato e controlador de dados

### Termos de Uso (`/terms`)

1. Aceitação dos termos
2. Descrição do serviço
3. Elegibilidade e consentimento parental
4. Responsabilidade da conta
5. Uso aceitável (lista de proibições)
6. Propriedade intelectual
7. **Isenção médica** — não é dispositivo médico, não diagnostica nem trata
8. **Ausência de garantias** — "as is", sem garantia de disponibilidade
9. **Limitação de responsabilidade** — danos indiretos, teto = valor pago
10. **Indenização** — usuário indeniza a empresa por violações
11. Disponibilidade do serviço
12. Encerramento de conta
13. Lei aplicável — Brasil, LGPD
14. Alterações nos termos
15. Contato

---

## Arquitetura técnica

### Detecção de idioma

As páginas usam o `useLanguage()` do `LanguageContext` existente no app. O idioma é salvo no `localStorage` e sincronizado com o banco via `/api/user/language`.

```tsx
'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Page() {
  const { language } = useLanguage();
  const c = content[language as keyof ContentMap] ?? content.en;
  // ...
}
```

### Estrutura de dados

Cada página define um objeto `content` tipado com as 3 línguas:

```typescript
type Section = { title: string; body: string; list?: string[]; note?: string };
type LangContent = { title: string; updated: string; back: string; sections: Section[] };
type ContentMap = { pt: LangContent; en: LangContent; es: LangContent };

const content: ContentMap = {
  en: { title: '...', sections: [ { title: '1. ...', body: '...' } ] },
  pt: { ... },
  es: { ... },
};
```

### Renderização

```tsx
{c.sections.map((sec: Section, i: number) => (
  <section key={i}>
    <h2>{sec.title}</h2>
    {sec.body && <p>{sec.body}</p>}
    {sec.list && <ul>{sec.list.map((item, j) => <li key={j}>{item}</li>)}</ul>}
    {sec.note && <p>{sec.note}</p>}
  </section>
))}
```

---

## Como replicar em outro sistema

### Pré-requisitos

- Next.js (App Router)
- Sistema de i18n (qualquer — pode ser substituído por `useState` simples)
- Sem dependências externas adicionais

### Passo a passo

#### 1. Copiar os arquivos

Copie `app/privacy/page.tsx` e `app/terms/page.tsx` para o novo projeto.

#### 2. Adaptar o import de idioma

Se o novo projeto **tem** LanguageContext equivalente:
```tsx
import { useLanguage } from '../context/LanguageContext';
const { language } = useLanguage();
```

Se **não tem** sistema de i18n, substitua por idioma fixo ou `useState`:
```tsx
const [language, setLanguage] = useState<'pt' | 'en' | 'es'>('pt');
```

#### 3. Adaptar o conteúdo

Nos objetos `content`, edite:
- Nome da empresa
- Email de contato
- Nome do controlador de dados
- Terceiros processadores (serviços de banco, hosting, auth usados no projeto)
- Regiões dos servidores (ex: se usar AWS São Paulo em vez de Neon US East)
- Permissões de dispositivo (se for diferente)
- Data de "última atualização"

#### 4. Remover seções irrelevantes

Se o sistema não tem câmera/microfone:
```typescript
// Remova a seção "Device Permissions" / "Permissões do Dispositivo"
// do array sections em cada idioma
```

Se não tem Sign in com Apple:
```typescript
// Remova o item de Apple do array list na seção "Information We Collect"
```

#### 5. Adicionar links no layout

Na tela de login ou rodapé do app:
```tsx
<Link href="/privacy">Privacy Policy</Link>
<Link href="/terms">Terms of Use</Link>
<Link href="/support">Support</Link>
```

#### 6. Verificar path do LanguageContext

O import usa path relativo. Ajuste conforme a localização da página:
```tsx
// Se a página está em app/privacy/page.tsx
import { useLanguage } from '../context/LanguageContext';

// Se estiver em app/(group)/privacy/page.tsx (route group)
import { useLanguage } from '../../context/LanguageContext';
```

---

## Checklist de compliance por plataforma

### App Store (Apple)
- [x] URL de Política de Privacidade obrigatória → usar `https://seahorse-app-u8hng.ondigitalocean.app/privacy`
- [x] URL de Suporte obrigatória → usar `https://seahorse-app-u8hng.ondigitalocean.app/support`
- [x] Privacy Nutrition Labels — preencher no App Store Connect com base nos dados desta política

### Google Play
- [x] URL de Política de Privacidade obrigatória → mesma URL acima
- [x] Data Safety form — preencher com base nos dados desta política
- [x] Advertising ID: declarar "Não usa" (o app não usa)

### LGPD (Brasil)
- [x] Base legal declarada (Art. 7 / Art. 11)
- [x] Transferência internacional declarada (Art. 33)
- [x] Direitos do titular listados (Art. 18)
- [x] Controlador identificado
- [x] Canal de contato disponível
- [x] Retenção definida

### GDPR (usuários europeus)
- [x] Base legal declarada
- [x] Direito ao esquecimento (delete account)
- [x] Direito de acesso
- [x] Transferência fora da UE mencionada
- [ ] DPA (Data Processing Agreement) formal com Neon e DigitalOcean — recomendado se houver usuários europeus significativos

---

## O que NÃO está coberto (e quando precisaria)

| Item | Quando precisaria |
|---|---|
| Cookie banner interativo | Se usar Google Analytics, Meta Pixel, ou qualquer cookie de rastreamento |
| Assinatura eletrônica dos termos | Se precisar de prova legal de aceite (ex: contrato, pagamento) |
| DPA formal com terceiros | Se tiver base de usuários europeus relevante (GDPR Art. 28) |
| Política de reembolso | Se o app tiver compras in-app ou assinatura |
| COPPA (EUA) | Se tiver usuários nos EUA menores de 13 |
