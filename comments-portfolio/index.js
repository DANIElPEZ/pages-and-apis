import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
dotenv.config();

const app = express();
const uri = process.env.uri;
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.get('/comments', async (req, res) => {
  try {
    const db = client.db('dnvdev').collection('comments');
    const result = await db.find({}).toArray();
    res.json(result);
  } catch (err) {
    res.status(400).send('Error al obtener los datos');
  }
});

app.post('/comments', async (req,res)=>{
  try {
    const sanitizedInput = sanitizeInput(req.body.name, req.body.comment);
    
    if (!sanitizedInput.name && !sanitizedInput.comment) return res.status(400).send('Datos no válidos');
    const db = client.db('dnvdev').collection('comments');
    await db.insertOne({
      name: req.body.name,
      comment: req.body.comment
    });
    res.status(201).send('Comentario insertado correctamente');
  } catch (error) {
    res.status(400).send('Error al insertar los datos');
  }
});

app.listen(3000, async() => {
  try {
    await client.connect(); 
  } catch (error) {
    console.log('error al conectarse a la base de datos');
  }
  console.log('Servidor escuchando en http://localhost:3000');
});

function sanitizeInput(name, comment) {
     const sanitizeName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
     const sanitizeComment = /^[\p{L}\p{Emoji_Presentation}\p{Emoji}\s]+$/u;

     const isValidName = sanitizeName.test(name.trim());
     const isValidComment = sanitizeComment.test(comment.trim());

     return {
          name: isValidName,
          comment: isValidComment
     };
}
