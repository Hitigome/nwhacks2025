"use client"
import { useState } from 'react';


export default function FlashcardsApp() {
    const [flashcards, setFlashcards] = useState({});
    const [bulkText, setBulkText] = useState("");

    const saveFlashcards = () => {
        const blob = new Blob([JSON.stringify(flashcards, null, 4)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'flashcards.json';
        link.click();
        URL.revokeObjectURL(url);
    };

    const loadFlashcards = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const loadedFlashcards = JSON.parse(e.target.result);
                    setFlashcards(loadedFlashcards);
                    alert('Flashcards loaded successfully!');
                } catch (error) {
                    alert('Invalid JSON file.');
                }
            };
            reader.readAsText(file);
        }
    };

    const addFlashcard = (question, answer) => {
        setFlashcards({ ...flashcards, [question]: { question, answer } });
    };

    const bulkAddFlashcards = () => {
        const lines = bulkText.split('\n');
        const newFlashcards = { ...flashcards };

        lines.forEach((line) => {
            line = line.trim();
            if (line.startsWith("+") && line.endsWith("+")) {
                const content = line.slice(1, -1).trim(); // Remove leading + and trailing +
                if (content.includes(" | ")) {
                    const [question, answer] = content.split(" | ").map((part) => part.trim());
                    newFlashcards[question] = { question, answer };
                }
            }
        });

        setFlashcards(newFlashcards);
        setBulkText("");
        alert('Bulk flashcards added successfully!');
    };

    const reviewFlashcards = () => {
        return Object.values(flashcards).map(({ question, answer }) => (
            <div key={question}>
                <strong>Question:</strong> {question}
                <br />
                <strong>Answer:</strong> {answer}
                <hr />
            </div>
        ));
    };

    return (
        <div>
            <h1>Flashcards App</h1>
            <div>
                <h2>Add Flashcard</h2>
                <input type="text" placeholder="Question" id="question" />
                <input type="text" placeholder="Answer" id="answer" />
                <button onClick={() => {
                    const question = document.getElementById('question').value;
                    const answer = document.getElementById('answer').value;
                    if (question && answer) {
                        addFlashcard(question, answer);
                    } else {
                        alert('Please enter both a question and an answer.');
                    }
                }}>Add Flashcard</button>
            </div>
            <div>
                <h2>Bulk Add Flashcards</h2>
                <textarea
                    value={bulkText}
                    onChange={(e) => setBulkText(e.target.value)}
                    placeholder="Enter bulk text (e.g., +question | answer+)"></textarea>
                <button onClick={bulkAddFlashcards}>Bulk Add</button>
            </div>
            <div>
                <h2>Review Flashcards</h2>
                {reviewFlashcards()}
            </div>
            <div>
                <h2>Save/Load Flashcards</h2>
                <button onClick={saveFlashcards}>Save Flashcards</button>
                <input type="file" onChange={loadFlashcards} />
            </div>
        </div>
    );
}
