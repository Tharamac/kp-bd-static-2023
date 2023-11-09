import { NextApiRequest, NextApiResponse } from "next";
import fsPromises from 'fs/promises';
import path from "path";

const dataFilePath = path.join(process.cwd(), 'public/data.json');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // res.status(200).json({ name: 'John Doe' })
    if (req.method === 'GET') {
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData.toString());
  
      res.status(200).json(objectData);
    }else if (req.method === 'POST') {
      try {
        // Read the existing data from the JSON file 
        console.log(dataFilePath) 
 
        const jsonData = await fsPromises.readFile(dataFilePath);       
        console.log(jsonData);
        const objectData = JSON.parse(jsonData.toString());
        console.log(objectData);
        // Get the data from the request body
        const {id, sender, message, pattern, createdDate } = req.body;
        console.log(req.body);
        // Add the new data to the object
        const newData = {
          id,
          sender,
          message,
          pattern,
          createdDate,
        };
        console.log(newData);
        objectData["data"].push(newData);
        const count = (objectData["data"] as Array<any>).length
        objectData["total"] = count;
        
  
        // Convert the object back to a JSON string
        const updatedData = JSON.stringify(objectData);
  
        // Write the updated data to the JSON file
        await fsPromises.writeFile(dataFilePath, updatedData);
  
        // Send a success response
        res.status(200).json({ message: 'Data stored successfully' });
      } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).json({ message: 'Error storing data' });
      }
    }
  }
