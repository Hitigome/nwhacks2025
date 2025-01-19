import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    // Access your API key by creating an instance of GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Initialize a generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Retrieve the data we receive as part of the request body
    const data = await req.json();
    console.log("Request body: ", data);
    // Define the prompt for creating flashcards
    const prompt = `You are a flashcard maker who highlights key information from the text given and condenses them into flashcards, providing an accurate question and a clear explanation with each card. The contents for each card must strictly be wrapped in “+”s and a “ | “ is used to separate the question and the answer of a card. This is the text for your data: ${data.body}`;

    // Pass the prompt to the model and retrieve the output
    const result = await model.generateContent(prompt)
    const response =  result.response;
    const output =  response.text();
    
    // Send the LLM output as a server response object
    return NextResponse.json({ output:output });
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}