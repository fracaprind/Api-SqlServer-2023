export const querys = {
    getAllOrders:'SELECT * FROM PRODUCAO order BY PrazoEntrega DESC',
    getAllCompanys:'SELECT * FROM EMPRESA order BY Empresa DESC',    
    getAllUsers:'SELECT * FROM USUARIOS  ORDER BY NOME OFFSET (@Pagina - 1) * @QtdPorPagina ROWS FETCH NEXT @QtdPorPagina ROWS ONLY;',
    getTotalUsers:'SELECT COUNT(USUARIO) AS TotalRegistros FROM USUARIOS',
    getAllClients:'SELECT * FROM CLIENTES',    
    getLogin: 'SELECT * FROM USUARIOS where Email = @Email',
    getUserAllAccess: 'SELECT Acesso, Incluir, Alterar,Excluir,Validacao FROM ACESSOS where IDUsuario = @IDUsuario order by Acesso',
    getUserAccess: 'SELECT Incluir, Alterar,Excluir,Validacao FROM ACESSOS where IDUsuario = @IDUsuario and acesso = @Acesso',
    getUserByID: 'SELECT * from USUARIOS where IDUsuario = @IDUsuario',
    deleteUserByID: 'DELETE from USUARIOS where IDUsuario = @IDUsuario',
    editUserByID:'UPDATE USUARIOS SET Usuario = @Usuario, Nome =@Nome, Setor = @Setor, Codigo = @Codigo, Email = @Email where IDUsuario = @IDUsuario',
    newUser:'INSERT INTO USUARIOS (Usuario,Codigo,Nome,Setor,Email) values(@Usuario,@Codigo,@Nome,@setor,@email)' ,
}