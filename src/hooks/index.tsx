import React from "react";

import { AuthProvider } from "./Auth";

const Provider: React.FC = ({ children }) => (
    <AuthProvider>
        { children }
    </AuthProvider>
)

export default Provider;