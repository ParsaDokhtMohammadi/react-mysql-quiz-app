import React from 'react'

const QuestionCard = (question) => {
    const title =question.question?.title
    console.log(question)
  return (
    <div>
        {title}
    </div>
  )
}

export default QuestionCard