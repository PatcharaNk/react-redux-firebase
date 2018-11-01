import database from "../common/firebase-database";

export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
export const firebaseDB = data => ({
    type: 'GET_DATA',
    payload: data
})
export function getDataFromFirebase(dispatch) {
    database.ref('/portfolio').on('value', snap => {
        dispatch(firebaseDB(snap.val()))
    })
}