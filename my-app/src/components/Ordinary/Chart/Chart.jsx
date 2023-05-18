import { Component } from "react";
import Title from "../../UI/Title/Title";
import s from './Chart.module.scss';


class Chart extends Component {

    state = {   
        louding: false,
        error: false,
    }

    componentDidMount () {

    }

    render(){

        return(
            <section className={s.chart_section}>

                <div className="container">

                    <Title text={'Tokenomics'}/>

                    <div className="">

                    </div>
                    
                </div>

            </section>
        )

    }

}

export default Chart;