# 🔧 Solução de Problemas (Troubleshooting)

## ⚠️ Problemas Comuns e Soluções

### 1. Erro: "Unknown at rule @tailwind"

**Problema:** Avisos no CSS sobre `@tailwind`

**Solução:** Isso é normal! É apenas o linter CSS que não reconhece as diretivas do Tailwind. O site funcionará perfeitamente.

**Ignorar avisos:** Não afeta o funcionamento.

---

### 2. Erro: Node.js Version

**Problema:** 
```
You are using Node.js 20.11.1. Vite requires Node.js version 20.19+ or 22.12+
```

**Solução 1 - Atualizar Node.js (Recomendado):**
1. Baixe Node.js 22.x em [nodejs.org](https://nodejs.org)
2. Instale a nova versão
3. Reinicie o terminal
4. Execute: `npm run dev`

**Solução 2 - Downgrade Vite (Alternativa):**
```powershell
npm install vite@^5.0.0 --save-dev
npm run dev
```

---

### 3. Erro: "Cannot find module 'react-icons'"

**Problema:** Biblioteca de ícones não instalada

**Solução:**
```powershell
npm install react-icons
```

---

### 4. Erro: "Module not found: Can't resolve './components/...'"

**Problema:** Caminho do componente incorreto

**Solução:**
- Verifique se todos os arquivos existem em `src/components/`
- Certifique-se de que os nomes estão corretos (case-sensitive)
- Reinicie o servidor: `Ctrl+C` e `npm run dev`

---

### 5. Tailwind não está funcionando

**Problema:** Classes do Tailwind não aplicam estilos

**Solução:**
1. Verifique se `tailwind.config.js` existe
2. Verifique se `postcss.config.js` existe
3. Certifique-se de que `index.css` tem as diretivas `@tailwind`
4. Limpe o cache e reinicie:
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

---

### 6. Imagens não carregam

**Problema:** Imagens quebradas ou não aparecem

**Solução:**
- Coloque imagens na pasta `public/`
- Use caminhos absolutos: `/imagem.jpg` (não `./imagem.jpg`)
- Formatos suportados: JPG, PNG, SVG, WebP
- Verifique o nome do arquivo (case-sensitive)

**Exemplo:**
```jsx
// ❌ Errado
<img src="./foto.jpg" />

// ✅ Correto
<img src="/foto.jpg" />
```

---

### 7. Links não funcionam

**Problema:** Clique em link não navega

**Solução:**
- Certifique-se de que o ID existe na seção:
```jsx
// No componente
<section id="experiencia">

// No link
<a href="#experiencia">
```

- Verifique scroll behavior no `index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

---

### 8. Menu mobile não fecha

**Problema:** Menu mobile fica aberto após clicar

**Solução:** O código já tem `handleMenuClick()` - verifique se está implementado:
```jsx
const handleMenuClick = () => {
  setIsMenuOpen(false);
};

<a onClick={handleMenuClick}>
```

---

### 9. Erro de Build (npm run build)

**Problema:** Erro ao fazer build para produção

**Solução:**
```powershell
# Limpar e reinstalar
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm run build
```

---

### 10. Porta já em uso

**Problema:** `Port 5173 is already in use`

**Solução:**
- Feche outros terminais com Vite rodando
- Ou mate o processo:
```powershell
# Windows
netstat -ano | findstr :5173
taskkill /PID <numero> /F
```

---

### 11. Hot Reload não funciona

**Problema:** Mudanças não aparecem automaticamente

**Solução:**
1. Salve o arquivo (`Ctrl+S`)
2. Verifique se o terminal mostra "page reload"
3. Reinicie o servidor se necessário
4. Limpe cache do navegador (`Ctrl+Shift+R`)

---

### 12. Estilos não aplicam no mobile

**Problema:** Site não responsivo

**Solução:**
- Verifique meta viewport no `index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- Use classes responsivas:
```jsx
<div className="text-sm md:text-lg lg:text-xl">
```

---

### 13. Fontes não carregam

**Problema:** Fonte padrão ao invés de Poppins/Inter

**Solução:**
1. Verifique o import no `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
```

2. Verifique conexão com internet
3. Limpe cache do navegador

---

### 14. Deploy falha na Vercel/Netlify

**Problema:** Erro ao fazer deploy

**Solução:**

**Para Vercel:**
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

**Para Netlify:**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

### 15. Erro: "React is not defined"

**Problema:** Componente não renderiza

**Solução:**
Adicione import em cada componente:
```jsx
import React from 'react';
```

---

## 🔍 Como Debugar

### 1. Console do Navegador
```
F12 → Console
```
Veja erros JavaScript em tempo real

### 2. React DevTools
Instale extensão do navegador:
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### 3. Verificar Erros no Terminal
Olhe o terminal onde `npm run dev` está rodando

### 4. Verificar Build
```powershell
npm run build
```
Identifica erros que podem não aparecer em dev

---

## 📞 Ainda com Problemas?

### Checklist Geral:
- [ ] Node.js instalado corretamente
- [ ] `npm install` executado sem erros
- [ ] Todas as dependências instaladas
- [ ] Arquivos salvos
- [ ] Servidor reiniciado
- [ ] Cache do navegador limpo
- [ ] Nenhum erro no terminal
- [ ] Nenhum erro no console do navegador

### Recursos de Ajuda:
- [Documentação Vite](https://vite.dev/guide/)
- [Documentação React](https://react.dev/learn)
- [Documentação Tailwind](https://tailwindcss.com/docs)
- [Stack Overflow](https://stackoverflow.com/)

---

## 🆘 Reset Completo

Se nada funcionar, tente reset total:

```powershell
# 1. Limpar tudo
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# 2. Reinstalar
npm install

# 3. Limpar cache do npm
npm cache clean --force

# 4. Reinstalar novamente
npm install

# 5. Iniciar
npm run dev
```

---

## ⚡ Comandos Úteis

```powershell
# Ver versão do Node
node --version

# Ver versão do npm
npm --version

# Listar dependências instaladas
npm list --depth=0

# Atualizar dependências
npm update

# Verificar pacotes desatualizados
npm outdated

# Instalar dependência específica
npm install nome-do-pacote

# Remover dependência
npm uninstall nome-do-pacote
```

---

**Dica Final:** Sempre leia as mensagens de erro com atenção. Elas geralmente indicam exatamente o que está errado! 🔍
