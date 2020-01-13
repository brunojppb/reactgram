import React from "react";
import { Layout } from "./Layout";
import privacy from "../../img/privacy.svg";

export const PrivacyPage = () => {
  return (
    <Layout>
      <img
        src={privacy}
        alt="privacy"
        className="static-page-img"
      />
      <h2>Política de Privacidade</h2>
      <p>
        Todas as suas informações pessoais recolhidas, serão usadas para o
        ajudar a tornar a sua visita no nosso site o mais produtiva e agradável
        possível.
      </p>
      <p>
        A garantia da confidencialidade dos dados pessoais dos utilizadores do
        nosso site é importante para o Reactgram.
      </p>
      <p>
        Todas as informações pessoais relativas a membros, assinantes, clientes
        ou visitantes que usem o Reactgram serão tratadas em concordância com a
        Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º
        67/98).
      </p>
      <p>
        A informação pessoal recolhida pode incluir o seu nome, e-mail, número
        de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.
      </p>
      <p>
        O uso do Reactgram pressupõe a aceitação deste{" "}
        <a
          href="http://www.politicaprivacidade.com"
          title="acordo de privacidade"
        >
          Acordo de privacidade
        </a>
        . A equipa do Reactgram reserva-se ao direito de alterar este acordo sem
        aviso prévio. Deste modo, recomendamos que consulte a nossa política de
        privacidade com regularidade de forma a estar sempre atualizado.
      </p>
      <h2>Cookies</h2>
      <p>
        Utilizamos cookies para armazenar informação, tais como as suas
        preferências pessoas quando visita o nosso website. Isto poderá incluir
        um simples popup, ou uma ligação em vários serviços que providenciamos,
        tais como fóruns.
      </p>
      <p>
        Em adição também utilizamos publicidade de terceiros no nosso website
        para suportar os custos de manutenção. Alguns destes publicitários,
        poderão utilizar tecnologias como os cookies e/ou web beacons quando
        publicitam no nosso website, o que fará com que esses publicitários
        (como o Google através do Google AdSense) também recebam a sua
        informação pessoal, como o endereço IP, o seu ISP, o seu browser, etc.
        Esta função é geralmente utilizada para geotargeting (mostrar
        publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou
        apresentar publicidade direcionada a um tipo de utilizador (como mostrar
        publicidade de restaurante a um utilizador que visita sites de culinária
        regularmente, por ex.).
      </p>
      <p>
        Você detém o poder de desligar os seus cookies, nas opções do seu
        browser, ou efetuando alterações nas ferramentas de programas
        Anti-Virus, como o Norton Internet Security. No entanto, isso poderá
        alterar a forma como interage com o nosso website, ou outros websites.
        Isso poderá afetar ou não permitir que faça logins em programas, sites
        ou fóruns da nossa e de outras redes.
      </p>
    </Layout>
  );
};
