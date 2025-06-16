'use client'

import { useState } from 'react'

interface Configuration {
  id: string
  name: string
  icon: string
  description: string
  characteristics: string[]
  coordination: string
  keyPart: string
  structure: string
  sportExample: string
  advantages: string[]
  disadvantages: string[]
  color: string
}

const configurations: Configuration[] = [
  {
    id: 'simple',
    name: 'Eenvoudige Structuur',
    icon: '👤',
    description: 'Een kleine, flexibele organisatie met directe supervisie door de eigenaar/manager.',
    characteristics: [
      'Kleine organisatie (meestal < 50 mensen)',
      'Weinig formalisatie en specialisatie',
      'Directe communicatie',
      'Snelle besluitvorming',
      'Flexibel en aanpassingsgericht'
    ],
    coordination: 'Directe supervisie',
    keyPart: 'Strategische top',
    structure: 'Plat, weinig hiërarchie',
    sportExample: 'Lokale sportschool, kleine voetbalvereniging',
    advantages: [
      'Snelle reactie op veranderingen',
      'Persoonlijke aandacht voor klanten',
      'Lage overhead kosten',
      'Flexibiliteit in dienstverlening'
    ],
    disadvantages: [
      'Afhankelijk van één persoon',
      'Beperkte groeimogelijkheden',
      'Risico van overbelasting leider',
      'Weinig specialisatie mogelijk'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'machine',
    name: 'Machinebureaucratie',
    icon: '⚙️',
    description: 'Een gestandaardiseerde organisatie met duidelijke procedures en hiërarchie.',
    characteristics: [
      'Hoge mate van standaardisatie',
      'Duidelijke procedures en regels',
      'Functionele specialisatie',
      'Verticale en horizontale differentiatie',
      'Formele communicatie'
    ],
    coordination: 'Standaardisatie van werkprocessen',
    keyPart: 'Technostructuur',
    structure: 'Hoge, smalle hiërarchie',
    sportExample: 'Grote fitnessketens (Basic-Fit), professionele sportbonden',
    advantages: [
      'Efficiënte massaproductie',
      'Voorspelbare kwaliteit',
      'Lage kosten per eenheid',
      'Duidelijke verantwoordelijkheden'
    ],
    disadvantages: [
      'Weinig flexibiliteit',
      'Trage aanpassing aan veranderingen',
      'Demotivatie werknemers',
      'Bureaucratische vertragingen'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'professional',
    name: 'Professionele Bureaucratie',
    icon: '🎓',
    description: 'Organisatie van hoogopgeleide professionals met veel autonomie.',
    characteristics: [
      'Hoogopgeleide professionals',
      'Veel autonomie voor specialisten',
      'Horizontale differentiatie',
      'Weinig hiërarchie tussen professionals',
      'Collegiale besluitvorming'
    ],
    coordination: 'Standaardisatie van vaardigheden',
    keyPart: 'Operationele kern',
    structure: 'Plat, veel autonomie',
    sportExample: 'Ziekenhuizen met sportgeneeskunde, universiteiten met sportstudies',
    advantages: [
      'Hoge kwaliteit dienstverlening',
      'Gemotiveerde professionals',
      'Flexibiliteit in aanpak',
      'Innovatie door expertise'
    ],
    disadvantages: [
      'Moeilijk te coördineren',
      'Hoge kosten',
      'Weerstand tegen verandering',
      'Mogelijk gebrek aan samenwerking'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'divisional',
    name: 'Divisiestructuur',
    icon: '🏢',
    description: 'Organisatie opgedeeld in semi-autonome divisies per product/markt.',
    characteristics: [
      'Autonome divisies',
      'Decentrale besluitvorming',
      'Resultaatverantwoordelijkheid',
      'Duplicatie van functies',
      'Markt- of productgerichte indeling'
    ],
    coordination: 'Standaardisatie van output',
    keyPart: 'Middenlijn',
    structure: 'Meerdere semi-autonome eenheden',
    sportExample: 'Grote sportconcerns (Nike divisies), multi-sport organisaties',
    advantages: [
      'Snelle reactie op marktvraag',
      'Duidelijke verantwoordelijkheden',
      'Ondernemerschap stimuleren',
      'Risicospreiding'
    ],
    disadvantages: [
      'Duplicatie van kosten',
      'Mogelijk gebrek aan synergie',
      'Complexe coördinatie',
      'Interne concurrentie'
    ],
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'adhocracy',
    name: 'Adhocratie',
    icon: '🚀',
    description: 'Flexibele, innovatieve organisatie die zich aanpast aan complexe omgevingen.',
    characteristics: [
      'Flexibele structuur',
      'Projectteams',
      'Weinig formalisatie',
      'Horizontale communicatie',
      'Innovatie en creativiteit'
    ],
    coordination: 'Wederzijdse aanpassing',
    keyPart: 'Ondersteunende staf',
    structure: 'Organisch, netwerkachtig',
    sportExample: 'Esports teams, innovatieve sporttechnologie bedrijven',
    advantages: [
      'Hoge innovatiekracht',
      'Snelle aanpassing',
      'Gemotiveerde werknemers',
      'Creativiteit en flexibiliteit'
    ],
    disadvantages: [
      'Onduidelijke verantwoordelijkheden',
      'Hoge kosten',
      'Instabiliteit',
      'Moeilijk te managen'
    ],
    color: 'from-red-400 to-red-600'
  }
]

export default function MintzbergTheory() {
  const [selectedConfig, setSelectedConfig] = useState<Configuration>(configurations[0])
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div className="p-8">
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          De 5 Organisatie Configuraties van Mintzberg
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            <strong>Henry Mintzberg</strong> onderscheidt 5 verschillende organisatiestructuren. 
            Elke configuratie heeft zijn eigen kenmerken, voordelen en nadelen. 
            In de sportwereld zie je alle vormen terug - van kleine lokale clubs tot grote internationale organisaties.
          </p>
        </div>
      </div>

      {/* Configuration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {configurations.map((config) => (
          <div
            key={config.id}
            onClick={() => setSelectedConfig(config)}
            className={`cursor-pointer transform transition-all duration-200 hover:scale-105 ${
              selectedConfig.id === config.id ? 'ring-4 ring-blue-300' : ''
            }`}
          >
            <div className={`bg-gradient-to-br ${config.color} rounded-xl p-6 text-white shadow-lg`}>
              <div className="text-4xl mb-3">{config.icon}</div>
              <h3 className="text-xl font-bold mb-2">{config.name}</h3>
              <p className="text-sm opacity-90">{config.description}</p>
              <div className="mt-4 text-xs opacity-75">
                <strong>Sport voorbeeld:</strong> {config.sportExample}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed View */}
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className={`bg-gradient-to-br ${selectedConfig.color} rounded-full p-4 mr-4`}>
            <span className="text-3xl text-white">{selectedConfig.icon}</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{selectedConfig.name}</h3>
            <p className="text-gray-600">{selectedConfig.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Characteristics */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">📋</span>
              </span>
              Kenmerken
            </h4>
            <ul className="space-y-2">
              {selectedConfig.characteristics.map((char, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Information */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">🔗 Coördinatiemechanisme</h5>
              <p className="text-gray-700">{selectedConfig.coordination}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">🎯 Sleutelonderdeel</h5>
              <p className="text-gray-700">{selectedConfig.keyPart}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">🏗️ Structuur</h5>
              <p className="text-gray-700">{selectedConfig.structure}</p>
            </div>
          </div>
        </div>

        {/* Advantages & Disadvantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Voordelen
            </h4>
            <ul className="space-y-2">
              {selectedConfig.advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">+</span>
                  <span className="text-green-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
              <span className="text-red-600 mr-2">⚠️</span>
              Nadelen
            </h4>
            <ul className="space-y-2">
              {selectedConfig.disadvantages.map((disadvantage, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">-</span>
                  <span className="text-red-700">{disadvantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sport Example Detail */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">⚽</span>
            Sport Voorbeeld: {selectedConfig.sportExample}
          </h4>
          <p className="text-blue-700">
            {selectedConfig.id === 'simple' && 
              "Een lokale sportschool wordt vaak gerund door de eigenaar die alle belangrijke beslissingen neemt. Er zijn weinig formele procedures en de eigenaar heeft direct contact met zowel klanten als personeel."
            }
            {selectedConfig.id === 'machine' && 
              "Basic-Fit heeft gestandaardiseerde procedures voor alles: van het openen van nieuwe vestigingen tot de dagelijkse schoonmaak. Elk filiaal werkt volgens dezelfde regels en processen."
            }
            {selectedConfig.id === 'professional' && 
              "In een ziekenhuis met sportgeneeskunde werken artsen, fysiotherapeuten en andere specialisten relatief autonoom. Ze hebben veel vrijheid in hun behandelmethoden binnen professionele standaarden."
            }
            {selectedConfig.id === 'divisional' && 
              "Nike heeft verschillende divisies (voetbal, basketbal, running, etc.) die elk hun eigen doelgroep bedienen en relatief zelfstandig opereren binnen het grotere concern."
            }
            {selectedConfig.id === 'adhocracy' && 
              "Esports teams passen zich constant aan nieuwe games en strategieën aan. Ze werken in flexibele projectteams en innoveren continu om competitief te blijven."
            }
          </p>
        </div>
      </div>

      {/* Comparison Toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
        >
          {showComparison ? 'Verberg Vergelijking' : 'Toon Vergelijkingstabel'}
        </button>
      </div>

      {/* Comparison Table */}
      {showComparison && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Configuratie</th>
                <th className="px-6 py-4 text-left">Coördinatie</th>
                <th className="px-6 py-4 text-left">Sleutelonderdeel</th>
                <th className="px-6 py-4 text-left">Sport Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              {configurations.map((config, index) => (
                <tr key={config.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{config.icon}</span>
                      <span className="font-semibold">{config.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{config.coordination}</td>
                  <td className="px-6 py-4 text-gray-700">{config.keyPart}</td>
                  <td className="px-6 py-4 text-gray-700">{config.sportExample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}