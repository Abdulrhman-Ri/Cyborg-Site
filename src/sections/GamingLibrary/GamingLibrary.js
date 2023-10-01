import './GamingLibrary.css'
import { GamingLibraryCard, SectionHeader, SectionWrapper} from '../../components'

import gamingLibraryData from '../../data/GamingLibraryData'

const GamingLibrary = () => {
    const cards = gamingLibraryData.map(card => {
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} downloaded={card.downloaded}/>
    })

    return (
        <>
            <SectionWrapper>
                <SectionHeader>Gaming Library</SectionHeader>
                <div className='gaming-library-cards'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
  )
}

export default GamingLibrary