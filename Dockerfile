# Use a imagem oficial do MySQL
FROM mysql:latest

# Configuração do banco de dados (altere conforme necessário)
ENV MYSQL_ROOT_PASSWORD="" 

# Cria um banco de dados na inicialização
ENV MYSQL_DATABASE=VeiculosDB
# Exponha a porta do MySQL
EXPOSE 3306
