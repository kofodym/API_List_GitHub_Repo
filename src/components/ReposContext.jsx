import { createContext,useState,useEffect } from "react";
export const   ReposContext=createContext()
export const ReposProvider=({children})=>{
      const [repos, setRepos] = useState([]);
       const [loading, setLoading] = useState(false);
       const user="kofodym"
      useEffect(() => {
        setLoading(false)
        fetch('https://api.github.com/users/${user}/repos')
          .then((res) => res.json())
          .then((data) => setRepos(data));
          setLoading(true)
      }, []);

      const value={repos,user}
   
    return(
        <ReposContext.Provider value={value}>
            {loading&&children}
        </ReposContext.Provider>
    )
}