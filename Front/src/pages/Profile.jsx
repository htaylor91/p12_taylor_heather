import '../styles/Profile.css'
import useAxios from '../hooks/useAxios';
import UserModel from '../models/UserModel.js';

import Banner from '../components/Banner'
import MacrosCard from '../components/MacrosCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Score from '../components/Score/Score';
import Sessions from '../components/Sessions/Sessions';
import Activity from '../components/Activity/Activity';
import Performance from '../components/Performance';

/**
 * @component
 */
function Profile(){
    const {loading, error, data} = useAxios('userService');
    if(loading){
        return (<Loading></Loading>)
    }
    if(error){
        return (<Error></Error>)
    }
    if(data){
        const user = new UserModel(data);
        const {firstName, keyData, score} = user;

        return (
                <main className='container-horizontal Profile'>
                    <article className='container-vertical'>
                        <Banner name={firstName}></Banner>
                        <div className='container-horizontal Profile-charts'>
                            <div className='container-vertical'>
                                <Activity></Activity>
                                <div className='container-horizontal Profile-square-charts'>
                                    <Sessions></Sessions>
                                    <Performance></Performance>
                                    <Score score={score}></Score>
                                </div>
                            </div>
                            <div className="container-vertical macros">
                                <MacrosCard macro='Calories' value={keyData?.calories}></MacrosCard>
                                <MacrosCard macro='Glucides' value={keyData?.carbohydrates}></MacrosCard>
                                <MacrosCard macro='Lipides' value={keyData?.lipids}></MacrosCard>
                                <MacrosCard macro='Proteines' value={keyData?.proteins}></MacrosCard>
                            </div>
                        </div>
                    </article>
                </main> 
        );
    }
}

export default Profile;