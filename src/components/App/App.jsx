import { useState } from "react";
import Form from "../Form/Form";
import User from "../User/User";
import "./main.css"

function App() {
 
  const defUsers = [
    {
      id: 1,
      name: 'Elon',
      lastname: 'Musk',
      age: 51,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/452px-Elon_Musk_Royal_Society_%28crop2%29.jpg?20220526164913'
    },
    {
      id: 2,
      name: 'Bill',
      lastname: 'Gates',
      age: 67,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg/267px-Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg'
    },
    {
      id: 33,
      name: 'Mark',
      lastname: 'Zuckerberg',
      age: 38,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/250px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
    },
    {
      id: 4,
      name: 'Steve',
      lastname: 'Jobs',
      age: 56,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/619px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
    }
  ]

  const [users, setUsers] = useState(defUsers);

  const addUser = (name,lastname,age,photo) => {
    const newUser = {
      name,
      lastname,
      age,
      photo,
      id: Date.now()
    }
    const addToUsers = [...users, newUser]

    setUsers(addToUsers)
  }  


  const delCard = (delId) => {
    const newCard = users.filter(card=> card.id !== delId)
    setUsers(newCard)
  }
  

  return (
    <div className="wrapper">
      <div className="form">
        <Form addUser={addUser} />
      </div>
      <div className="cards">
        {users.map(user => <User key={user.id} {...user} delCard={delCard} />)}
      </div>
    </div>
  );
}

export default App;
