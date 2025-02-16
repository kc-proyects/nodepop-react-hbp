import React from "react";
import { login } from "./service";

const LoginPage = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await login({
                username: event.target.username.value,
                password: event.target.password.value,
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-4 shadow-sm border-0" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Introduce tu usuario"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Introduce tu contraseña"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Acceder</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
