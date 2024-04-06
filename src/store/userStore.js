import { api } from "@/api";
import { apiUrl } from "@/lib/routes";
import axios from "axios";
import { Immer } from "immer";
import { toast } from "sonner";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initial = {
    error: null,
    loading: false
}

export const useUserStore = create((set) => ({
    ...initial,
    user: null,
    setUser: async (value) => {
        set(() => ({ loading: true }))
        try {
            axios.post(apiUrl, value)
            set((state) => ({
                user: value,
                loading: false,
            }));
        } catch (error) {
            set((state) => ({ error: error, loading: false }));
        }
    }
}))


const KEY = "isLogin";

export const getUser = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem('user') || null;
    } else {
        return null;
    }
};

export const useAuthStore = create(immer((set) => ({

    error: null,
    user: getUser(),

    setLogin:  (data) => {
        // set(state=> {state.loading = true})
        localStorage.setItem('user', JSON.stringify(data))
    },
    logout:  () => {
        set((state) => {
            localStorage.removeItem('user');
            state.user = null;
        })
    }
})))

export const useProfileStore = create(devtools((set) => ({
    ...initial,
    profile: {},
    setProfile: (values) => {
        console.log(values)
        set((state) => { state.loading = true })
        try {
            set((state) => ({
                profile: { ...state.profile, ...values },
                loading: false
            }))
        } catch (error) {
            set((state) => ({ error: error, loading: false }));
        }
    }

})))