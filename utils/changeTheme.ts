const changeTheme = (theme: string, setTheme: (theme: string) => void) => {
    setTheme(theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};

export default changeTheme;