describe('Login, Acesso a conteúdo e Logout', () => {
  it('Realizando login no Site, acessando um conteúdo e logout', () => {
     
    //Acesso ao site da Watch Brasil
    cy.visit('https://play.watch.tv.br/try')
      .get('nav.container')

    //Timer para a ação de Click na opção de realizar o login
    cy.wait(5000) 

    //Acesso a opção de Login
    cy.get('#voucher > .navbar-nav > :nth-child(3)')
      .click()

    //Timer para a ação de Click no campo de email
    cy.wait(5000)

    //Acesso ao campo de e-mail e introdução dos dados necessários
    cy.get('.input-container')
      .find('[type="email"]')
      .type('igor.j.egea@gmail.com')

    //Timer para realizar a ação de Click no campo de Senha
    cy.wait(3000)

    //Acesso ao campo de Senha e introdução dos dados necessários
    cy.get('.input-container')
      .find('[type="password"]')
      .type('Igorege@09')
    
    //Timer para realizar a ação de login
    cy.wait(3000)

    //Click para realizar o login
    cy.get('.btn-primary')
    .click()

    cy.wait(5000)
    //Ação de acesso ao perfil que será utilizado para a verificação do conteúdo do site
    cy.get('.profile')
      .click()
    //Timer para realizar a ação de login
    cy.wait(5000)

    //Acesso as opções de programas Ao Vivo
    cy.get(':nth-child(3) > .svg > a')
      .click()

    //Timer para acessar uma programação
    cy.wait(5000)

    //Acesso a uma programação disponível
    cy.get(':nth-child(1) > app-tv-program-scheduled-section > .section > .section--image')
      .click()
    
    //Timer para assistir o conteúdo da programação
    cy.wait(30000)

    //Ação de mover o mouse para sair da programação
    cy.get('.player--shadow').invoke('mouseover')

    //Click na opção de retornar as programações Ao Vivo
    cy.get('.player--header--arrow-back > .ng-star-inserted')
      .click({force: true})

    //Timer para o Click no logo da Watch Brasil(Retorno a página principal)
    cy.wait(3000)

    //Click para retorno a página principal
    cy.get('.logo > img')
      .click()
    //Timer para o Click na seta ao lado do ícone do perfil
    cy.wait(3000)

    //Ação do click para abrir as opções na seta ao lado do ícone
    cy.get('.dropdown > .icon > img')
      .click()

    //Timer para a ação de Logout
    cy.wait(2000)

    //Click para realizar a ação de Logout
    cy.get(':nth-child(3) > :nth-child(4) > a')
    .click()

    //Timer para realizar o retorno para a tela principal
    cy.wait(3000)
    
    //Ação de click para retorno a tela principal
    cy.get('.logo > img')
      .click()
  })

})