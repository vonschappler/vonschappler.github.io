import { Grid, Divider } from "@mui/material";

import Title from "../../../ui/Title";
import { Link } from "react-router-dom";

const ContentHome = () => {
  return (
    <Grid container className="mb-[4rem] flex flex-col items-center">
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">
                Diagnosticado "recentemente" com Síndrome de Asperger
              </h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Diferentemente de muitos streamers, sou um streamer com Autismo,
            residente no Brasil. Esse diagnóstico foi definido há pouco tempo
            (considerando a infinidade de diagnósticos errados que recebi ao
            longo da minha vida) e nele foi identificado que sofro de Síndrome
            de Asperger, a forma mais leve de autismo.
          </p>
          <p>
            Tenho minha forma propria de pensar, agir e reagir frente às coisas,
            portanto tenha paciência comigo e receberá o mesmo. Respeito mútuo é
            tudo o que peço, uma vez que está aqui.
          </p>
          <Divider
            className="divider justify-self-around pt-4"
            variant="middle"
          />
          <h2>Faço streams como forma de lidar com o Autismo</h2>
          <p>
            Apesar de poder apresentar mudanças bruscas de humor ou sofrer algum
            ataque súbto de algum outro transtorno que seja coneseqüência do
            autismo, fazer streams é uma forma de terapia. Não é facil lidar com
            as coisas que lido em meu dia a dia, mas aqui estou, tentando o meu
            melhor.
          </p>
          <p>
            Então, durante as lives, é possivel que você se depare com algo que
            nunca viu antes, mas uma coisa é fato: SE EU ESTIVER MUITO QUIETO,
            por favor, ajude-me interagindo comigo.
          </p>
        </Grid>
        <Grid item className="p-4 text-center text-xs">
          <span className="font-sm text-center">
            Para saber mais sobre a Síndrome de Asperger, visite{" "}
            <Link
              to="https:/rebrand.ly/AspergerPT"
              className="pageLink"
              target="_blank"
            >
              este artigo da Wikipedia
            </Link>
            .
          </span>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-4">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid
          container
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr]"
        >
          <Grid item className="w-full">
            <Grid item>
              <Title>
                <h2>Geralmente eu não sigo qualquer padão...</h2>
              </Title>
            </Grid>
            <Grid item className="space-y-3">
              <p className="text-center">
                Bom, meu ponto forte nunca foi a forma que eu jogo ou coisas do
                tipo. Mas também não gosto de fazer o que as outras pessoas
                fazem por ai. Faço o que quero, quando eu quero. Bom, essa é
                minha live stream, meu espaço, nada mais justo que EU tomar esse
                tipo de decisão.
              </p>
              <p className="text-center">
                {`Normalmente, minhas lives possuem três "atos":`}
              </p>
              <p className="text-center">
                <strong>1. Boas-Vindas</strong>: é o momento da live onde desejo
                as boas vindas aos viewers
              </p>
              <p className="text-center">
                <strong>2. Gameplay:</strong> é o momento da live onde eu jogo
                algo
              </p>
              <p className="text-center">
                <strong>3. Finalização</strong>: é o momento da live onde
                finalizo esta
              </p>
            </Grid>
          </Grid>
          <Grid item className="hidden p-4 lg:block">
            <Divider
              className="divider"
              variant="middle"
              orientation="vertical"
            />
          </Grid>
          <Grid item className="block p-4 lg:hidden">
            <Divider className="divider" variant="middle" />
          </Grid>
          <Grid item className="w-full">
            <Grid item>
              <Title>
                <h2>Então, o que esperar das lives?</h2>
              </Title>
            </Grid>
            <Grid item className="space-y-3">
              <p className="text-center">
                Não é uma pergunta de difícil resposta. Veja uma pessoa jogando
                algo, na maioria das vezes com fogo extremo no que esta sendo
                feito (mas sempre ansioso para conversar e responder perguntas
                quando possível).
              </p>
              <p className="text-center">
                Ah, não esqueçamos que sou um <strong>SER HUMANO</strong> e como
                tal, eu possuo ações e reações de um. Assim sendo, qualquer
                coisa que agrida minha pessoa ou qualquer outra pessoa presente
                em minhas lives, receberá a punição apropriada.
              </p>
              <p className="text-center">
                Não esqueçamos que a principal razão pela qual faço lives é
                terápica e quero que continue assim. Sinta-se bem-vindo(a),
                converse livremente, pergunte e interaja, podendo algumas vezes
                ate jogar comigo - quem sabe?{" "}
                <strong>APENAS RESPEITE OS LIMITES</strong> e tudo estará certo.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ContentHome };
