import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { API_URL } from "../settings/constant";
import axios from "axios"

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [userTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("userTokens")
            ? JSON.parse(localStorage.getItem("userTokens"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("userTokens")
            ? jwt_decode(localStorage.getItem("userTokens"))
            : null
    );


    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    }

    const [loading, setLoading] = useState(true);

    const loginUser = async (email, password, isDone) => {

        await axios.post(`${API_URL}accounts/login`, {
            email: email,
            password: password
        }, config)
            .then(response => {

                const data = response.data;
                alert("res" + response)
                if (response.status === 200) {
                    console.log(jwt_decode(data.access))
                    setAuthTokens(data);
                    setUser(jwt_decode(data.access));
                    localStorage.setItem("userTokens", JSON.stringify(data));
                    window.location.href("/")
                } else {
                    isDone(true)
                    alert("Something went wrong!");
                }
            });
    };

    const registerUser = async (firstname, lastname, country, phone,
        email, password, isDone) => {
        const response = await axios.post(`${API_URL}accounts/register`, {
            firstname: firstname,
            lastname: lastname,
            country: country,
            phone: phone,
            email: email,
            password: password
        }, config)

        console.log(response)
        if (response.status === 201) {
            window.location.href="/"
        } else {
            isDone(true)
            alert("Something went wrong!");
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("userTokens");
        window.location.href="/"
    };

    const contextData = {
        user,
        setUser,
        userTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser
    };

    useEffect(() => {
        if (userTokens) {
            setUser(jwt_decode(userTokens.access));
        }
        setLoading(false);
    }, [userTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};