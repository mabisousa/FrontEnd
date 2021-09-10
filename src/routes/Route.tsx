import React from "react";
import {RouteProps as ReactRouteProps, Route as ReactRoute, Redirect} from 'react-router-dom'
import { useAuth } from "../hooks/Auth";

interface RouteProps extends ReactRouteProps {
    isPrivate?: boolean,
    component: React.ComponentType,
}

const Route: React.FC<RouteProps> = 
    ({
    isPrivate = false,
    component: Component,
    ...rest
    }) => {
        
        const { usuario } = useAuth();
    
    return (
        <ReactRoute 
            {...rest}
            render={({location}) => {
                return isPrivate === !!usuario ?
                ( 
                    <Component />
                ):
                (
                    <Redirect to={{
                        pathname: isPrivate ? "/" : "Home",
                        state: { from: location},
                    }}/>
                )
            }}
        />
    );
}

export default Route;