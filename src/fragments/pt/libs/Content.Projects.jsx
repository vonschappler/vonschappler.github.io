import { Link, NavLink } from "react-router-dom";
import { Grid, Divider } from "@mui/material";

import { webSitesPt } from "../../../constants/siteConstants";
import { scriptsPt } from "../../../constants/siteConstants";

import Title from "../../../ui/Title";
import CardProject from "../../../ui/Card.Project";

const ContentProjects = () => {
  return (
    <Grid container className="mb-[4rem] flex flex-col items-center">
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider className="text-center">
              <h1 className="text-center">Websites</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Eu fiz alguns cursos e durante estes, alguns pequenos projetos de
            website foram desenvolvidos como projetos das aulas É importante
            ressaltar que alguns projetos podem não estar 100% funcionais por
            dependenrem de aplicações externas que entram em modo "dormir",
            quando não utilizadas com certa freqüência. Caso alguma delas não
            esteja funcionando corretamente no momento em que você tentou
            utilizá-la, entre em{" "}
            <NavLink className="pageLink" to="/contact" target="_blank">
              contato
            </NavLink>
            .
          </p>
          <p>A seguir, podemos ver alguns desses projetos:</p>
        </Grid>
      </Grid>
      <Grid container className="flex flex-col">
        <Grid item>
          <Grid container className="projects my-5 !px-[1rem]">
            {webSitesPt.map((website) => (
              <Grid item key={website.title}>
                <CardProject project={website} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="-pt-4 w-[30%]">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider className="text-center">
              <h1 className="text-center">Scripts para Streamlabs Chatbot</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Já que eu faço lives, senti a necessidade de escolher uma aplicação
            de gerenciamento de chat (chatbot) para meu canal. A aplicação que
            eu optei utilizar for o{" "}
            <Link
              className="pageLink"
              to="https://streamlabs.com/desktop-chatbot"
              target="_blank"
            >
              Streamlabs Chatbot
            </Link>
            . Dentre as várias razões para minha escolha, o que mais pesou foi o
            fato de que essa aplicação é altamente customizável com o uso de
            scripts escritos em <strong>Pyton 2.17.3</strong>.
          </p>
          <p>
            A grande maioria dos scripts que eu fiz são apenas para uso pessoal,
            porem alguns deles estão disponíveis para uso geral. Note que o
            manual de uso dos mesmos está escrito em inglês, uma vez que a
            maioria dos usuários dos scripts não falam português. Estes scripts
            gratuitos* estão listados abaixo:
          </p>
        </Grid>
        <Grid item className="p-4 text-center text-xs">
          <span>
            * Apesar destes scripts possuirem código fonte aberto e serem
            disponibilizados gratuitamente, caso você se sinta à vontade para me
            ajudar por ter tido o trabalho de portabilizá-los para uso público,
            pode fazer uma doação de qualquer valor{" "}
            <Link
              className="pageLink"
              to="https://www.paypal.com/donate?hosted_button_id=FU2Z3XCC9R8D2"
              target="_blank"
            >
              diretamente na minha conta PayPal
            </Link>
            !
          </span>
        </Grid>
      </Grid>
      <Grid container className="my-2 flex flex-col">
        <Grid item>
          <Grid container className="projects !px-[1rem]">
            {scriptsPt.map((script) => (
              <Grid item key={script.title}>
                <CardProject project={script} type="script" />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-2">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider className="text-center">
              <h1 className="text-center">O chatbot do von Schappler</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Apesar de estar usando e gostar muito do{" "}
            <strong>Streamlabs Chatbot</strong>, os criadores do mesmo deixaram
            de oferecer suporte total à aplição, tornando esta obsoleta e
            desatualizada, em virtude de sua atenção maior a outros produtos e
            servicos que podem ser encontrados em seu{" "}
            <Link
              className="pageLink"
              to="https://streamlabs.com"
              target="_blank"
            >
              website
            </Link>
            . Isso significa dizer que a aplicação não tem recebido grandes
            atualizações e ainda tem seu código base rodando em Python 2.17.3.
          </p>
          <p>
            Esse projeto é ainda um trabalho em desenvolvimento, o qual estou
            progredindo lentamente durante minhas últimas streams. Assim que o
            bot estiver pronto, detalhes adicionais estarão presentes nessa
            seção.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ContentProjects };
