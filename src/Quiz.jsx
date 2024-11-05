
import './quiz.css'; // Assuming you have a CSS file for styling
import { QuizCard } from './QuizCard';
import './quiz.css'
export function QuizMain() {

  return (
    <section className='worldQuiz'>
      <header style={{textDecoration:'underline'}}>WORLD QUIZ</header>
      <QuizCard />
    </section>
  );
};