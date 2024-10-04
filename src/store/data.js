// import {create} from 'zustand';

// export const useData = create((set, get) => ({
//     name: 'John',
//     setName: (name) => set({name}),
//     getName: () => get().name,

//     age: 20,
//     setAge: (age) => set({age}),
//     getAge: () => get().age,
// }));

import { create } from 'zustand';

// Helper functions to interact with local storage
const loadFromLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

export const useData = create((set, get) => ({
  name: loadFromLocalStorage('name', 'John'),
  setName: (name) => {
    saveToLocalStorage('name', name);
    set({ name });
  },
  getName: () => get().name,
  deleteName: () => {
    deleteFromLocalStorage('name');
    set({ name: 'John' });
  },    

  age: loadFromLocalStorage('age', 20),
  setAge: (age) => {
    saveToLocalStorage('age', age);
    set({ age });
  },
  getAge: () => get().age,
  deleteAge: () => {
    deleteFromLocalStorage('age');
    set({ age: 0 });
  },
}));
