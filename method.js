
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

let users = [
    {
        firstname: "sujitha",
        lastname: "bhuvana",
    },
    {
        firstname: "uttham sing",
        lastname: "kamaraj",
    },
]
/*
app.get('/users', (req, res) => {
    res.json(users);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// get using params

app.get('/users/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.send(`User: ${firstname} ${lastname}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

//get using query
app.get('/users/', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`User: ${firstname} ${lastname}`);

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// get using body

app.get('/users/', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`User: ${firstname} ${lastname}`);

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//query (http://localhost:4000/users?firstname=sindhuja&lastname=ruban)
app.post('/users',(req,res)=>{
const {firstname,lastname} = req.query; 
    console.log(req.query);
    

    const newUser = req.query;
    newUser.id = uuidv4();
    users.push(newUser);
    res.send(`${newUser.firstname} ${newUser.lastname} `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//params(http://localhost:4000/users/samyuktha/bhuvana)

app.post('/users/:firstname/:lastname', (req, res) =>{


const {firstname,lastname} = req.params; 
    console.log(req.params);
    

    const newUser = req.params;
    newUser.id = uuidv4();
    users.push(newUser);
    res.send(`${newUser.firstname} ${newUser.lastname} `);
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

//body (give their ur input)
app.post('/users',(req,res)=>{

console.log(req.body)
    const newuser= req. body;
    newuser.id=uuidv4();
    users.push(newuser)
    
    res.send(`${newuser.firstname} ${newuser.lastname} `);
}
)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// get using body

app.use(express.json());


app.put(/users/, (req, res) => {
    const user = req.body.user;
    const { firstname, lastname } = req.body; 

    
    res.send(`Updated user  with name: ${firstname} ${lastname}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// put using query

app.use(express.json());


app.put(/users/, (req, res) => {
    const user = req.query.user;
    const { firstname, lastname } = req.query; 

    
    res.send(`Updated user  with name: ${firstname} ${lastname}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// put using params

app.use(express.json());

app.put('/users/:firstname/:lastname', (req, res) => {
    const user = req.params.user;
    const { firstname, lastname } = req.params;
    res.send(`Updated user with name: ${firstname} ${lastname}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// delete using query

app.delete('/users', (req, res) => {
    const { id } = req.query;
    res.send(`Deleted user with id: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// delete using params

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Deleted user with id: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// delete using body

app.delete('/users', (req, res) => {
    const { id } = req.body;
    res.send(`Deleted user with id: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// head using query


app.head('/users', (req, res) => {
    const { firstname, lastname } = req.query;
    console.log('Received query parameters:', { firstname, lastname });
    res.set({
        'Content-Type': 'application/json',
        'Content-Length': '1234'
    });
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// head using body

app.head('/users', (req, res) => {
    const { firstname, lastname } = req.body;
    console.log('Received query parameters:', { firstname, lastname });
    res.set({
        'Content-Type': 'application/json',
        'Content-Length': '1710'
    });
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



//head using params
app.head('/users', (req, res) => {
    const { firstname, lastname } = req.params;
    console.log('Received query parameters:', { firstname, lastname });
    res.set({
        'Content-Type': 'application/json',
        'location': 'desktop'
    });
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

*/

app.use(express.json());
app.options('/users', (req, res) => {
    res.set({
        'Allow': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'json, me',
        'Access-Control-Max-Age': '86400' 
    });
    
    res.status(200).send();
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
