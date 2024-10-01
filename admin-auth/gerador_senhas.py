import random
from datetime import datetime

def gerar_codigo_login(nome, ano_nascimento):
    # Formata o nome do administrador (sem espaços e letras maiúsculas) + ano de nascimento
    codigo = f"{nome.replace(' ', '').upper()}_{ano_nascimento}"
    return codigo

def gerar_senha(data_nascimento):
    # Converte a data de nascimento no formato DDMMYYYY para ser a senha
    return data_nascimento.strftime('%d%m%Y')

def main():
    # Exemplo de uso:
    nome_adm = input("Digite o nome do administrador: ")
    ano_nasc = input("Digite o ano de nascimento do administrador (YYYY): ")
    
    # Data de nascimento no formato DD/MM/YYYY
    data_nasc_str = input("Digite a data de nascimento (DD/MM/YYYY): ")
    data_nascimento = datetime.strptime(data_nasc_str, '%d/%m/%Y')

    # Gerar código de login e senha
    codigo_login = gerar_codigo_login(nome_adm, ano_nasc)
    senha = gerar_senha(data_nascimento)

    # Exibir o resultado
    print(f"Código de Login: {codigo_login}")
    print(f"Senha: {senha}")

if __name__ == "__main__":
    main()
