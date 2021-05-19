
const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            picture: '',
        }
    },
    methods: {
        genderClass() {
            return this.gender == 'female' ? "border-pink-500" : this.gender == 'male' ? 'border-blue-500' : ""
        },
        async getUser() {
          
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            var user = results[0]

            this.firstName = user.name.first
            this.lastName = user.name.last 
            this.email = user.email
            this.gender = user.gender
            this.picture = user.picture.large
        }
    },
    mounted(){
        this.getUser()
    }
}).mount('#app');
