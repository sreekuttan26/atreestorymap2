import React from 'react'
import Heading from './Heading'

const NewBegining = () => {
    return (
        <div className='flex flex-col gap-5 p-5 '>
            <Heading text='A New Beginning' />
            <ul className="list-disc px-4  mb-4 space-y-2">
                <li> The Pied Kingfisher has returned to Venkateshpura Lake.</li>
                <li>Watching it hover over the lake before diving to fish gives a sense of hope.</li>
                <li>After restoration, biodiversity assessments showed a mild dip in some species.</li>
                <li>These changes were short-term responses to habitat reformation, and the system soon stabilised.</li>
                <li>Residential areas around the lake have not needed water tankers for over a year, showing the lake is functioning as an aquifer.</li>
                <li>Walkers of all ages and enthusiastic birders now regularly visit the lake.</li>
                <li>The lake has become a safe space for women to sit and relax after work on hot afternoons.</li>
                <li>The water appears clearer, and water quality metrics indicate improvement, though the work is not complete.</li>
                <li>Water quality must remain consistent, especially during summer when receding water can cause dangerously low dissolved oxygen levels.</li>
                <li>Floating islands and newly introduced plants require regular maintenance.</li>
                <li>Preventing illegal drainage into the lake and protecting the fragile historical GTS structure requires constant vigilance.</li>
                <li>The fencing around the restored lake has unfortunately excluded some key stakeholders, such as migrants and pastoralists.</li>
                <li>Restoration is not an endpoint but an ongoing process that needs continuous upkeep and shared responsibility.</li>
            </ul>
        </div >
    )
}

export default NewBegining
