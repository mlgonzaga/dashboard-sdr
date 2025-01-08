# Imagem base para o Node.js
FROM node:22

# Configuração do diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto, incluindo o package.json
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código
COPY . .

# Porta que a aplicação escutará
EXPOSE 5173

# Comando para rodar o Vite
CMD ["npm", "run", "dev", "--", "--host"]
