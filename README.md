# 🎨 Portfólio Pessoal - Bianca Borges Lins

Portfólio profissional desenvolvido com React e Tailwind CSS, apresentando um design moderno, elegante e responsivo.

## ✨ Características

- 🎯 **Design Moderno**: Interface limpa com identidade visual azul
- 📱 **Responsivo**: Adaptado para desktop, tablet e mobile
- 🎨 **Paleta de Cores Profissional**:
  - Azul escuro: #0D1B2A
  - Azul médio: #1B263B
  - Azul claro: #415A77
  - Cinza neutro: #E0E1DD
  - Branco: #FFFFFF
- ⚡ **Performance**: Otimizado com Vite
- 🔄 **Animações Suaves**: Transições e efeitos hover elegantes

## 🧩 Seções

1. **Apresentação**: Introdução profissional com foto, cargo e links de contato
2. **Experiência**: Timeline de experiências profissionais em formato de cards
3. **Portfólio**: Grade de projetos com tags de tecnologias e links
4. **Footer**: Informações de contato e copyright

## 🛠️ Tecnologias

- **React**: Biblioteca JavaScript para interfaces
- **Tailwind CSS**: Framework CSS utilitário
- **Vite**: Build tool moderna e rápida
- **React Icons**: Biblioteca de ícones
- **Google Fonts**: Poppins e Inter

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20.19+ ou 22.12+ (ou use versão compatível)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx          # Navegação fixa
│   ├── Apresentacao.jsx    # Seção de introdução
│   ├── Experiencia.jsx     # Experiências profissionais
│   ├── Portfolio.jsx       # Projetos e trabalhos
│   └── Footer.jsx          # Rodapé com contatos
├── App.jsx                 # Componente principal
├── index.css              # Estilos globais e Tailwind
└── main.jsx               # Ponto de entrada
```

## 🎨 Customização

### Alterar Informações Pessoais

Edite os seguintes arquivos:

- **Apresentacao.jsx**: Nome, cargo, bio e links
- **Experiencia.jsx**: Array `experiencias` com seus dados profissionais
- **Portfolio.jsx**: Array `projetos` com seus projetos
- **Footer.jsx**: Links de contato

### Alterar Cores

Edite o arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary-dark': '#SUA_COR',
      'primary-medium': '#SUA_COR',
      'primary-light': '#SUA_COR',
      'neutral-gray': '#SUA_COR',
    },
  },
}
```

### Adicionar Foto de Perfil

Substitua o placeholder em `Apresentacao.jsx`:

```jsx
<img 
  src="/caminho/para/sua/foto.jpg" 
  alt="Seu Nome" 
/>
```

## 📸 Screenshots

O site possui:
- Header fixo com navegação suave
- Seção de apresentação com gradiente
- Cards de experiência com hover effects
- Grade responsiva de projetos (3 colunas → 1 coluna mobile)
- Footer com links sociais

## 📄 Licença

© 2025 Bianca Borges Lins. Todos os direitos reservados.

## 📧 Contato

- LinkedIn: [linkedin.com/in/biancaborges](https://linkedin.com/in/biancaborges)
- GitHub: [github.com/biabborges](https://github.com/biabborges)
- Email: bianca@email.com

---

**Desenvolvido com ❤️ e muito café ☕**
