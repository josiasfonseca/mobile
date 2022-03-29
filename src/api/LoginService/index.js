

export const realizarLogin = async (user, password) => {

    console.log(user ,password)
    setTimeout(() => {
        if (user.toLowerCase() == 'ifpr' && password == 'secret')
            return 'Logado com sucesso'
        else
            throw 'Credenciais inválidas'
    }, 2000);
}