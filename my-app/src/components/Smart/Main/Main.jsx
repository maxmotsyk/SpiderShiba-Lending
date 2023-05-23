import { useEffect,useState } from 'react';
import Chart from '../../Ordinary/Chart/Chart';
import About from '../../Ordinary/About/About';
import RulesGame from '../../Ordinary/RulesGame/RulesGame';
import InvestInfo from '../../Ordinary/InvestInfo/InvestInfo';
import RoudeMap from '../../Ordinary/RoadMap/RoadMap';
import Team from '../../Ordinary/Team/Team';
import ServiceSpiderShiba from '../../../service/ServiceSpiderShiba';


const Main = () => {

    const [partner, setPartner] = useState([]);
    const [team, setTeam] = useState([]);
    const [tokenData, setTokeData] = useState([]);
    const [roudeMapData, setRoudeMapData] = useState([]);


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
        
        </main>

    )

}

export default Main;