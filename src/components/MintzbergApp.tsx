'use client'

import { useState } from 'react'
import MintzbergTheory from './MintzbergTheory'
import InteractiveQuiz from './InteractiveQuiz'
import SportExamples from './SportExamples'
import AIAssistant from './AIAssistant'

type ActiveTab = 'theory' | 'examples' | 'quiz' | 'ai'

export default function MintzbergApp() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('theory')

  const tabs = [
    { id: 'theory' as ActiveTab, label: '📚 Theorie', icon: '🎓' },
    { id: 'examples' as ActiveTab, label: '⚽ Sport Voorbeelden', icon: '🏆' },
    { id: 'quiz' as ActiveTab, label: '🧠 Quiz', icon: '✅' },
    { id: 'ai' as ActiveTab, label: '🤖 AI Assistent', icon: '💡' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
          <span className="text-3xl text-white">🏢</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Mintzberg's Organisatie Configuraties
        </h1>
        
        <p className="text-xl text-blue-700 font-medium mb-2">
          Voor HBO Sportkunde - 3e Jaar
        </p>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Leer hoe verschillende organisatiestructuren werken en hoe je ze kunt herkennen 
          in de sportwereld. Van voetbalclubs tot fitnessketens!
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 bg-white rounded-2xl shadow-lg p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {activeTab === 'theory' && <MintzbergTheory />}
        {activeTab === 'examples' && <SportExamples />}
        {activeTab === 'quiz' && <InteractiveQuiz />}
        {activeTab === 'ai' && <AIAssistant />}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500">
        <p className="text-sm">
          💜 Gemaakt voor HBO Sportkunde studenten • Powered by AI & Next.js
        </p>
      </div>
    </div>
  )
}