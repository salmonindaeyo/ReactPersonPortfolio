import React , { useContext } from 'react'
import { DataContext } from '../App'


export default function About() {

    const data = useContext(DataContext);

  return (
    <div>

      <h1>About</h1>
      <hr/>

      <img src={data.basics?.picture} alt={data.basic?.name} width="200px"/>

      <ul>
        <li> Name: {data.basics?.name}       </li>
        <li>  {data.basics?.headline}       </li>
        <li> Name: {data.basics?.region}       </li>
      </ul>
      <hr/>
       <h3>my skill</h3>
      <ul>
        {data.skills?.map((val,index)=> (
          <li key={index}>
            <strong>{val.name}</strong>
            <br/>
            Level : {val.level}
             </li>
        ))}
    </ul>

    </div>
  )
}


