import React, { useEffect, useState } from 'react';
import './GithubFinder.css';

export default function GithubFinder() {
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('Abhishek-soni6904');
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
        setUserData({});
      } finally {
        setLoading(false);
      }
    }
    if (username) fetchUser();
  }, [username]);

  return (
    <div id="githubFinder">
      <h2>Github user finder</h2>
      <div className="githubFinder">
        <section className="search-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter GitHub username..."
          />
          <button onClick={() => setUsername(inputValue)}>Search</button>
        </section>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {!loading && !error && userData.login && (
          <section className="result-section">
            <img src={userData.avatar_url} alt={`${userData.login} avatar`} className="avatar" />
            <h2>{userData.name || userData.login}</h2>
            <p><strong>Username:</strong> <a href={userData.html_url} target="_blank" rel="noreferrer">{userData.login}</a></p>
            <p><strong>Joined on:</strong> {new Date(userData.created_at).toLocaleDateString()}</p>
            <p><strong>Bio:</strong> {userData.bio || "Bio not available"}</p>
            <p><strong>Followers:</strong> {userData.followers}</p>
            <p><strong>Following:</strong> {userData.following}</p>
            <p><strong>Public Repos:</strong> {userData.public_repos}</p>
          </section>
        )}
      </div>
    </div>
  );
}