import React, { useEffect, useState } from "react";

export default function SearchAutoComplete() {
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchSearchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/users`);
                const data = await response.json();

                if (data && data.users && data.users.length) {
                    const userNames = data.users.map(
                        (user) => user.firstName + " " + user.lastName
                    );
                    setSearchData(userNames);
                } else {
                    setSearchData([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchSearchData();
    }, []);

    useEffect(() => {
        if (searchValue.trim() === "") {
            setFilteredData([]);
        } else {
            setFilteredData(
                searchData.filter((user) =>
                    user.toLowerCase().includes(searchValue)
                )
            );
        }
    }, [searchValue, searchData]);

    return (
        <div style={{borderBottom:"2rem solid black",borderTop:"2rem solid black",margin:"1rem 0",padding:"1rem 0"}} id="autoCompleteSearch">
            <h2 style={{margin:"0"}}>Search Auto Complete</h2>
            <input
            style={{  padding: "10px",
                width: "60%",                         
                marginRight: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px"}}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                placeholder="Search users..."
            />
            <ul>
                {filteredData.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}