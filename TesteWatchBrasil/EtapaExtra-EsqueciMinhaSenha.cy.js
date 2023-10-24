describe('Acessando a tela de esqueci Minha Senha ', () => {
    it('Realizando a tela de esqueci Minha Senha e realizando a altteração', () => {
      
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
  
      //Acesso a opção de Esqueci Minha Senha
        cy.get('[routerlink="/login/esqueci-minha-senha"]')
            .click()

      //Timer para a introdução dos dados
        cy.wait(3000)

      //introdução do e-mail para trocar a senha 
        cy.get('.input-container')
            .find('[type="email"]')
            .type('igor.j.egea@gmail.com')

      //Timer para realizar a ação do envio de e-mail
        cy.wait(3000)
  
      //Click para realizar do envio de e-mail
        cy.get('.btn-primary')
            .click()
        
      //Timer para realizar a página principal
        cy.wait(3000)
  
      //Click para retorno a página principal
        cy.get('.logo > img')
            .click()

    })
  
  })