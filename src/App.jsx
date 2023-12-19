

function App(){
const users=[{
  name:"abi",
  age:"20",
  food:"Briyani",
  hotel:"Aasife"
  },
  {
    name:"Santhosh",
    age:"30",
    food:"Parotta",
    hotel:"Dhanam"
    },
    {
      name:"veera",
      age:"35",
      food:"Sawarma",
      hotel:"Remi"
      },
]
return <>
{
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Food</th>
        <th>Hotel</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((e,i)=>{
          return <tr>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.food}</td>
            <td>{e.hotel}</td>
          </tr>
        })
      }
    </tbody>
  </table>
}
</>
  
}

export default App
