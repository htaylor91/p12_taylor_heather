import IconTile from './IconTile'
import '../styles/Navigation.css'
import yoga from '../assets/yoga.svg'
import swim from '../assets/swim.svg'
import bicycle from '../assets/bicycle.svg'
import barbell from '../assets/barbell.svg'

function SideNavigation(){
    return (
        <div className='sidenav'>
            <div className='sidenav-wrapper'>
                <IconTile source={yoga} alt="yoga" iconData="sidenav"></IconTile>
                <IconTile source={swim} alt="swim" iconData="sidenav"></IconTile>
                <IconTile source={bicycle} alt="bicycle" iconData="sidenav"></IconTile>
                <IconTile source={barbell} alt="barbell" iconData="sidenav"></IconTile>
            </div>
            
            <div className='copyright-wrapper'>
                <p className='copyright'>Copyright, SportSee <span>{new Date().getFullYear()}</span></p>
            </div>
        </div>
    )
}

export default SideNavigation