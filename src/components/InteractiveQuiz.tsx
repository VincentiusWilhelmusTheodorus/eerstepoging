'use client'

import { useState } from 'react'

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Welke configuratie past het beste bij een kleine lokale sportschool met 50 leden?',
    options: [
      'Machinebureaucratie',
      'Eenvoudige structuur',
      'Professionele bureaucratie',
      'Adhocratie'
    ],
    correct: 1,
    explanation: 'Een kleine sportschool heeft directe supervisie door de eigenaar, weinig formalisatie en flexibele besluitvorming - typisch voor een eenvoudige structuur.',
    difficulty: 'easy',
    category: 'Herkenning'
  },
  {
    id: 'q2',
    question: 'Wat is het belangrijkste coördinatiemechanisme in een machinebureaucratie?',
    options: [
      'Directe supervisie',
      'Standaardisatie van werkprocessen',
      'Standaardisatie van vaardigheden',
      'Wederzijdse aanpassing'
    ],
    correct: 1,
    explanation: 'Machinebureaucratie kenmerkt zich door gedetailleerde procedures en gestandaardiseerde werkprocessen die het werk coördineren.',
    difficulty: 'medium',
    category: 'Concepten'
  },
  {
    id: 'q3',
    question: 'Een ziekenhuis met sportgeneeskunde waar artsen veel autonomie hebben is een voorbeeld van:',
    options: [
      'Eenvoudige structuur',
      'Machinebureaucratie',
      'Professionele bureaucratie',
      'Divisiestructuur'
    ],
    correct: 2,
    explanation: 'Professionele bureaucratie kenmerkt zich door hoogopgeleide professionals met veel autonomie, gecoördineerd door professionele standaarden.',
    difficulty: 'easy',
    category: 'Herkenning'
  },
  {
    id: 'q4',
    question: 'Welk nadeel heeft een divisiestructuur vaak?',
    options: [
      'Te weinig flexibiliteit',
      'Gebrek aan specialisatie',
      'Duplicatie van functies',
      'Te veel directe supervisie'
    ],
    correct: 2,
    explanation: 'Divisiestructuren hebben vaak duplicatie van ondersteunende functies (HR, Finance) omdat elke divisie deze nodig heeft.',
    difficulty: 'medium',
    category: 'Analyse'
  },
  {
    id: 'q5',
    question: 'Basic-Fit heeft 300+ vestigingen met identieke inrichting en procedures. Dit is een:',
    options: [
      'Eenvoudige structuur',
      'Machinebureaucratie',
      'Professionele bureaucratie',
      'Adhocratie'
    ],
    correct: 1,
    explanation: 'De hoge mate van standaardisatie, identieke procedures en schaalvoordelen zijn typisch voor een machinebureaucratie.',
    difficulty: 'easy',
    category: 'Toepassing'
  },
  {
    id: 'q6',
    question: 'Welke configuratie past het beste bij een esports team dat zich constant aanpast aan nieuwe games?',
    options: [
      'Machinebureaucratie',
      'Professionele bureaucratie',
      'Divisiestructuur',
      'Adhocratie'
    ],
    correct: 3,
    explanation: 'Adhocratie is flexibel, innovatief en past zich snel aan veranderende omstandigheden aan - perfect voor de dynamische esports wereld.',
    difficulty: 'medium',
    category: 'Toepassing'
  },
  {
    id: 'q7',
    question: 'Wat is het sleutelonderdeel van een professionele bureaucratie?',
    options: [
      'Strategische top',
      'Technostructuur',
      'Operationele kern',
      'Ondersteunende staf'
    ],
    correct: 2,
    explanation: 'In een professionele bureaucratie is de operationele kern (de professionals) het belangrijkste onderdeel omdat zij de kernactiviteiten uitvoeren.',
    difficulty: 'hard',
    category: 'Concepten'
  },
  {
    id: 'q8',
    question: 'Nike heeft divisies voor voetbal, basketbal en running. Welk voordeel heeft dit?',
    options: [
      'Lagere kosten door schaalvoordelen',
      'Meer standaardisatie mogelijk',
      'Snelle reactie op marktvraag per sport',
      'Minder complexe coördinatie'
    ],
    correct: 2,
    explanation: 'Divisiestructuur stelt elke divisie in staat om snel te reageren op specifieke marktbehoeften en trends in hun sporttak.',
    difficulty: 'medium',
    category: 'Analyse'
  },
  {
    id: 'q9',
    question: 'Welke configuratie heeft "wederzijdse aanpassing" als coördinatiemechanisme?',
    options: [
      'Eenvoudige structuur',
      'Machinebureaucratie',
      'Professionele bureaucratie',
      'Adhocratie'
    ],
    correct: 3,
    explanation: 'Adhocratie gebruikt wederzijdse aanpassing omdat teams flexibel moeten samenwerken en zich constant aanpassen aan nieuwe situaties.',
    difficulty: 'hard',
    category: 'Concepten'
  },
  {
    id: 'q10',
    question: 'Een voetbalclub groeit van 500 naar 5000 leden. Welke verandering is waarschijnlijk nodig?',
    options: [
      'Van adhocratie naar eenvoudige structuur',
      'Van eenvoudige structuur naar machinebureaucratie',
      'Van professionele bureaucratie naar divisiestructuur',
      'Van machinebureaucratie naar adhocratie'
    ],
    correct: 1,
    explanation: 'Bij groei wordt directe supervisie onmogelijk en zijn meer formele procedures en standaardisatie nodig - typisch de overgang naar machinebureaucratie.',
    difficulty: 'hard',
    category: 'Analyse'
  }
]

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false))
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [filterDifficulty, setFilterDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all')
  const [showResults, setShowResults] = useState(false)

  const filteredQuestions = filterDifficulty === 'all' 
    ? quizQuestions 
    : quizQuestions.filter(q => q.difficulty === filterDifficulty)

  const currentQ = filteredQuestions[currentQuestion]

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === currentQ.correct) {
      setScore(score + 1)
    }
    
    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)
  }

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false))
    setQuizCompleted(false)
    setShowResults(false)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (showResults) {
    const percentage = Math.round((score / filteredQuestions.length) * 100)
    
    return (
      <div className="p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '📚'}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Quiz Voltooid!
          </h2>
          
          <div className={`text-4xl font-bold mb-6 ${getScoreColor(percentage)}`}>
            {score} / {filteredQuestions.length} ({percentage}%)
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Je Resultaat:</h3>
            
            {percentage >= 80 && (
              <div className="text-green-700">
                <p className="text-lg font-semibold mb-2">🌟 Uitstekend!</p>
                <p>Je beheerst Mintzberg's configuraties zeer goed. Je kunt verschillende organisatiestructuren herkennen en analyseren in de sportwereld.</p>
              </div>
            )}
            
            {percentage >= 60 && percentage < 80 && (
              <div className="text-yellow-700">
                <p className="text-lg font-semibold mb-2">👍 Goed!</p>
                <p>Je hebt een goede basis kennis van Mintzberg's theorie. Bestudeer de voorbeelden nog eens om je begrip te verdiepen.</p>
              </div>
            )}
            
            {percentage < 60 && (
              <div className="text-red-700">
                <p className="text-lg font-semibold mb-2">📚 Meer studie nodig</p>
                <p>Ga terug naar de theorie en voorbeelden om je kennis te verbeteren. Focus vooral op de kenmerken van elke configuratie.</p>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 mr-4"
            >
              🔄 Opnieuw Proberen
            </button>
            
            <button
              onClick={() => setShowResults(false)}
              className="bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              📊 Bekijk Antwoorden
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Interactieve Quiz: Test je Kennis!
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Test je begrip van Mintzberg's configuraties met deze interactieve quiz. 
            Kies je moeilijkheidsgraad en ontdek hoe goed je de theorie kunt toepassen op sportorganisaties.
          </p>
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Kies je niveau:</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'all', label: '🎯 Alle vragen', count: quizQuestions.length },
            { value: 'easy', label: '🟢 Makkelijk', count: quizQuestions.filter(q => q.difficulty === 'easy').length },
            { value: 'medium', label: '🟡 Gemiddeld', count: quizQuestions.filter(q => q.difficulty === 'medium').length },
            { value: 'hard', label: '🔴 Moeilijk', count: quizQuestions.filter(q => q.difficulty === 'hard').length }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setFilterDifficulty(option.value as any)
                resetQuiz()
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filterDifficulty === option.value
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Vraag {currentQuestion + 1} van {filteredQuestions.length}
          </span>
          <span className="text-sm font-medium text-gray-700">
            Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + (showExplanation ? 1 : 0)) / filteredQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentQ.difficulty)}`}>
              {currentQ.difficulty === 'easy' ? '🟢 Makkelijk' : 
               currentQ.difficulty === 'medium' ? '🟡 Gemiddeld' : '🔴 Moeilijk'}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {currentQ.category}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {currentQ.question}
        </h3>

        <div className="space-y-3 mb-6">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                showExplanation
                  ? index === currentQ.correct
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : selectedAnswer === index
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-600'
                  : selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50 text-blue-800'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-semibold ${
                  showExplanation
                    ? index === currentQ.correct
                      ? 'bg-green-500 text-white'
                      : selectedAnswer === index
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                    : selectedAnswer === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {showExplanation && index === currentQ.correct && (
                  <span className="ml-auto text-green-600">✓</span>
                )}
                {showExplanation && selectedAnswer === index && index !== currentQ.correct && (
                  <span className="ml-auto text-red-600">✗</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`p-4 rounded-lg mb-6 ${
            selectedAnswer === currentQ.correct 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center mb-2">
              <span className={`text-lg mr-2 ${
                selectedAnswer === currentQ.correct ? 'text-green-600' : 'text-red-600'
              }`}>
                {selectedAnswer === currentQ.correct ? '✅' : '❌'}
              </span>
              <span className={`font-semibold ${
                selectedAnswer === currentQ.correct ? 'text-green-800' : 'text-red-800'
              }`}>
                {selectedAnswer === currentQ.correct ? 'Correct!' : 'Helaas, dat is niet juist.'}
              </span>
            </div>
            <p className="text-gray-700">{currentQ.explanation}</p>
          </div>
        )}

        {/* Next Button */}
        {showExplanation && (
          <div className="text-center">
            <button
              onClick={nextQuestion}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              {currentQuestion < filteredQuestions.length - 1 ? 'Volgende Vraag →' : 'Bekijk Resultaat 🏆'}
            </button>
          </div>
        )}
      </div>

      {/* Question Overview */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Quiz Voortgang</h4>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {filteredQuestions.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                index < currentQuestion || (index === currentQuestion && showExplanation)
                  ? 'bg-green-500 text-white'
                  : index === currentQuestion
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}