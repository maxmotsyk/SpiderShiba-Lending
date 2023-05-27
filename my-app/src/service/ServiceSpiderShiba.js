import axios from "../api/axios";

class ServiceSpiderShiba {

    getResource = async (url) => {
        let res = await axios.get(url);

        return await res.data;

    }

    getPartner = async () => {
        return await this.getResource('/partner');
    }

    getTeam = async () =>{
        return await this.getResource('/team');
    }

    getDataChart = async() => {
        return await this.getResource('/tokenData');
    }

    getRoudeMap = async () =>{
        return await this.getResource('/roudeMapData');
    }

    getFaq = async () => {
        return await this.getResource('/FAQ');
    }

}

export default  ServiceSpiderShiba ;

