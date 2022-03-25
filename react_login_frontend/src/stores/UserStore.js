import {extendObservable} from 'mobx';

/**
 * User Store to store current user data
 */
class UserStore {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}

export default new UserStore();