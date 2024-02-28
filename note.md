aula 3 

// o jsx é como o html , porém dentro do código javascript 
é a principal maneira de escrever html com o react 
podemos intrepolar variaveis , inserindo ela entre { }
é possivel também executar funções em jsx , inserir atributos valores de tags também é válido em jsx.



aula 4 - componentes 
// permite dividir a aplicação em partes 
os componentes renderizam jsx, assim como APP.JS (QUE É UM COMPONENTE);
precisamos criar um arquivo de componente e importá-lo onde precisamos utilizar , normalmente ficam em uma pasta chamada components . 



aula 5 - props 
As props são valores passados para componentes , podemos deixá-los dinâmicos ou seja, 
mudando a execução por causa do valor da prop 
o valor é passado como um atributo na chamada do componente 
e precisa ser resgatado dentro de uma propriedade/argumento  chamada props na função de definição do componente , as props são somente leitura .



aula 6 

// o ccs pode ser add de forma global na aplicação por meio do arquivo index.css
po estilizar a nivel de componentes utilizamos o css modules para isso
basta criar um arquivo como componente.module.css e chamar este css no componente.



aula 7 
// O React Fragments permite a criação de um componente sem elemento pai; 
o propósito é descomplicar os nós do Dom ; 
A sintaxe <> e </> , não há um nome para tag 
criamos no próprio jsx 

aula 8 
avançando em props 

Podemos definir tipos para as props , realizando uma espécie de validação 
definimos em um objeto chamado propTypes np próprio componente ;
e ainda há a possibilidade de definir um valor padrão ;
neste caso utilizamos o objeto defaultProps ;

aula 9 
Eventos

Os eventos de react são os mesmo eventos do DOM 
ou seja, temos eventos para responder a um click 
O evento é atrelado a uma tag que irá executá-lo 
Geralmente um método é atribuido ao evento 
este método deve ser criado no componente .

aula 10 
UseState 

O Use state é um hook do react (gancho)
Com ele conseguimos manusear o estado de um componente de forma simples 
este hook funciona muito bem com eventos 
podemos atrelar um evento a mudança de state  


aula 11 
passar métodos por props 
ou seja o componente filho pode ativar o método do seu ancestral;
vamos acessar o método por meio do evento 
a sintaxe é a mesma de uma props de dados :props.meuEvento;

aula 12 renderização 
podemos atrelar a exibição de algum elemento a um if; 
esta é chamada de renderização condicional 
envolemos as tags em chaves executam javascript . criamos nossa condiçao 
é possivel usar o state para criar as condições 


aula 13 renderização de listas
para renderizar um alista precisamos primeiro de um array 
depois utilizamos a função map para percorrer cada um dos itens 
podendo assim renderizar algo
é possivel unir operadores condicionais com a renderização

aula 14 state Lift 
state lift é uma técnica utilizada para compartilhar o state 
é normal varios componentes dependerem do mesmo estado 
então precisamos elevar o nivel do mesmo a um componente pai 
então centralizamos o statet no pai , e definimos quem usa quem define o (setState)

aula 15 Routers 
O React Router é um pacote para mudanças de Urls da aplicação 
Podemos assim acessar outras views , sem o page reload;
Trocando apenas uma parte do layout da aplica~çao ou seja o que muda de view para view 
precisamos instalar este pacote no projeto e também realizar mudanças em como o APP É ESTRUTURADO .
 * PARA INSTALAR O PACOTE (* mudar o nome da mesma variavel F2 e depois só mudar no vscode)
 npm install react-router-dom 



