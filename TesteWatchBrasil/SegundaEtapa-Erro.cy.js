describe('Erro ao realizar a tentativa de login', () => {
    it('Realizando a tentativa de Login no site', () => {
      
      //Acesso ao site da Watch Brasil
        cy.visit('https://play.watch.tv.br/try')
            .get('nav.container')
  
      //Timer para a ação de Click na opção de realizar o login
        cy.wait(3000) 
  
      //Acesso a opção de Login
        cy.get('#voucher > .navbar-nav > :nth-child(3)')
            .click()
  
      //Timer para a ação de Click no campo de email
        cy.wait(3000)
  
      //Acesso ao campo de e-mail e introdução dos dados necessários
        cy.get('.input-container')
            .find('[type="email"]')
            .type('igor.j.egea@gmail.co')
  
      //Timer para realizar a ação de Click no campo de Senha
        cy.wait(3000)
  
      //Acesso ao campo de Senha e introdução dos dados necessários
        cy.get('.input-container')
            .find('[type="password"]')
            .type('Igorege@09')

      //Timer para realizar a ação de Login
        cy.wait(3000)
  
      //Click para realizar o login
        cy.get('.btn-primary')
            .click()
        
      //Timer para realizar a ação de login
        cy.wait(3000)

      //Ação de acesso ao perfil que será utilizado para a verificação do conteúdo do site
        cy.get('.profile')
            .click()

    })
  
  })