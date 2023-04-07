/**
 * Model for the user data
 * @property {String} firstName - The formatted first name
 * @property {Object} keyData - The formatted key data
 * @property {Number} score - The formatted score
 */
class UserModel {
    /**
     * @param {Object} params
     * @param {Object} params.userInfos - The user infos
     * @param {Number | undefined} params.score - The score
     * @param {Number | undefined} params.todayScore - The today score
     * @param {Object} params.keyData - The key data
     */
    constructor({ userInfos, score, todayScore, keyData }) {
        this.firstName = this.getFormattedName(userInfos);
        this.keyData = this.getFormattedKeyData(keyData);
        this.score = this.getFormattedScore(score, todayScore);
    }

    /**
     * Format the score received from the API
     * @param {Number | undefined} score
     * @param {Number | undefined} todayScore 
     * @returns {Number | null} 
     */
    getFormattedScore(score, todayScore) {
        if (score) {
            return score * 100;
        }
        if (todayScore) {
            return todayScore * 100;
        }
        return null;
    }

    /**
     * Format the user name received from the API
     * @param {Object} userInfos 
     * @returns {String | null}
     */
    getFormattedName(userInfos) {
        if (userInfos?.firstName) {
            return userInfos.firstName;
        }
        return null;
    }

    /**
     * Format the key macronutrient data received from the API
     * @param {Object} keyData 
     * @returns {Object | null}
     */
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

export default UserModel;