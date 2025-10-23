# 🌐 Guia Completo: Configurar DNS no GoDaddy para Vercel

Este guia mostra **passo a passo** como configurar seu domínio do GoDaddy para funcionar com a Vercel.

---

## 📋 O que você vai precisar

- ✅ Domínio registrado no GoDaddy
- ✅ Conta na Vercel
- ✅ Projeto já publicado na Vercel (URL `.vercel.app` funcionando)

---

## 🎯 Passo a Passo Completo

### **Etapa 1: Login no GoDaddy**

1. Acesse [godaddy.com](https://godaddy.com)
2. Faça login na sua conta
3. Clique em **"Meus Produtos"** (My Products)

---

### **Etapa 2: Acessar Gerenciamento DNS**

1. Na lista de produtos, encontre seu domínio
2. Ao lado do domínio, clique nos **3 pontos** (⋮) ou no botão **"DNS"**
3. Selecione **"Gerenciar DNS"** (Manage DNS)

---

### **Etapa 3: Configurar Registros DNS**

#### **Para domínio raiz (exemplo.com)**

##### **3.1 - Adicionar Registro A**

1. Clique no botão **"Adicionar"** (Add) no topo da página
2. Selecione o tipo **"A"**
3. Preencha os campos:
   ```
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   TTL: 1 hora (600 segundos) ou deixe padrão
   ```
4. Clique em **"Salvar"** (Save)

##### **3.2 - Adicionar Registro CNAME para www**

1. Clique novamente em **"Adicionar"** (Add)
2. Selecione o tipo **"CNAME"**
3. Preencha os campos:
   ```
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   TTL: 1 hora (ou padrão)
   ```
4. Clique em **"Salvar"** (Save)

##### **3.3 - Remover Registros Antigos (IMPORTANTE!)**

⚠️ **Este é o passo que muitas pessoas esquecem!**

1. Procure na lista de registros DNS por:
   - Registros tipo **A** com nome **@**
   - Registros tipo **CNAME** com nome **www**
   - Registros que apontam para IPs antigos

2. Para cada registro antigo:
   - Clique no ícone de **lixeira** (🗑️) ou **lápis** (✏️)
   - Delete ou edite para os novos valores

3. **Desative redirecionamentos:**
   - Se houver "Domain Forwarding" ativo, **desative**
   - Vá em "Forwarding" e remova qualquer redirecionamento

---

#### **Para subdomínio (portfolio.exemplo.com)**

Se você quer usar um subdomínio:

1. Clique em **"Adicionar"** (Add)
2. Selecione o tipo **"CNAME"**
3. Preencha:
   ```
   Tipo: CNAME
   Nome: portfolio (ou qualquer nome que quiser)
   Valor: cname.vercel-dns.com
   TTL: 1 hora
   ```
4. Clique em **"Salvar"**

---

### **Etapa 4: Adicionar Domínio na Vercel**

1. Vá para [vercel.com](https://vercel.com)
2. Acesse seu projeto
3. Clique em **"Settings"** (⚙️)
4. Clique em **"Domains"** no menu lateral
5. Digite seu domínio:
   - `exemplo.com` (domínio raiz)
   - `www.exemplo.com` (subdomínio www)
   - `portfolio.exemplo.com` (subdomínio personalizado)
6. Clique em **"Add"**
7. A Vercel vai verificar os registros DNS

---

### **Etapa 5: Aguardar Propagação DNS**

⏱️ **Tempo de Espera:**
- **Mínimo:** 10 minutos
- **Normal:** 1-6 horas
- **Máximo:** 48 horas

**Como verificar se propagou:**
1. Acesse [dnschecker.org](https://dnschecker.org)
2. Digite seu domínio
3. Selecione tipo "A" ou "CNAME"
4. Veja se aparece o IP `76.76.21.21` ou `cname.vercel-dns.com`
5. Quando aparecer verde em vários países = propagou! ✅

**Limpar cache DNS do seu computador (Windows):**
```powershell
ipconfig /flushdns
```

---

### **Etapa 6: SSL Automático**

🔒 Após a propagação DNS:
1. A Vercel gera SSL automaticamente (Let's Encrypt)
2. Isso pode levar de 10 minutos a 2 horas
3. Você verá um cadeado 🔒 no navegador
4. Seu site estará em `https://` automaticamente

---

## 📸 Como Deve Ficar no GoDaddy

Seu painel DNS deve ter estes registros:

```
┌──────────────────────────────────────────────────────────┐
│ Tipo    Nome    Valor                      TTL           │
├──────────────────────────────────────────────────────────┤
│ A       @       76.76.21.21               1 hora (600s)  │
│ CNAME   www     cname.vercel-dns.com      1 hora (600s)  │
└──────────────────────────────────────────────────────────┘
```

**❌ REMOVA se existir:**
- Registros A antigos apontando para outros IPs
- CNAMEs antigos apontando para outros servidores
- Domain Forwarding / Redirecionamentos

---

## 🐛 Problemas Comuns e Soluções

### ❌ Erro: "Domain is already in use"

**Causa:** Domínio já está sendo usado em outro projeto ou tem registros conflitantes.

**Solução:**
1. Remova TODOS os registros A e CNAME antigos no GoDaddy
2. Desative "Domain Forwarding" se estiver ativo:
   - GoDaddy → Domínio → Forwarding → Delete
3. Aguarde 10 minutos
4. Tente adicionar na Vercel novamente

---

### ❌ Erro: "Invalid Configuration"

**Causa:** Registros DNS incorretos ou incompletos.

**Solução:**
1. Verifique se os valores estão EXATAMENTE como mostrado:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```
2. Não adicione `http://` ou `https://`
3. Não adicione `/` no final
4. Use exatamente `@` para o nome do registro A

---

### ❌ Erro: "DNS not propagated yet"

**Causa:** DNS ainda não propagou globalmente.

**Solução:**
1. **Seja paciente!** Pode levar até 48h
2. Verifique em [dnschecker.org](https://dnschecker.org)
3. Limpe cache DNS:
   ```powershell
   ipconfig /flushdns
   ```
4. Tente acessar em modo anônimo/privado do navegador
5. Tente acessar de outro dispositivo ou rede

---

### ❌ SSL não funciona (Erro "Not Secure")

**Causa:** SSL ainda não foi gerado ou DNS não propagou completamente.

**Solução:**
1. **Aguarde a propagação DNS completa** (pode levar 2-6 horas)
2. A Vercel gera SSL automaticamente após DNS propagar
3. Vá em Settings → Domains na Vercel
4. Clique em "Refresh" ou "Retry"
5. Se não resolver em 24h, remova o domínio e adicione novamente

---

### ❌ Site antigo ainda aparece

**Causa:** Cache do navegador ou DNS cache.

**Solução:**
1. Limpe cache do navegador (Ctrl + Shift + Delete)
2. Abra em modo anônimo
3. Limpe DNS:
   ```powershell
   ipconfig /flushdns
   ```
4. Aguarde mais tempo (pode ser cache DNS do provedor)

---

### ❌ www funciona mas domínio raiz não (ou vice-versa)

**Causa:** Falta configurar um dos registros.

**Solução:**
1. Certifique-se de ter AMBOS os registros:
   - Registro A: `@` → `76.76.21.21`
   - Registro CNAME: `www` → `cname.vercel-dns.com`
2. Na Vercel, adicione AMBAS as versões:
   - `exemplo.com`
   - `www.exemplo.com`

---

## ✅ Checklist Final

Use esta lista para garantir que tudo está configurado:

- [ ] Login no GoDaddy realizado
- [ ] Acessou "Gerenciar DNS" do seu domínio
- [ ] Registro A criado: `@` → `76.76.21.21`
- [ ] Registro CNAME criado: `www` → `cname.vercel-dns.com`
- [ ] Registros antigos (A e CNAME) removidos
- [ ] Domain Forwarding desativado (se estava ativo)
- [ ] Aguardou propagação DNS (verificar em dnschecker.org)
- [ ] Domínio adicionado na Vercel (Settings → Domains)
- [ ] SSL automático funcionando (cadeado 🔒 aparece)
- [ ] Site acessível em `https://seudominio.com`
- [ ] Site acessível em `https://www.seudominio.com`

---

## 🎯 Resumo Rápido

1. **GoDaddy:** Adicionar registros A e CNAME
2. **Vercel:** Adicionar domínio em Settings → Domains
3. **Aguardar:** 1-6 horas para DNS propagar
4. **Testar:** Acessar seu domínio em `https://`
5. **Pronto!** SSL automático incluído ✅

---

## 📞 Precisa de Ajuda?

Se continuar com problemas:

1. **Suporte GoDaddy:**
   - Chat ao vivo no site
   - Telefone: veja na página de contato
   - Email: suporte@godaddy.com

2. **Suporte Vercel:**
   - [vercel.com/support](https://vercel.com/support)
   - Twitter: [@vercel](https://twitter.com/vercel)

3. **Ferramentas de Diagnóstico:**
   - [DNSChecker.org](https://dnschecker.org) - Verificar propagação DNS
   - [WhatsMyDNS.net](https://whatsmydns.net) - Ver DNS globalmente
   - [SSL Checker](https://www.sslshopper.com/ssl-checker.html) - Verificar SSL

---

## 🎉 Pronto!

Seu domínio do GoDaddy agora está configurado e funcionando com a Vercel! 🚀

**Seu site está em:** `https://seudominio.com` ✨
