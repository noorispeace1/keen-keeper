"use client";

import { createContext, useState, useEffect } from "react";

export const InstallAppsContext = createContext();

export const InstalledAppsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setTimeline(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <InstallAppsContext.Provider value={{ timeline, setTimeline }}>
            {children}
        </InstallAppsContext.Provider>
    );
};

export default InstalledAppsProvider;