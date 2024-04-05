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

export const getInitialLoggedIn = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(KEY);
    } else {
        return null;
    }
};
export const useLoginStore = create(devtools((set) => ({
    ...initial,
    isLogin: getInitialLoggedIn() || false,
    user: null,
    setLoging: async () => {
        set(() => ({ loading: true }))
        localStorage.setItem(KEY, true);
        set((state) => {
            state.isLogin = true;
            state.loading = false
        });
    },
    logout: async () => {
        set((state) => {
            localStorage.removeItem(KEY);
            state.isLogin = false;
        })
    }

})))

export const useAuthStore = create(immer((set) => ({
    loading: false,
    error: null,
    isLogin: getInitialLoggedIn() || false,
    user: null,
    setLogin: async (values, router) => {
        set((state) => { state.loading = true })
        try {
            const res = await api.post('/auth/login', values)
            if (res.status === 200) {
                localStorage.setItem(KEY, true);
                set(state => {
                    state.isLogin = true,
                        state.error = null
                    state.loading = false
                })
                toast.success(res.data.message, {
                    action: {
                        label: 'X',
                        onClick: () => console.log('Undo')
                    },
                })
                router.push('/dashboard')
            }

        } catch (error) {
            set(state => {
                state.loading = false
                state.error = error

            })
        }
    },
    logout: async () => {
        set((state) => {
            localStorage.removeItem(KEY);
            state.isLogin = false;
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