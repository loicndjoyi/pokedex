import { Card, Button, Badge } from "react-bootstrap";

const ItemCard = (props: any) => (
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.sprites.front_default} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            {props.types.map((type: any) => (
                <Badge pill>
                    {type}
                </Badge>
                ))}
        </Card.Body>
    </Card>
);

export default ItemCard;
