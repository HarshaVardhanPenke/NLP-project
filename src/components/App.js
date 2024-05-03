import React, { useState } from 'react';
import { QAbg } from '../utils/Constants';
import { PulseLoader } from 'react-spinners'; // Import loading animation component
import { MainBG } from '../utils/Constants';


function App() {
  const [inputType, setInputType] = useState('text');
  const [inputText, setInputText] = useState('');
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    const formData = new FormData();
    formData.append('inputType', inputType);

    if (inputType === 'text') {
      formData.append('text', inputText);
    } else {
      formData.append('file', file);
    }

    try {
      const response = await fetch('http://localhost:5000/generate_questions', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setSummary(data.summary);
      setQuestions(data.questions);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading back to false when data fetching is complete
    }
  };

  return (
    <div className="main p-8 text-white" style={{ backgroundImage: `url(${MainBG})`, backgroundSize: 'cover', backdropFilter:"-moz-initial" }}>
      <div>
        <h1 className='text-6xl text-center m-10'>QACrafter</h1>
        <p className='text-center m-8'>Are you tired of spending hours crafting questions and answers for your study materials or educational content? Look no further! With [Your Website Name], generating questions and answers has never been easier.</p>
      </div>
      <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex-column text-center p-8'>
        <h1 className='text-5xl font-semibold'>Generate Questions</h1>
        <form onSubmit={handleSubmit} className="mt-8">
        <label className="block mb-4 ">
            <input 
              type="radio" 
              className="mr-2" 
              value="text" 
            
              checked={inputType === 'text'} 
              onChange={() => setInputType('text')} 
            />
            Enter Text
          </label>
          <label className="block mb-4">
            <input 
              type="radio" 
              className="mr-2" 
              value="file" 
              checked={inputType === 'file'} 
              onChange={() => setInputType('file')} 
            />
            Upload File
          </label>
          {inputType === 'text' ? (
            <textarea
              id="inputText"
              rows="4"
              cols="50"
              value={inputText}
              onChange={handleInputChange}
              className="border-solid to-black border-2 rounded p-2 w-full focus:border-black focus:outline-none text-black"
            ></textarea>
          ) : (
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="mb-4" 
            />
          )}
          <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600">Generate Questions</button>
        </form>
      </div>
      <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] mt-8 p-4'>
        <div id="questions">
        <h2 className="text-2xl font-semibold">Summary:</h2>
              <p>{summary}</p>
             <h2 className="text-2xl font-semibold">Questions:</h2>
          {/* Conditionally render loading animation */}
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <PulseLoader color="#708090" loading={loading} size={35} />
             
            </div>
          ) : (
            
            questions.map((question, index) => (
              
              <p key={index}>{question}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
