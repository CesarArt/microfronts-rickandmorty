import React, { type ReactNode } from "react";

interface ErrorBoundaryProps {
    fallback?: ReactNode; // lo que se mostrará si hay error
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary atrapó un error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? <div>Ocurrió un error al cargar</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
