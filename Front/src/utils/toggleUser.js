/**
 * @function toggleUser - Toggle between user 12 and user 18.
 * @param {number} currentUser The current user id (12 or 18)
 * @param {function} setCurrentUser - Set the current user
 * @returns {number} 12 or 18
*/

export default function toggleUser({currentUser, setCurrentUser}) {
    return currentUser === 12 ? setCurrentUser(18) : setCurrentUser(12)
}