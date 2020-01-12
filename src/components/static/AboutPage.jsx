import React from "react";
import about from "../../img/about.svg";
import { Layout } from "./Layout";

export const AboutPage = () => {
  return (
    <Layout>
      <img src={about} alt="sobre" className="static-page-img" />
      <h2>Sobre o Reactgram</h2>
      <p>
        React é a biblioteca frontend mais usada no mercado. Construida pelo
        Facebook, é baseada em componentes funcionais que são atualizados
        automaticamente quando uma mudança de estado ocorre. Desenhado de forma
        declarativa, componentes criados em React são mais fáceis de entender e
        de debugar.
      </p>
      <p>
        Focando em práticas reais do mercado internacional , esse curso vai te
        ensinar a construir aplicações web super dinâmicas muito rápido.
      </p>
      <p>
        Contruiremos juntos um <strong>clone do Instangram totalmente do zero</strong>, onde
        iremos postar fotos, seguir e buscar por amigos, realizar login de
        usuário, atualizar status, foto do perfil e muito mais. Durante a
        contrução do app, aprenderemos os conceitos mais importantes do React e
        como implementá-los.
      </p>
      <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
        <div>
          <h3>Básico</h3>
          <ul>
            <li>Ferramentas Necessárias</li>
            <li>Hello World em React</li>
            <li>Introdução ao JSX</li>
            <li>Renderização de elementos</li>
            <li>Componentes React e Props</li>
            <li>Ciclo de vida do componente</li>
            <li>Gerenciamento de Estado</li>
            <li>State e Props</li>
            <li>Renderização condicional</li>
            <li>Eventos em React</li>
            <li>Renderizando listas</li>
            <li>Usando forms</li>
          </ul>
        </div>

        <div>
          <h3>Avançado</h3>
          <ul>
            <li>Componentes Containers</li>
            <li>Gerenciamento de Rotas</li>
            <li>Comunicação com API JSON</li>
            <li>Autenticação de usuário</li>
            <li>Componentes Funcionais</li>
            <li>High Order Components</li>
            <li>Context API</li>
            <li>React Hooks</li>
            <li>usando CSS e SCSS</li>
            <li>Animações com React Spring</li>
            <li>Build para Produção</li>
            <li>Deploy em Serviços Cloud</li>
          </ul>
        </div>
      </div>
      <p>
        Ao concluir esse curso, você será capaz de construir aplicações React completas, utilizando os conceitos mais modernos e melhores práticas.
      </p>
    </Layout>
  );
};
