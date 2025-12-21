'use client';
import { FaMapMarkerAlt } from "react-icons/fa";


import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
} from 'react-simple-maps';
import { useEffect, useState } from 'react';
import MapLabel from './MapLabel';
import Bodytext from './Bodytext';
import Heading from "./Heading";

type Position = {
    coordinates: [number, number];
    zoom: number;
};

export default function StoryWorldMap() {

    const geoUrl =
        'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

    /* Story content mapped by ISO numeric country code */

    const scrollWithOffset = (id: string, offset: number = 600) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    };

    const [indiatab, setIndiatab] = useState("ind1");

    const Manageindiatab = (tab: string) => {
        setIndiatab(tab);
        //scrollWithOffset("#" + tab);
    }







    const countryData: Record<string, { countryName: string; coordinates: [number, number]; zoom: number; story: React.ReactNode; img?: string; font_color: string, font_size: number, country_code?: string }> = {



        '480': {
            countryName: 'Mauritius',
            country_code: '480',
            coordinates: [57.5522, -20.3484],
            zoom: 6,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">Coral reef restoration for climate resilience and livelihoods </h1>
                <p className="pt-4 text-xl">Small Island Developing States (SIDS) in the Indian Ocean with economies heavily dependent on tourism, fisheries, and coastal ecosystems. Tourism alone accounts for over 30 % of GDP in Mauritius and around 46 % in Seychelles, with reefs playing a central role in tourist appeal and coastal protection.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>Mauritius and the Republic of Seychelles</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/mauritius_1.jpg"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Climate change, ocean warming, pollution, overfishing and other pressures have caused severe coral reef degradation across the region, including up to 70 % loss of live coral cover in Mauritius over past decades and 50–90 % declines in Seychelles reefs. These losses weaken natural coastal defence systems, fisheries productivity and food security, and threaten tourism revenue and livelihoods.
                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                The project “Restoring marine ecosystem services by rehabilitating coral reefs to meet a changing climate future”, supported by the United Nations Development Programme with financing from the Adaptation Fund, aims to restore degraded coral reef ecosystems as a climate adaptation strategy.
                            </li>
                            <li>
                                Activities include establishing coral farming and ocean- and land-based nurseries, propagating both asexual coral fragments and heat-resilient coral strains, and actively transplanting nursery-raised corals onto degraded reef sites.
                            </li>
                            <li>
                                Reef restoration is being implemented across multiple marine protected areas, including Blue Bay Marine Park in Mauritius, Rodrigues, and marine national parks in Seychelles.
                            </li>

                        </ul>
                    </div>

                    <img
                        src="/world/mauritius_2.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Ecosystem-based adaptation using nature-based restoration to strengthen reef resilience and associated ecosystem services.
                        </li>
                        <li>
                            Community and stakeholder partnerships involving government agencies, research institutions, NGOs, and private actors to ensure co-design, capacity building, and long-term stewardship.
                        </li>
                        <li>
                            Scientific identification and propagation of heat-tolerant coral strains to increase future survival under climate stress.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Reef restoration enhanced multiple ecosystem functions, including coastal protection, nursery habitat, and fisheries support, aligning ecological recovery with economic and climate resilience goals.
                        </li>
                        <li>
                            Strong partnerships and capacity building helped sustain restoration beyond initial project interventions.
                        </li>
                        <li>
                            Application of scientific approaches, such as heat-resilient coral selection, ensured restoration was adaptation-focused rather than purely aesthetic.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes (targets &amp; progress)</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Restoration of at least 3.2 hectares of reef in Mauritius, 2.5 hectares in Seychelles, and degraded reef areas in Rodrigues using farmed corals.
                        </li>
                        <li>
                            Establishment of coral nurseries and propagation facilities to support ongoing reef regeneration.
                        </li>
                        <li>
                            Increased fish density, species diversity, and live coral cover at targeted restoration sites.
                        </li>
                        <li>
                            Improved livelihoods for approximately 800 people through restoration activities and enhanced ecosystem services.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Demonstrates how coral reef restoration can be scaled in island contexts as an effective adaptation strategy to rising temperatures and sea-level change.
                        </li>
                        <li>
                            Provides a replicable model for other small island and coastal nations where tourism, food security, and climate risks intersect.
                        </li>
                        <li>
                            By integrating restoration, science, and community engagement, the project strengthens both ecosystem resilience and socio-economic stability in the face of climate change.
                        </li>
                    </ul>
                </div>






            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#000'
        },

        '598': {
            countryName: 'Papua New Guinea',
            country_code: '598',
            coordinates: [143.9555, -6.3149],
            zoom: 4.2,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">Mangrove restoration as livelihood and climate opportunity </h1>
                <p className="pt-4 text-xl">A Global South island nation with some of the world’s most intact coastal ecosystems, where mangrove forests play a critical role in food security, coastal protection, and local economies.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>Coastal Papua New Guinea, including the Bootless Bay area near Port Moresby, Papua New Guine</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/papua_1.jpg"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Coastal development, mangrove clearing, and climate related pressures weakened natural coastal buffers, reduced fish nursery habitats, and limited livelihood options for coastal communities, particularly women.


                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Community-based mangrove restoration initiatives supported by The Nature Conservancy focused on restoring degraded mangrove forests while strengthening local livelihoods.
                            </li>
                            <li>
                                Women-led groups, including Mangoro Market Meri, established nurseries, raised mangrove seedlings, and led planting and monitoring activities.
                            </li>
                            <li>
                                Restoration efforts were linked to sustainable harvesting of fish and crabs, improving food security and income opportunities.
                            </li>

                        </ul>
                    </div>

                    <img
                        src="/world/papua_3.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Community- and gender-centred restoration, recognising women as key stewards of coastal ecosystems.
                        </li>
                        <li>
                            Integration of nursery-based planting and natural regeneration, guided by local ecological knowledge.
                        </li>
                        <li>
                            Linking ecosystem restoration to economic opportunity, including access to markets and potential future carbon finance.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Direct livelihood benefits from healthier mangroves reinforced local ownership and long-term stewardship.
                        </li>
                        <li>
                            Women’s leadership strengthened social cohesion and continuity of restoration efforts.
                        </li>
                        <li>
                            Mangroves delivered multiple co-benefits, including fisheries productivity, coastal protection, and climate resilience.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Regeneration of degraded mangrove stands along vulnerable coastlines.
                        </li>
                        <li>
                            Improved fish and crab availability, supporting household nutrition and income.
                        </li>
                        <li>
                            Strengthened women’s participation and leadership in conservation and local economies.
                        </li>
                        <li>
                            Increased awareness of mangroves as economic and climate assets rather than wastelands.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Demonstrates how mangrove restoration can simultaneously address livelihoods, gender equity, and climate adaptation in the Global South.
                        </li>
                        <li>
                            Offers a transferable model for community-led, nature-based coastal solutions across Pacific Island nations and other tropical coastal regions.
                        </li>
                    </ul>
                </div>






            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#000'
        },


        '144': {
            countryName: 'Sri Lanka',
            country_code: '144',
            coordinates: [80.7718, 7.8731],
            zoom: 4.8,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">Mangrove regeneration for coastal resilience </h1>
                <p className="pt-4 text-xl">historically rich in mangrove forests that protect coastlines, provide nursery habitat for marine life, and support local livelihoods. UNEP - UN Environment Programme.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>Coastal zones, Sri Lanka</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/srilanka_2.jpg"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Mangrove forests had been severely degraded by shrimp farming, salt pans, pollution, and land conversion, contributing to weakened natural coastal protection, reduced biodiversity, and vulnerability to extreme weather. Parts of the coastline were especially exposed during the 2004 Indian Ocean tsunami, when about one-third of mangroves had been lost. UNEP - UN Environment Programme.


                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Sri Lanka shifted from large-scale sapling planting with low survival rates to nurturing natural regeneration and improving ecological conditions for mangroves to thrive.
                            </li>
                            <li>
                                In 2015, all remaining mangrove forests were legally protected, alongside the launch of a national restoration programme guided by scientific assessments of soil and water conditions and supported by an expert committee.
                            </li>
                            <li>
                                Restoration activities were implemented across multiple coastal districts, focusing on suitable site selection, removal of growth barriers, and community involvement in planting, monitoring, and long-term stewardship.
                            </li>
                            <li>
                                The initiative was recognised as one of the UN’s 2024 World Restoration Flagships, unlocking technical and financial support under the UN Decade on Ecosystem Restoration.
                            </li>

                        </ul>
                    </div>

                    <img
                        src="/world/srilanka_1.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Science-led and policy-backed ecosystem restoration focused on ecological conditions, species suitability, and long-term viability.
                        </li>
                        <li>
                            Strong community engagement and stewardship in planting, monitoring, and governance.
                        </li>
                        <li>
                            National policy frameworks and expert guidance to ensure sustained protection, recovery, and adaptive management.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Shifting from simple planting to enabling natural regeneration significantly improved mangrove survival and forest recovery.
                        </li>
                        <li>
                            Legal protection of existing mangroves created a strong foundation for long-term restoration success.
                        </li>
                        <li>
                            Scientific site selection and water quality assessment ensured better matching of species to sites, increasing ecological effectiveness.
                        </li>
                        <li>
                            Community involvement linked restoration with livelihoods, coastal protection, and ecosystem services.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Since 2015, approximately 500 hectares of mangroves have been restored, with continued expansion across coastal districts.
                        </li>
                        <li>
                            With additional support, Sri Lanka aims to restore around 10,000 hectares by 2030—over 50% of its previous mangrove cover—benefiting thousands of households and generating employment.
                        </li>
                        <li>
                            Revived mangroves now enhance natural coastal protection, support biodiversity, improve fisheries productivity, and contribute to carbon sequestration.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            The condition-based, science-guided mangrove restoration approach, combined with legal protection and community engagement, offers a replicable model for coastal restoration worldwide.
                        </li>
                        <li>
                            Recognition as a UN World Restoration Flagship strengthens Sri Lanka’s role as a global example of long-term ecosystem regeneration.
                        </li>
                    </ul>
                </div>





            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#000'
        },



        '356': {
            countryName: 'India',
            country_code: '356',
            coordinates: [78.9629, 20.5937],
            zoom: 3.2,
            story: <>
                <div className='w-full flex gap-2 sticky top-10 bg-white pt-10 pb-5'>
                    <div onClick={() => { Manageindiatab('ind0') }} className={` ${indiatab === 'ind0' ? "bg-[#087f9b] text-white" : "bg-[#ffff] text-[#087f9b] border-2 border-[#087f9b]"} p-2 rounded-2xl   cursor-pointer hover:bg-[#084f5f] hover:text-white`}>Venkateshpura Lake, Bengaluru</div>

                    <div onClick={() => { Manageindiatab('ind1') }} className={` ${indiatab === 'ind1' ? "bg-[#087f9b] text-white" : "bg-[#ffff] text-[#084f5f] border-2 border-[#087f9b]"} p-2 rounded-2xl bg-[#087f9b]  cursor-pointer hover:bg-[#084f5f] hover:text-white`}>Baghapalli, India</div>

                    <div onClick={() => { Manageindiatab('ind2') }} className={` ${indiatab === 'ind2' ? "bg-[#087f9b] text-white" : "bg-[#ffff] text-[#084f5f] border-2 border-[#087f9b]"} p-2 rounded-2xl bg-[#087f9b]  cursor-pointer hover:bg-[#084f5f] hover:text-white`}>Valparai, India</div>

                    <div onClick={() => { Manageindiatab('ind3') }} className={` ${indiatab === 'ind3' ? "bg-[#087f9b] text-white" : "bg-[#ffff] text-[#084f5f] border-2 border-[#087f9b]"} p-2 rounded-2xl bg-[#087f9b]  cursor-pointer hover:bg-[#084f5f] hover:text-white`}>Central India</div>
                </div>

                <div className={`${indiatab === 'ind0' ? "block" : "hidden"} w-full`}>


                    <h1 id="#ind1" className="font-semibold text-2xl w-full pt-2">Neighbourhood lake restoration through Municipality, community–science partnership </h1>
                    <p className="pt-4 text-xl">A small but significant neighbourhood lake embedded within a dense residential area, historically part of Bengaluru’s interconnected lake system that supported local hydrology, biodiversity, and community life.</p>
                    <div className="w-full flex  gap-2 py-4 items-center">
                        <FaMapMarkerAlt size={20} />

                        <p>Venkateshpura Lake, north Bengaluru, Bengaluru</p>

                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                        <img
                            src="/world/venkateshpura_1.jpg"
                            alt=""
                            className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                        />

                        <div className=" xl:w-1/2 px-4">
                            <ul className="list-disc px-4 mb-4 space-y-2">
                                <li>
                                    Rapid urbanisation, sewage inflows, hard landscaping, and neglect led to declining water quality, loss of native biodiversity, reduced groundwater recharge, and limited community access.


                                </li>
                                <li>
                                    Conventional lake “beautification” approaches risked prioritising infrastructure over ecology.


                                </li>
                            </ul>

                        </div>


                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4  items-center">
                        <div>
                            <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                            <ul className="list-disc px-4 mb-4 space-y-2">
                                <li>
                                    A community led lake restoration process was initiated, with residents partnering with ecologists and urban practitioners to develop a science based, neighbourhood scale restoration model.
                                </li>
                                <li>
                                    Restoration prioritised ecological recovery over cosmetic redesign, deliberately avoiding extensive concretisation and inappropriate paving.
                                </li>
                                <li>
                                    Native aquatic and riparian vegetation was introduced to improve habitat quality, water filtration, and shoreline ecology.
                                </li>
                                <li>
                                    Pilot ecological interventions were implemented alongside continuous dialogue with civic agencies to align engineering works with ecological objectives.
                                </li>

                            </ul>
                        </div>

                        <img
                            src="/world/venkateshpura_3.jpg"
                            alt=""
                            className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                        />



                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Approach</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Bottom up stewardship, with local residents actively involved in planning, monitoring, and long term care of the lake.
                            </li>
                            <li>
                                Integration of urban ecology, hydrology, and social use, recognising the lake as both an ecological system and a shared public commons.
                            </li>
                            <li>
                                Close coordination with municipal engineers to adapt standard lake development practices to site specific ecological conditions.
                            </li>
                            <li>
                                Emphasis on slow landscapes, encouraging walking, observation, and everyday engagement with nature.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Strong community ownership ensured vigilance against ecologically harmful interventions.
                            </li>
                            <li>
                                Science based inputs helped translate ecological principles into practical, context specific design decisions.
                            </li>
                            <li>
                                Framing the lake as a living ecosystem rather than merely a recreational space fostered acceptance of native vegetation and wildlife.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Improved water quality and shoreline ecology, with visible recovery of native plant communities.
                            </li>
                            <li>
                                Increased urban biodiversity, including regular sightings of birds, insects, amphibians, and reptiles documented by residents.
                            </li>
                            <li>
                                A lake that supports everyday community use—walking, sitting, and learning—while maintaining ecological integrity.
                            </li>
                            <li>
                                Emergence of Venkateshpura Lake as a model for neighbourhood scale, ecology first lake restoration in Bengaluru.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Demonstrates how small urban lakes can deliver high ecological and social value through community–science partnerships.
                            </li>
                            <li>
                                Offers a replicable approach for dense Indian cities where space is limited but civic engagement is strong.
                            </li>
                            <li>
                                Reinforces the need to reframe urban water bodies as socio ecological systems rather than isolated infrastructure projects.
                            </li>
                        </ul>
                    </div>
                </div>




                <div className={`${indiatab === 'ind1' ? "block" : "hidden"} w-full`}>


                    <h1 id="#ind1" className="font-semibold text-2xl w-full pt-2">Restoring forest landscapes for wildlife conservation</h1>
                    <p className="pt-4 text-xl">Semi arid dryland landscape where village commons and forest patches were heavily invaded by Prosopis juliflora, suppressing native vegetation and limiting access to commons.</p>
                    <div className="w-full flex  gap-2 py-4 items-center">
                        <FaMapMarkerAlt size={20} />

                        <p>Baghapalli village, North Karnataka, India</p>

                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                        <img
                            src="/world/baghapalli_1.jpg"
                            alt=""
                            className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                        />

                        <p className=" xl:w-1/2 px-4">
                            Dense Prosopis invasion degraded soils, reduced native biodiversity, restricted grazing and access to commons, and altered local hydrology, while offering limited long term ecological or livelihood benefits.

                        </p>


                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4  items-center">
                        <div>
                            <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                            <ul className="list-disc px-4 mb-4 space-y-2">
                                <li>
                                    Rajkamal Goswami, with ATREE, facilitated the systematic removal of Prosopis from village commons.

                                </li>
                                <li>
                                    Cleared areas were replanted with native dryland tree and shrub species matched to local soils and rainfall.


                                </li>
                                <li>
                                    Charcoal story integrated: Removed Prosopis biomass was converted into charcoal through local kilns and used directly in local agricultural and household contexts, closing the loop between invasive removal, resource use, and landscape restoration.

                                </li>

                            </ul>
                        </div>

                        <img
                            src="/world/baghapalli_2.jpg"
                            alt=""
                            className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                        />



                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Approach</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Community-led restoration anchored in village decision-making and stewardship.
                            </li>
                            <li>
                                Ecological restoration paired with biomass utilisation and livelihood generation.
                            </li>
                            <li>
                                Native species reinstated to rebuild structural and functional integrity of dryland ecosystems.
                            </li>
                            <li>
                                Long-term engagement rather than one-time clearing.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Immediate local value from charcoal increased participation and community buy-in.
                            </li>
                            <li>
                                Replacement with native species restored ecological balance, reducing reinvasion risk.
                            </li>
                            <li>
                                Local participation ensured maintenance, monitoring, and protection of restored commons.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Recovery of native vegetation and habitat quality across village commons.
                            </li>
                            <li>
                                Reduced dominance and spread of <em>Prosopis</em> at landscape scale.
                            </li>
                            <li>
                                Supplementary livelihoods and energy use from charcoal linked to restoration activities.
                            </li>
                            <li>
                                Strengthened community stewardship and access to commons.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Demonstrates a replicable invasive species management model for dryland India.
                            </li>
                            <li>
                                Shows how restoration can be economically viable when invasive biomass is responsibly utilised.
                            </li>
                            <li>
                                Highly relevant for <em>Prosopis</em>-invaded landscapes across semi-arid regions of India.
                            </li>
                        </ul>
                    </div>
                </div>



                <div className={`${indiatab === 'ind2' ? "block" : "hidden"} w-full`}>
                    <h1 id="#ind2" className="font-semibold text-2xl w-full pt-2">Restoring rainforest connectivity in a plantation landscape </h1>
                    <p className="pt-4 text-xl">A high elevation landscape dominated by tea plantations, embedded within one of India’s most biodiverse rainforest regions and interspersed with fragmented forest patches.</p>
                    <div className="w-full flex  gap-2 py-4 items-center">
                        <FaMapMarkerAlt size={20} />

                        <p>Valparai plateau, Anamalai Hills, Western Ghats, Tamil Nadu</p>

                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                        <img
                            src="/world/valparai_1.jpg"
                            alt=""
                            className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                        />

                        <p className=" xl:w-1/2 px-4">
                            Conversion of rainforest to tea plantations fragmented habitats, disrupted wildlife movement, and weakened ecological connectivity in the Anamalai Hills, increasing human–wildlife interactions and long-term risks to biodiversity.


                        </p>


                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4  items-center">
                        <div>
                            <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                            <ul className="list-disc px-4 mb-4 space-y-2">
                                <li>
                                    Nature Conservation Foundation initiated long-term ecological restoration and conservation efforts in Valparai.

                                </li>
                                <li>
                                    Degraded patches within tea estates and along streams were restored using native rainforest tree species, selected to match local forest types.


                                </li>
                                <li>
                                    Restoration focused on rebuilding corridors to reconnect isolated forest fragments across the plantation matrix.


                                </li>
                                <li>
                                    Continuous engagement with plantation companies and managers enabled restoration within privately owned production landscapes.


                                </li>

                            </ul>
                        </div>

                        <img
                            src="/world/valparai_2.jpg"
                            alt=""
                            className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                        />



                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Approach</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Landscape-scale conservation within a working plantation system.
                            </li>
                            <li>
                                Science-led restoration grounded in long-term ecological research and monitoring.
                            </li>
                            <li>
                                Collaboration with private sector actors alongside conservation objectives.
                            </li>
                            <li>
                                Focus on coexistence between biodiversity conservation and plantation livelihoods.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Strategic placement of restored patches improved functional connectivity without displacing plantation activity.
                            </li>
                            <li>
                                Use of native species accelerated recovery of forest structure and ecological processes.
                            </li>
                            <li>
                                Long-term institutional presence built trust with estate managers and workers.
                            </li>
                            <li>
                                Restoration complemented ongoing wildlife research, strengthening adaptive management.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Reconnection of fragmented rainforest patches through functional corridors.
                            </li>
                            <li>
                                Improved habitat quality for forest-dependent species, including large mammals and endemic taxa.
                            </li>
                            <li>
                                Reduced conflict risks by guiding wildlife movement through vegetated corridors rather than open estates.
                            </li>
                            <li>
                                Demonstrated feasibility of restoration within commercial plantation landscapes.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Provides a strong model for biodiversity-friendly production landscapes.
                            </li>
                            <li>
                                Highly relevant for plantation-dominated regions across the Western Ghats and other tropical biodiversity hotspots.
                            </li>
                            <li>
                                Shows how private land, science, and long-term engagement can together deliver landscape-scale conservation outcomes.
                            </li>
                        </ul>
                    </div>


                </div>



                <div className={`${indiatab === 'ind3' ? "block" : "hidden"} w-full`}>
                    <h1 id="#ind3" className="font-semibold text-2xl w-full pt-2">Community governance of forests and commons </h1>
                    <p className="pt-4 text-xl">Predominantly dry deciduous forest and commons landscapes, home to Adivasi and forest dependent communities, where livelihoods, culture, and ecosystems are closely intertwined.</p>
                    <div className="w-full flex  gap-2 py-4 items-center">
                        <FaMapMarkerAlt size={20} />

                        <p>Central India (parts of Madhya Pradesh, Chhattisgarh, and Odisha)</p>

                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                        <img
                            src="/world/central_1.jpg"
                            alt=""
                            className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                        />

                        <p className=" xl:w-1/2 px-4">
                            Decades of centralised forest governance, extractive land use, and erosion of customary rights weakened community control over forests and commons, leading to degradation, livelihood insecurity, and conflict over resource use.



                        </p>


                    </div>

                    <div className="flex  flex-col xl:flex-row gap-4  items-center">
                        <div>
                            <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                            <ul className="list-disc px-4 mb-4 space-y-2">
                                <li>
                                    Foundation for Ecological Security (FES) supported communities to strengthen local institutions, particularly Gram Sabhas, to govern forests, grazing lands, and water commons.
                                </li>
                                <li>
                                    Communities were facilitated to secure legal recognition of rights, including under the Forest Rights Act, and to develop locally appropriate rules for forest use and regeneration.
                                </li>
                                <li>
                                    Ecological restoration focused on assisted natural regeneration, protection from grazing and fire, and revival of native species rather than large scale planting.
                                </li>
                                <li>
                                    Technical inputs on ecology and hydrology were combined with institution building and sustained social mobilisation.
                                </li>

                            </ul>
                        </div>

                        <img
                            src="/world/central_2.jpg"
                            alt=""
                            className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                        />



                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Approach</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Rights based and institution centred conservation, placing decision making authority with local communities.
                            </li>
                            <li>
                                Landscape scale thinking linking forests, commons, water systems, and livelihoods.
                            </li>
                            <li>
                                Long term engagement to rebuild trust, governance capacity, and shared ecological knowledge.
                            </li>
                            <li>
                                Emphasis on self regulation and collective action rather than externally driven, project based restoration.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Legal empowerment and community led rule making created strong incentives for long term stewardship.
                            </li>
                            <li>
                                Protection through shared norms enabled natural forest regeneration at landscape scale.
                            </li>
                            <li>
                                Linking ecological recovery with livelihoods such as NTFPs, grazing, and water security ensured sustained participation.
                            </li>
                            <li>
                                Gram Sabhas functioned as durable institutions that continued beyond project timelines.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Regeneration of large tracts of degraded forest and commons through protection and natural recovery.
                            </li>
                            <li>
                                Improved availability of fuelwood, fodder, non timber forest products, and water, strengthening local livelihoods.
                            </li>
                            <li>
                                Enhanced local governance capacity and reduced conflict over resource use.
                            </li>
                            <li>
                                Increased resilience of social ecological systems to drought and climate variability.
                            </li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Demonstrates that community governed restoration can outperform top down conservation in dry forest landscapes.
                            </li>
                            <li>
                                Offers a scalable model for forest and commons governance across Central India and similar regions.
                            </li>
                            <li>
                                Highly relevant for policy debates on decentralisation, climate adaptation, and nature based solutions grounded in social justice.
                            </li>
                        </ul>
                    </div>


                </div>






            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#fff'
        },




        '076': {
            countryName: 'Brazil',
            country_code: '076',
            coordinates: [-51.9253, -14.2350],
            zoom: 2.8,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">Long-term reforestation and carbon recovery in the Amazon</h1>
                <p className="pt-4 text-xl">Situated in the Amazon’s arc of deforestation, where large areas of rainforest were converted to cattle pasture, resulting in severe forest loss, carbon emissions, and landscape fragmentation.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>São Nicolau Farm, Cotriguaçu municipality, Mato Grosso, Brazil</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/brazil_1.png"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Extensive deforestation for cattle ranching degraded forest ecosystems, reduced biodiversity, fragmented habitats, and transformed the region from a global carbon sink into a net carbon source, undermining climate regulation and ecosystem resilience.

                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                A long-term reforestation initiative known as the Peugeot‑ONF Forest Carbon Sink Project restored degraded pastureland using native Amazon tree species.
                            </li>
                            <li>
                                Over 2,000 hectares of former cattle pasture were replanted and managed to support natural forest regeneration.

                            </li>
                            <li>
                                The site was developed as a living laboratory, combining restoration with long-term ecological and carbon monitoring in collaboration with Brazilian and international research institutions.

                            </li>

                        </ul>
                    </div>

                    <img
                        src="/world/brazil_2.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Long-term, science-led restoration sustained over more than two decades.
                        </li>
                        <li>
                            Use of diverse native species to rebuild forest structure, function, and biodiversity.
                        </li>
                        <li>
                            Continuous monitoring of carbon sequestration, forest dynamics, and ecological recovery.
                        </li>
                        <li>
                            Integration of restoration, research, and environmental education.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Time and continuity allowed secondary forest to mature and accumulate biomass.
                        </li>
                        <li>
                            Native species planting enabled recovery of ecological complexity and resilience.
                        </li>
                        <li>
                            Stable institutional partnerships ensured consistent management and scientific learning.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Restoration of approximately 2,000 hectares of Amazon forest.
                        </li>
                        <li>
                            Sequestration of an estimated ~394,000 metric tonnes of CO₂, demonstrating the carbon sink potential of restored tropical forests.
                        </li>
                        <li>
                            Creation of new habitat and ecological connectivity in a highly fragmented landscape.
                        </li>
                        <li>
                            Generation of one of the longest empirical datasets on tropical forest regrowth and carbon capture.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Challenges &amp; limits</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Ongoing threats from illegal logging, land grabbing, and weak enforcement in the wider region.
                        </li>
                        <li>
                            Limited direct livelihood integration compared to community-centred restoration models.
                        </li>
                        <li>
                            Demonstrates that carbon-focused restoration alone is insufficient without broader governance support.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Shows that large-scale, long-term reforestation can reverse carbon losses and restore forest function.
                        </li>
                        <li>
                            Highlights the importance of duration, protection, and governance for restoration success.
                        </li>
                        <li>
                            Offers lessons for carbon-oriented restoration initiatives across the tropics, particularly in deforested agricultural frontiers.
                        </li>
                    </ul>
                </div>






            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#fff'
        },


        '800': {
            countryName: 'Uganda',
            country_code: '800',
            coordinates: [32.2903, 1.3733],
            zoom: 4.5,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">Restoring forest landscapes for wildlife conservation</h1>
                <p className="pt-4 text-xl">A globally important biodiversity hotspot embedded within a densely populated rural landscape, where forest integrity is critical for sustaining wildlife, ecosystem processes, and local livelihoods.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>Bwindi Impenetrable Forest landscape, south western Uganda</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/uganda_1.jpg"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Forest fragmentation, agricultural expansion, and sustained human pressure around Bwindi reduced habitat connectivity and forest quality, increasing stress on wildlife populations and weakening long term ecosystem functioning.

                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Restoration and conservation initiatives led by Gladys Kalema-Zikusoka through Conservation Through Public Health focused on reforesting degraded buffer zones and restoring ecological corridors around Bwin.
                            </li>
                            <li>
                                Native tree species were planted to reconnect fragmented forest patches, strengthen forest structure, and improve habitat continuity.

                            </li>
                            <li>
                                Habitat restoration was paired with community health programmes, livelihood diversification, and environmental education, recognising the strong links between human well being and conservation success.

                            </li>

                        </ul>
                    </div>

                    <img
                        src="/world/uganda_2.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            People-centred, landscape-scale restoration integrating ecological recovery with public health and livelihoods.
                        </li>
                        <li>
                            Strong community participation in planting, maintenance, and long-term stewardship.
                        </li>
                        <li>
                            Conservation framed around coexistence and resilience, rather than exclusionary protection.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Addressing human health and livelihood needs alongside habitat restoration reduced pressure on forest resources.
                        </li>
                        <li>
                            Improved forest continuity enhanced habitat quality, ecological processes, and safe wildlife movement.
                        </li>
                        <li>
                            Trust-based engagement built durable local ownership and long-term commitment to conservation.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Strengthened forest buffers and ecological corridors around the Bwindi landscape.
                        </li>
                        <li>
                            Improved habitat conditions for forest-dependent wildlife.
                        </li>
                        <li>
                            <strong>
                                The mountain gorilla population increased from approximately 340 individuals in 1989 to over 1,060 individuals by 2018, representing one of the most successful great ape recoveries globally.
                            </strong>
                        </li>
                        <li>
                            Reduced long-term conflict risks through healthier ecosystems and stronger community resilience.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Demonstrates that habitat restoration for flagship species is most effective when paired with community health and livelihood interventions.
                        </li>
                        <li>
                            Offers a transferable model for integrated forest restoration in biodiversity-rich, human-dominated landscapes across East Africa and beyond.
                        </li>
                    </ul>
                </div>





            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#fff'
        },


        '360': {
            countryName: 'Borneo',
            country_code: '360',
            coordinates: [113.9213, -0.7893],
            zoom: 3,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">Reclaiming forest from oil palm landscapes</h1>
                <p className="pt-4 text-xl">A former, legally established oil palm plantation situated between two major forest reserves in a globally significant tropical rainforest landscape.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>Sabah, Malaysian Borneo</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/borneo_1.jpg"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Conversion of rainforest to oil palm monoculture caused severe biodiversity loss, habitat fragmentation, and disruption of ecological connectivity, restricting wildlife movement and weakening long term ecosystem function.

                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Conservationists led by Rhino and Forest Fund secured a section of plantation land and removed oil palm stands.


                            </li>
                            <li>
                                The site was replanted with diverse native forest species, selected to reflect local rainforest structure and ecology.


                            </li>
                            <li>
                                Restoration focused on creating a functional forest corridor linking adjacent protected areas, rather than isolated tree planting.

                            </li>

                        </ul>
                    </div>

                    <img
                        src="/world/borneo_2.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Landscape-scale restoration prioritising habitat connectivity and ecological processes.
                        </li>
                        <li>
                            Emphasis on native species diversity and forest structure to accelerate recovery.
                        </li>
                        <li>
                            Long-term conservation stewardship over short-term production goals.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Replacing monoculture palms with multi-species native forest restored soil processes, canopy complexity, and habitat quality.
                        </li>
                        <li>
                            Strategic placement strengthened wildlife corridors for wide-ranging and threatened species.
                        </li>
                        <li>
                            Grounded, hands-on restoration created a visible pathway from degraded plantation to recovering forest.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Establishment of a forest corridor reconnecting fragmented habitats.
                        </li>
                        <li>
                            Improved conditions for threatened wildlife and forest-dependent species.
                        </li>
                        <li>
                            Demonstrated feasibility of ecologically reclaiming plantation land for conservation outcomes.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Shows that commercial plantation landscapes can be transformed back into functional forest with targeted investment and clear ecological intent.
                        </li>
                        <li>
                            Offers transferable lessons for restoration in oil palm-dominated regions across Southeast Asia and other tropical frontiers.
                        </li>
                    </ul>
                </div>





            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#fff'
        },


        '834': {
            countryName: 'Tanzania',
            country_code: '834',
            coordinates: [34.8888, -6.3690],
            zoom: 4,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">From Runoff to Resilience: Rebuilding Upland Farming Systems</h1>
                <p className="pt-4 text-xl">Steep upland farming landscapes affected by soil erosion, runoff losses, declining soil moisture, and increasing climate variability.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>Southern Highlands, Makete District, Tanzania</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/tanzania_1.png"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Intense rainfall events on sloping terrain, combined with degraded vegetation cover, resulted in rapid runoff, soil erosion, reduced water retention, and declining crop productivity, increasing vulnerability for smallholder farmers.
                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Degraded upland landscapes were addressed through soil and water conservation structures such as bench terraces and contour measures to slow runoff and reduce erosion.

                            </li>
                            <li>
                                Vegetation was reintegrated into farming systems using grasses, trees, and leguminous crops to stabilise soils and improve moisture retention.

                            </li>
                            <li>
                                Farming systems were strengthened by combining crop production with ecological restoration, supporting both productivity and long term landscape health.

                            </li>
                            <li>
                                Actions were implemented through close engagement with farming households and local institutions.

                            </li>
                        </ul>
                    </div>

                    <img
                        src="/world/tanzania_2.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Landscape-scale thinking linking upland farms, slopes, and downstream water systems.
                        </li>
                        <li>
                            Participatory planning and on-farm implementation, allowing farmers to adapt practices to local conditions.
                        </li>
                        <li>
                            Integration of local knowledge with technical guidance, ensuring relevance and sustained adoption.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Physical measures were reinforced by living vegetation, creating durable and self-sustaining systems.
                        </li>
                        <li>
                            Strong community ownership, from construction to maintenance.
                        </li>
                        <li>
                            Multiple co-benefits were generated simultaneously: erosion control, improved water regulation, soil fertility, and food security.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Improved soil moisture and reduced runoff on sloping farms.
                        </li>
                        <li>
                            More stable crop yields under variable rainfall.
                        </li>
                        <li>
                            Enhanced landscape resilience and reduced downstream sedimentation.
                        </li>
                        <li>
                            Strengthened local capacity for sustainable land stewardship.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Demonstrates how integrated soil, water, and vegetation management can build resilience in upland agricultural landscapes.
                        </li>
                        <li>
                            Offers transferable lessons for erosion-prone and climate-sensitive regions across Africa and similar contexts elsewhere.
                        </li>
                    </ul>
                </div>




            </>,
            img: '/pins/pin0.png',
            font_size: 4,
            font_color: '#fff'
        },

        '222': {
            countryName: 'El Salvador',
            country_code: '222',
            coordinates: [-88.8965, 13.7942],
            zoom: 15,
            story: <>
                <h1 className="font-semibold text-2xl w-full pt-2">More Trees, Less Water Stress</h1>
                <p className="pt-4 text-xl">Semi arid rural landscapes experiencing recurrent droughts, erratic rainfall, land degradation, and declining agricultural productivity.</p>
                <div className="w-full flex  gap-2 py-4 items-center">
                    <FaMapMarkerAlt size={20} />

                    <p>Dry Corridor, El Salvador</p>

                </div>

                <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                    <img
                        src="/world/elsalvador_1.jpg"
                        alt=""
                        className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                    />

                    <p className=" xl:w-1/2 px-4">
                        Prolonged drought and rainfall variability, combined with deforestation and soil degradation, have reduced soil moisture, groundwater recharge, and crop yields, increasing climate vulnerability for smallholder farming communities.
                    </p>


                </div>

                <div className="flex  flex-col xl:flex-row gap-4  items-center">
                    <div>
                        <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
                        <ul className="list-disc px-4 mb-4 space-y-2">
                            <li>
                                Led by the Food and Agriculture Organization of the United Nations through the RECLIMA programme.
                            </li>
                            <li>
                                Degraded landscapes were restored through tree planting, agroforestry, and sustainable land management practices.
                            </li>
                            <li>
                                Community-managed nurseries were established to supply native and multipurpose species.
                            </li>
                            <li>
                                Soil and water conservation measures were integrated to improve infiltration and moisture retention.
                            </li>
                        </ul>
                    </div>

                    <img
                        src="/world/elsalvador_2.jpg"
                        alt=""
                        className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                    />



                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Approach</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Landscape-scale, ecosystem-based adaptation linking farms, watersheds, and forest patches.
                        </li>
                        <li>
                            Participatory planning and implementation with farmers and local institutions.
                        </li>
                        <li>
                            Integration of traditional knowledge with technical and scientific support.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Strong community ownership, from nursery raising to long-term land stewardship.
                        </li>
                        <li>
                            Practices delivered multiple co-benefits, including water regulation, soil fertility, biodiversity, and livelihoods.
                        </li>
                        <li>
                            Alignment with national climate adaptation priorities and long-term financing.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            Improved water security and reduced drought stress.
                        </li>
                        <li>
                            Enhanced biodiversity and ecosystem connectivity.
                        </li>
                        <li>
                            Strengthened livelihood resilience and adaptive capacity.
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>
                            A replicable nature-based solution for dryland and drought-prone regions.
                        </li>
                        <li>
                            Clear relevance for integrated soil–water–tree-based restoration in climate-vulnerable landscapes.
                        </li>
                    </ul>
                </div>



            </>,
            img: '/pins/pin0.png',
            font_size: 1,
            font_color: '#000'
        },


    }




    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-20  ';


    const [nonactive_color, setNonactive_color] = useState('#0EA5E9');



    const [activeCountry, setActiveCountry] = useState<string | null>(null);
    const [position, setPosition] = useState<Position>({
        coordinates: [0, 0],
        zoom: 1,
    });




    const handleCountryClick = (geo: any) => {
        const id = geo;

        if (!countryData[id]) return;

        setActiveCountry(countryData[id].country_code ? countryData[id].country_code : null);
        setNonactive_color('#d5e2e6')
        setPosition(countryData[id].coordinates ? { coordinates: countryData[id].coordinates, zoom: countryData[id].zoom } : { coordinates: [0, 0], zoom: 1 });
        scrollWithOffset('#country_info');
    };

    useEffect(() => {

        scrollWithOffset('#country_info');

    }, [activeCountry]);

    const resetMap = () => {
        setActiveCountry(null);
        setPosition({ coordinates: [0, 0], zoom: 1 });
    };

    const handleWheel = (event: React.WheelEvent) => {
        // prevent zoom on scroll
        if (event.ctrlKey) {
            event.preventDefault();
        }
    };


    const roundCoord = (coord: number) => Math.round(coord * 1000) / 1000;

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;






    return (
        <div className="w-full bg-slate-100 flex items-center justify-center flex-col">
            <div className={`${spacing} w-full`}>
                <Heading text='Case studies' />
            </div>



            <div onWheel={handleWheel} className="relative w-full max-w-[85rem] bg-white rounded-xl shadow-xl ">

                <div className="text-center mt-12 flex flex-col items-center ">
                    <p className="text-slate-400 text-sm">
                        Click on each labeled countries to explore restoration case studies. 
                    </p>
                    <p className="text-slate-400 text-sm">
                       (Scroll inside the map to zoom in/out.)
                    </p>
                </div>



                <ComposableMap
                    projectionConfig={{ scale: 160 }} //160
                    className="w-full h-auto"
                >
                    <ZoomableGroup
                        center={position.coordinates}
                        zoom={position.zoom}

                        minZoom={1}
                        maxZoom={6}
                        smooth="true"
                    >
                        <Geographies geography={geoUrl}>
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo: any) => {
                                    const isActive = activeCountry === geo.id;
                                    const isinlist = Boolean(countryData[geo.id]);

                                    const graycolor = '#d5e2e6';
                                    const lightblue = '#5ecce6';
                                    const skyblue = nonactive_color;

                                    let country_bg = '#CBD5E1'
                                    if (isActive) {
                                        country_bg = "#0EA5E9"
                                    } else {
                                        if (countryData[geo]) {
                                            country_bg = "#000"
                                        }

                                    }

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onClick={() => handleCountryClick(geo.id)}
                                            className="cursor-pointer transition-colors"
                                            style={{
                                                default: {
                                                    fill: isActive ? '#087f9b' : isinlist ? skyblue : graycolor, // sky-500 if active
                                                    outline: 'none',
                                                    stroke: lightblue,
                                                    strokeWidth: 0.2,
                                                },
                                                hover: {
                                                    fill: isActive ? '#087f9b' : '#5ecce6',
                                                    outline: 'none',
                                                },
                                                pressed: {
                                                    fill: isActive ? '#087f9b' : graycolor,
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>

                        {Object.entries(countryData).map(([iso, data]) => (
                            <Marker
                                key={iso}
                                coordinates={[
                                    roundCoord(data.coordinates[0]),
                                    roundCoord(data.coordinates[1]),
                                ]}
                                onClick={() => handleCountryClick(data.country_code ? data.country_code : iso)}
                            >
                                <MapLabel
                                    text={countryData[iso]?.countryName ?? ''}
                                    activeitem={activeCountry ? activeCountry : ""}
                                    font_size={countryData[iso]?.font_size ?? 1}
                                    font_color={countryData[iso]?.font_color ?? '#fff'}
                                />
                            </Marker>
                        ))}

                    </ZoomableGroup>
                </ComposableMap>


            </div>
            {activeCountry && (
                <div id='#country_info' className=" w-full max-w-[85rem] bg-white/95 backdrop-blur p-6 mt-2 flex flex-col ">

                    <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={resetMap}>
                        ← {countryData[activeCountry]?.countryName}
                    </h2>

                    <span className="text-sm text-slate-700 mb-4 px-4">
                        {countryData[activeCountry]?.story ?? 'Story content for this country will be added soon.'}
                    </span>

                    <div>


                        <button
                            onClick={resetMap}
                            className=" items-center w-auto px-4 py-2 text-sm font-medium rounded-lg bg-[#087f9b] text-white hover:bg-[#056379] transition"
                        >
                            ← Back to world
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}
