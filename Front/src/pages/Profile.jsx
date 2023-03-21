import useAxios from '../hooks/useAxios';
import UserModel from '../models/UserModel.js';
import Banner from '../components/Banner'
import MacrosCard from '../components/MacrosCard';

function Profile(){
    const [data, loading, error] = useAxios('userService')

    if(loading) return <div>Loading user data...</div>
    if(error) return <div>ERROR loading user data</div>
    if(data){
        const user = new UserModel(data);
        const firstName = user.firstName;
        const keyData = user.keyData;
        const score = user.score;
        return (
            <>        
                <main style={{display: 'flex', gap: '30px'}}>
                    <article className="Profile">
                        <Banner name={firstName}></Banner>
                    </article>
                    <aside>
                        <div className="container">
                            <MacrosCard macro='Calories' value={keyData?.calories}></MacrosCard>
                            <MacrosCard macro='Glucides' value={keyData?.carbohydrates}></MacrosCard>
                            <MacrosCard macro='Lipides' value={keyData?.lipids}></MacrosCard>
                            <MacrosCard macro='Proteines' value={keyData?.proteins}></MacrosCard>
                        </div>
                    </aside>
                </main>
            
            </>
    );}
}

export default Profile;
