import { useEffect,useState } from 'react';
import axios from 'axios';
import s from './Main.module.scss';
import About from '../../Ordinary/About/About';
import RulesGame from '../../Ordinary/RulesGame/RulesGame';
import InvestInfo from '../../Ordinary/InvestInfo/InvestInfo';
import RoudeMap from '../../Ordinary/RoadMap/RoadMap';
import Team from '../../Ordinary/Team/Team';

const Main = () => {

    const [partner, setPartner] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(()=>{
        getPartner();
    },[])

    async function getPartner (){

        try{
            const dataPatner = await axios.get('http://localhost:3001/partner');
            const dataTeam =  await axios.get('http://localhost:3001/team');
            setPartner(dataPatner.data);
            setTeam(dataTeam.data);
        }
        catch(error){
            console.log(error);
        }

    }

    return(

        <main>
            <About data = {partner}/>
            <RulesGame/>
            <InvestInfo/>
            <RoudeMap/>
            <Team data = {partner} team = {team}/>
        </main>

    )

}

export default Main;