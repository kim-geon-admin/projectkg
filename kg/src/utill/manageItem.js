export default class {
    constructor(userId,password){
        this.user_id = userId;
        this.user_password = password;

    }

    showItem(itemTp){
        alert(this[itemTp]);
    }

    setItem(itemTp,val){
        this[itemTp] = val;
    }

}