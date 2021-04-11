import React from 'react';
import styled from "styled-components";

const Image = styled.img`
  height: 300px;
`
const Description = styled.div`
  width: 70%;
  margin-right: 10%;
  font-weight: 200;
`
const Title = styled.div`
  font-weight: 300;
  font-size: 2.5rem;
`
const Score = styled.span`
  &::after {
    content: '${props => props.score}';
    border: 0.5px solid #fff;
    border-radius: 50%;
    color: ${props => props.theme.green};
    font-size: 1.3rem;
    font-weight: 400;
    padding: 12px;
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    margin-left: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`
const Details = styled.p`
  display: flex;
  justify-content: space-between;
  width: 20%;
  span {
    color: ${props => props.theme.red};
    font-weight: 400;
    font-size: 1.5rem;
  }
`

const MovieCard = props => {
  const {
    title,
    year,
    imgSrc,
    score,
    runtime,
    description
  } = props.movie;

  return (
    <>
      <Image src={imgSrc}></Image>
      <Description>
        <Title>{title} <Score score={score}></Score></Title>
        <p>Oscar Winning Movie</p>
        <Details>
          <span>{year}</span>
          <span>{runtime} min</span>
        </Details>
        <p>{description}</p>
      </Description>
    </>
  )
}

export default MovieCard;
