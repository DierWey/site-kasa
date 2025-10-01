import React from "react"

export class ErrorBoundary extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour que le prochain rendu affiche l'interface utilisateur de secours.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle interface utilisateur de secours personnalisée
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}