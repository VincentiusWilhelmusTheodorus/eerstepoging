'use client'

import { useState } from 'react'

interface SportOrganization {
  id: string
  name: string
  type: string
  configuration: string
  description: string
  structure: string
  coordination: string
  keyFeatures: string[]
  challenges: string[]
  icon: string
  color: string
}

const sportOrganizations: SportOrganization[] = [
  {
    id: 'local-gym',
    name: 'Lokale Sportschool "FitCorner"',
    type: 'Kleine fitnessonderneming',
    configuration: 'Eenvoudige Structuur',
    description: 'Een kleine sportschool met 200 leden, gerund door eigenaar Mark en 3 part-time trainers.',
    structure: 'Mark (eigenaar) → 3 trainers → leden',
    coordination: 'Mark superviseert alles direct en neemt alle beslissingen',
    keyFeatures: [
      'Persoonlijke aandacht voor elke klant',
      'Flexibele openingstijden',
      'Snelle aanpassingen aan wensen leden',
      'Informele sfeer en communicatie',
      'Mark kent alle leden bij naam'
    ],
    challenges: [
      'Mark is overbelast en kan niet op vakantie',
      'Groei beperkt door capaciteit van Mark',
      'Geen backup als Mark ziek is',
      'Beperkte expertise in specialistische training'
    ],
    icon: '🏋️‍♂️',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'basic-fit',
    name: 'Basic-Fit Nederland',
    type: 'Grote fitnessketens',
    configuration: 'Machinebureaucratie',
    description: 'Gestandaardiseerde fitnessketens met 300+ vestigingen en strikte procedures.',
    structure: 'HQ → Regiomanagers → Vestigingsmanagers → Medewerkers',
    coordination: 'Gedetailleerde handboeken en procedures voor alles',
    keyFeatures: [
      'Identieke inrichting in elke vestiging',
      'Gestandaardiseerde trainingsapparatuur',
      'Uniforme prijsstelling en aanbiedingen',
      'Centrale inkoop en marketing',
      'Efficiënte kostenstructuur'
    ],
    challenges: [
      'Weinig ruimte voor lokale aanpassingen',
      'Trage reactie op lokale behoeften',
      'Medewerkers hebben weinig autonomie',
      'Bureaucratische besluitvorming'
    ],
    icon: '🏢',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'hospital-sports',
    name: 'Sportgeneeskunde Centrum',
    type: 'Medische sportinstelling',
    configuration: 'Professionele Bureaucratie',
    description: 'Gespecialiseerd centrum met sportartsen, fysiotherapeuten en bewegingswetenschappers.',
    structure: 'Directeur + Professionals (artsen, fysio\'s, onderzoekers)',
    coordination: 'Professionele standaarden en collegiale afstemming',
    keyFeatures: [
      'Hoogopgeleide specialisten',
      'Autonomie in behandelmethoden',
      'Evidence-based praktijk',
      'Multidisciplinaire samenwerking',
      'Continue professionele ontwikkeling'
    ],
    challenges: [
      'Moeilijk om professionals te sturen',
      'Hoge personeelskosten',
      'Verschillende visies tussen specialismen',
      'Weerstand tegen verandering'
    ],
    icon: '🏥',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'nike-divisions',
    name: 'Nike International',
    type: 'Multinational sportconcern',
    configuration: 'Divisiestructuur',
    description: 'Wereldwijde organisatie met divisies per sport (voetbal, basketbal, running, etc.).',
    structure: 'Nike HQ → Sport Divisies → Regionale kantoren → Lokale teams',
    coordination: 'Resultaatverantwoordelijkheid per divisie',
    keyFeatures: [
      'Specialisatie per sporttak',
      'Lokale marktaanpassing mogelijk',
      'Duidelijke P&L verantwoordelijkheid',
      'Ondernemerschap binnen divisies',
      'Snelle reactie op marktontwikkelingen'
    ],
    challenges: [
      'Duplicatie van functies (HR, Finance)',
      'Interne concurrentie om resources',
      'Complexe coördinatie tussen divisies',
      'Mogelijk verlies van synergie'
    ],
    icon: '👟',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'esports-team',
    name: 'Team Liquid Esports',
    type: 'Professioneel esports team',
    configuration: 'Adhocratie',
    description: 'Flexibel team dat zich aanpast aan nieuwe games en strategieën.',
    structure: 'Projectteams per game + ondersteunende specialisten',
    coordination: 'Continue afstemming en aanpassing',
    keyFeatures: [
      'Flexibele teamsamenstelling',
      'Snelle aanpassing aan nieuwe games',
      'Innovatieve trainingsmethoden',
      'Horizontale communicatie',
      'Experimenteren met nieuwe strategieën'
    ],
    challenges: [
      'Onduidelijke hiërarchie',
      'Hoge kosten door specialisten',
      'Instabiliteit in teamsamenstelling',
      'Moeilijk te voorspellen resultaten'
    ],
    icon: '🎮',
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'football-club',
    name: 'FC Utrecht',
    type: 'Professionele voetbalclub',
    configuration: 'Hybride (Divisie + Professioneel)',
    description: 'Voetbalclub met verschillende afdelingen: eerste elftal, jeugd, commercie, facilitair.',
    structure: 'Directie → Afdelingen (Voetbal, Commercie, Facilitair) → Teams',
    coordination: 'Mix van resultaatverantwoordelijkheid en professionele standaarden',
    keyFeatures: [
      'Voetbalafdeling werkt als professionele bureaucratie',
      'Commerciële afdeling als divisiestructuur',
      'Jeugdopleiding met eigen autonomie',
      'Facilitaire diensten gestandaardiseerd'
    ],
    challenges: [
      'Balans tussen sportieve en commerciële doelen',
      'Verschillende culturen binnen organisatie',
      'Seizoensgebonden druk en resultaten',
      'Complexe stakeholder management'
    ],
    icon: '⚽',
    color: 'from-indigo-400 to-indigo-600'
  }
]

export default function SportExamples() {
  const [selectedOrg, setSelectedOrg] = useState<SportOrganization>(sportOrganizations[0])
  const [showAnalysis, setShowAnalysis] = useState(false)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Mintzberg in de Sportwereld
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Ontdek hoe verschillende sportorganisaties de configuraties van Mintzberg toepassen. 
            Van kleine lokale sportscholen tot grote internationale concerns - elk heeft zijn eigen structuur en uitdagingen.
          </p>
        </div>
      </div>

      {/* Organization Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {sportOrganizations.map((org) => (
          <div
            key={org.id}
            onClick={() => setSelectedOrg(org)}
            className={`cursor-pointer transform transition-all duration-200 hover:scale-105 ${
              selectedOrg.id === org.id ? 'ring-4 ring-blue-300' : ''
            }`}
          >
            <div className={`bg-gradient-to-br ${org.color} rounded-xl p-6 text-white shadow-lg h-full`}>
              <div className="text-4xl mb-3">{org.icon}</div>
              <h3 className="text-lg font-bold mb-2">{org.name}</h3>
              <p className="text-sm opacity-90 mb-3">{org.type}</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <span className="text-xs font-semibold">Configuratie:</span>
                <br />
                <span className="text-sm">{org.configuration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Analysis */}
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className={`bg-gradient-to-br ${selectedOrg.color} rounded-full p-4 mr-4`}>
            <span className="text-3xl text-white">{selectedOrg.icon}</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{selectedOrg.name}</h3>
            <p className="text-blue-600 font-semibold">{selectedOrg.configuration}</p>
            <p className="text-gray-600">{selectedOrg.description}</p>
          </div>
        </div>

        {/* Structure & Coordination */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">🏗️</span>
              </span>
              Organisatiestructuur
            </h4>
            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{selectedOrg.structure}</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">🔗</span>
              </span>
              Coördinatiemechanisme
            </h4>
            <p className="text-gray-700 bg-green-50 p-4 rounded-lg">{selectedOrg.coordination}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">⭐</span>
            </span>
            Belangrijkste Kenmerken
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedOrg.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">⚠️</span>
            </span>
            Uitdagingen & Knelpunten
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedOrg.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">!</span>
                <span className="text-gray-700">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analysis Toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAnalysis(!showAnalysis)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
        >
          {showAnalysis ? 'Verberg Analyse' : 'Toon Diepgaande Analyse'}
        </button>
      </div>

      {/* Deep Analysis */}
      {showAnalysis && (
        <div className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Waarom past {selectedOrg.configuration} bij {selectedOrg.name}?
          </h3>
          
          <div className="space-y-6">
            {selectedOrg.id === 'local-gym' && (
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-green-700 mb-3">Analyse: Eenvoudige Structuur</h4>
                <p className="text-gray-700 mb-4">
                  FitCorner is een perfect voorbeeld van een eenvoudige structuur omdat:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Kleine schaal:</strong> Met 200 leden is directe supervisie nog mogelijk</li>
                  <li>• <strong>Flexibiliteit:</strong> Mark kan snel beslissingen nemen zonder bureaucratie</li>
                  <li>• <strong>Persoonlijke touch:</strong> Klanten waarderen de persoonlijke aandacht</li>
                  <li>• <strong>Lage kosten:</strong> Geen dure managementlagen of procedures</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Groeidilemma:</strong> Als FitCorner groeit naar 500+ leden, wordt deze structuur problematisch. 
                  Mark zou dan moeten evolueren naar een machinebureaucratie met meer formalisatie.
                </p>
              </div>
            )}

            {selectedOrg.id === 'basic-fit' && (
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-700 mb-3">Analyse: Machinebureaucratie</h4>
                <p className="text-gray-700 mb-4">
                  Basic-Fit gebruikt machinebureaucratie omdat:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Schaalvoordelen:</strong> Standaardisatie verlaagt kosten per lid drastisch</li>
                  <li>• <strong>Kwaliteitscontrole:</strong> Elke vestiging biedt dezelfde ervaring</li>
                  <li>• <strong>Efficiëntie:</strong> Gestroomlijnde processen voor alles van schoonmaak tot marketing</li>
                  <li>• <strong>Voorspelbaarheid:</strong> Investeerders weten wat ze kunnen verwachten</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Innovatie-uitdaging:</strong> De rigide structuur maakt het moeilijk om snel te reageren op 
                  nieuwe fitnesstrends zoals boutique studios of virtual reality training.
                </p>
              </div>
            )}

            {selectedOrg.id === 'hospital-sports' && (
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-700 mb-3">Analyse: Professionele Bureaucratie</h4>
                <p className="text-gray-700 mb-4">
                  Het Sportgeneeskunde Centrum werkt als professionele bureaucratie omdat:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Expertise vereist:</strong> Complexe medische beslissingen kunnen niet gestandaardiseerd</li>
                  <li>• <strong>Professionele autonomie:</strong> Artsen moeten vrijheid hebben in behandelkeuzes</li>
                  <li>• <strong>Kwaliteit:</strong> Professionele standaarden waarborgen hoge kwaliteit zorg</li>
                  <li>• <strong>Innovatie:</strong> Professionals brengen nieuwe kennis en technieken in</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Coördinatie-uitdaging:</strong> Verschillende specialisten moeten samenwerken, maar hebben 
                  elk hun eigen professionele visie. Multidisciplinaire overleggen zijn essentieel.
                </p>
              </div>
            )}

            {selectedOrg.id === 'nike-divisions' && (
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-orange-700 mb-3">Analyse: Divisiestructuur</h4>
                <p className="text-gray-700 mb-4">
                  Nike gebruikt divisiestructuur omdat:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Marktfocus:</strong> Elke sport heeft eigen doelgroep en behoeften</li>
                  <li>• <strong>Snelheid:</strong> Divisies kunnen snel reageren op trends in hun sport</li>
                  <li>• <strong>Ondernemerschap:</strong> Divisiemanagers denken als ondernemers</li>
                  <li>• <strong>Risicospreiding:</strong> Als één sport tegenvalt, compenseren anderen</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Synergie-uitdaging:</strong> Hoe behoud je de kracht van het Nike merk terwijl divisies 
                  autonoom opereren? Cross-selling tussen divisies kan lastig zijn.
                </p>
              </div>
            )}

            {selectedOrg.id === 'esports-team' && (
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-red-700 mb-3">Analyse: Adhocratie</h4>
                <p className="text-gray-700 mb-4">
                  Team Liquid werkt als adhocratie omdat:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Snelle verandering:</strong> Nieuwe games en patches vereisen constante aanpassing</li>
                  <li>• <strong>Innovatie:</strong> Competitief voordeel komt van nieuwe strategieën</li>
                  <li>• <strong>Flexibiliteit:</strong> Teamsamenstelling moet kunnen wijzigen per game</li>
                  <li>• <strong>Creativiteit:</strong> Spelers en coaches moeten out-of-the-box denken</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Stabiliteit-uitdaging:</strong> Hoe behoud je teamcohesie en merkidentiteit in een 
                  constant veranderende omgeving? Langetermijnplanning is bijna onmogelijk.
                </p>
              </div>
            )}

            {selectedOrg.id === 'football-club' && (
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-indigo-700 mb-3">Analyse: Hybride Structuur</h4>
                <p className="text-gray-700 mb-4">
                  FC Utrecht combineert meerdere configuraties omdat:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Voetbal:</strong> Professionele bureaucratie - trainers en spelers hebben autonomie</li>
                  <li>• <strong>Commercie:</strong> Divisiestructuur - verschillende inkomstenbronnen</li>
                  <li>• <strong>Facilitair:</strong> Machinebureaucratie - gestandaardiseerde processen</li>
                  <li>• <strong>Jeugd:</strong> Mix van professioneel en eenvoudig</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Integratie-uitdaging:</strong> Hoe zorg je dat verschillende organisatieculturen 
                  samenwerken aan hetzelfde doel? Sportieve en commerciële belangen botsen regelmatig.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}