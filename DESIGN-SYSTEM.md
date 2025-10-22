# 🎨 Paleta de Cores e Design System

## 🎨 Cores Principais

### Azul Escuro - Primary Dark
```css
#0D1B2A
RGB: 13, 27, 42
```
**Uso:** Background do header, footer e seção de apresentação

### Azul Médio - Primary Medium
```css
#1B263B
RGB: 27, 38, 59
```
**Uso:** Gradientes, botões primários

### Azul Claro - Primary Light
```css
#415A77
RGB: 65, 90, 119
```
**Uso:** Hover states, destaques, badges, bordas

### Cinza Neutro - Neutral Gray
```css
#E0E1DD
RGB: 224, 225, 221
```
**Uso:** Background geral, textos secundários

### Branco
```css
#FFFFFF
RGB: 255, 255, 255
```
**Uso:** Cards, textos em fundos escuros

---

## 📐 Espaçamentos

- **Seções:** py-20 (padding vertical grande)
- **Cards:** p-6 md:p-8
- **Gaps:** gap-4, gap-6, gap-8
- **Margens:** mb-4, mb-6, mb-8, mb-16

---

## 🔤 Tipografia

### Headings (Títulos)
**Fonte:** Poppins (Google Fonts)
- H1: text-5xl md:text-6xl (48px → 60px)
- H2: text-4xl md:text-5xl (36px → 48px)
- H3: text-2xl (24px)
- **Peso:** font-bold (700)

### Body (Textos)
**Fonte:** Inter (Google Fonts)
- Normal: text-lg (18px)
- Pequeno: text-base (16px)
- **Peso:** font-normal (400), font-medium (500)

---

## 🎯 Bordas e Sombras

### Bordas Arredondadas
```css
rounded-lg    /* 8px */
rounded-xl    /* 12px */
rounded-2xl   /* 16px */
```

### Sombras
```css
shadow-lg     /* Sombra padrão de cards */
shadow-xl     /* Sombra em hover */
shadow-2xl    /* Sombra forte (foto perfil) */
```

---

## 🎭 Animações e Transições

### Hover Effects
```jsx
// Scale up
hover:scale-[1.02]
hover:scale-105
hover:scale-110

// Color change
hover:bg-primary-dark
hover:text-primary-light

// Shadow
hover:shadow-xl
```

### Transitions
```jsx
transition-all duration-300
transition-colors
transition-transform duration-500
```

---

## 📱 Breakpoints Responsivos

### Mobile First
```jsx
// Mobile: default
// Tablet: md: (768px+)
// Desktop: lg: (1024px+)
```

### Exemplos
```jsx
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="text-center md:text-left">
<div className="flex-col md:flex-row">
```

---

## 🧩 Componentes Padrão

### Card
```jsx
<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
  {/* Conteúdo */}
</div>
```

### Button
```jsx
<button className="bg-primary-light hover:bg-[#5a7a9d] text-white px-6 py-3 rounded-lg transition-all duration-300">
  Texto
</button>
```

### Badge/Tag
```jsx
<span className="bg-primary-light/10 text-primary-light px-3 py-1 rounded-full text-sm font-medium">
  Tag
</span>
```

### Link com Ícone
```jsx
<a className="flex items-center gap-2 text-white hover:text-primary-light transition-colors">
  <Icon /> Texto
</a>
```

---

## 🎨 Gradientes

### Background Gradient
```jsx
<div className="bg-gradient-to-br from-primary-dark to-primary-medium">
```

### Overlay Gradient
```jsx
<div className="bg-gradient-to-t from-black/50 to-transparent">
```

---

## ✨ Efeitos Especiais

### Animação de Pulso
```jsx
<FaHeart className="animate-pulse" />
```

### Border com Gradiente (simulado)
```jsx
<div className="border-l-4 border-primary-light">
```

### Backdrop Blur
```jsx
<header className="bg-primary-dark/95 backdrop-blur-sm">
```

---

## 🎯 Classes Utilitárias Comuns

### Layout
```css
flex, flex-col, flex-row
items-center, justify-center, justify-between
grid, grid-cols-1, grid-cols-3
gap-4, gap-6, gap-8
```

### Espaçamento
```css
p-6, py-20, px-6
m-4, mb-8, mt-16
space-y-4
```

### Sizing
```css
w-full, w-64, w-24
h-full, h-64, h-48
min-h-screen
max-w-6xl, max-w-7xl
```

### Texto
```css
text-center, text-left
font-bold, font-medium
leading-relaxed
whitespace-nowrap
```

---

## 🌟 Boas Práticas

1. **Consistência**: Use sempre as mesmas classes para elementos similares
2. **Responsividade**: Teste em mobile, tablet e desktop
3. **Acessibilidade**: Use `aria-label` em ícones
4. **Performance**: Evite animações complexas em mobile
5. **Hover states**: Sempre adicione feedback visual
6. **Contraste**: Garanta boa legibilidade (WCAG AA)

---

## 🔧 Customização Avançada

### Adicionar Nova Cor
```javascript
// tailwind.config.js
colors: {
  'custom-color': '#123456',
}
```

### Criar Classe Customizada
```css
/* index.css */
@layer components {
  .btn-custom {
    @apply bg-primary-light hover:bg-primary-dark text-white px-6 py-3 rounded-lg;
  }
}
```

### Breakpoint Personalizado
```javascript
// tailwind.config.js
screens: {
  'xs': '475px',
  'xl': '1280px',
}
```

---

## 📚 Recursos Úteis

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Google Fonts](https://fonts.google.com/)

---

**Criado para o Portfólio de Bianca Borges Lins**
