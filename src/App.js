// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import PracticeSelection from './components/PracticeSelection';
import ResultPage from './components/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-test" element={<PracticeSelection />} />
        <Route path="/test/:testId" element={<TestPage />} /> {/* <-- fixed */}
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
