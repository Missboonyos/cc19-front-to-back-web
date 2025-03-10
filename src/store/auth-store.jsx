import {create} from 'zustand';
import { actionLogin } from '../api/auth';
import { persist } from 'zustand/middleware'

// Step 1 Create Store
const authStore = (set) => ({
    user:[],
    token: null,
    actionLoginWithZustand: async (value) => {
        try {
            const res = await actionLogin(value);
            console.log(res);
            // console.log("Hello, Zustand", value)
            // console.log("Hello, Zustand", res)
            const { payload, token} = res.data;

            // console.log(payload.role);
            // console.log(token);
            set ({ user: payload, token: token });

            return { success: true, role: payload.role }
        } catch (error) {
            // console.log(error.response.data.message);
            return { success: false, error: error.response.data.message }
        }
    },   
    actionLogout:()=> {
        set({ user: [], token: null });
    },
});
// Step 2 Exports Store
const useAuthStore = create(persist(authStore,{name:'auth-store'}));

export default useAuthStore;
