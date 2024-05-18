import { Grid } from "@mui/material";

import Title from "../../../../../ui/Title";
import { Link, NavLink } from "react-router-dom";
import { Settings } from "@mui/icons-material";

const NewWebsite = () => {
  return (
    <Grid container className="flex flex-col justify-center gap-4">
      <p>
        O meu website foi totalmente remodelado e essas são boas notícias para
        compartilhar! Sim, isso mesmo. Depois de anos, finalmente decidi
        atualizar meu website, o que significa que essa é a oportunidade
        perfeita para compartilhar com vocês a nova interface, algumas opções de
        customização e claro introduzir a versão para dispositivos móveis deste
        (versão esta que ainda está sendo desenvolvida).
      </p>
      <Grid item className="flex w-full grow flex-col">
        <Title divider>
          <h2 className="text-center">Motivos para a atualização</h2>
        </Title>
      </Grid>
      <p>
        Bom, já faz algum tempo que eu consegui dedicar tempo para meu website,
        fazendo com que o design anterior foi feito usando tecnologias (que eu
        diria serem) ultrapassadas. Isso significa que o design atual mudou
        bastante desde a última atualização, assim como implica dizer que deixei
        o site incompatível com as tecnologias atuais.
      </p>
      <p>
        Depois de tanto procurar o melhor momento para fazer as atualizações
        requeridas e depois de tantos anos sem fazer qualquer atualização, tive
        a oportunidade de "reaprender React". Consegui fazer alguns cursos
        online que me permitiram atulizar meus conhecimentos sobre as novas
        tecnologias utilizadas, o que proporcionou um melhor entendimento no que
        se refere a criação de websites.
      </p>
      <p>
        Os resultados de todo o conhecimento adquirido recentemente pode ser
        visto{" "}
        <NavLink to="/projects" target="_blank" className="pageLink">
          na minha página de projetos
        </NavLink>
        . Após adquirir novos conhecimentos, decidi então mostrar a todos o que
        posso fazer e o quão capaz eu sou, por converter um website antigo em um
        website totalmente novo, com uma aparecência agradável e moderna que se
        adequa perfeitamente às minhas necessidades.
      </p>
      <h3 className="text-center">
        Como resultado final, apresento esse novo estilo para meu website
        pessoal!
      </h3>
      <Grid item className="flex w-full grow flex-col">
        <Title divider>
          <h2 className="text-center">Falando sobre as melhorias</h2>
        </Title>
      </Grid>
      <p>
        Quando me refiro a melhorias, gostaria de apresentar alguns detalhes
        destas mudanças, como listadas a seguir:
      </p>
      <ul>
        <li>
          O site agora é uma <strong>SPA (Single Page Application)</strong>
          criada usando Vite, React e outras tecnologias relacionadas para pore
          exemplo, gerenciar formulários
        </li>
        <li>
          Adição dos modos de visualização "claro" e "escuro" (acessível ao
          clicar em <Settings className="-mb-[0.35rem]" />
          ), cujo modo inicial é baseado nas definições de sistema operacional
          do usuário
        </li>
        <li>
          Adição de um formulário de contato, para facilitar a interação com
          aqueles que desejam me contactar
        </li>
        <li>
          Apresentação da versão compatível com dispositivos móveis, permitindo
          que o website agora seja acessado de qualquer dispositivo *
        </li>
        <li>Animações suaves para apresenter visuais aprimorados ao website</li>
      </ul>
      <span className="text-center text-xs">
        * Essa versão ainda estã em desenvolvimento e será disponibilizada assim
        que possível
      </span>
      <p>
        Com esse novo design meu desejo é aumentar minha visibilidade e
        apresentar as melhorias, significando não somente{" "}
        <strong>satisfação pessoal</strong>, mas também uma{" "}
        <strong>melhor experiência de usuário</strong> a todos que visitam o
        site!
      </p>
      <Grid item className="flex w-full grow flex-col">
        <Title divider>
          <h2 className="text-center">
            Haverá uma freqüência para autalização de conteúdo?
          </h2>
        </Title>
      </Grid>
      <p>
        A resposta curta é: <strong>"Não."</strong>
      </p>
      <p>
        De forma mais explícita, eu precisaria descrever as razões para isso.
        Sendo assim, seguem algumas delas:
      </p>
      <ul>
        <li>
          Atualizar um website, mesmo fazendo uso de tecnologias que facilitam
          na imprementação dessas tecnologias de maneira mais rápida, exige
          tempo e dedicação, algo que no momento não posso dizer que tenho, uma
          vez que meu <strong>tempo livre</strong> (já que preciso fazer uso
          deste para trabalhar em projetos pessoais) é muito curto
        </li>
        <li>
          Por ser autista eu posso perder intenresse no processo de atulização
          baeado em meu "humor"
        </li>
        <li>
          Por que estou trabalhando em outros projetos, grande parde do meu
          tempo está sendo dedicado a estes, que em sua maioria estão sendo
          desenvolvido para clientes pagantes, o que significa que tenho prazos
          a cumprir
        </li>
      </ul>
      <p>
        Eu poderia listar outros motivos, mas acredito que estes sejam
        suficientes nesse momento. O que realmente importa é que eu finalmente
        consegui tempo para fazer essa grande atualização e ESSE É O RESULTADO
        da meu trabalho para oferecer sempre o melhor para vocês!
      </p>
      <span className="text-center text-xs">
        A versão antiga deste site{" "}
        <Link
          className="pageLink"
          to="https://rebrand.ly/vonOldSite"
          target="_blank"
        >
          ainda pode ser acessada
        </Link>{" "}
        para o caso de estar faltando algo nesse novo site
      </span>
    </Grid>
  );
};

export { NewWebsite };
