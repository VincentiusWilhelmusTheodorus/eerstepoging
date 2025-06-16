'use client'

import { useState } from 'react'
import TestChatBot from './TestChatBot'

export default function AIAssistant() {
  const [showFullChat, setShowFullChat] = useState(false)

  const exampleQuestions = [
    {
      icon: '🤔',
      question: 'Welke configuratie past bij mijn sportorganisatie?',
      description: 'Upload informatie over je organisatie en krijg advies'
    },
    {
      icon: '📊',
      question: 'Vergelijk twee verschillende sportorganisaties',
      description: 'Analyseer verschillen in organisatiestructuur'
    },
    {
      icon: '🔄',
      question: 'Hoe kan mijn organisatie veranderen van structuur?',
      description: 'Krijg advies over organisatieverandering'
    },
    {
      icon: '💡',
      question: 'Geef voorbeelden van Mintzberg in de sport',
      description: 'Ontdek meer praktijkvoorbeelden'
    },
    {
      icon: '📚',
      question: 'Leg een concept uit met een sportvoorbeeld',
      description: 'Vraag uitleg over specifieke theorieonderdelen'
    },
    {
      icon: '🎯',
      question: 'Help me met mijn opdracht over organisatiestructuren',
      description: 'Krijg begeleiding bij je studie'
    }
  ]

  if (showFullChat) {
    return (
      <div className="p-8">
        <div className="mb-6">
          <button
            onClick={() => setShowFullChat(false)}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Terug naar voorbeelden
          </button>
        </div>
        <TestChatBot />
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          AI Assistent voor Mintzberg
        </h2>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Gebruik onze AI assistent om dieper in te gaan op Mintzberg's configuraties. 
            Stel vragen, upload documenten over je eigen organisatie, of krijg hulp bij je opdrachten.
          </p>
        </div>
      </div>

      {/* Quick Start Examples */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          💡 Wat kun je vragen?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleQuestions.map((example, index) => (
            <div
              key={index}
              onClick={() => setShowFullChat(true)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-100 hover:border-purple-300"
            >
              <div className="text-3xl mb-4">{example.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {example.question}
              </h4>
              <p className="text-gray-600 text-sm">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 rounded-xl p-8 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          🚀 AI Assistent Mogelijkheden
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-purple-700 mb-4 flex items-center">
              <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">📄</span>
              </span>
              Document Analyse
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Upload organisatieschema's en krijg analyse
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Analyseer jaarverslagen van sportorganisaties
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Vergelijk verschillende organisatiestructuren
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">🎓</span>
              </span>
              Studie Ondersteuning
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Hulp bij opdrachten en essays
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Uitleg van complexe concepten
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Praktijkvoorbeelden uit de sportwereld
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button
          onClick={() => setShowFullChat(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          🤖 Start Chat met AI Assistent
        </button>
        
        <p className="text-gray-600 text-sm mt-4">
          💡 Tip: Je kunt afbeeldingen, documenten en audio uploaden voor analyse!
        </p>
      </div>

      {/* Example Conversations */}
      <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          💬 Voorbeeld Gesprekken
        </h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="bg-blue-50 rounded-lg p-4 mb-3">
              <p className="text-blue-800 font-medium">Student:</p>
              <p className="text-blue-700">"Ik werk bij een lokale voetbalclub met 500 leden. We groeien snel maar hebben veel chaos. Welke organisatiestructuur past bij ons?"</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-800 font-medium">AI Assistent:</p>
              <p className="text-gray-700">"Jullie club bevindt zich in een transitiefase! Met 500 leden groei je uit de 'eenvoudige structuur' en heb je meer formalisatie nodig. Ik raad aan om elementen van machinebureaucratie te introduceren voor standaardprocessen, maar behoud flexibiliteit voor de sportieve kant..."</p>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <div className="bg-purple-50 rounded-lg p-4 mb-3">
              <p className="text-purple-800 font-medium">Student:</p>
              <p className="text-purple-700">"Kun je het verschil uitleggen tussen een professionele bureaucratie en een machinebureaucratie met sportvoorbeelden?"</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-800 font-medium">AI Assistent:</p>
              <p className="text-gray-700">"Zeker! Een machinebureaucratie zoals Basic-Fit heeft gestandaardiseerde processen - elke vestiging is identiek. Een professionele bureaucratie zoals een sportmedisch centrum geeft professionals (artsen, fysio's) autonomie in hun behandelmethoden..."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}