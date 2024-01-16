// import logo from './logo.svg';
import './App.css';


import 'primeicons/primeicons.css';


// import { Fullscreen } from '@mui/icons-material';





import Header from './header';
import Nav from './nav';
import Topic from './topic';
import Options from './options';
import Content from './content';
import PublishedBy from './published-by';
import Faq from './faq';

// import { Camera, Home } from 'react-feather';
// import { AccessAlarm, ThreeDRotation, HomeIcon } from '@mui/icons-material';




function App() {


  const questions = [{question: 'Can education flashcards be used for all age groups?', answer: "ans1"},{question: 'How do education flashcards work?', answer: "ans2"} , {question: 'Can education flashcards be used for test preparation?', answer: "ans3"}];

  const arrNav = [
    "Flashcard", "Mathematics", "Relations and Functions",
  ]

  const topic = arrNav[arrNav.length - 1] + " ( " + arrNav[arrNav.length - 2] + " )";

  const options = ["Study", "Quiz", "Test", "Game", "Others"];

  function handleClick(id) {
    var buttons = document.getElementsByClassName("button");
    for (let index = 0; index < buttons.length; index++) {
      const element = buttons[index];
      element.classList.remove("border-b-4");
      element.classList.remove("text-black");
      element.classList.remove("font-extrabold");

    }
    document.getElementById(id).classList.add("border-b-4");
    document.getElementById(id).classList.add("text-black");
    document.getElementById(id).classList.add("font-extrabold");

  }



  return (
    <div className='px-10'>
      <Header />
      <div className='h-5'></div>
      <Nav arrNav={arrNav} />
      <div className='h-8'></div>
      <Topic topic={topic} />
      <div className='h-8'></div>
      <Options handleClick={handleClick} options={options} />
      <div className='h-5'></div>
      <Content />
      <div className=' h-12'></div>
      <PublishedBy />
      <div className='h-40'></div>
      <Faq questions={questions} />
    </div>
  );
}





export default App;


