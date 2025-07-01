import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './pages/Quiz';
import Resume from './pages/Resume';
import Questions from './pages/Questions';
import Tracker from './pages/Tracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </Router>
  );
}

export default App;
