import { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
    const [mode, setMode] = useState("login");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mode === "signup") {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            if (!formData.agree) {
                alert("Please accept the terms and conditions.");
                return;
            }

            // TODO: Signup API
            console.log("Sign Up:", formData);
            return;
        }

        // TODO: Login API
        console.log("Login:", {
            email: formData.email,
            password: formData.password,
        });
    };

    const switchMode = (newMode) => {
        setMode(newMode);

        setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
        });

        setShowPassword(false);
        setShowConfirmPassword(false);
    };

    return (
        <main className="min-h-screen bg-darkest-blue-bg px-4 py-10 text-white">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">

                <div className="grid w-full overflow-hidden rounded-3xl border border-DarkGreen-br bg-darkblueLowVolume-bg shadow-2xl lg:grid-cols-2">

                    {/* =========================
                        LEFT SIDE
                    ========================== */}
                    <div className="relative hidden min-h-[650px] overflow-hidden bg-green-bg p-10 lg:flex lg:flex-col lg:justify-between">

                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-tiffany-bg/20 blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-txt/20 blur-3xl" />

                        <div className="relative z-10">
                            <h1
                                className="text-3xl font-bold text-white"
                            >
                                Pezhvak
                            </h1>

                            <div className="mt-24 max-w-md">
                                <h2 className="text-4xl font-bold leading-tight">
                                    Learn music.
                                    <br />
                                    Share your knowledge.
                                    <br />
                                    Grow together.
                                </h2>

                                <p className="mt-6 text-base leading-8 text-muted-text">
                                    Join Pezhvak and discover a community of
                                    musicians, teachers and music lovers.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                <span className="text-sm text-white/60">
                                    A community for music lovers
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =========================
                        RIGHT SIDE
                    ========================== */}
                    <div className="flex min-h-[650px] items-center justify-center p-6 sm:p-10 lg:p-14">

                        <div className="w-full max-w-md">

                            {/* Mobile Logo */}
                            <div className="mb-8 text-center lg:hidden">
                                <Link
                                    to="/"
                                    className="text-3xl font-bold text-tiffany-txt"
                                >
                                    Pezhvak
                                </Link>
                            </div>

                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold">
                                    {mode === "login"
                                        ? "Welcome back"
                                        : "Create your account"}
                                </h2>

                                <p className="mt-2 text-sm text-muted-text">
                                    {mode === "login"
                                        ? "Login to continue your musical journey."
                                        : "Join Pezhvak and start your musical journey."}
                                </p>
                            </div>

                            {/* =========================
                                TABS
                            ========================== */}
                            <div className="mb-8 flex rounded-xl border border-DarkGreen-br bg-darkest-blue-bg p-1">

                                <button
                                    type="button"
                                    onClick={() => switchMode("login")}
                                    className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${mode === "login"
                                            ? "bg-tiffany-bg text-darkest-blue-bg shadow-lg"
                                            : "text-muted-text hover:text-white"
                                        }`}
                                >
                                    Login
                                </button>

                                <button
                                    type="button"
                                    onClick={() => switchMode("signup")}
                                    className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${mode === "signup"
                                            ? "bg-tiffany-bg text-darkest-blue-bg shadow-lg"
                                            : "text-muted-text hover:text-white"
                                        }`}
                                >
                                    Sign Up
                                </button>

                            </div>

                            {/* =========================
                                FORM
                            ========================== */}
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >

                                {/* Username - Signup only */}
                                {mode === "signup" && (
                                    <div>
                                        <label
                                            htmlFor="username"
                                            className="mb-2 block text-sm font-medium text-white"
                                        >
                                            Username
                                        </label>

                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            value={formData.username}
                                            onChange={handleChange}
                                            placeholder="Choose a username"
                                            autoComplete="username"
                                            required
                                            className="w-full rounded-xl border border-DarkGreen-br bg-darkest-blue-bg px-4 py-3.5 text-white outline-none transition placeholder:text-muted-text/50 focus:border-tiffany-bg"
                                        />
                                    </div>
                                )}

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-white"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                        className="w-full rounded-xl border border-DarkGreen-br bg-darkest-blue-bg px-4 py-3.5 text-white outline-none transition placeholder:text-muted-text/50 focus:border-tiffany-bg"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-white"
                                        >
                                            Password
                                        </label>

                                        {mode === "login" && (
                                            <button
                                                type="button"
                                                className="text-xs text-tiffany-txt transition hover:text-blue-txt"
                                                onClick={() =>
                                                    console.log(
                                                        "Forgot password"
                                                    )
                                                }
                                            >
                                                Forgot password?
                                            </button>
                                        )}
                                    </div>

                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            autoComplete={
                                                mode === "login"
                                                    ? "current-password"
                                                    : "new-password"
                                            }
                                            required
                                            className="w-full rounded-xl border border-DarkGreen-br bg-darkest-blue-bg px-4 py-3.5 pr-20 text-white outline-none transition placeholder:text-muted-text/50 focus:border-tiffany-bg"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-text hover:text-tiffany-txt"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password - Signup only */}
                                {mode === "signup" && (
                                    <div>
                                        <label
                                            htmlFor="confirmPassword"
                                            className="mb-2 block text-sm font-medium text-white"
                                        >
                                            Confirm Password
                                        </label>

                                        <div className="relative">
                                            <input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={
                                                    showConfirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={
                                                    formData.confirmPassword
                                                }
                                                onChange={handleChange}
                                                placeholder="Repeat your password"
                                                autoComplete="new-password"
                                                required
                                                className="w-full rounded-xl border border-DarkGreen-br bg-darkest-blue-bg px-4 py-3.5 pr-20 text-white outline-none transition placeholder:text-muted-text/50 focus:border-tiffany-bg"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        !showConfirmPassword
                                                    )
                                                }
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-text hover:text-tiffany-txt"
                                            >
                                                {showConfirmPassword
                                                    ? "Hide"
                                                    : "Show"}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Terms - Signup only */}
                                {mode === "signup" && (
                                    <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-text">
                                        <input
                                            type="checkbox"
                                            name="agree"
                                            checked={formData.agree}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 h-4 w-4 accent-tiffany-bg"
                                        />

                                        <span className="leading-6">
                                            I agree to the{" "}
                                            <Link
                                                to="/terms"
                                                className="text-tiffany-txt hover:text-blue-txt"
                                            >
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                to="/privacy"
                                                className="text-tiffany-txt hover:text-blue-txt"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </span>
                                    </label>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-tiffany-bg px-5 py-3.5 font-bold text-darkest-blue-bg shadow-lg shadow-tiffany-bg/10 transition hover:-translate-y-0.5 hover:bg-blue-txt"
                                >
                                    {mode === "login"
                                        ? "Login"
                                        : "Create Account"}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="my-7 flex items-center gap-4">
                                <div className="h-px flex-1 bg-DarkGreen-br" />

                                <span className="text-xs text-muted-text">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-DarkGreen-br" />
                            </div>

                            {/* Google */}
                            <button
                                type="button"
                                onClick={() =>
                                    console.log("Google authentication")
                                }
                                className="flex w-full items-center justify-center gap-3 rounded-xl border border-DarkGreen-br bg-darkest-blue-bg px-5 py-3.5 text-sm font-semibold text-white transition hover:border-neutralGreen-br hover:bg-darkblueLowVolume-bg"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                                    G
                                </span>

                                Continue with Google
                            </button>

                            {/* Bottom Switch */}
                            <p className="mt-8 text-center text-sm text-muted-text">
                                {mode === "login"
                                    ? "Don't have an account?"
                                    : "Already have an account?"}{" "}

                                <button
                                    type="button"
                                    onClick={() =>
                                        switchMode(
                                            mode === "login"
                                                ? "signup"
                                                : "login"
                                        )
                                    }
                                    className="font-semibold text-tiffany-txt hover:text-blue-txt"
                                >
                                    {mode === "login"
                                        ? "Sign Up"
                                        : "Login"}
                                </button>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Auth;