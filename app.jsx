  const logout = () => {
    // login
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");

    navigate("/login");
  } 

<a onClick={logout}>Logout</a>
