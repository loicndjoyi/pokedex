import { Badge, Container } from "react-bootstrap";
import Header from "./components/Header";
import PokemonsList from "./features/pokedex/PokemonsList";

function App() {
    return (
        <Container fluid>
            <Header />
            <PokemonsList />
        </Container>
    );
}

export default App;
