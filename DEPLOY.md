# 🚀 Guia de Deploy - Publicando seu Portfólio

Este guia mostra como publicar seu portfólio online gratuitamente.

---

## 🌟 Opções de Hospedagem Gratuita

| Plataforma | Facilidade | Build Time | SSL | Domínio Custom |
|------------|-----------|------------|-----|----------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ~1min | ✅ | ✅ |
| **Netlify** | ⭐⭐⭐⭐⭐ | ~1min | ✅ | ✅ |
| **GitHub Pages** | ⭐⭐⭐⭐ | ~2min | ✅ | ✅ |
| **Render** | ⭐⭐⭐ | ~3min | ✅ | ✅ |

---

## 🔥 Método 1: Vercel (Recomendado)

### Por que Vercel?
- ✅ Deploy automático a cada push
- ✅ Preview de cada commit
- ✅ SSL grátis
- ✅ CDN global
- ✅ Domínio .vercel.app grátis

### Passo a Passo

#### Opção A: Interface Web (Mais Fácil)

1. **Criar conta:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Sign Up"
   - Use sua conta do GitHub

2. **Importar projeto:**
   - Clique em "Add New..." → "Project"
   - Conecte seu repositório GitHub
   - Selecione o repositório `Portifolio-oficial`

3. **Configurar build:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde 1-2 minutos
   - Pronto! Seu site está no ar 🎉

5. **URL:**
   ```
   https://seu-projeto.vercel.app
   ```

#### Opção B: CLI (Terminal)

```powershell
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Deploy para produção
vercel --prod
```

---

## 🎯 Método 2: Netlify

### Passo a Passo

#### Opção A: Drag & Drop

1. **Build local:**
   ```powershell
   npm run build
   ```

2. **Acessar Netlify:**
   - Vá para [netlify.com](https://netlify.com)
   - Crie uma conta (use GitHub)

3. **Deploy:**
   - Arraste a pasta `dist` para o netlify.com
   - Aguarde o upload
   - Pronto! 🎉

#### Opção B: Git Integration

1. **Conectar repositório:**
   - Login em [app.netlify.com](https://app.netlify.com)
   - "Add new site" → "Import an existing project"
   - Conecte seu GitHub
   - Selecione o repositório

2. **Configurar:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Deploy:**
   - Clique em "Deploy site"
   - Aguarde o build
   - Pronto! 🎉

4. **URL:**
   ```
   https://seu-site.netlify.app
   ```

---

## 📦 Método 3: GitHub Pages

### Passo a Passo

1. **Instalar gh-pages:**
   ```powershell
   npm install -D gh-pages
   ```

2. **Adicionar scripts no `package.json`:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Configurar vite.config.js:**
   ```javascript
   export default defineConfig({
     base: '/Portifolio-oficial/',
     plugins: [react()],
   })
   ```

4. **Deploy:**
   ```powershell
   npm run deploy
   ```

5. **Ativar GitHub Pages:**
   - Vá para Settings do repositório
   - Pages → Source: gh-pages branch
   - Save

6. **URL:**
   ```
   https://biabborges.github.io/Portifolio-oficial/
   ```

---

## 🌐 Método 4: Render

### Passo a Passo

1. **Criar conta:**
   - Acesse [render.com](https://render.com)
   - Sign up com GitHub

2. **Novo Static Site:**
   - Dashboard → "New +" → "Static Site"
   - Conecte seu repositório

3. **Configurar:**
   ```
   Build Command: npm run build
   Publish directory: dist
   ```

4. **Deploy:**
   - Clique em "Create Static Site"
   - Aguarde o build
   - Pronto! 🎉

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente

Se precisar de variáveis:

**Vercel:**
```
Settings → Environment Variables
```

**Netlify:**
```
Site settings → Environment → Environment variables
```

### Domínio Personalizado

#### Vercel:
1. Settings → Domains
2. Adicione seu domínio
3. Configure DNS:
   ```
   CNAME: cname.vercel-dns.com
   ```

#### Netlify:
1. Domain settings → Add custom domain
2. Configure DNS:
   ```
   CNAME: netlify.app
   ```

---

## ⚡ Otimizações Antes do Deploy

### 1. Otimizar Imagens

```powershell
# Instalar ferramenta de compressão
npm install -D vite-plugin-imagemin
```

**Dicas:**
- Use JPG para fotos
- Use PNG para logos/ícones
- Use WebP quando possível
- Máximo 500KB por imagem

### 2. Adicionar Meta Tags SEO

Edite `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO -->
  <meta name="description" content="Portfólio de Bianca Borges Lins - Product Manager e Engenheira de Software especializada em soluções digitais inovadoras." />
  <meta name="keywords" content="product management, engenharia de software, portfolio, desenvolvedor, react, tailwind" />
  <meta name="author" content="Bianca Borges Lins" />
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Bianca Borges Lins | Product Management & Engenharia" />
  <meta property="og:description" content="Portfólio profissional de Product Management e Engenharia de Software" />
  <meta property="og:image" content="/preview.jpg" />
  <meta property="og:url" content="https://seu-dominio.com" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bianca Borges Lins | Portfolio" />
  <meta name="twitter:description" content="Product Management & Engenharia de Software" />
  <meta name="twitter:image" content="/preview.jpg" />
  
  <title>Bianca Borges Lins | Product Management & Engenharia de Software</title>
</head>
```

### 3. Adicionar Favicon

1. Crie um favicon (16x16, 32x32, 180x180)
2. Use [favicon.io](https://favicon.io/) para gerar
3. Coloque em `public/`
4. Adicione no `index.html`:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### 4. Criar robots.txt

Crie `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://seu-dominio.com/sitemap.xml
```

### 5. Analytics (Opcional)

**Google Analytics:**

Adicione no `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Checklist Pré-Deploy

Antes de publicar:

- [ ] Informações pessoais atualizadas
- [ ] Links funcionando (LinkedIn, GitHub, Email)
- [ ] Foto de perfil profissional
- [ ] Pelo menos 3 experiências
- [ ] Pelo menos 4-6 projetos
- [ ] Imagens otimizadas (< 500KB)
- [ ] Links dos projetos funcionando
- [ ] Testado em mobile
- [ ] Testado em diferentes navegadores
- [ ] Meta tags configuradas
- [ ] Favicon adicionado
- [ ] Título da página correto
- [ ] Build local funciona (`npm run build`)
- [ ] Preview local funciona (`npm run preview`)

---

## 🐛 Problemas Comuns no Deploy

### Build falha

**Erro:** `Error: Build failed`

**Solução:**
```powershell
# Testar build localmente
npm run build

# Se funcionar localmente, limpe cache
rm -rf node_modules
npm install
npm run build
```

### Imagens não aparecem

**Problema:** Imagens quebradas em produção

**Solução:**
- Use caminhos absolutos: `/imagem.jpg`
- Certifique-se de que estão em `public/`
- Não use caminhos relativos (`./` ou `../`)

### CSS não aplicado

**Problema:** Site sem estilos

**Solução:**
- Verifique se Tailwind está configurado
- Rode `npm run build` localmente primeiro
- Limpe cache do build

### 404 em rotas

**Problema:** Páginas retornam 404

**Solução:**
Para Vercel/Netlify, crie `public/_redirects`:
```
/*    /index.html   200
```

---

## 📊 Monitoramento Pós-Deploy

### Verificar Performance

Use ferramentas:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Meta:** Score > 90

### Verificar SEO

Use:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Testar Responsividade

- [Responsinator](https://www.responsinator.com/)
- Chrome DevTools (F12 → Toggle Device Toolbar)

---

## 🎉 Parabéns!

Seu portfólio está no ar! 🚀

### Próximos Passos:

1. **Compartilhe:**
   - Adicione URL no LinkedIn
   - Adicione URL no GitHub profile
   - Compartilhe nas redes sociais

2. **Monitore:**
   - Configure Google Analytics
   - Verifique Search Console
   - Monitore performance

3. **Atualize:**
   - Adicione novos projetos regularmente
   - Atualize experiências
   - Mantenha informações frescas

4. **Promote:**
   - Compartilhe em comunidades dev
   - Use em aplicações de emprego
   - Adicione no email signature

---

**URL do seu portfólio:** ___________________________

**Data de deploy:** ___________________________

**Plataforma:** ___________________________

---

**🌟 Seu portfólio está pronto para impressionar recrutadores e clientes!**
