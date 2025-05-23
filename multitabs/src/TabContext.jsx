import { createContext, useContext, useState } from "react";


const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [age, setAge] =  useState('');
    const [email, setEmail] =  useState('');
    const [activeTab, setActiveTab] = useState('profile');
    const [interest, setInterest] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [notificationPreference, setNotificationPreference] = useState('email');


    return (
        <TabContext.Provider value = {
            {
              activeTab, 
              setActiveTab,
              age,
              setAge,
              email,
              setEmail,
              interest,
              setInterest,
              subscribe,
              setSubscribe,
              notificationPreference,
              setNotificationPreference
            }
        }>
           {children}
        </TabContext.Provider>
    )
}

export const useTab = () => useContext(TabContext);