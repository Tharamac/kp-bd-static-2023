import { NextApiRequest, NextApiResponse } from "next";
import fsPromises from 'fs/promises';
import path from "path";
import clientPromise from "../../lib/mongodb";
import { MongoClient } from "mongodb";
const dataFilePath = path.join(process.cwd(), '/public/data.json');
const tempFilePath = path.join(process.cwd(), '/tmp/data.json');

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("kp-wish-2023");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("wish-data").insertOne(bodyObject);
      res.json(myPost.insertedId);
      break;
    case "GET":
      try{
        const allPosts = await db.collection("wish-data").find({}).toArray();
        res.json({ status: 200, data: allPosts, total: allPosts.length,});
        break;
      }catch(error){
        console.log(error)
      }
     
  }
}

