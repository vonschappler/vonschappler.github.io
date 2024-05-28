import { createComboBoxList, sortArrayWithKeys } from "../utils";

import {
  GameAdditicion as GameAdditicionEn,
  NewWebsite as NewWebsiteEn,
} from "../fragments/en/libs/news";

import {
  GameAdditicion as GameAdditicionPt,
  NewWebsite as NewWebsitePt,
} from "../fragments/pt/libs/news";

import { GameLib as GameLibEn } from "../fragments/en/libs/gaming";

import { GameLib as GameLibPt } from "../fragments/pt/libs/gaming";

const partnersTwListEn = [
  {
    username: "aladar",
    description: "Commander of the Frog Army",
  },
  {
    username: "d4rkr4yn3",
    description: "The lord of death",
  },
  {
    username: "gwennsday",
    description: "She'll turn your day into a Gwennsday",
  },
  {
    username: "jogador_insone",
    description: "Mr. Dad Jokes on Twitch",
  },
  {
    username: "karalena",
    description: "The butterfly mistress",
  },
  {
    username: "0rdinary0live",
    description: "This girl 'Olives' you",
  },
  {
    username: "roddusms",
    description: "The mage co-worker",
  },
  {
    username: "voodoo_yoodoo",
    description: "His cauldron is full of surprises",
  },
];

const partnersTwListPT = [
  {
    username: "aladar",
    description: 'Comandante do "Frog Army"',
  },
  {
    username: "d4rkr4yn3",
    description: "O senhor da morte",
  },
  {
    username: "gwennsday",
    description: 'Transforme seu dia em um "Gwennsdia"',
  },
  {
    username: "jogador_insone",
    description: "As melhores piadas de tiozão da Twitch",
  },
  {
    username: "karalena",
    description: "A senhora das borboletas",
  },
  {
    username: "0rdinary0live",
    description: 'Essa garota te "Olive"',
  },
  {
    username: "roddusms",
    description: "O bruxo com quem trabalho",
  },
  {
    username: "voodoo_yoodoo",
    description: "Seu calderião é repleto de surpresas",
  },
];

const webSitesListEn = [
  {
    title: "React Classy Weather",
    description:
      "A simple React Application made with class components to inspect the weekly weather on a given city.",
    creationDate: "Dec 13, 2023",
    previewImage: "web/react-classy-weather.png",
    previewURL: "https://vonschappler.github.io/react-classy-weather/",
    codeURL: "https://github.com/vonschappler/react-classy-weather",
  },
  {
    title: "React Eat n' Split",
    description:
      "A simple React Application to help with splitting bills between friends.",
    creationDate: "Jan 25, 2024 ",
    previewImage: "web/react-eat-n-split.png",
    previewURL: "https://vonschappler.github.io/react-eat-n-split/",
    codeURL: "https://github.com/vonschappler/react-eat-n-split",
  },
  {
    title: "React Far Away",
    description: "A simple React Application to manage packing travel list.",
    creationDate: "Dec 13, 2023",
    previewImage: "web/react-far-away.png",
    previewURL: "https://vonschappler.github.io/react-far-away/",
    codeURL: "https://github.com/vonschappler/react-far-away",
  },
  {
    title: "React Fast Pizza",
    description:
      "A simple react application to simulate a online pizza reastaurant, with ordering features and automatic address retrieval.",
    creationDate: "Jan 19, 2024",
    previewImage: "web/react-fast-pizza.png",
    previewURL: "https://vonschappler.github.io/react-fast-pizza/",
    codeURL: "https://github.com/vonschappler/react-fast-pizza",
  },
  {
    title: "React Functionally Weather",
    description:
      'A simple react application which clones the "React Classy Weather" application, using functional components in react.',
    creationDate: "Dec 13, 2023",
    previewImage: "web/react-functionally-weather.png",
    previewURL: "https://vonschappler.github.io/react-functionally-weather/",
    codeURL: "https://github.com/vonschappler/react-functionally-weather",
  },
  {
    title: "React Pizza Menu",
    description:
      "A simple React Application created with React to display the menu of a pizzeria.",
    creationDate: "Oct 21, 2023",
    previewImage: "web/react-pizza-menu.png",
    previewURL: "https://vonschappler.github.io/react-pizza-menu/",
    codeURL: "https://github.com/vonschappler/react-pizza-menu",
  },
  {
    title: "React Quiz",
    description:
      "A simple React Application with a small quiz with 15 react fundamentals questions.",
    creationDate: "Dec 13, 2023",
    previewImage: "web/react-quiz.png",
    previewURL: "https://vonschappler.github.io/react-quiz/",
    codeURL: "https://github.com/vonschappler/react-quiz",
  },
  {
    title: "React Redux Bank",
    description:
      "A simple React Application which simulates a online bank account using Redux.",
    creationDate: "Jan 5, 2024",
    previewImage: "web/react-redux-bank.png",
    previewURL: "https://vonschappler.github.io/react-redux-bank/",
    codeURL: "https://github.com/vonschappler/react-redux-bank",
  },
  {
    title: "React Use Popcorn",
    description:
      "A simple React application that allows the user to track and rate watched movies, games, series and other.",
    creationDate: "Jan 25, 2024 ",
    previewImage: "web/react-use-popcorn.png",
    previewURL: "https://vonschappler.github.io/react-use-popcorn/",
    codeURL: "https://github.com/vonschappler/react-use-popcorn",
  },
  {
    title: "React Wild Oasis",
    description:
      "A simple React application to simulate a dashboard system for a rental cabins company.",
    creationDate: "Jan 27, 2024 ",
    previewImage: "web/react-wild-oasis.png",
    previewURL: "https://vonschappler.github.io/react-wild-oasis/",
    codeURL: "https://github.com/vonschappler/react-wild-oasis",
  },
  {
    title: "React World Wise",
    description:
      "A simple React application to help users to track their trips and add notes about them.",
    creationDate: "Jan 25, 2024 ",
    previewImage: "web/react-world-wise.png",
    previewURL: "https://vonschappler.github.io/react-world-wise/",
    codeURL: "https://github.com/vonschappler/react-world-wise",
  },
  {
    title: "Wild Oasis Website",
    description:
      "A Next.js project in which we have the main website for customers to create and edit their accounts as well as make cabins reservations.",
    creationDate: "May 27, 2024",
    previewImage: "web/vercel-wild-oasis.png",
    codeURL: "https://vonschappler.github.io/vercel-wild-oasis/",
    previewURL: "https://von-wild-oasis-site.vercel.app",
  },
];

const webSitesListPt = [
  {
    title: "Wild Oasis Website",
    description:
      "Projeto de criação do webite Wild Oasis, usando Next.js, que permite a criação de novos usuários capazes de reservar cabanas para suas férias.",
    creationDate: "27/mai/2024",
    previewImage: "web/vercel-wild-oasis.png",
    codeURL: "https://vonschappler.github.io/vercel-wild-oasis/",
    previewURL: "https://von-wild-oasis-site.vercel.app",
  },
  {
    title: "React Classy Weather",
    description:
      "Uma aplicação simples, desenvolvida com o uso de classes em React, para soliticar a previsão meteorológica de uma dada cidade.",
    creationDate: "13/dez/2023",
    previewImage: "web/react-classy-weather.png",
    previewURL: "https://vonschappler.github.io/react-classy-weather/",
    codeURL: "https://github.com/vonschappler/react-classy-weather",
  },
  {
    title: "React Eat n' Split",
    description:
      "Uma aplicação simples que ajuda o usuário a manter controle de contas divididas entre amigos.",
    creationDate: "25/jan/2024 ",
    previewImage: "web/react-eat-n-split.png",
    previewURL: "https://vonschappler.github.io/react-eat-n-split/",
    codeURL: "https://github.com/vonschappler/react-eat-n-split",
  },
  {
    title: "React Far Away",
    description:
      "Uma aplicação simples que ajuda o usuário a gerenciar sua lista de itens de viagem.",
    creationDate: "13/dez/2023",
    previewImage: "web/react-far-away.png",
    previewURL: "https://vonschappler.github.io/react-far-away/",
    codeURL: "https://github.com/vonschappler/react-far-away",
  },
  {
    title: "React Fast Pizza",
    description:
      "Uma aplicação simples que simula um site de compras online, onde o usuário pode pedir uma pizza, fazendo uso de aquisição automática de endereço para entrega, por exemplo.",
    creationDate: "19/jan/2024",
    previewImage: "web/react-fast-pizza.png",
    previewURL: "https://vonschappler.github.io/react-fast-pizza/",
    codeURL: "https://github.com/vonschappler/react-fast-pizza",
  },
  {
    title: "React Functionally Weather",
    description:
      'Clone da aplicação "React Classy Weather", desenvolvida com o uso de componentes funcionais.',
    creationDate: "13/dec/2023",
    previewImage: "web/react-functionally-weather.png",
    previewURL: "https://vonschappler.github.io/react-functionally-weather/",
    codeURL: "https://github.com/vonschappler/react-functionally-weather",
  },
  {
    title: "React Pizza Menu",
    description:
      "Uma aplicação simples que mostra o cardápio online de uma pizzaria.",
    creationDate: "21/out/2023",
    previewImage: "web/react-pizza-menu.png",
    previewURL: "https://vonschappler.github.io/react-pizza-menu/",
    codeURL: "https://github.com/vonschappler/react-pizza-menu",
  },
  {
    title: "React Quiz",
    description:
      "Uma aplicação simples onde o usuário deve responder algumas perguntas sobre conceitos fundamentaiss de React.",
    creationDate: "13/dez/2023",
    previewImage: "web/react-quiz.png",
    previewURL: "https://vonschappler.github.io/react-quiz/",
    codeURL: "https://github.com/vonschappler/react-quiz",
  },
  {
    title: "React Redux Bank",
    description:
      "Uma aplicação simples em React, que utiliza Redux para similar uma agência bancária online.",
    creationDate: "5/jan/2024",
    previewImage: "web/react-redux-bank.png",
    previewURL: "https://vonschappler.github.io/react-redux-bank/",
    codeURL: "https://github.com/vonschappler/react-redux-bank",
  },
  {
    title: "React Use Popcorn",
    description:
      "Uma aplicação simples onde os usuários podem controlar e avaliar filmes, jogos e séries.",
    creationDate: "25/jan/2024 ",
    previewImage: "web/react-use-popcorn.png",
    previewURL: "https://vonschappler.github.io/react-use-popcorn/",
    codeURL: "https://github.com/vonschappler/react-use-popcorn",
  },
  {
    title: "React Wild Oasis",
    description:
      "Uma aplicação que simula um painel de controle de uma agencia de hospedarias que alua cabines em uma floresta para visitantes.",
    creationDate: "27/jan/2024 ",
    previewImage: "web/react-wild-oasis.png",
    previewURL: "https://vonschappler.github.io/react-wild-oasis/",
    codeURL: "https://github.com/vonschappler/react-wild-oasis",
  },
  {
    title: "React World Wise",
    description:
      "Uma aplicação simples em React onde o usuário consegue fazer um controle de suas viagens, adicionando pequenas notas sobre estas.",
    creationDate: "25/jan/2024 ",
    previewImage: "web/react-world-wise.png",
    previewURL: "https://vonschappler.github.io/react-world-wise/",
    codeURL: "https://github.com/vonschappler/react-world-wise",
  },
];

const scriptsListEn = [
  {
    title: "[SLCB] SendSounds",
    description:
      "A simple script to create an addicional fake audio channel into OBS Browser Source to play sound effects on stream.",
    releaseDate: "Aug 18, 2023",
    version: "b2.0.1",
    previewImage: "scripts/slcb-send-sounds.png",
    codeURL: "https://github.com/vonschappler/SLCB-SendSounds/",
    docsURL: "https://github.com/vonschappler/SLCB-SendSounds/wiki/User-Guide",
    downURL: "https://github.com/vonschappler/SLCB-SendSounds/releases/latest",
  },
  {
    title: "[SLCB] ShoutOutClip",
    description:
      "A simple script which allows streamers to advertise their friends with a nice and customizable overlay, while playing a random clip from their past streams, preventing conflict with other audio sources.",
    releaseDate: "Apr 14, 2024",
    version: "v1.0.0",
    previewImage: "scripts/slcb-shoutout-clip.png",
    codeURL: "https://github.com/vonschappler/SLCB-ShoutOutClip/",
    docsURL:
      "https://github.com/vonschappler/SLCB-ShoutOutClip/wiki/User-Guide",
    downURL:
      "https://github.com/vonschappler/SLCB-ShoutOutClip/releases/latest",
  },
];

const scriptsListPt = [
  {
    title: "[SLCB] SendSounds",
    description:
      "Um script simples que cria um canal adicional de audio via overlay, responsável por enviar efeitos sonoros para a stream, sem causar conflitos com outras fontes de aúdio",
    releaseDate: "18/ago/2023",
    version: "b2.0.1",
    previewImage: "scripts/slcb-send-sounds.png",
    codeURL: "https://github.com/vonschappler/SLCB-SendSounds/",
    docsURL: "https://github.com/vonschappler/SLCB-SendSounds/wiki/User-Guide",
    downURL: "https://github.com/vonschappler/SLCB-SendSounds/releases/latest",
  },
  {
    title: "[SLCB] ShoutOutClip",
    description:
      "Um script simples que permite streamer fazerem propagandas de seus amigos com uma bela overlay que mostra um clip aleatório, totalmente customizável.",
    releaseDate: "14/abr/2024",
    version: "v1.0.0",
    previewImage: "scripts/slcb-shoutout-clip.png",
    codeURL: "https://github.com/vonschappler/SLCB-ShoutOutClip/",
    docsURL:
      "https://github.com/vonschappler/SLCB-ShoutOutClip/wiki/User-Guide",
    downURL:
      "https://github.com/vonschappler/SLCB-ShoutOutClip/releases/latest",
  },
];

const reasonListEn = [
  "Something is not working",
  "I want a website",
  "I want a Streamlabs custom chatbot script",
  "I want to be a partner",
  "I want to be a sponsor",
];
const reasonListPt = [
  "Algo não funciona corretamente",
  "Quero fazer um website",
  "Quero um script customizado para o Streamlabs Chatbot",
  "Quero ser um parceiro",
  "Quero ser um patrocinador",
];
const prefListEn = ["E-mail", "Discord", "There is no need to contact me"];
const prefListPt = ["E-mail", "Discord", "Não precisa entrar em contato"];
const howReachListEn = [
  `von Schappler's Twitch`,
  `von Schappler's YouTube`,
  `von Schappler's Github`,
  "Other (specify on the message field)",
];
const howReachListPt = [
  `Twitch de von Schappler`,
  `YouTube de von Schappler`,
  `Github de von Schappler`,
  "Outro (especificar dentro da mensagem a ser enviada)",
];

const newsListEn = [
  {
    title: "New website is online!",
    description: "My website was redesigned and those are good news to share!"
      .substring(0, 60)
      .concat(" ..."),
    creationDate: "Apr 28, 2024",
    content: NewWebsiteEn,
  },
];

const newsListPt = [
  {
    title: "O novo website está online!",
    description:
      "O meu website foi totalmente remodelado e essas são boas notícias para compartilhar!"
        .substring(0, 60)
        .concat(" ..."),
    creationDate: "28/abr/2024",
    content: NewWebsitePt,
  },
];

const opinionsListEn = [
  {
    title: "Game addiction?",
    description:
      `The original note was posted on January 19, 2018, when the local media was making a totally irrational and unreal discussion about this subject, putting a character from a soap opera as someone adicted to games.`
        .substring(0, 60)
        .concat(" ..."),
    creationDate: "Apr 28, 2024",
    content: GameAdditicionEn,
  },
];

const opinionsListPt = [
  {
    title: "Vício em Games?",
    description:
      `A nota original foi postada em 19 de janeiro de 2018, quando a mídia local estava fazendo uma discussão totalmente irracional e irreal sobre esse assunto, colocando um personagem de uma novela como "um viciado em games".`
        .substring(0, 60)
        .concat(" ..."),
    creationDate: "28/abr/2024",
    content: GameAdditicionPt,
  },
];

const gameLibEn = {
  title: "Games Library",
  content: GameLibEn,
};
const gameLibPt = {
  title: "Biblioteca de Jogos",
  content: GameLibPt,
};
const partnersTwEn = sortArrayWithKeys(partnersTwListEn, "username");
const partnersTwPt = sortArrayWithKeys(partnersTwListPT, "username");
const webSitesEn = sortArrayWithKeys(webSitesListEn, "name");
const webSitesPt = sortArrayWithKeys(webSitesListPt, "name");
const scriptsEn = sortArrayWithKeys(scriptsListEn, "name");
const scriptsPt = sortArrayWithKeys(scriptsListPt, "name");
const reasonEn = createComboBoxList(reasonListEn);
const reasonPt = createComboBoxList(reasonListPt);
const prefEn = createComboBoxList(prefListEn);
const prefPt = createComboBoxList(prefListPt);
const howReachEn = createComboBoxList(howReachListEn);
const howReachPt = createComboBoxList(howReachListPt);
const newsEn = sortArrayWithKeys(newsListEn, "date");
const newsPt = sortArrayWithKeys(newsListPt, "date");
const opinionsEn = sortArrayWithKeys(opinionsListEn, "date");
const opinionsPt = sortArrayWithKeys(opinionsListPt, "date");

export {
  partnersTwEn,
  partnersTwPt,
  webSitesEn,
  webSitesPt,
  scriptsEn,
  scriptsPt,
  reasonEn,
  reasonPt,
  prefEn,
  prefPt,
  howReachEn,
  howReachPt,
  newsEn,
  newsPt,
  opinionsEn,
  opinionsPt,
  gameLibEn,
  gameLibPt,
};

// console.log(newsPt);
