class User {
    constructor(id, firstName, lastName, userName, userEmail, userPassword, userAvatar, favoriteTopics){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userAvatar = userAvatar;
        this.favoriteTopics = favoriteTopics;
    }

    toJSON(){
        return JSON.stringify({
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            userEmail: this.userEmail,
            userAvatar: this.userAvatar,
            favoriteTopics: this.favoriteTopics
        })

    }
    // userRegister(){

    //     let newUser = [this.id, this.firstName, this.lastName, this.userName, this.userEmail, this.userPassword, this.userAvatar,this.favoriteTopics]
    //     let userJson = JSON.stringify(newUser)
    //     return userJson
    // }
    
    userGreeting(){
        console.log(`Welcome ${this.userName} to the Based blog`)
    }
}

const user1 = new User(0, "Mason", "Karr", "MKULTRA", "K@gmail.com", "saisfhaisj", "mas.jpg", ["Oranges, apples, bananas"] )

console.log(user1.toJSON());

user1.userGreeting()