import s from './ClipBoard.module.scss';

const ClipBoard = ({label, address, variant}) => {

    const setStyle = () => {
        // eslint-disable-next-line default-case
        switch(variant){
            case 'round': 
                return s.round_clipBoard;
            default:
                return ''
        }
    }

    function saveToClipboard(str) {
        navigator.clipboard.writeText(str.textContent);

        str.style.color = '#ffff';
        setTimeout(() => {
            str.style.color = 'rgba(255, 255, 255, 0.4)';
        }, 500)

    }

    return(
        <div className={`${s.copy_address_col} ${setStyle()}`}>

            <label>
                {label}
                <button onClick={(e) => { saveToClipboard(e.target) }}>{address}</button>
            </label>

        </div>
    )

}

export default ClipBoard;