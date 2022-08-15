import React , { useContext} from 'react'
import { DataContext } from '../App'
import { Container } from '../styles/styles'

function Home() {

    const data = useContext(DataContext); //ไว้รับ data ที่ส่งมาจาก app

  return (
    <Container>
        <h1> Home </h1>
        <div>
            <img src={data.basics?.picture} alt={data.basics?.name} ></img>   {/*?ไว้เช็คว่ามีไหม ถ้าไม่มีก็ undefine */}
            <ul>
                <li>
                    <strong>name : </strong> {data.basics?.name}
                </li>
                <li>
                    <strong>Headline : </strong> {data.basics?.headline}
                </li>
            </ul>
        </div>

    
    </Container>
  )
}

export default Home