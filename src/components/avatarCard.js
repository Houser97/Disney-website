import '../styles/avatarCard.css';

const AvatarCard = ({avatarImage}) => {
    return(
        <div className='avatarCard'>
            <img src = {avatarImage} alt = "avatar" className='avatar-image'></img>
        </div>
    )
}

export default AvatarCard;