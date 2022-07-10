import '../styles/avatarCard.css';
import { useNavigate } from 'react-router-dom';

const AvatarCard = ({avatarImage}) => {
    const navigate = useNavigate()

    const createUser = () => {
        navigate("/")
    }

    return(
        <div className='avatarCard' onClick={createUser}>
            <img src = {avatarImage} alt = "avatar" className='avatar-image'></img>
        </div>
    )
}

export default AvatarCard;