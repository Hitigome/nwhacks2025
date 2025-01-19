import styles from './textbox.module.css'
import React, {useState} from 'react';

function Textbox() {
    const [output, setOutput] = useState('');
    const [inputText, setInputText] = useState("");

    const generateText = async () => {
        try {
          const response = await fetch('/api/summarize', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify({body: inputText})
          });
    
          const data = await response.json();
    
          if(response.ok) {
            setOutput(data.output)
          } else {
            setOutput(data.error)
          }
    
        } catch(error) {
          console.error('Error:', error)
        }
      };

    return(
        <div className={styles.textbox}>
            <p className={styles.p}>Enter your notes here:</p>
            <textarea
                className={styles.input}
                style={{ height: '400px' }}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to summarize"
            />
            <button onClick={generateText} style={{ height: '30px', marginTop: '10px', borderRadius: '5px'}}>Generate</button>
            <div className={styles.input} style={{ height: '200px', marginTop: '10px' }}>
                <p>{output}</p>
            </div>

        </div>
    );
}

export default Textbox;