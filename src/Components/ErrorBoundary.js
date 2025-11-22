import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          margin: '20px'
        }}>
          <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>
            متأسفانه مشکلی پیش آمده
          </h2>
          <p style={{ color: '#6c757d', marginBottom: '20px' }}>
            لطفاً صفحه را رفرش کنید یا بعداً دوباره تلاش کنید.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 30px',
              backgroundColor: '#3374FF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            رفرش صفحه
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
