import { useEffect } from 'react';
import '../styles/chooseAvatar.css';

const ChooseAvatar = ({headerRef, footerRef}) => {

    const header = headerRef.current;
    const footer = footerRef.current;

    useEffect(() => {
        header.style.display = "none";
        footer.style.display = "none";

        return () => {
            header.style.display = "flex";
            footer.style.display = "flex";
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='choose-avatar-section'>
            <div className='instruction-avatar'>Choose Avatar</div>
            <div className='avatars-grid'>

            </div>
        </div>
    )
}

export default ChooseAvatar;