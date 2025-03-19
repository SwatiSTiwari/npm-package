## Usage

Import and use the Hero component in your React application:

```jsx
import React from 'react';
import Hero from 'custom-hero-page';

function App() {
  return (
    <>
      <Hero
        title="Welcome to My Site"
        subtitle="A more interactive hero section"
        backgroundImage="https://example.com/your-image.jpg"
        ctaText="Learn More"
        ctaLink="/learn-more"
        scrollTargetId="content" // ID of the element to scroll to
      />
      <div id="content">
        {/* Your page content here */}
      </div>
    </>
  );
}

export default App;
