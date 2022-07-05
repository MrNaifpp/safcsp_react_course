import {Card, Button} from 'react-bootstrap';

export default function UserCard(props){
    return(
        <Card style={{ width: '18rem' ,margin:"20px"}}>
          <Card.Img style={{width:"100%"}} variant="top" src="http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png" />
          <Card.Body>
            <Card.Title>{props.userName}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    )
}