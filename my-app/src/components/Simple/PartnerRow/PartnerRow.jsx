import s from './PartnerRow.module.scss';

const PartnerRowClass = {
    ghostly : `${s.partners} ${s.partners_ghostly}`,
    bright: `${s.partners} ${s.partner_bright}`
}

const PartnerRow = ({data, variant}) =>{

    return (
        <>
            <div className={s.partner_row}>
                {
                    data.map(({name, img, id}) => {
                        return (
                            <img className={PartnerRowClass[variant]} key={id} src={img} alt={name}/>
                        )
                    })
                }
            </div>  
        </> 
    )

}

export default PartnerRow;