import { useEffect,useState } from 'react';
import Chart from '../../Ordinary/Chart/Chart';
import About from '../../Ordinary/About/About';
import RulesGame from '../../Ordinary/RulesGame/RulesGame';
import InvestInfo from '../../Ordinary/InvestInfo/InvestInfo';
import RoudeMap from '../../Ordinary/RoadMap/RoadMap';
import Team from '../../Ordinary/Team/Team';
import ServiceSpiderShiba from '../../../service/ServiceSpiderShiba';
import Faq from '../../Ordinary/Faq/Faq';
import Community from '../../Ordinary/Community/Community';
import PartnerRow from '../../Simple/PartnerRow/PartnerRow';

const Main = () => {

    const [partner, setPartner] = useState([]);
    const [team, setTeam] = useState([]);
    const [tokenData, setTokeData] = useState([]);
    const [roudeMapData, setRoudeMapData] = useState([]);
    const [FaqData, setFaqData] = useState([]);


    const getAllData =  async () =>{
        const serviceSpiderShiba = new ServiceSpiderShiba();
  
        serviceSpiderShiba.getPartner()
        .then(res => setPartner(res))

        serviceSpiderShiba.getTeam()
        .then(res => setTeam(res));

        serviceSpiderShiba.getRoudeMap()
        .then(res => setRoudeMapData(res))

        serviceSpiderShiba.getDataChart()
        .then(res => setTokeData(res));

        serviceSpiderShiba.getFaq()
        .then(res => setFaqData(res));
        
    }

    useEffect(()=>{
        getAllData()
    },[])

    return(
        
        <main>
            <About data = {partner}/>
            <RulesGame/>
            <InvestInfo/>
            <RoudeMap roadMapdata={roudeMapData}/>
            <Team data={partner} team ={team}/>
            <Chart tokenData ={tokenData}/> 
            <Faq FaqData = {FaqData}/>
            <Community/>
        </main>

    )

}

export default Main;