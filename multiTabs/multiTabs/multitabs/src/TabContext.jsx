import { createContext, useContext, useState } from "react";

const defaultFormData = {
  age: '',
  email: '',
  interest: [],
  subscribe: false,
  notificationPreference: 'email'
};

const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [formData, setFormData] = useState(defaultFormData);

    const resetFormData = () => setFormData(defaultFormData);

    return (
        <TabContext.Provider value={{
            activeTab,
            setActiveTab,
            formData,
            setFormData,
            resetFormData
        }}>
            {children}
        </TabContext.Provider>
    );
}

export const useTab = () => useContext(TabContext);