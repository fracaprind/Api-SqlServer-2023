export default{
    getLogin: 'SELECT * FROM USUARIOS where Email = @Email',
    getUserAccess: 'SELECT * FROM ACESSOS where IDUsuario = @IDUsuario',
}
