import React, { useState } from "react";
// import axios from 'axios';


// const allTitlesData = [swapiApiCall()];


const swapiData = () => {

  const [allTitlesData, setAllTitlesData] = useState({
    Titles: [],
    Loaded: false
  })



  const apiCall = {
    "message": "ok",
    "result": [
      {
        "properties": {
          "characters": [
            "https://www.swapi.tech/api/people/1",
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/3",
            "https://www.swapi.tech/api/people/4",
            "https://www.swapi.tech/api/people/5",
            "https://www.swapi.tech/api/people/6",
            "https://www.swapi.tech/api/people/7",
            "https://www.swapi.tech/api/people/8",
            "https://www.swapi.tech/api/people/9",
            "https://www.swapi.tech/api/people/10",
            "https://www.swapi.tech/api/people/12",
            "https://www.swapi.tech/api/people/13",
            "https://www.swapi.tech/api/people/14",
            "https://www.swapi.tech/api/people/15",
            "https://www.swapi.tech/api/people/16",
            "https://www.swapi.tech/api/people/18",
            "https://www.swapi.tech/api/people/19",
            "https://www.swapi.tech/api/people/81"
          ],
          "planets": [
            "https://www.swapi.tech/api/planets/1",
            "https://www.swapi.tech/api/planets/2",
            "https://www.swapi.tech/api/planets/3"
          ],
          "starships": [
            "https://www.swapi.tech/api/starships/2",
            "https://www.swapi.tech/api/starships/3",
            "https://www.swapi.tech/api/starships/5",
            "https://www.swapi.tech/api/starships/9",
            "https://www.swapi.tech/api/starships/10",
            "https://www.swapi.tech/api/starships/11",
            "https://www.swapi.tech/api/starships/12",
            "https://www.swapi.tech/api/starships/13"
          ],
          "vehicles": [
            "https://www.swapi.tech/api/vehicles/4",
            "https://www.swapi.tech/api/vehicles/6",
            "https://www.swapi.tech/api/vehicles/7",
            "https://www.swapi.tech/api/vehicles/8"
          ],
          "species": [
            "https://www.swapi.tech/api/species/1",
            "https://www.swapi.tech/api/species/2",
            "https://www.swapi.tech/api/species/3",
            "https://www.swapi.tech/api/species/4",
            "https://www.swapi.tech/api/species/5"
          ],
          "created": "2021-12-23T09:53:44.976Z",
          "edited": "2021-12-23T09:53:44.976Z",
          "producer": "Gary Kurtz, Rick McCallum",
          "title": "A New Hope",
          "episode_id": 4,
          "director": "George Lucas",
          "release_date": "1977-05-25",
          "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
          "url": "https://www.swapi.tech/api/films/1"
        },
        "description": "A Star Wars Film",
        "_id": "5f63a117cf50d100047f9762",
        "uid": "1",
        "__v": 0
      },
      {
        "properties": {
          "characters": [
            "https://www.swapi.tech/api/people/1",
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/3",
            "https://www.swapi.tech/api/people/4",
            "https://www.swapi.tech/api/people/5",
            "https://www.swapi.tech/api/people/10",
            "https://www.swapi.tech/api/people/13",
            "https://www.swapi.tech/api/people/14",
            "https://www.swapi.tech/api/people/18",
            "https://www.swapi.tech/api/people/20",
            "https://www.swapi.tech/api/people/21",
            "https://www.swapi.tech/api/people/22",
            "https://www.swapi.tech/api/people/23",
            "https://www.swapi.tech/api/people/24",
            "https://www.swapi.tech/api/people/25",
            "https://www.swapi.tech/api/people/26"
          ],
          "planets": [
            "https://www.swapi.tech/api/planets/4",
            "https://www.swapi.tech/api/planets/5",
            "https://www.swapi.tech/api/planets/6",
            "https://www.swapi.tech/api/planets/27"
          ],
          "starships": [
            "https://www.swapi.tech/api/starships/3",
            "https://www.swapi.tech/api/starships/10",
            "https://www.swapi.tech/api/starships/11",
            "https://www.swapi.tech/api/starships/12",
            "https://www.swapi.tech/api/starships/15",
            "https://www.swapi.tech/api/starships/17",
            "https://www.swapi.tech/api/starships/21",
            "https://www.swapi.tech/api/starships/22",
            "https://www.swapi.tech/api/starships/23"
          ],
          "vehicles": [
            "https://www.swapi.tech/api/vehicles/8",
            "https://www.swapi.tech/api/vehicles/14",
            "https://www.swapi.tech/api/vehicles/16",
            "https://www.swapi.tech/api/vehicles/18",
            "https://www.swapi.tech/api/vehicles/19",
            "https://www.swapi.tech/api/vehicles/20"
          ],
          "species": [
            "https://www.swapi.tech/api/species/1",
            "https://www.swapi.tech/api/species/2",
            "https://www.swapi.tech/api/species/3",
            "https://www.swapi.tech/api/species/6",
            "https://www.swapi.tech/api/species/7"
          ],
          "created": "2021-12-23T09:53:44.976Z",
          "edited": "2021-12-23T09:53:44.976Z",
          "producer": "Gary Kurtz, Rick McCallum",
          "title": "The Empire Strikes Back",
          "episode_id": 5,
          "director": "Irvin Kershner",
          "release_date": "1980-05-17",
          "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
          "url": "https://www.swapi.tech/api/films/2"
        },
        "description": "A Star Wars Film",
        "_id": "5f63a117cf50d100047f9763",
        "uid": "2",
        "__v": 0
      },
      {
        "properties": {
          "characters": [
            "https://www.swapi.tech/api/people/1",
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/3",
            "https://www.swapi.tech/api/people/4",
            "https://www.swapi.tech/api/people/5",
            "https://www.swapi.tech/api/people/10",
            "https://www.swapi.tech/api/people/13",
            "https://www.swapi.tech/api/people/14",
            "https://www.swapi.tech/api/people/16",
            "https://www.swapi.tech/api/people/18",
            "https://www.swapi.tech/api/people/20",
            "https://www.swapi.tech/api/people/21",
            "https://www.swapi.tech/api/people/22",
            "https://www.swapi.tech/api/people/25",
            "https://www.swapi.tech/api/people/27",
            "https://www.swapi.tech/api/people/28",
            "https://www.swapi.tech/api/people/29",
            "https://www.swapi.tech/api/people/30",
            "https://www.swapi.tech/api/people/31",
            "https://www.swapi.tech/api/people/45"
          ],
          "planets": [
            "https://www.swapi.tech/api/planets/1",
            "https://www.swapi.tech/api/planets/5",
            "https://www.swapi.tech/api/planets/7",
            "https://www.swapi.tech/api/planets/8",
            "https://www.swapi.tech/api/planets/9"
          ],
          "starships": [
            "https://www.swapi.tech/api/starships/2",
            "https://www.swapi.tech/api/starships/3",
            "https://www.swapi.tech/api/starships/10",
            "https://www.swapi.tech/api/starships/11",
            "https://www.swapi.tech/api/starships/12",
            "https://www.swapi.tech/api/starships/15",
            "https://www.swapi.tech/api/starships/17",
            "https://www.swapi.tech/api/starships/22",
            "https://www.swapi.tech/api/starships/23",
            "https://www.swapi.tech/api/starships/27",
            "https://www.swapi.tech/api/starships/28",
            "https://www.swapi.tech/api/starships/29"
          ],
          "vehicles": [
            "https://www.swapi.tech/api/vehicles/8",
            "https://www.swapi.tech/api/vehicles/16",
            "https://www.swapi.tech/api/vehicles/18",
            "https://www.swapi.tech/api/vehicles/19",
            "https://www.swapi.tech/api/vehicles/24",
            "https://www.swapi.tech/api/vehicles/25",
            "https://www.swapi.tech/api/vehicles/26",
            "https://www.swapi.tech/api/vehicles/30"
          ],
          "species": [
            "https://www.swapi.tech/api/species/1",
            "https://www.swapi.tech/api/species/2",
            "https://www.swapi.tech/api/species/3",
            "https://www.swapi.tech/api/species/5",
            "https://www.swapi.tech/api/species/6",
            "https://www.swapi.tech/api/species/8",
            "https://www.swapi.tech/api/species/9",
            "https://www.swapi.tech/api/species/10",
            "https://www.swapi.tech/api/species/15"
          ],
          "created": "2021-12-23T09:53:44.976Z",
          "edited": "2021-12-23T09:53:44.976Z",
          "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
          "title": "Return of the Jedi",
          "episode_id": 6,
          "director": "Richard Marquand",
          "release_date": "1983-05-25",
          "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
          "url": "https://www.swapi.tech/api/films/3"
        },
        "description": "A Star Wars Film",
        "_id": "5f63a117cf50d100047f9764",
        "uid": "3",
        "__v": 0
      },
      {
        "properties": {
          "characters": [
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/3",
            "https://www.swapi.tech/api/people/10",
            "https://www.swapi.tech/api/people/11",
            "https://www.swapi.tech/api/people/16",
            "https://www.swapi.tech/api/people/20",
            "https://www.swapi.tech/api/people/21",
            "https://www.swapi.tech/api/people/32",
            "https://www.swapi.tech/api/people/33",
            "https://www.swapi.tech/api/people/34",
            "https://www.swapi.tech/api/people/35",
            "https://www.swapi.tech/api/people/36",
            "https://www.swapi.tech/api/people/37",
            "https://www.swapi.tech/api/people/38",
            "https://www.swapi.tech/api/people/39",
            "https://www.swapi.tech/api/people/40",
            "https://www.swapi.tech/api/people/41",
            "https://www.swapi.tech/api/people/42",
            "https://www.swapi.tech/api/people/43",
            "https://www.swapi.tech/api/people/44",
            "https://www.swapi.tech/api/people/46",
            "https://www.swapi.tech/api/people/47",
            "https://www.swapi.tech/api/people/48",
            "https://www.swapi.tech/api/people/49",
            "https://www.swapi.tech/api/people/50",
            "https://www.swapi.tech/api/people/51",
            "https://www.swapi.tech/api/people/52",
            "https://www.swapi.tech/api/people/53",
            "https://www.swapi.tech/api/people/54",
            "https://www.swapi.tech/api/people/55",
            "https://www.swapi.tech/api/people/56",
            "https://www.swapi.tech/api/people/57",
            "https://www.swapi.tech/api/people/58",
            "https://www.swapi.tech/api/people/59"
          ],
          "planets": [
            "https://www.swapi.tech/api/planets/1",
            "https://www.swapi.tech/api/planets/8",
            "https://www.swapi.tech/api/planets/9"
          ],
          "starships": [
            "https://www.swapi.tech/api/starships/31",
            "https://www.swapi.tech/api/starships/32",
            "https://www.swapi.tech/api/starships/39",
            "https://www.swapi.tech/api/starships/40",
            "https://www.swapi.tech/api/starships/41"
          ],
          "vehicles": [
            "https://www.swapi.tech/api/vehicles/33",
            "https://www.swapi.tech/api/vehicles/34",
            "https://www.swapi.tech/api/vehicles/35",
            "https://www.swapi.tech/api/vehicles/36",
            "https://www.swapi.tech/api/vehicles/37",
            "https://www.swapi.tech/api/vehicles/38",
            "https://www.swapi.tech/api/vehicles/42"
          ],
          "species": [
            "https://www.swapi.tech/api/species/1",
            "https://www.swapi.tech/api/species/2",
            "https://www.swapi.tech/api/species/6",
            "https://www.swapi.tech/api/species/11",
            "https://www.swapi.tech/api/species/12",
            "https://www.swapi.tech/api/species/13",
            "https://www.swapi.tech/api/species/14",
            "https://www.swapi.tech/api/species/15",
            "https://www.swapi.tech/api/species/16",
            "https://www.swapi.tech/api/species/17",
            "https://www.swapi.tech/api/species/18",
            "https://www.swapi.tech/api/species/19",
            "https://www.swapi.tech/api/species/20",
            "https://www.swapi.tech/api/species/21",
            "https://www.swapi.tech/api/species/22",
            "https://www.swapi.tech/api/species/23",
            "https://www.swapi.tech/api/species/24",
            "https://www.swapi.tech/api/species/25",
            "https://www.swapi.tech/api/species/26",
            "https://www.swapi.tech/api/species/27"
          ],
          "created": "2021-12-23T09:53:44.976Z",
          "edited": "2021-12-23T09:53:44.976Z",
          "producer": "Rick McCallum",
          "title": "The Phantom Menace",
          "episode_id": 1,
          "director": "George Lucas",
          "release_date": "1999-05-19",
          "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
          "url": "https://www.swapi.tech/api/films/4"
        },
        "description": "A Star Wars Film",
        "_id": "5f63a117cf50d100047f9765",
        "uid": "4",
        "__v": 0
      },
      {
        "properties": {
          "characters": [
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/3",
            "https://www.swapi.tech/api/people/6",
            "https://www.swapi.tech/api/people/7",
            "https://www.swapi.tech/api/people/10",
            "https://www.swapi.tech/api/people/11",
            "https://www.swapi.tech/api/people/20",
            "https://www.swapi.tech/api/people/21",
            "https://www.swapi.tech/api/people/22",
            "https://www.swapi.tech/api/people/33",
            "https://www.swapi.tech/api/people/35",
            "https://www.swapi.tech/api/people/36",
            "https://www.swapi.tech/api/people/40",
            "https://www.swapi.tech/api/people/43",
            "https://www.swapi.tech/api/people/46",
            "https://www.swapi.tech/api/people/51",
            "https://www.swapi.tech/api/people/52",
            "https://www.swapi.tech/api/people/53",
            "https://www.swapi.tech/api/people/58",
            "https://www.swapi.tech/api/people/59",
            "https://www.swapi.tech/api/people/60",
            "https://www.swapi.tech/api/people/61",
            "https://www.swapi.tech/api/people/62",
            "https://www.swapi.tech/api/people/63",
            "https://www.swapi.tech/api/people/64",
            "https://www.swapi.tech/api/people/65",
            "https://www.swapi.tech/api/people/66",
            "https://www.swapi.tech/api/people/67",
            "https://www.swapi.tech/api/people/68",
            "https://www.swapi.tech/api/people/69",
            "https://www.swapi.tech/api/people/70",
            "https://www.swapi.tech/api/people/71",
            "https://www.swapi.tech/api/people/72",
            "https://www.swapi.tech/api/people/73",
            "https://www.swapi.tech/api/people/74",
            "https://www.swapi.tech/api/people/75",
            "https://www.swapi.tech/api/people/76",
            "https://www.swapi.tech/api/people/77",
            "https://www.swapi.tech/api/people/78",
            "https://www.swapi.tech/api/people/82"
          ],
          "planets": [
            "https://www.swapi.tech/api/planets/1",
            "https://www.swapi.tech/api/planets/8",
            "https://www.swapi.tech/api/planets/9",
            "https://www.swapi.tech/api/planets/10",
            "https://www.swapi.tech/api/planets/11"
          ],
          "starships": [
            "https://www.swapi.tech/api/starships/21",
            "https://www.swapi.tech/api/starships/32",
            "https://www.swapi.tech/api/starships/39",
            "https://www.swapi.tech/api/starships/43",
            "https://www.swapi.tech/api/starships/47",
            "https://www.swapi.tech/api/starships/48",
            "https://www.swapi.tech/api/starships/49",
            "https://www.swapi.tech/api/starships/52",
            "https://www.swapi.tech/api/starships/58"
          ],
          "vehicles": [
            "https://www.swapi.tech/api/vehicles/4",
            "https://www.swapi.tech/api/vehicles/44",
            "https://www.swapi.tech/api/vehicles/45",
            "https://www.swapi.tech/api/vehicles/46",
            "https://www.swapi.tech/api/vehicles/50",
            "https://www.swapi.tech/api/vehicles/51",
            "https://www.swapi.tech/api/vehicles/53",
            "https://www.swapi.tech/api/vehicles/54",
            "https://www.swapi.tech/api/vehicles/55",
            "https://www.swapi.tech/api/vehicles/56",
            "https://www.swapi.tech/api/vehicles/57"
          ],
          "species": [
            "https://www.swapi.tech/api/species/1",
            "https://www.swapi.tech/api/species/2",
            "https://www.swapi.tech/api/species/6",
            "https://www.swapi.tech/api/species/12",
            "https://www.swapi.tech/api/species/13",
            "https://www.swapi.tech/api/species/15",
            "https://www.swapi.tech/api/species/28",
            "https://www.swapi.tech/api/species/29",
            "https://www.swapi.tech/api/species/30",
            "https://www.swapi.tech/api/species/31",
            "https://www.swapi.tech/api/species/32",
            "https://www.swapi.tech/api/species/33",
            "https://www.swapi.tech/api/species/34",
            "https://www.swapi.tech/api/species/35"
          ],
          "created": "2021-12-23T09:53:44.976Z",
          "edited": "2021-12-23T09:53:44.976Z",
          "producer": "Rick McCallum",
          "title": "Attack of the Clones",
          "episode_id": 2,
          "director": "George Lucas",
          "release_date": "2002-05-16",
          "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
          "url": "https://www.swapi.tech/api/films/5"
        },
        "description": "A Star Wars Film",
        "_id": "5f63a117cf50d100047f9766",
        "uid": "5",
        "__v": 0
      },
      {
        "properties": {
          "characters": [
            "https://www.swapi.tech/api/people/1",
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/3",
            "https://www.swapi.tech/api/people/4",
            "https://www.swapi.tech/api/people/5",
            "https://www.swapi.tech/api/people/6",
            "https://www.swapi.tech/api/people/7",
            "https://www.swapi.tech/api/people/10",
            "https://www.swapi.tech/api/people/11",
            "https://www.swapi.tech/api/people/12",
            "https://www.swapi.tech/api/people/13",
            "https://www.swapi.tech/api/people/20",
            "https://www.swapi.tech/api/people/21",
            "https://www.swapi.tech/api/people/33",
            "https://www.swapi.tech/api/people/35",
            "https://www.swapi.tech/api/people/46",
            "https://www.swapi.tech/api/people/51",
            "https://www.swapi.tech/api/people/52",
            "https://www.swapi.tech/api/people/53",
            "https://www.swapi.tech/api/people/54",
            "https://www.swapi.tech/api/people/55",
            "https://www.swapi.tech/api/people/56",
            "https://www.swapi.tech/api/people/58",
            "https://www.swapi.tech/api/people/63",
            "https://www.swapi.tech/api/people/64",
            "https://www.swapi.tech/api/people/67",
            "https://www.swapi.tech/api/people/68",
            "https://www.swapi.tech/api/people/75",
            "https://www.swapi.tech/api/people/78",
            "https://www.swapi.tech/api/people/79",
            "https://www.swapi.tech/api/people/80",
            "https://www.swapi.tech/api/people/81",
            "https://www.swapi.tech/api/people/82",
            "https://www.swapi.tech/api/people/83"
          ],
          "planets": [
            "https://www.swapi.tech/api/planets/1",
            "https://www.swapi.tech/api/planets/2",
            "https://www.swapi.tech/api/planets/5",
            "https://www.swapi.tech/api/planets/8",
            "https://www.swapi.tech/api/planets/9",
            "https://www.swapi.tech/api/planets/12",
            "https://www.swapi.tech/api/planets/13",
            "https://www.swapi.tech/api/planets/14",
            "https://www.swapi.tech/api/planets/15",
            "https://www.swapi.tech/api/planets/16",
            "https://www.swapi.tech/api/planets/17",
            "https://www.swapi.tech/api/planets/18",
            "https://www.swapi.tech/api/planets/19"
          ],
          "starships": [
            "https://www.swapi.tech/api/starships/2",
            "https://www.swapi.tech/api/starships/32",
            "https://www.swapi.tech/api/starships/48",
            "https://www.swapi.tech/api/starships/59",
            "https://www.swapi.tech/api/starships/61",
            "https://www.swapi.tech/api/starships/63",
            "https://www.swapi.tech/api/starships/64",
            "https://www.swapi.tech/api/starships/65",
            "https://www.swapi.tech/api/starships/66",
            "https://www.swapi.tech/api/starships/68",
            "https://www.swapi.tech/api/starships/74",
            "https://www.swapi.tech/api/starships/75"
          ],
          "vehicles": [
            "https://www.swapi.tech/api/vehicles/33",
            "https://www.swapi.tech/api/vehicles/50",
            "https://www.swapi.tech/api/vehicles/53",
            "https://www.swapi.tech/api/vehicles/56",
            "https://www.swapi.tech/api/vehicles/60",
            "https://www.swapi.tech/api/vehicles/62",
            "https://www.swapi.tech/api/vehicles/67",
            "https://www.swapi.tech/api/vehicles/69",
            "https://www.swapi.tech/api/vehicles/70",
            "https://www.swapi.tech/api/vehicles/71",
            "https://www.swapi.tech/api/vehicles/72",
            "https://www.swapi.tech/api/vehicles/73",
            "https://www.swapi.tech/api/vehicles/76"
          ],
          "species": [
            "https://www.swapi.tech/api/species/1",
            "https://www.swapi.tech/api/species/2",
            "https://www.swapi.tech/api/species/3",
            "https://www.swapi.tech/api/species/6",
            "https://www.swapi.tech/api/species/15",
            "https://www.swapi.tech/api/species/19",
            "https://www.swapi.tech/api/species/20",
            "https://www.swapi.tech/api/species/23",
            "https://www.swapi.tech/api/species/24",
            "https://www.swapi.tech/api/species/25",
            "https://www.swapi.tech/api/species/26",
            "https://www.swapi.tech/api/species/27",
            "https://www.swapi.tech/api/species/28",
            "https://www.swapi.tech/api/species/29",
            "https://www.swapi.tech/api/species/30",
            "https://www.swapi.tech/api/species/33",
            "https://www.swapi.tech/api/species/34",
            "https://www.swapi.tech/api/species/35",
            "https://www.swapi.tech/api/species/36",
            "https://www.swapi.tech/api/species/37"
          ],
          "created": "2021-12-23T09:53:44.976Z",
          "edited": "2021-12-23T09:53:44.976Z",
          "producer": "Rick McCallum",
          "title": "Revenge of the Sith",
          "episode_id": 3,
          "director": "George Lucas",
          "release_date": "2005-05-19",
          "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
          "url": "https://www.swapi.tech/api/films/6"
        },
        "description": "A Star Wars Film",
        "_id": "5f63a117cf50d100047f9767",
        "uid": "6",
        "__v": 0
      }
    ]
  };

  setAllTitlesData({
    Titles: [apiCall.result.map((x) => {
      return x.properties.title
    })],
    Loaded: true
  })



}

// 


// function swapiApiCall() {

//     const [Data, setData] = useState({
//         Titles: [],
//         Loaded: false
//     })

//     useEffect(() => {
//         axios.get('https://www.swapi.tech/api/films/')
//             .then(res => {
//                 let swapiData = res.data.result;

//                 setData({
//                     Titles: swapiData.map((x) => {
//                         return x.properties.title
//                     }),
//                     Loaded: true
//                 }
//                 )

//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, [])

//     return (
//         Data.Titles
//     );
// }

export default swapiData;