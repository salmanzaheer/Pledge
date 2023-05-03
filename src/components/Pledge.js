export const Pledge = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>Pledge Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
