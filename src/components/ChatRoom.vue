<template>
    <main class = "section">
        <h3>Welcome to ChatRoom {{ chatId }}</h3>
        <User>
            <template #user="{ user }">
                <div v-if="user">
                    <ul>
                        <li v-for="message of messages" :key="message.id">
                            {{ message.text }}
                        </li>
                    </ul>

                    <input v-model="newMessageText" class="input" />

                    <button 
                        :disabled="!newMessageText || loading"
                        class="button is-success"
                        type="text"
                        @click="addMessage(user.uid)"
                    >Send</button>

                </div>
                <Login v-else />
            </template>
        </User>
    </main>
</template>

<script>
import User from './User'
import Login from './Login'
import { db } from '../firebase';

export default {
    components: {
        User,
        Login
    },
    data() {
        return {
            newMessageText: '',
            loading: false,
            messages: []
        }
    },
    computed: {
        chatId() {
            return this.$route.params.id;
        },
        messagesCollection() {
            return db.doc(`chats/${this.chatId}`).collection('messages')
        },
    },
    firestore() {
        return {
            messages: this.messagesCollection.orderBy('createdAt').limitToLast(10)
        };
    },
    methods: {
    async addMessage(uid){

        this.loading= true;
        
        const { id: messageId } = this.messagesCollection.doc();

        await this.messagesCollection.doc(messageId).set({
            text: this.newMessageText,
            sender: uid,
            createdAt: Date.now(),
        });

        this.loading = false;
        this.newMessageText = '';
        }
    }
};
</script>