import { useState } from 'react';
import './App.css'
import HeaderPart from "./components/HeaderPart";
import Footer from './components/Footer';

const agents: string[] = [
  'UI Agent',
  'Service Agent',
  'Data Agent',
  'Security Agent',
  'Monitoring Agent',
  'Utility Agent',
];

interface OpenSections {
  caching: boolean;
  devopsTools: boolean;
  libraryRequirements: boolean;
}

const TechStackComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<OpenSections>({
    caching: false,
    devopsTools: false,
    libraryRequirements: false,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const toggleSection = (section: keyof OpenSections): void => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const filteredAgents: string[] = agents.filter((agent) =>
    agent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='container'>
        <HeaderPart />

        {/* mid part */}
        <div className='containerMid'>
          <h2 className='browseStack'>Browse all 60+ tech stack</h2>
          <input
            className='searchBar'
            type="text"
            placeholder="Search for your services"
            value={searchTerm}
            onChange={handleSearch}
          />

          <div className='agentContainer'>
            {filteredAgents.map((agent) => (
              <button
                className='agentButton'
                key={agent}
                onClick={() => setSelectedAgent(agent)}
                style={{
                  backgroundColor: selectedAgent === agent ? '#6200EE' : '#6a6aff',
                }}
              >
                {agent}
              </button>
            ))}
          </div>

          <div>
            <div>
              <button className='sectionButton' onClick={() => toggleSection('caching')}>
                Caching {openSections.caching ? '-' : '+'}
              </button>
              {openSections.caching && (
                <div className='sectionContent'>Details about caching...</div>
              )}
            </div>
            <div>
              <button className='sectionButton' onClick={() => toggleSection('devopsTools')}>
                DevOps Tools {openSections.devopsTools ? '-' : '+'}
              </button>
              {openSections.devopsTools && (
                <div className='sectionContent'>Details about DevOps tools...</div>
              )}
            </div>
            <div>
              <button className='sectionButton' onClick={() => toggleSection('libraryRequirements')}>
                Library Requirements {openSections.libraryRequirements ? '-' : '+'}
              </button>
              {openSections.libraryRequirements && (
                <div className='sectionContent'>Details about library requirements...</div>
              )}
            </div>
          </div>
        </div>

       <Footer />
      </div>
    </>

  );
};

export default TechStackComponent;

