# Imagem base para o Node.js
FROM node:18

# Configuração do diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto, incluindo o pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instala o pnpm globalmente
RUN npm install -g pnpm

# Instala as dependências do projeto
RUN pnpm install

# Copia o restante do código
COPY . .

# Porta que a aplicação escutará
EXPOSE 5173

# Comando para rodar o Vite
CMD ["pnpm", "run", "dev"]
