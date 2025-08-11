# Calculadora TypeScript

Uma calculadora simples e eficiente desenvolvida em TypeScript que demonstra conceitos fundamentais de programação funcional e orientação a objetos.

## 📋 Descrição do Projeto

Este projeto implementa uma calculadora TypeScript que oferece operações matemáticas básicas de forma modular e extensível. O código foi estruturado para demonstrar:

- **Programação Funcional**: Uso de funções puras e imutabilidade
- **TypeScript**: Tipagem estática forte e interfaces bem definidas
- **Modularidade**: Separação clara de responsabilidades
- **Boas Práticas**: Código limpo e documentado

## 🚀 Tecnologias Utilizadas

- **TypeScript** 5.x - Linguagem principal
- **Node.js** 18+ - Ambiente de execução
- **npm** - Gerenciador de pacotes

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (geralmente incluído com Node.js)

### Passos de Instalação

1. **Clone o repositório** (ou baixe os arquivos):
```bash
git clone [URL_DO_REPOSITORIO]
cd cria-script
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Verifique a instalação**:
```bash
node --version
npm --version
```

## 🔧 Configuração do Ambiente

O projeto já vem configurado com:
- TypeScript configurado no `tsconfig.json`
- Scripts de build e execução no `package.json`

## 🎯 Como Executar

### Opção 1: Executar com ts-node (Desenvolvimento)
```bash
# Instale o ts-node globalmente (apenas uma vez)
npm install -g ts-node

# Execute o projeto
ts-node calculo.ts
```

### Opção 2: Compilar e Executar (Produção)
```bash
# Compilar TypeScript para JavaScript
npm run build

# Executar o JavaScript compilado
node dist/calculo.js
```

### Opção 3: Executar com npm scripts
```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm start
```

## 📁 Estrutura do Projeto

```
cria-script/
├── calculo.ts          # Arquivo principal da calculadora
├── package.json        # Configurações e dependências
├── tsconfig.json       # Configuração do TypeScript
├── .gitignore         # Arquivos ignorados pelo Git
└── README.md          # Este arquivo
```

## 🧮 Funcionalidades

A calculadora oferece as seguintes operações:

- **Soma**: Adição de dois números
- **Subtração**: Subtração de dois números
- **Multiplicação**: Multiplicação de dois números
- **Divisão**: Divisão de dois números (com tratamento de divisão por zero)
- **Porcentagem**: Cálculo de porcentagem
- **Potência**: Exponenciação

## 📝 Exemplos de Uso

```typescript
// Importar a calculadora
import { Calculadora } from './calculo';

// Criar instância
const calc = new Calculadora();

// Realizar operações
console.log(calc.somar(5, 3));        // 8
console.log(calc.multiplicar(4, 7));  // 28
console.log(calc.dividir(10, 2));     // 5
```

## 🐛 Solução de Problemas

### Erro: "Cannot find module"
```bash
# Instale as dependências novamente
npm install
```

### Erro: "ts-node command not found"
```bash
# Instale o ts-node globalmente
npm install -g ts-node
```

### Erro de compilação
```bash
# Limpe o cache e reinstale
npm cache clean --force
npm install
```

## 🔍 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com ts-node
- `npm run build` - Compila TypeScript para JavaScript
- `npm start` - Executa o código compilado
- `npm run clean` - Limpa arquivos compilados

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Autor

Desenvolvido como parte do estudo de TypeScript e programação funcional.

---

**Nota**: Este é um projeto educacional focado em demonstrar boas práticas de desenvolvimento TypeScript.
