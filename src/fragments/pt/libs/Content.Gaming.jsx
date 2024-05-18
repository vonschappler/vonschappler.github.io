import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Divider } from "@mui/material";

import Title from "../../../ui/Title";
import CardVideo from "../../../ui/Card.Video";
import ArticleDetail from "../../../ui/ArticleDetail";
import { gameLibPt } from "../../../constants/siteConstants";

const ContentGaming = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState("");
  const handleToggle = (article) => {
    isOpen ? setContent(null) : setContent(article.content);
    isOpen ? setTitle("") : setTitle(article.title);
    setIsOpen((curr) => !curr);
  };
  return (
    <>
      <Grid container className="mb-[4rem] flex flex-col items-center">
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>Eu jogo por diversão...</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid
            container
            className="mx-auto grid w-[60%] grid-cols-1 content-center items-center justify-center gap-5 md:gap-4 lg:grid-cols-[auto_1fr] lg:gap-4"
          >
            <Grid item className="flex flex-col gap-2">
              <p className="text-center font-title font-bold">
                ... sempre procurando por novos desafios, pois acredito me
                auto-desafiar não faz de mim um jogador tóxico ou elitista.
              </p>
              <p className="text-center font-title font-bold">
                Na verdade, não suporto esse tipo de comportamento e não sou a
                favor de quem age dessa forma.
              </p>
            </Grid>
            <Grid item className="flex justify-center">
              <CardVideo
                src="https://www.youtube.com/embed/xzAaiED-79U"
                content={<h2>NieR: Automata</h2>}
                height={200}
              />
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              Jogos fazem parte de minha vida desde que tinha 5 anos de idade.
              Eu gosto de jogar tanto para me dar alguns desafios ao mesmo tempo
              que mantenho meu cérebro ocupado. Gosto de fazer "atividades de
              grupo" em jogos online sozinho ou tentar completar jogos em modo
              de dificuldade extrema (como forma de desafio).
            </p>
            <p>
              Encontro diversão testar meus limites e as coisas são ainda mais
              divertidas SE consigo superar esses limites. É claro que, como
              para qualquer outro ser humano, se esses desafios se tornarem
              muito frustrantes, sinto a necessidade de desitir destes para
              tentar posteriormente com mais dedicação e preparo.
            </p>
          </Grid>

          <Grid item className="w-full space-y-3">
            <p>
              Apesar de eu possuir alguns
              <strong>jogos competitivos</strong> em minha coletânea, faço meu
              melhor para não levar esse apecto a sério, correndo o risco de
              peder o prazer em jogá-los. Eu realmente prefiro jogar algum jogo
              de jogador único ou quando jogo algo online,jogo com{" "}
              <strong>"pessoas selecionadas"</strong> para aproveitar o máximo
              da sessão de jogo.
            </p>
          </Grid>
        </Grid>
        <Grid item className="w-[30%] pt-[2rem]">
          <Divider className="divider" />
        </Grid>
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>Não me importo sobre o quão velho é um jogo...</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid
            container
            className="mx-auto grid w-[60%] grid-cols-1 content-center items-center justify-center gap-5 md:gap-4 lg:grid-cols-[auto_1fr] lg:gap-4"
          >
            <Grid item className="flex flex-col gap-2">
              <p className="text-center font-title font-bold">
                ... por que o que importa é que eu esteja me divertindo enquanto
                os jogo!
              </p>
            </Grid>
            <Grid item className="float-left flex justify-center">
              <CardVideo
                src="https://www.youtube.com/embed/PJmniUdNhrY"
                content={<h2>Neverwinter</h2>}
                height={200}
              />
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              A definição de diversão é algo muito pessoal. O que é divertido
              para mim, pode ou não pode ser divertido para você. Uma coisa eu
              posso garantir: não sou do tipo que se prende a apenas um jogo. Eu
              jogo o que quero, quando eu quero. A minha coletânea de jogos tem
              jogos de vários estilos, entre os quais eu posso citar os que mais
              gosto:
            </p>
            <ul className="space-y-2 px-4">
              <li>MMORPGs</li>
              <li>Shooter-looter</li>
              <li>RPG de jogador único</li>
              <li>Hack'n Slash</li>
              <li>Jogos rico em história</li>
              <li>Jogos de Plataforma/Metroidvania</li>
              <li>Luta</li>
            </ul>
          </Grid>

          <Grid item className="w-full space-y-3">
            <p>
              Estou sempre à procura de jogos novos para testar e se eu gostar
              destes, continuar jogando enquanto estes ainda me derem prazer.
            </p>
            <p className="highlight py-4 text-center">
              Quero também informar que{" "}
              <Link
                className="pageLink"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(gameLibPt);
                }}
              >
                oganizei minha bibioteca de jogos
              </Link>
              , com algumas informações sobre os jogos, como por exemplo suas
              datas de lançamento e tempo que joguei cada um deles.
            </p>
          </Grid>
        </Grid>
        <Grid item className="w-[30%] pt-[2rem]">
          <Divider className="divider" />
        </Grid>
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>Minha preferência é jogar em PC...</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid
            container
            className="mx-auto grid w-[60%] grid-cols-1 content-center items-center justify-center gap-5 md:gap-4 lg:grid-cols-[auto_1fr] lg:gap-4"
          >
            <Grid item className="flex flex-col gap-2">
              <p className="text-center font-title font-bold">
                ... apesar de meu primeiro contato com jogos ter sido em um
                Atari 2600!
              </p>
            </Grid>
            <Grid item className="float-left flex justify-center">
              <CardVideo
                src="https://www.youtube.com/embed/kF3TwbYYPto"
                content={<h2>Killer Instinct 2013</h2>}
                height={200}
              />
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              Apesar de eu ja ter passado pela experiência de jogo em consoles,
              desde o <strong>Atari</strong> ao <strong>Playstation 3</strong>,
              a minha preferencia pessoal para jogos é o PC. Acredito que não
              precisa falar sobre todas as vantagens em possuir um PC para jogos
              razoável, mas eu preciso deixar claro que um PC razoável consegue
              se manter ativo por muito mais tempo que os consoloes de última
              geração.
            </p>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              Eu também preciso adicionar um fator importante para essa
              preferencia:{" "}
              <strong>
                meu computador não é somente a minha plataforma para jogos, mas
                é principalmente a minha ferramenta de trabalho
              </strong>
              ! Aqui eu posso <strong>escreve códigos de programação</strong>,{" "}
              <strong>
                criar ares para uso nas lives e onde mais eu precisar
              </strong>
              , <strong>posso fazer contato com amigos e clientes</strong>, além
              de fazer muitas outras coisas que um console não me permitiria.
            </p>
          </Grid>
        </Grid>
        <Grid item className="w-[30%] pt-[2rem]">
          <Divider className="divider" />
        </Grid>
        <Grid item className="flex w-[85dvw] flex-col gap-4">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1>Review de jogos</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              Nessa seção pretendo adicionar revisões de jogos, assim que eu
              tiver tempo disponível - fique de olho e acompanhe essas revisões
              quando forem publicadas!
            </p>
          </Grid>
        </Grid>
      </Grid>
      <ArticleDetail
        handleToggle={handleToggle}
        open={isOpen}
        content={content}
        title={title}
      />
    </>
  );
};

export { ContentGaming };
