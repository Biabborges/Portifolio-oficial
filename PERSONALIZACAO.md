# 📝 Guia de Personalização do Portfólio

Este guia mostra passo a passo como personalizar o portfólio com suas informações.

## 1️⃣ Informações Pessoais na Apresentação

**Arquivo:** `src/components/Apresentacao.jsx`

### Alterar Nome e Cargo
```jsx
<h1>SEU NOME COMPLETO</h1>
<p>Seu Cargo | Sua Área</p>
```

### Alterar Texto de Apresentação
```jsx
<p className="text-lg...">
  Seu texto de apresentação aqui. Conte sobre você, suas paixões,
  experiências e o que te motiva na área.
</p>
```

### Alterar Links de Contato
```jsx
<a href="https://www.linkedin.com/in/SEU_PERFIL">
<a href="https://github.com/SEU_USUARIO">
<a href="mailto:SEU_EMAIL@email.com">
```

### Adicionar Sua Foto
1. Coloque sua foto na pasta `public/` (ex: `public/foto-perfil.jpg`)
2. Substitua no código:
```jsx
<img 
  src="/foto-perfil.jpg" 
  alt="Seu Nome" 
/>
```

---

## 2️⃣ Experiências Profissionais

**Arquivo:** `src/components/Experiencia.jsx`

Edite o array `experiencias`:

```javascript
const experiencias = [
  {
    id: 1,
    empresa: 'Nome da Empresa',
    cargo: 'Seu Cargo',
    periodo: 'Mês Ano - Presente',
    descricao: 'Descrição das suas responsabilidades e conquistas...'
  },
  // Adicione mais experiências aqui
];
```

**Dicas:**
- Mantenha descrições entre 2-3 linhas
- Use verbos de ação (Liderou, Desenvolveu, Implementou)
- Destaque resultados e impactos

---

## 3️⃣ Projetos do Portfólio

**Arquivo:** `src/components/Portfolio.jsx`

Edite o array `projetos`:

```javascript
const projetos = [
  {
    id: 1,
    nome: 'Nome do Projeto',
    imagem: '/imagens/projeto1.png', // Coloque imagens em public/imagens/
    descricao: 'Breve descrição do projeto (1-2 linhas)',
    tags: ['React', 'Node.js', 'MongoDB'], // Tecnologias utilizadas
    linkCodigo: 'https://github.com/seu-usuario/projeto',
    linkDemo: 'https://projeto-demo.com' // ou null se não tiver
  },
  // Adicione mais projetos aqui
];
```

### Adicionar Imagens dos Projetos
1. Crie a pasta `public/imagens/`
2. Adicione suas imagens (recomendado: 400x300px, formato JPG/PNG)
3. Use no array: `imagem: '/imagens/nome-do-projeto.jpg'`

---

## 4️⃣ Footer e Contatos

**Arquivo:** `src/components/Footer.jsx`

### Alterar Nome e Cargo
```jsx
<h3>Seu Nome Completo</h3>
<p>Seu Cargo | Sua Área</p>
```

### Alterar Links
```jsx
<a href="https://www.linkedin.com/in/SEU_PERFIL">
<a href="https://github.com/SEU_USUARIO">
<a href="mailto:SEU_EMAIL@email.com">
```

---

## 5️⃣ Cores do Site

**Arquivo:** `tailwind.config.js`

Personalize as cores do tema:

```javascript
colors: {
  'primary-dark': '#0D1B2A',    // Azul mais escuro
  'primary-medium': '#1B263B',  // Azul médio
  'primary-light': '#415A77',   // Azul claro
  'neutral-gray': '#E0E1DD',    // Fundo cinza
},
```

**Ferramentas úteis:**
- [Coolors.co](https://coolors.co/) - Gerador de paletas
- [Adobe Color](https://color.adobe.com/) - Explorador de cores

---

## 6️⃣ Fontes

**Arquivo:** `src/index.css`

As fontes atuais são:
- **Poppins** (Títulos)
- **Inter** (Textos)

Para mudar:
1. Acesse [Google Fonts](https://fonts.google.com/)
2. Escolha suas fontes
3. Substitua o link no `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=SuaFonte:wght@...);
```
4. Atualize no `tailwind.config.js`:
```javascript
fontFamily: {
  'heading': ['SuaFonte', 'sans-serif'],
  'body': ['OutraFonte', 'sans-serif'],
},
```

---

## 7️⃣ Meta Tags e SEO

**Arquivo:** `index.html`

Adicione meta tags para SEO:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfólio de Seu Nome - Product Manager e Engenheira de Software">
  <meta name="keywords" content="product management, engenharia de software, desenvolvedor, portfolio">
  <meta name="author" content="Seu Nome">
  <title>Seu Nome | Product Management & Engenharia</title>
</head>
```

---

## 8️⃣ Checklist de Personalização

Antes de publicar, verifique:

- [ ] Nome e cargo atualizados
- [ ] Texto de apresentação personalizado
- [ ] Foto de perfil adicionada
- [ ] Links de LinkedIn, GitHub e Email corretos
- [ ] Experiências profissionais preenchidas
- [ ] Pelo menos 3-6 projetos no portfólio
- [ ] Imagens dos projetos adicionadas
- [ ] Links dos projetos funcionando
- [ ] Cores personalizadas (opcional)
- [ ] Meta tags no index.html
- [ ] Testado em mobile e desktop

---

## 🚀 Próximos Passos

Após personalizar:

1. **Teste local**: `npm run dev`
2. **Build**: `npm run build`
3. **Deploy**: 
   - Vercel (recomendado)
   - Netlify
   - GitHub Pages

---

## 💡 Dicas Finais

1. **Fotos profissionais**: Use fotos de qualidade e com boa iluminação
2. **Projetos relevantes**: Mostre seus melhores trabalhos
3. **Descrições claras**: Seja objetivo e destaque resultados
4. **Mantenha atualizado**: Adicione novos projetos regularmente
5. **Links funcionais**: Teste todos os links antes de publicar

---

**Dúvidas?** Consulte o README.md principal ou abra uma issue no repositório.
