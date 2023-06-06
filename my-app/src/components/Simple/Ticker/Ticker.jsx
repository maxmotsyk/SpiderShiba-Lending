import s from './Ticker.module.scss';

const Ticker = () => {

    const renderTickerWords = () => {
        const word = "WARNING: this is not a meme coin";
        const wordWidth = 280;
        const windowWidth = window.innerWidth;
        let countWord  =  Math.round(windowWidth / wordWidth) + 2;
        let mass = [];
        
        for(let i = 0; i <= countWord; i++) {
            mass.push(word);
        }

        return mass;
     
    }


    return(
        
        <div className={`container_fluid ${s.container_ticker}`}>

            <ul 
            className={s.ticker_row}>
               {
                renderTickerWords().map((item,i)=> <li key={i}>{item}</li>)
               }
            </ul>

        </div>

    )

}
export default Ticker;