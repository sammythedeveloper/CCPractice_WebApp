export const calculateScore = (questions, answers) => {
    let score = 0;
  
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
  
    return score;
  };
  