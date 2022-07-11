import '../styles/avatarCard.css';
import { useNavigate } from 'react-router-dom';

const AvatarCard = ({avatarImage, setUserPicture}) => {
    const navigate = useNavigate()

    const createUserOnClick = (e) => {
        /*console.log(e.target.childNodes[0].src);*/
        setUserPicture(e.target.childNodes[0].src)
        navigate("/")
    }

    return(
        <div className='avatarCard' onClick={createUserOnClick}>
            <img src = {avatarImage} alt = "avatar" className='avatar-image'></img>
        </div>
    )
}

export default AvatarCard;