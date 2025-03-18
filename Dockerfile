# Use a imagem oficial do Node.js
FROM node:16

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta 3000 (a mesma que a API usa)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]