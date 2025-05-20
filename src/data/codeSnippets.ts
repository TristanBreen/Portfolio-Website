export interface CodeSnippet {
  language: string;
  code: string;
}

export const codeSnippets: { [key: string]: CodeSnippet } = {
  about: {
    language: 'jsx',
    code: `// About.jsx - React Component
import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a Software Engineering student and full-stack developer 
        passionate about creating efficient, user-friendly applications.
      </p>
      <h3>Education</h3>
      <div className="education-card">
        <h4>B.S. in Software Engineering</h4>
        <p>Arizona State University</p>
        <p className="period">Aug 2021 – May 2025</p>
      </div>
    </section>
  );
};

export default About;`
  },
  
  skills: {
    language: 'jsx',
    code: `// Skills.jsx - React Component
import React from 'react';

const Skills = () => {
  const skillsList = [
    "Python", "Java", "C", "C++", "JavaScript", 
    "React.js", "Android", "Supabase", "Docker", 
    "AWS", "OpenCV", "Tesseract"
  ];
  
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;`
  },
  
  experience: {
    language: 'jsx',
    code: `// Experience.jsx - React Component
import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Professional Experience</h2>
      
      <div className="job-card">
        <div className="job-header">
          <h3>Full-Stack Developer</h3>
          <h4>Rob Dollar Foundation</h4>
          <p className="period">Aug 2024 – May 2025</p>
        </div>
        
        <ul className="responsibility-list">
          <li>
            Developed a Bluetooth-connected cycling safety application
            with mobile interface and ESP32 firmware
          </li>
          <li>
            Designed and implemented Supabase backend for real-time 
            data storage and retrieval
          </li>
          <li>
            Created an administrative web dashboard for monitoring 
            device status and user activity
          </li>
          <li>
            Implemented secure authentication and permission systems 
            for different user roles
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;`
  },
  
  image_processor: {
    language: 'c',
    code: `// image_processor.c - Core image processing functions

#include <stdlib.h>
#include <stdint.h>
#include <emscripten.h>

// Image buffer structure
typedef struct {
    uint8_t* data;
    int width;
    int height;
    int channels;
} Image;

// Export functions to JavaScript
EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int size) {
    return malloc(size * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void free_buffer(uint8_t* buffer) {
    free(buffer);
}

// Grayscale filter implementation
EMSCRIPTEN_KEEPALIVE
void apply_grayscale(uint8_t* input, uint8_t* output, int width, int height) {
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            int pixel_index = (i * width + j) * 4;
            
            // Get RGB values
            uint8_t r = input[pixel_index];
            uint8_t g = input[pixel_index + 1];
            uint8_t b = input[pixel_index + 2];
            
            // Convert to grayscale using luminosity method
            uint8_t gray = (uint8_t)(0.299 * r + 0.587 * g + 0.114 * b);
            
            // Set output pixel values
            output[pixel_index] = gray;
            output[pixel_index + 1] = gray;
            output[pixel_index + 2] = gray;
            output[pixel_index + 3] = input[pixel_index + 3]; // Preserve alpha
        }
    }
}

// Edge detection filter using Sobel operator
EMSCRIPTEN_KEEPALIVE
void apply_edge_detection(uint8_t* input, uint8_t* output, int width, int height) {
    // First convert to grayscale in a temporary buffer
    uint8_t* grayscale = malloc(width * height * 4);
    apply_grayscale(input, grayscale, width, height);
    
    // Apply Sobel operator
    for (int y = 1; y < height - 1; y++) {
        for (int x = 1; x < width - 1; x++) {
            int pixel_index = (y * width + x) * 4;
            
            // 3x3 Neighborhood
            int p00 = grayscale[((y-1) * width + (x-1)) * 4];
            int p01 = grayscale[((y-1) * width + x) * 4];
            int p02 = grayscale[((y-1) * width + (x+1)) * 4];
            int p10 = grayscale[(y * width + (x-1)) * 4];
            int p12 = grayscale[(y * width + (x+1)) * 4];
            int p20 = grayscale[((y+1) * width + (x-1)) * 4];
            int p21 = grayscale[((y+1) * width + x) * 4];
            int p22 = grayscale[((y+1) * width + (x+1)) * 4];
            
            // Sobel X and Y gradients
            int gx = -p00 - 2*p10 - p20 + p02 + 2*p12 + p22;
            int gy = -p00 - 2*p01 - p02 + p20 + 2*p21 + p22;
            
            // Gradient magnitude (approximated)
            int mag = abs(gx) + abs(gy);
            mag = mag > 255 ? 255 : mag;
            
            // Set edge pixel value (inverted for better visibility)
            output[pixel_index] = 255 - mag;
            output[pixel_index + 1] = 255 - mag;
            output[pixel_index + 2] = 255 - mag;
            output[pixel_index + 3] = input[pixel_index + 3]; // Preserve alpha
        }
    }
    
    free(grayscale);
}`
  },
  
  stock_tool: {
    language: 'python',
    code: `# stock_analyzer.py - Main analysis module

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

class StockAnalyzer:
    """Stock analysis tool using technical indicators and ML predictions"""
    
    def __init__(self, ticker_symbol, start_date, end_date):
        """Initialize with stock details and date range"""
        self.ticker = ticker_symbol
        self.start_date = start_date
        self.end_date = end_date
        self.data = None
        self.model = None
        
    def fetch_data(self, source='yahoo'):
        """Fetch historical stock data from provider"""
        import yfinance as yf
        self.data = yf.download(self.ticker, start=self.start_date, end=self.end_date)
        return self.data
    
    def calculate_indicators(self):
        """Calculate RSI and MACD indicators"""
        # Calculate daily returns
        self.data['Daily_Return'] = self.data['Adj Close'].pct_change()
        
        # Calculate RSI (Relative Strength Index)
        delta = self.data['Adj Close'].diff()
        gain = (delta.where(delta > 0, 0)).fillna(0)
        loss = (-delta.where(delta < 0, 0)).fillna(0)
        
        avg_gain = gain.rolling(window=14).mean()
        avg_loss = loss.rolling(window=14).mean()
        
        rs = avg_gain / avg_loss
        self.data['RSI'] = 100 - (100 / (1 + rs))
        
        # Calculate MACD (Moving Average Convergence Divergence)
        exp1 = self.data['Adj Close'].ewm(span=12, adjust=False).mean()
        exp2 = self.data['Adj Close'].ewm(span=26, adjust=False).mean()
        self.data['MACD'] = exp1 - exp2
        self.data['Signal_Line'] = self.data['MACD'].ewm(span=9, adjust=False).mean()
        self.data['MACD_Histogram'] = self.data['MACD'] - self.data['Signal_Line']
        
        return self.data
    
    def train_model(self, forecast_days=5):
        """Train ML model to predict future price movements"""
        # Prepare features and target
        data = self.data.copy().dropna()
        features = ['RSI', 'MACD', 'MACD_Histogram', 'Volume']
        
        X = data[features]
        y = data['Adj Close'].shift(-forecast_days)
        
        # Remove NaN values created by the shift
        X = X[:-forecast_days]
        y = y.dropna()
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        # Train Random Forest model
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.model.fit(X_train, y_train)
        
        # Evaluate model
        y_pred = self.model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        print(f"Model MSE: {mse:.2f}")
        
        return self.model
    
    def generate_report(self, output_path='./report'):
        """Generate analysis report with charts and statistics"""
        import os
        if not os.path.exists(output_path):
            os.makedirs(output_path)
            
        # Plot price chart with RSI and MACD
        fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(12, 10), gridspec_kw={'height_ratios': [3, 1, 1]})
        
        # Price chart
        ax1.plot(self.data.index, self.data['Adj Close'])
        ax1.set_title(f'{self.ticker} Price History')
        ax1.set_ylabel('Price ($)')
        ax1.grid(True)
        
        # RSI
        ax2.plot(self.data.index, self.data['RSI'], color='purple')
        ax2.axhline(70, color='red', linestyle='--', alpha=0.5)
        ax2.axhline(30, color='green', linestyle='--', alpha=0.5)
        ax2.fill_between(self.data.index, self.data['RSI'], 70, 
                         where=(self.data['RSI'] >= 70), color='red', alpha=0.3)
        ax2.fill_between(self.data.index, self.data['RSI'], 30, 
                         where=(self.data['RSI'] <= 30), color='green', alpha=0.3)
        ax2.set_ylabel('RSI')
        ax2.grid(True)
        
        # MACD
        ax3.plot(self.data.index, self.data['MACD'], label='MACD', color='blue')
        ax3.plot(self.data.index, self.data['Signal_Line'], label='Signal', color='red')
        ax3.bar(self.data.index, self.data['MACD_Histogram'], color='gray', alpha=0.5)
        ax3.set_ylabel('MACD')
        ax3.grid(True)
        ax3.legend()
        
        plt.tight_layout()
        plt.savefig(f'{output_path}/{self.ticker}_analysis.png')
        
        # Generate summary statistics
        with open(f'{output_path}/{self.ticker}_summary.txt', 'w') as f:
            f.write(f"Analysis Summary for {self.ticker}\n")
            f.write(f"Period: {self.start_date} to {self.end_date}\n\n")
            
            f.write("Current Indicators:\n")
            f.write(f"RSI: {self.data['RSI'].iloc[-1]:.2f}\n")
            f.write(f"MACD: {self.data['MACD'].iloc[-1]:.2f}\n")
            f.write(f"Signal: {self.data['Signal_Line'].iloc[-1]:.2f}\n\n")
            
            f.write("Trading Signals:\n")
            last_rsi = self.data['RSI'].iloc[-1]
            if last_rsi > 70:
                f.write("RSI indicates OVERBOUGHT conditions\n")
            elif last_rsi < 30:
                f.write("RSI indicates OVERSOLD conditions\n")
            else:
                f.write("RSI is NEUTRAL\n")
                
            if self.data['MACD'].iloc[-1] > self.data['Signal_Line'].iloc[-1]:
                f.write("MACD indicates BULLISH momentum\n")
            else:
                f.write("MACD indicates BEARISH momentum\n")
        
        print(f"Report generated in {output_path} directory")
        return True

# Example usage
if __name__ == "__main__":
    analyzer = StockAnalyzer("AAPL", "2023-01-01", "2023-12-31")
    analyzer.fetch_data()
    analyzer.calculate_indicators()
    analyzer.train_model()
    analyzer.generate_report()`
  }
};