import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import { Cancel, CheckCircle } from "@mui/icons-material";

import Accordion from "../../../ui/Accordion";
import Calendar from "../../../ui/Calendar";
import Title from "../../../ui/Title";
import FeaturesLayout from "../../../ui/Features.Layout";

const ContentStream = () => {
  return (
    <Grid
      container
      className="mb-[4rem] mt-[2rem] flex flex-col items-center gap-6"
    >
      <Grid item className="mx-auto w-[85dvw]">
        <Accordion
          title={
            <Title divider>
              <h1>Agenda de lives</h1>
            </Title>
          }
          height="65"
          className="mx-auto w-[85dvw]"
          defaultExpanded
        >
          <Grid
            container
            className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-[65%_30%] lg:justify-center"
          >
            <Grid item className="mx-auto w-[85%] lg:w-[90%]">
              <Calendar />
            </Grid>
            <Grid
              item
              className="highlight -mt-[2rem] flex !max-h-[600px] !min-h-fit flex-col justify-start gap-4 bg-von-lightGray p-4 lg:mt-0 dark:bg-von-darkGray"
            >
              <Grid item>
                <Title divider className="">
                  <h3 className="font-title">Informações adicionais:</h3>
                </Title>
              </Grid>
              <Grid item className="px-4">
                <ul>
                  <li>
                    Os horários das lives estão ajustados para o horário oficial
                    de Brasília (GMT-3)
                  </li>
                  <li>
                    Alguma sessão de stream pode ser cancelada por postergada,
                    baseado em algumas "condições"::
                    <ul className="px-4">
                      <li>Alterações constantes de humor ao longo do dia</li>
                      <li>
                        Tempo livre disponível após a rotina de trabalho para
                        ajustar o que é requerido para live
                      </li>
                      <li>Crises de ansiedade</li>
                      <li>
                        Fatores metereológicos - estes afetam a minha
                        conectividade com a internet
                      </li>
                    </ul>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Accordion>
      </Grid>
      <Grid item className="mx-auto w-[85dvw]">
        <Accordion
          title={
            <Title divider>
              <h1>Recursos do Chatbot</h1>
            </Title>
          }
          height="65"
          className="mx-auto w-[85dvw]"
        >
          <Grid
            container
            className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-[65%_30%] lg:justify-center"
          >
            <Grid item className="mx-auto w-[85%] lg:w-[90%]">
              <Grid item>
                <FeaturesLayout />
              </Grid>
              <Grid
                item
                className="highlight -mt-[1rem] flex h-fit w-full flex-col justify-start gap-4 bg-von-lightGray p-4 lg:mt-0 dark:bg-von-darkGray"
              >
                <h3 className="font-title">Legenda:</h3>
                <Grid item className="flex flex-col gap-4 px-4">
                  <Grid className="flex flex-row items-center gap-2">
                    <CheckCircle />{" "}
                    <span>
                      O comando pode ser traduzido usando o comando{" "}
                      <strong className="font-semibold">!lang [arg]</strong>
                    </span>
                  </Grid>
                  <Grid className="flex flex-row items-center gap-2">
                    <Cancel />{" "}
                    <span>
                      O comando não possui uma tradução para sua resposta
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              className="highlight mt-[0.4rem] flex !max-h-[830px] !min-h-fit flex-col justify-start gap-4 bg-von-lightGray p-4 lg:mt-0 dark:bg-von-darkGray"
            >
              <Grid item>
                <Title divider className="">
                  <h3 className="font-title">Informações adicionais:</h3>
                </Title>
              </Grid>
              <Grid item className="px-4">
                <ul>
                  <li>
                    Todos os comandos da seção <strong>Commands</strong> podem
                    ser usados diretamente no susurro de{" "}
                    <strong className="font-semibold">
                      chatbot_vonshcappler
                    </strong>{" "}
                    whisper, by using{" "}
                    <strong className="font-semibold">
                      /w chatbot_vonschappler !command (-w) (arg)/[arg]
                    </strong>
                  </li>
                  <li>
                    Antes de usar o argumento (-w) aceito por alguns comandos,
                    lembre-se de aceitar sussurros de vindos de outras contas,
                    pois esse argumento é justamente para essa finalidade - usar
                    o bot via sussuro{" "}
                  </li>
                  <li>
                    Quando um comando possuir argumentos requeridos, este terá a
                    demarcação [arg_name], por exemplo{" "}
                    <strong>[username]</strong>
                  </li>
                  <li>
                    Quando um comando aceitar argumentos opcionais, este terá a
                    demarcação (arg_name), por exemplo <strong>(-w)</strong>
                  </li>
                  <li>
                    <strong>Custo</strong> faz referencia quantos "pontos de
                    bot" são necessãrios para usar um comando - não confunduir
                    com pontos de canal da Twitch
                  </li>
                  <li>
                    Para a lista completa de comandos do chatbot, verifique{" "}
                    <Link
                      className="pageLink"
                      to="https://rebrand.ly/vonFullCommands"
                      target="_blank"
                    >
                      esta referência
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export { ContentStream };
