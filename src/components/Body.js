import { Link } from "react-router-dom";
import { NLP } from "../utils/Constants";
import { Cohere } from "../utils/Constants";
import Footer from "./Footer";
import Steps from "./Steps";


const Body = () => {
    return (
<div>
      <div className="flex  flex-col justify-between text-slate-50 p-16 items-center bg-cente bg-gradient-to-r from-teal-800 to-indigo-900 " >
            <p className="p-8 text-6xl">Q&A Generator</p>
            <p className="p-8">Welcome to QACrafter, where intelligence meets coherence. Our platform harnesses the power of the CoHere API to provide you with an intuitive and efficient way to generate questions and answers from your text or PDF documents. Whether you're a student studying for exams, a teacher preparing lesson plans, or a researcher extracting insights from literature, our website empowers you to effortlessly transform your content into meaningful Q&A formats. With advanced natural language processing algorithms, we ensure accuracy and coherence in every question and answer generated. Explore our user-friendly interface, upload your documents, and let CoHere API do the rest. Simplify your workflow, enhance productivity, and unlock new possibilities with QACrafter.efficient way to generate questions and answers from your text or PDF documents. Whether you're a student studying for exams, a teacher preparing lesson plans, or a researcher extracting insights from literature, our website empowers you to effortlessly transform your content into meaningful Q&A formats. With advanced natural language processing algorithms, we ensure accuracy and coherence in every question  "</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6">
              <Link to="/app">  Lets's Go </Link>
            </button>
      </div>
      <div className="NLP flex items-center  ">
        <div className="w-[50vw]  mx-10">
            <p className="p-8 text-7xl">NLP</p>
            <p className="p-4 flex">Natural Language Processing (NLP) is a field within artificial intelligence (AI) that focuses on enabling computers to understand, interpret, and generate human language in a manner that is both meaningful and practical. It encompasses the development of algorithms and models that allow computers to analyze and process large volumes of natural language data, including text and speech. NLP tasks and applications range from text classification, where documents are categorized into predefined categories or labels, to named entity recognition (NER), which involves identifying and extracting named entities like people, organizations, and locations from text. 
              </p>
         <Link to={"https://www.nltk.org/"}>   <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6">
               Read More
            </button></Link>
        </div>
        <div>
              <img className="h-[30rem] mr-px-20 rounded-lg" src={NLP}></img>
        </div>
    </div>
      
    <div className="Cohere flex items-center">
        <div>
              <img className="h-[30rem] rounded-lg" src={Cohere}></img>
         </div>
         <div className="w-[50vw]  mx-10">
                 <p className="p-8 text-6xl">COHERE API</p>
            <p className="p-4 flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              </p>
              <Link to={"https://docs.cohere.com/"}><button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6">
               Read More
            </button> </Link>
          </div>
            
    </div>
    <div className="bg-gradient-to-r from-teal-800 to-indigo-900  text-white ">
      <Steps />
    </div>
    <Footer/>
   </div>
 
       
    );
};

export default Body;
