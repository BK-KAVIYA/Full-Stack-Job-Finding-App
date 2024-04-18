import React from 'react';

function withAuth(Component) {
  return class extends React.Component {
    componentDidMount() {
      // Check if token is present in localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        // Token is not present, block access and show popup message
        alert('You must be logged in to access this page.');
        // Redirect to login page or perform any other action
        window.location = '/login';
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}

function MyJob() {
  return <div>MyJob</div>;
}

export default withAuth(MyJob);
