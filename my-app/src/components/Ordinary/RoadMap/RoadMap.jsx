import s from './RoadMap.module.scss';
import Title from '../../UI/Title/Title';
import RoadMapItem from '../../Simple/RoadMapItem/RoadMapItem';

const roadMapdata = [
    {
        id: 1,
        title: 'August 2021',
        status: true,
        tasks: [
            'Started project ☑️',
            'Budget accumulation ☑️',
            'Winning team search ☑️'
        ]
    },
    {
        id: 2,
        title: 'Sept - Nov 2021',
        status: true,
        tasks: [
            'Whitepaper creation ☑️',
            'Smartcontract testing ☑️',
            'Building ideas for nft game ☑️',
            'start developing website and game ☑️',
            'start creating NFT ☑️',
            'start creating tokenomics ☑️',
            
        ]
    },
    {
        id: 3,
        title: 'Dec - Jan 2022',
        status: true,
        tasks: [
            'Official launch on pinksale ☑️',
            'Start marketing campaign ☑️',
            'Airdrop',
            'Panckacke swap launch ☑️',
            'Start of collaborations with decentraland and the sandbox ☑️',
        ]
    },
    {
        id: 4,
        title: 'Q1 2022',
        status: false,
        tasks: [
            'Listing on coinmarketcap and coingecko',
            'Early beta game',
            'Promotion cooperation with big celebrities',
            'NFT & Game community build-up',
            'NFT collaborations and launch',
        ]
    },
    {
        id: 5,
        title: 'Q2 2022',
        status: false,
        tasks: [
            'Launch of new website',
            'Centralized exchange listening',
            'Launch of Spidershiba inu single player',
            'Creation of NFT marketplace',
            'First teaser of Spidershiba inu World Metaverse multiplayer',
            'Android & iOS App release',
        ]
    }
]

const RoudeMap = () => {

    return (

        <section className={s.roudeMap}>

            <div className="container">

                <div className={s.roudeMap_row}>

                    <Title text={'Roadmap'} />

                    <div className={s.col}>

                        {
                            roadMapdata.map(({id, title, tasks, status}, i) => {
                               return  <RoadMapItem key = {id} 
                                        listItems = {tasks} 
                                        title = {title} 
                                        num = {i + 1}
                                        status = {status}
                                        />
                            })
                            
                        }

                    </div>

                    <div className={s.progress_bar}>
                        {/* <div className={s.active_bar}></div> */}
                    </div>

                </div>

            </div>

        </section>

    )

}

export default RoudeMap;