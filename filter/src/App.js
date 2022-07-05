import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';




function App() {
  const [cards,setCards] = useState(["naif","lamya","masha"]);

  const filters = (searchName)=>{
    let name2 = [...cards];
    if(searchName===""){
      setCards(["naif","lamya","masha"])
    }else{

      let filterdData = name2.filter((name)=>name.includes(searchName));
      setCards(filterdData);
    }

  }

  useEffect(()=>{
    console.log("render");
    return (()=>{
      console.log("exit ender");
    })
  },[]);

  return (
    <div className="App">
      <div className="App-header">
      <div style={{display:"flex",alignItems:"center"}}>
        <p>search</p>
        <input style={{height:"26px",margin:"50px 20px"}} aria-label='ابحث' type="text" onChange={(e)=>filters(e.target.value)}/>

        </div>
        <div style={{display:"flex"}}>
        {cards.map((name)=>{
          return <Card style={{ width: '18rem' ,margin:"20px"}}>
          <Card.Img style={{width:"100%"}} variant="top" src="http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
