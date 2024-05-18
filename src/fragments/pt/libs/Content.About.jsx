import { Grid, Divider } from "@mui/material";

import CardProfile from "../../../ui/Card.Profile";
import Title from "../../../ui/Title";

const ContentAbout = () => {
  return (
    <Grid container className="mb-[4rem] flex flex-col items-center">
      <Grid item>
        <Title divider>
          <h1 className="text-center">Meu perfil</h1>
        </Title>
        <CardProfile quote="Viver é como jogar um jogo, já sabendo que o seu personagem morre no final.">
          <Grid container className="flex w-[100%] flex-col gap-1">
            <Grid item>
              <span className="cardTitle">von Schappler</span>
              <Divider className="divider inverted" />
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Nascimento:</strong> 08/nov/1983
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Formação:</strong> Graduação em Física (2004) e cursos
                na área de Computação Gráfica
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Localização:</strong> Brasil
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Estilo musical preferido:</strong> Goth (em geral)
              </span>
            </Grid>
            <Grid item className="cardDescription">
              <span>
                <strong>Estilos de filme favoritos:</strong> Terror, Drama,
                Suspense
              </span>
            </Grid>
          </Grid>
        </CardProfile>
      </Grid>
      <Grid item className="w-[30%] pt-4">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">Por que von Schappler?</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Então, essa é uma das perguntas que mais ouvi. Principalmente de
            pessoas que me conhecem, mas não conhecem a minha história com RPG
            PnP (também conhecido como RPG Storyteller).
          </p>
          <p>
            Dito isso, e respondendo de forma suscinta, von Schappler é o
            sobrenome de um dos meus personagens de RPG que usei em aventuras de
            Vampiro: a Máscara, personagem esse que gostei muito de usar nesse
            jogo.
          </p>
          <p>
            {`O nome então ficou e desde entao comecei a usar ele para me
            representar no mundo "gamer".`}
          </p>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-[2rem]">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">Meu contato com jogos...</h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Certo, vamos lá! A minha história com jogos começa lá em meados de
            1989, quando tive meu primeiro contato com o famoso Atari 1600 que
            um primo meu possuía. Eu ficava realmente vidrado com aqueles
            gráficos (algumas vezes preto e branco) do jogo, quando competia com
            meu primo em partidas de Pong. Depois disso, via aquelas máquinas de
            flipper com Enduro, mas só vim ter o meu primeiro console ao final
            de 1989 - quando ganhei de presente um Atari igual ao do meu primo.
          </p>
          <p>
            Aí, fui passando por diversos consoles, porém sempre estando "uma
            geração atrás"... Master System, Mega Drive, Nintendo (aquele de
            8bits), Super Nintendo, Game Boy, Playstantion 2, PSP 2000 - todos
            esses passaram por minhas mãos. Mas o primeiro PC que ganhei foi em
            1996, e a partir daí, praticamente deixei os consoles de lado, e
            aproveitei jogos de PC.
          </p>
          <p>
            Atualmente, tenho um PC razoável, que ainda me permite trabalhar e
            jogar, além de um XBox 360 e um Playstation 3, porém passo mais
            tempo jogando em meu PC - onde fico cerca de 12h diárias, 6h dessas
            jogando e/ou pesquisando sobre jogos.
          </p>
        </Grid>
      </Grid>
      <Grid item className="w-[30%] pt-[2rem]">
        <Divider className="divider" />
      </Grid>
      <Grid item className="w-[85dvw]">
        <Grid container className="p-4">
          <Grid item className="w-full">
            <Title divider>
              <h1 className="text-center">
                A decisão em fazer lives finalmente foi tomada!
              </h1>
            </Title>
          </Grid>
        </Grid>
        <Grid item className="w-full space-y-3">
          <p>
            Nos últimos anos, vendo como todas as coisas vêm sofrendo evolução,
            percebi que fazer conteúdo de algo que gosto desde criança seria a
            chance de eu mostrar o talento (ou a falta dele) que tenho!
          </p>
          <p>
            Comecei com um canal no YouTube usando meu email pessoal - onde
            cheguei a postar alguns vídeos. Nada muito sério. Eram vídeos com
            tutoriais para algumas coisas que eu usava como setup em meus
            personagens dentro do jogo Aion.
          </p>
          <p>
            Foi quando percebi que muitas pessoas além de tutoriais também
            faziam vídeos de gameplay. Porém poucos deles davam foco ao que eu
            mais gosto em um jogo - a história.
          </p>
          <p>
            Daí veio a decisão de criar vonSchappler Gaming, um novo canal (que
            atualmente é o nosso vonSchapperTV), um lugar para jogar aquilo que
            gosto, focando a história e lore daquele(s) jogos.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ContentAbout };
