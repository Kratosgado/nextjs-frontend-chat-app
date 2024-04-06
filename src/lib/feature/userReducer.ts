import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/api/types';


export interface UserAction {
    type: "SET_USER" | "REMOVE_USER";
    payload: User | null;
}

export const UserReducer = (state: User | null = null, action: UserAction): User | null => {
    switch (action.type) {
        case 'SET_USER':
            state = action.payload;
            setUser(state!);
            return state;
        case 'REMOVE_USER':
            removeUser(state!.id);
            return null;
        default:
            return state;
    }
}

const setUser = (user: User) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

export const getCurrentUser = (): User | null => {
    const user = localStorage.getItem("currentUser");
    if (user) {
        return JSON.parse(user) as User
    }
    return null;
}

const removeUser = (id: string) => {
    localStorage.removeItem(id);
}