import React from 'react';
import styled from 'styled-components';
import { GenreSelect } from './main-genre-select.component';
import { SortBySelect } from './main-sort-select.component';
import { MoviesWrapper } from './movies/movies-wrapper.component';

const genres = [
  'documentary',
  'comedy',
  'horror',
  'crime'
];

const movies = [
  {
    title: 'Pulp Fiction',
    imgSrc: 'https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fpeliculas%2F000%2F000%2F344%2Fpulp-fiction-1.jpg&nuevoancho=690&medio=abc',
    year: 2004,
    genres: [
      'crime',
      'horror'
    ]
  },
  {
    title: 'Bohemian Rhapsody',
    imgSrc: 'http://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg',
    year: 2018,
    genres: [
      'crime',
      'horror'
    ]
  },
  {
    title: 'Kill Bill',
    imgSrc: 'https://elcriticoabulico.files.wordpress.com/2018/04/kill-bill-volumen-2.jpg',
    year: 1994,
    genres: [
      'crime',
      'horror'
    ]
  },
  {
    title: 'Avengers Infinity War',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81GfZasnt9L._SL1371_.jpg',
    year: 2018,
    genres: [
      'crime',
      'horror'
    ]
  },
  {
    title: 'Inception',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    year: 2010,
    genres: [
      'crime',
      'horror'
    ]
  },
  {
    title: 'Reservoir Dogs',
    imgSrc: 'http://4.bp.blogspot.com/-1rXQmnfzrKI/VRRtocgSd1I/AAAAAAAAAK4/7dLdXKpnnxk/s1600/Reservoir%2BDogs.jpg',
    year: 1994,
    genres: [
      'crime',
      'horror'
    ]
  }
]

const Main = styled.main`
  width: 100%;
  background-color: ${props => props.theme.grayDark};
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`
const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  border-bottom: 3px ridge ${props => props.theme.grayLight};
`

export const MainWrapper = () => {
  return (
    <Main>
      <TopBar>
        <GenreSelect genres={genres}></GenreSelect>
        <SortBySelect></SortBySelect>
      </TopBar>
      <MoviesWrapper movies={movies}></MoviesWrapper>
    </Main>
    )
}
