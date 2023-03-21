
export default class UserModel {
    constructor({ id, userInfos, score, todayScore, keyData }) {
        this.userId = id;
        this.firstName = this.getFormattedName(userInfos);
        this.keyData = this.getFormattedKeyData(keyData);
        this.score = this.getFormattedScore(score, todayScore);
    }

    getFormattedScore(score, todayScore) {
        if (score || todayScore) {
            return score * 100 || todayScore * 100;
        }
        return null;
    }

    getFormattedName(userInfos) {
        if (userInfos?.firstName) {
            return userInfos.firstName;
        }
        return null;
    }

    getFormattedKeyData(keyData) {
        if (keyData) {
            return {
                calories: keyData.calorieCount,
                carbohydrates: keyData.carbohydrateCount,
                lipids: keyData.lipidCount,
                proteins: keyData.proteinCount,
            };
        }
        return null;
    }
}