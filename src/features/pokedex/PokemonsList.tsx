import React, { useState, useEffect, useCallback } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { retrievePokemons, selectPokemons } from "./pokedexSlice";

const PokemonsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);

  const pokemons = useAppSelector(selectPokemons);
  debugger
  const dispatch = useAppDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrievePokemons());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  return (
    <Row>
    {pokemons && pokemons.map(pokemon => (
      <Col xs>
      <Card className="my-2" style={{ width: "18rem" }}>
          <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              {/* {pokemon.types.map((type: any) => (
                  <Badge pill>
                      {type}
                  </Badge>
                  ))} */}
          </Card.Body>
      </Card>
      </Col>
    ))}
    </Row>
  );
};

export default PokemonsList;
